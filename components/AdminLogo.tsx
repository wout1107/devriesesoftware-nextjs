'use client'

import Image from 'next/image'

export default function AdminLogo() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 0',
        }}>
            <Image
                src="/DevrieseSoftwareRond.webp"
                alt="Devriese Software"
                width={40}
                height={40}
                priority
            />
            <span style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#424633',
                letterSpacing: '-0.5px',
            }}>
                Devriese Software CMS
            </span>
        </div>
    )
}
