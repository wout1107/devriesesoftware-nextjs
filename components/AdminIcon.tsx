'use client'

import Image from 'next/image'

export default function AdminIcon() {
    return (
        <Image
            src="/DevrieseSoftwareRond.webp"
            alt="Devriese Software"
            width={24}
            height={24}
            priority
        />
    )
}
