# ================================
# DEVRIESE SOFTWARE - DOCKERFILE
# Multi-stage build for optimal image size
# ================================

# ---- Base Stage ----
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies with clean install
RUN npm ci --legacy-peer-deps

# Install libsql for Alpine (musl)
RUN npm install @libsql/linux-x64-musl --legacy-peer-deps || echo "libsql already installed"

# ---- Builder Stage ----
FROM base AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN npm run build

# ---- Production Stage ----
FROM base AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Create directories for Payload CMS data persistence
# Create directories for Payload CMS data persistence
RUN mkdir -p .next data media public
RUN chown -R nextjs:nodejs .next data media public

# Copy all necessary files from builder
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/tsconfig.json ./tsconfig.json
COPY --from=builder --chown=nextjs:nodejs /app/scripts ./scripts

# Copy node_modules with libsql
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set hostname
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Start the application with Next.js
CMD ["node_modules/.bin/next", "start"]