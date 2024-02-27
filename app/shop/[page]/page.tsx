import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PRODUCTS } from '@/app/services'
import { Prose } from '@/components/prose'

export const runtime = 'edge'

export const revalidate = 43200 // 12 hours in seconds

export const generateMetadata = async ({ params }: { params: { page: string } }): Promise<Metadata> => {
  const page = PRODUCTS.find((product) => product.id === params.page)

  if (!page) return notFound()

  return {
    title: page.name,
    description: page.description,
    openGraph: {
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
      type: 'article',
    },
  }
}

const Page = async ({ params }: { params: { page: string } }) => {
  const page = PRODUCTS.find((product) => product.id === params.page)

  if (!page) return notFound()

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.name}</h1>
      <Prose className="mb-8">{page.description}</Prose>
    </>
  )
}

export default Page
