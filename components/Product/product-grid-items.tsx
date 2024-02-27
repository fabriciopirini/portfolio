import Link from 'next/link'

import type { PRODUCTS } from '@/app/contants'
import { Grid } from '@/components/Grid'
import { GridTileImage } from '@/components/Grid/tile'

export const ProductGridItems = ({ products }: { products: (typeof PRODUCTS)[number][] }) => {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.id} className="animate-fadeIn">
          <Link
            href={`/shop/product/${product.id}`}
            aria-label={`Go to ${product.name} product page`}
            className="relative inline-block size-full"
          >
            <GridTileImage
              alt={product.name}
              label={{
                title: product.name,
                amount: product.price,
              }}
              src={product.featuredImage?.url}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  )
}
