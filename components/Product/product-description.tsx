import type { PRODUCTS } from '@/app/contants'
import { Price } from '@/components/Product/price'
import Prose from '@/components/prose'

export const ProductDescription = ({ product }: { product: (typeof PRODUCTS)[number] }) => {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.name}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price amount={product.price} />
        </div>
      </div>
      {product.description ? (
        <Prose className="mb-6 text-sm leading-tight dark:text-white/[60%]">{product.description}</Prose>
      ) : null}

      <button type="button">Buy Now</button>
    </>
  )
}
