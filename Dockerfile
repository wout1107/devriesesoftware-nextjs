# ================================
# DEVRIESE SOFTWARE - DOCKERFILE
# Multi-stage build with Payload seed at build + runtime
# ================================

FROM node:20-alpine AS base

# ---- Dependencies ----
FROM base AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps
RUN npm install @libsql/linux-x64-musl --legacy-peer-deps || echo "libsql already installed"

# ---- Builder ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URI=file:/app/payload.db
ENV PAYLOAD_SECRET=build-time-secret-change-at-runtime

# Seed first so generateStaticParams + sitemap have data to read
RUN npx tsx scripts/seed-seo.ts

# Now build with populated DB
RUN npm run build

# ---- Runner ----
FROM base AS runner
WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir -p .next data media public
RUN chown -R nextjs:nodejs .next data media public

# Copy build output
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/tsconfig.json ./tsconfig.json
COPY --from=builder --chown=nextjs:nodejs /app/scripts ./scripts
COPY --from=builder --chown=nextjs:nodejs /app/migrations ./migrations
COPY --from=builder --chown=nextjs:nodejs /app/payload.config.ts ./payload.config.ts
COPY --from=builder --chown=nextjs:nodejs /app/collections ./collections
COPY --from=builder --chown=nextjs:nodejs /app/components ./components
COPY --from=builder --chown=nextjs:nodejs /app/lib ./lib
COPY --from=builder --chown=nextjs:nodejs /app/app ./app
COPY --from=builder --chown=nextjs:nodejs /app/styles ./styles

# Copy build-time seeded DB as bootstrap default
COPY --from=builder --chown=nextjs:nodejs /app/payload.db ./payload.db.seed

# Copy node_modules with libsql + tsx
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

# Entrypoint: bootstrap volume DB if empty, then re-seed, then start
COPY --chown=nextjs:nodejs <<'EOF' /app/entrypoint.sh
#!/bin/sh
set -e

DB_PATH="${DATABASE_URI#file:}"
echo "[entrypoint] DB path: $DB_PATH"

# Bootstrap volume on first run
if [ ! -f "$DB_PATH" ]; then
  echo "[entrypoint] No DB at $DB_PATH — bootstrapping from seed..."
  mkdir -p "$(dirname "$DB_PATH")"
  cp /app/payload.db.seed "$DB_PATH"
  chmod 644 "$DB_PATH"
fi

# Apply pending DB migrations (non-interactive, idempotent)
echo "[entrypoint] Running migrations..."
node_modules/.bin/tsx scripts/migrate.ts || echo "[entrypoint] Migration failed — continuing"

# Re-run seed at every boot to upsert content (idempotent)
echo "[entrypoint] Running seed (upsert content)..."
node_modules/.bin/tsx scripts/seed-seo.ts || echo "[entrypoint] Seed failed — continuing with existing data"

echo "[entrypoint] Starting Next.js..."
exec node_modules/.bin/next start
EOF

RUN chmod +x /app/entrypoint.sh

USER nextjs

EXPOSE 3000
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

CMD ["/app/entrypoint.sh"]
