import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PRODUCTS } from '@/app/contants'
import Prose from '@/components/prose'

export const runtime = 'edge'

export const revalidate = 43200 // 12 hours in seconds

export async function generateMetadata({ params }: { params: { page: string } }): Promise<Metadata> {
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

export default async function Page({ params }: { params: { page: string } }) {
  const page = PRODUCTS.find((product) => product.id === params.page)

  if (!page) return notFound()

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.name}</h1>
      <Prose className="mb-8">{page.description}</Prose>
    </>
  )
}
