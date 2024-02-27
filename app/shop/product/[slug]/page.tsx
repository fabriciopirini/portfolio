import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PRODUCTS } from '@/app/contants'
import { Gallery } from '@/components/Product/galery'
import { ProductDescription } from '@/components/Product/product-description'
import { RelatedProducts } from '@/components/Product/related-products'

export const runtime = 'edge'

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const product = PRODUCTS.find((product) => product.id === params.slug)

  if (!product) return notFound()

  const { url, width, height, altText: alt } = product.featuredImage || {}

  return {
    title: product.name,
    description: product.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url: `https://fabriciopirini.com/${url}`,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  }
}

const ProductPage = ({ params }: { params: { slug: string } }) => {
  const product = PRODUCTS.find((product) => product.id === params.slug)

  if (!product) return notFound()

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.featuredImage.url,
  }

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-800 bg-black p-8 md:p-12 lg:flex-row lg:gap-8">
          <div className="size-full basis-full lg:basis-4/6">
            <Gallery
              images={product.images.map((image) => ({
                src: image.url,
                altText: image.altText,
              }))}
            />
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={product} />
          </div>
        </div>
        <RelatedProducts id={product.id} />
      </div>
    </>
  )
}

export default ProductPage
