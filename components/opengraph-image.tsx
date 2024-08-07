import Image from 'next/image'
import { ImageResponse } from 'next/og'

import Logo from '@/public/assets/logo.svg'

export type Props = {
  title?: string
}

export const OpengraphImage = async (props?: Props): Promise<ImageResponse> => {
  const { title } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  }

  return new ImageResponse(
    (
      <div className="flex size-full flex-col items-center justify-center bg-black">
        <div className="flex size-[160px] flex-none items-center justify-center rounded border border-neutral-700">
          <Image className="h-[45px] w-auto 2xl:h-16" src={Logo} alt="Logo" width={64} height={64} />
        </div>
        <p className="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(new URL('../fonts/LeagueSpartan.ttf', import.meta.url)).then((res) => res.arrayBuffer()),
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
