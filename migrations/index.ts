import * as migration_20260610_000000_posts from './20260610_000000_posts'

export const migrations = [
    {
        up: migration_20260610_000000_posts.up,
        down: migration_20260610_000000_posts.down,
        name: '20260610_000000_posts',
    },
]
