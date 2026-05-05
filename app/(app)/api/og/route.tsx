import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(req: Request) {
    const url = new URL(req.url)
    const service = url.searchParams.get('service') || 'Web development'
    const city = url.searchParams.get('city') || ''

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(135deg, #f4efea 0%, #f7faf8 100%)',
                    padding: '80px',
                    fontFamily: 'system-ui',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 14,
                            background: '#424633',
                            color: '#f4efea',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 28,
                            fontWeight: 700,
                        }}
                    >
                        DS
                    </div>
                    <div style={{ fontSize: 24, fontWeight: 600, color: '#424633' }}>
                        Devriese Software
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div
                        style={{
                            fontSize: 28,
                            color: '#ff6b00',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: 2,
                        }}
                    >
                        {city ? `📍 ${city}` : 'Heel Vlaanderen'}
                    </div>
                    <div style={{ fontSize: 80, fontWeight: 800, color: '#424633', lineHeight: 1.05 }}>
                        {service}
                    </div>
                    <div style={{ fontSize: 28, color: '#5a6655', maxWidth: 1000 }}>
                        Razendsnelle websites, webshops en apps. Lighthouse 95+.
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTop: '2px solid #e5e0d8',
                        paddingTop: 24,
                    }}
                >
                    <div style={{ fontSize: 22, color: '#5a6655' }}>devriesesoftware.be</div>
                    <div style={{ fontSize: 22, color: '#ff6b00', fontWeight: 600 }}>
                        +32 498 52 54 82
                    </div>
                </div>
            </div>
        ),
        { width: 1200, height: 630 },
    )
}
