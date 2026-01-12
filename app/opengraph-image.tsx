import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Fabricio Pirini'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const fontData = await fetch(new URL('../fonts/LeagueSpartan.ttf', import.meta.url)).then((res) => res.arrayBuffer())

  const logoPath = join(process.cwd(), 'public/assets/logo.svg')
  const logoData = await readFile(logoPath)
  const logoBase64 = `data:image/svg+xml;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          fontFamily: 'LeagueSpartan',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '160px',
            height: '160px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
            border: '1px solid #404040',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoBase64} alt="Logo" width="64" height="64" style={{ height: '45px', width: 'auto' }} />
        </div>
        <p style={{ marginTop: '48px', fontSize: '60px', fontWeight: 'bold', color: 'white' }}>
          {process.env.SITE_NAME || 'Fabricio Pirini'}
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'LeagueSpartan',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
