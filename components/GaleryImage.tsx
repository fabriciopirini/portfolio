'use client'

import { Masonry } from 'react-plock'

import { Label } from '@/components/Product/label'

export const Galery = ({ photos }) => {
  return (
    <Masonry
      items={photos}
      config={{
        columns: [1, 2, 3],
        gap: 24,
        media: [1024, 1536, 2048],
      }}
      render={(item: string, idx) => (
        <div className="group relative overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={idx}
            src={item}
            loading="lazy"
            alt=""
            className="h-auto w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-black transition-opacity duration-300 ease-linear group-hover:opacity-100 hover-hover:opacity-0 hover-none:opacity-100">
            <div className="absolute bottom-0 right-0 flex w-1/2 flex-col gap-4 p-5">
              <h3 className="hidden text-xl font-semibold text-white md:block">Product name</h3>
              <p className="hidden items-center justify-center text-lg font-semibold text-white md:flex">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 flex flex-col gap-2 rounded-tr pb-4 pl-4 pr-2 pt-2 max-md:bg-black/70">
            <h3 className="block text-lg font-semibold text-white md:hidden">Product name</h3>
            <Label title="Title" amount={100} />
          </div>
        </div>
      )}
    />
  )
}
