import type { FunctionComponent } from 'react'
import clsx from 'clsx'

type TextProps = {
  children: React.ReactNode
  className?: string
}

export const Prose: FunctionComponent<TextProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'prose mx-auto max-w-6xl text-base leading-7 text-white prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-white prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-white prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-white prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6',
        className
      )}
    >
      {children}
    </div>
  )
}
