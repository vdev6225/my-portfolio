import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Vishnu | Full-Stack Web Developer'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#011627',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 48,
            color: '#18f2e5',
            marginBottom: 20,
            fontWeight: 700,
          }}
        >
          Vishnu
        </h1>

        <h2
          style={{
            fontSize: 36,
            color: '#ffffff',
            marginBottom: 16,
          }}
        >
          Full-Stack Web Developer
        </h2>

        <p
          style={{
            fontSize: 24,
            color: '#cbd5e1',
            maxWidth: 900,
          }}
        >
          Crafting innovative solutions to solve real-world problems
        </p>
      </div>
    ),
    size
  )
}
