import { ImageResponse } from 'next/og'

import { LogoSquare } from '@/components/NavBar/shop'

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
        <div className="flex size-[160px] flex-none items-center justify-center rounded-3xl border border-neutral-700">
          <LogoSquare className="size-16" />
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
