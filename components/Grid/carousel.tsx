import Link from 'next/link'

import { PRODUCTS } from '@/app/services'
import { GridTileImage } from '@/components/Grid/tile'

export const Carousel = () => {
  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS]

  return (
    <div className="h-[var(--carousel-height)] w-full overflow-x-auto pb-6 pt-1 md:overflow-hidden">
      <ul className="flex animate-carousel-mobile gap-4 md:animate-carousel">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.id}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
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
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                src={product.featuredImage?.url}
                staticImage={product.featuredImage?.staticImage}
                fill
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
