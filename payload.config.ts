import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Services } from './collections/Services'
import { Cities } from './collections/Cities'
import { LocalPages } from './collections/LocalPages'
import { Posts } from './collections/Posts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
        meta: {
            titleSuffix: ' | Devriese Software CMS',
            icons: [
                {
                    rel: 'icon',
                    type: 'image/webp',
                    url: '/DevrieseSoftwareRond.webp',
                },
            ],
        },
        components: {
            graphics: {
                Logo: '/components/AdminLogo',
                Icon: '/components/AdminIcon',
            },
        },
    },
    collections: [Users, Media, Projects, Services, Cities, LocalPages, Posts],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || 'CHANGE-THIS-SECRET-IN-PRODUCTION',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: sqliteAdapter({
        client: {
            url: process.env.DATABASE_URI || 'file:./payload.db',
        },
        // Productie gebruikt migraties (zie /migrations). In dev synct Payload
        // het schema nog automatisch (push), zodat lokaal werken vlot blijft.
        migrationDir: path.resolve(dirname, 'migrations'),
    }),
    sharp,
})
