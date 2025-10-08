import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Endurance Ro-Index - Studiu de cercetare despre sporturile de anduranță din România'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0f3e5e 0%, #1e5a8a 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'system-ui, sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'white',
                        padding: '40px',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '72px',
                            fontWeight: 'bold',
                            margin: '0 0 20px 0',
                            lineHeight: '1.1',
                        }}
                    >
                        Endurance Ro-Index
                    </h1>
                    <p
                        style={{
                            fontSize: '32px',
                            margin: '0 0 30px 0',
                            opacity: 0.9,
                            maxWidth: '800px',
                        }}
                    >
                        Prima platformă de date din România despre participarea și participanții la concursuri de masă
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                            fontSize: '24px',
                            marginTop: '20px',
                        }}
                    >
                        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '20px' }}>
                            Alergare
                        </span>
                        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '20px' }}>
                            Ciclism
                        </span>
                        <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '20px' }}>
                            Triatlon
                        </span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
