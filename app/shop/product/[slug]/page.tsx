import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PRODUCTS } from '@/app/contants'
import { ProductDescription } from '@/components/Product/product-description'

export const runtime = 'edge'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = PRODUCTS.find((product) => product.id === params.slug)

  if (!product) return notFound()

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
  }

  // const { url, width, height, altText: alt } = product.featuredImage || {}

  // return {
  //   title: product.seo.title || product.title,
  //   description: product.seo.description || product.description,
  //   robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //   },
  // },
  //   openGraph: url
  //     ? {
  //         images: [
  //           {
  //             url,
  //             width,
  //             height,
  //             alt,
  //           },
  //         ],
  //       }
  //     : null,
  // }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  console.log('params', params)

  const product = PRODUCTS.find((product) => product.id === params.slug)

  if (!product) return notFound()

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    // image: product.featuredImage.url,
    // offers: {
    //   '@type': 'AggregateOffer',
    //   availability: product.availableForSale ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    //   priceCurrency: product.priceRange.minVariantPrice.currencyCode,
    //   highPrice: product.priceRange.maxVariantPrice.amount,
    //   lowPrice: product.priceRange.minVariantPrice.amount,
    // },
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
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
          <div className="size-full basis-full lg:basis-4/6">
            {/* <Gallery
              images={product.images.map((image: Image) => ({
                src: image.url,
                altText: image.altText,
              }))}
            /> */}
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={product} />
          </div>
        </div>
        {/* <Suspense>
          <RelatedProducts id={product.id} />
        </Suspense> */}
      </div>
    </>
  )
}

// async function RelatedProducts({ id }: { id: string }) {
//   const relatedProducts = await getProductRecommendations(id)

//   if (!relatedProducts.length) return null

//   return (
//     <div className="py-8">
//       <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
//       <ul className="flex w-full gap-4 overflow-x-auto pt-1">
//         {relatedProducts.map(product => (
//           <li
//             key={product.handle}
//             className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
//           >
//             <Link className="relative h-full w-full" href={`/shop/product/${product.handle}`}>
//               <GridTileImage
//                 alt={product.title}
//                 label={{
//                   title: product.title,
//                   amount: product.priceRange.maxVariantPrice.amount,
//                   currencyCode: product.priceRange.maxVariantPrice.currencyCode,
//                 }}
//                 src={product.featuredImage?.url}
//                 fill
//                 sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
//               />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
