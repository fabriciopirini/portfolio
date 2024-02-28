import { notFound } from 'next/navigation'
import type { Metadata } from 'next/types'

import { getBlogPosts } from '@/app/db/blog'
import { CustomMDX } from '@/components/CustomMDX'

export const generateMetadata = async ({ params }): Promise<Metadata | undefined> => {
  const post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return notFound()
  }

  const { title, publishedAt: publishedTime, summary: description } = post.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/blog/${post.slug}`,
    },
  }
}

const Blog = ({ params }) => {
  const post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="flex flex-col items-center p-10">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Fabricio Pirini',
            },
          }),
        }}
      />
      <h1 className="max-w-[850px] text-4xl font-medium tracking-tighter">{post.metadata.title}</h1>
      <div className="mb-8 mt-2 flex max-w-[850px] items-center justify-between">
        <p className="text-sm text-neutral-400">{formatDate(post.metadata.publishedAt)}</p>
      </div>
      <article className="prose prose-invert max-w-[850px]">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}

const formatDate = (date: string) => {
  const currentDate = new Date()
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return `${fullDate} (${formattedDate})`
}

export default Blog
