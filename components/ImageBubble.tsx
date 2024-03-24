import { cn } from '@/lib/utils'

export const ImageBubble = ({
  icon,
  highlightedText,
  text,
  className,
}: {
  icon: React.ReactNode
  highlightedText: string
  text: string
  className?: string
}) => (
  <div className={cn('absolute flex flex-col items-center xl:w-[250px]', className)}>
    {icon}
    <div className="-mt-6 w-full rounded bg-white p-4 px-6 pt-7 text-center text-primary-background md:p-5 md:px-8 md:pt-8 xl:-mt-9 xl:pt-12">
      <p data-id="image-bubble-highlighted-text" className="font-leagueSpartan font-semibold">
        {highlightedText}
      </p>
      <p data-id="image-bubble-text">{text}</p>
    </div>
  </div>
)
