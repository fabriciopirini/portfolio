import type { PRODUCTS } from '@/app/services'
import { Price } from '@/components/Product/price'
import { Prose } from '@/components/prose'
import { Button } from '@/components/ui/button'

export const ProductDescription = ({ product }: { product: (typeof PRODUCTS)[number] }) => {
  return (
    <>
      <div className="mb-6 flex flex-col border-b border-neutral-700 pb-6">
        <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
        <Price amount={product.price} className="px-4" />
      </div>
      {product.description ? (
        <Prose className="mb-6 text-sm leading-tight text-white/[60%]">{product.description}</Prose>
      ) : null}

      <Button className="w-full bg-accent text-lg text-primary-background lg:w-48">Buy Now</Button>
    </>
  )
}
