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
        className="flex size-full flex-col items-center justify-center bg-black"
        style={{ fontFamily: 'LeagueSpartan' }}
      >
        <div className="flex size-[160px] flex-none items-center justify-center rounded-xl border border-neutral-700">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoBase64} alt="Logo" width="64" height="64" className="h-[45px] w-auto 2xl:h-16" />
        </div>
        <p className="mt-12 text-6xl font-bold text-white">{process.env.SITE_NAME || 'Fabricio Pirini'}</p>
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
