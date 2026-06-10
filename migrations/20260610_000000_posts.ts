import { type MigrateUpArgs, type MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

// Voegt de 'posts'-tabel (blog) toe. Idempotent (IF NOT EXISTS) zodat het
// veilig draait op een bestaande database zonder de andere tabellen te raken.
export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.run(sql`CREATE TABLE IF NOT EXISTS \`posts\` (
        \`id\` integer PRIMARY KEY NOT NULL,
        \`title\` text NOT NULL,
        \`slug\` text NOT NULL,
        \`excerpt\` text NOT NULL,
        \`cover_image_id\` integer,
        \`category\` text DEFAULT 'nieuws' NOT NULL,
        \`published_date\` text NOT NULL,
        \`author\` text DEFAULT 'Wout Devriese',
        \`content\` text NOT NULL,
        \`featured\` integer DEFAULT false,
        \`status\` text DEFAULT 'published' NOT NULL,
        \`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
        \`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
        FOREIGN KEY (\`cover_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
    );`)
    await db.run(
        sql`CREATE UNIQUE INDEX IF NOT EXISTS \`posts_slug_idx\` ON \`posts\` (\`slug\`);`,
    )
    await db.run(
        sql`CREATE INDEX IF NOT EXISTS \`posts_cover_image_idx\` ON \`posts\` (\`cover_image_id\`);`,
    )
    await db.run(
        sql`CREATE INDEX IF NOT EXISTS \`posts_updated_at_idx\` ON \`posts\` (\`updated_at\`);`,
    )
    await db.run(
        sql`CREATE INDEX IF NOT EXISTS \`posts_created_at_idx\` ON \`posts\` (\`created_at\`);`,
    )
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.run(sql`DROP TABLE IF EXISTS \`posts\`;`)
}
