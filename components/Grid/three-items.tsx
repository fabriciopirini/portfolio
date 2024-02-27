import Link from 'next/link'

import { PRODUCTS } from '@/app/contants'
import { GridTileImage } from '@/components/Grid/tile'
import { cn } from '@/lib/utils'

export const ThreeItemGrid = () => {
  const [firstProduct, secondProduct, thirdProduct] = PRODUCTS

  return (
    <section className="mx-auto grid size-full h-auto max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100svh-var(--carousel-height)-var(--nav-height-shop))]">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  )
}

const ThreeItemGridItem = ({
  item,
  size,
  priority,
}: {
  item: (typeof PRODUCTS)[number]
  size: 'full' | 'half'
  priority?: boolean
}) => (
  <div
    className={cn({
      'md:col-span-4 md:row-span-2': size === 'full',
      'md:col-span-2 md:row-span-1': size === 'half',
    })}
  >
    <Link className="relative block aspect-square size-full" href={`/shop/product/${item.id}`}>
      <GridTileImage
        src={item.featuredImage.url}
        sizes={size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
        priority={priority}
        alt={item.name}
        label={{
          position: size === 'full' ? 'center' : 'bottom',
          title: item.name,
          amount: item.price,
        }}
        hasColoredBorder
        fill
      />
    </Link>
  </div>
)
