import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 192, height: 192 },
      id: 'icon-192',
    },
    {
      contentType: 'image/png',
      size: { width: 512, height: 512 },
      id: 'icon-512',
    },
  ]
}

export default async function Icon({ id }: { id: string }) {
  const isLarge = id === 'icon-512'
  const width = isLarge ? 512 : 192
  const height = isLarge ? 512 : 192

  const logoPath = join(process.cwd(), 'public/assets/logo.svg')
  const logoData = await readFile(logoPath)
  const logoBase64 = `data:image/svg+xml;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'black',
          borderRadius: '15%',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          alt="Icon"
          width={width * 0.6}
          height={height * 0.6}
          style={{
            width: width * 0.6,
            height: height * 0.6,
          }}
        />
      </div>
    ),
    {
      width,
      height,
    }
  )
}
