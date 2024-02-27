import Link from 'next/link'

import { PRODUCTS } from '@/app/contants'
import { GridTileImage } from '@/components/Grid/tile'

export const RelatedProducts = ({ id }: { id: string }) => {
  const relatedProducts = PRODUCTS.filter((product) => product.id !== id)

  if (!relatedProducts.length) return null

  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {relatedProducts.map((product) => (
          <li key={product.id} className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
            <Link
              href={`/shop/product/${product.id}`}
              aria-label={`Go to ${product.name} product page`}
              className="relative size-full"
            >
              <GridTileImage
                alt={product.name}
                label={{
                  title: product.name,
                  amount: product.price,
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
