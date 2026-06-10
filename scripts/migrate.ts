import { loadEnvConfig } from '@next/env'
import { getPayload } from 'payload'
import { sql } from '@payloadcms/db-sqlite'
// @ts-ignore
import configPromise from '../payload.config.ts'
import { migrations } from '../migrations/index'

loadEnvConfig(process.cwd())

/**
 * Eigen, non-interactieve migratie-runner.
 *
 * Payload's `migrate` toont een interactieve "data loss"-prompt zodra het merkt
 * dat de database ooit via dev-push is opgebouwd (de `dev|-1` rij in
 * payload_migrations). Dat zou de container bij het opstarten laten hangen.
 *
 * Deze runner past elke nog niet toegepaste migratie toe en registreert ze in
 * payload_migrations — zonder prompt. Onze migraties zijn idempotent
 * (CREATE TABLE IF NOT EXISTS), dus dit is veilig en zonder dataverlies.
 */
async function main() {
    const payload = await getPayload({ config: configPromise })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const db = (payload.db as any).drizzle

    const appliedRes = await db.run(sql`SELECT name FROM payload_migrations`)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rows: any[] = appliedRes?.rows ?? appliedRes ?? []
    const applied = new Set(rows.map((r) => r.name).filter(Boolean))

    let ran = 0
    for (const m of migrations) {
        if (applied.has(m.name)) {
            console.log(`[migrate] overslaan (al toegepast): ${m.name}`)
            continue
        }
        console.log(`[migrate] uitvoeren: ${m.name}`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await m.up({ db, payload, req: {} as any })
        await db.run(
            sql`INSERT INTO payload_migrations (name, batch) VALUES (${m.name}, 1)`,
        )
        ran++
    }

    console.log(`[migrate] klaar — ${ran} nieuwe migratie(s) toegepast.`)
    process.exit(0)
}

main().catch((err) => {
    console.error('[migrate] Mislukt:', err)
    process.exit(1)
})
