import { PRODUCTS } from '@/app/services'
import { OpengraphImage } from '@/components/opengraph-image'

export const runtime = 'edge'

const Image = async ({ params }: { params: { page: string } }) => {
  const page = PRODUCTS.find((product) => product.id === params.page)

  const title = page?.name ?? 'Product'

  return await OpengraphImage({ title })
}

export default Image
