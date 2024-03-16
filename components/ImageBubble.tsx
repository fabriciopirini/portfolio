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
      <p className="font-leagueSpartan text-base font-semibold md:text-2xl xl:text-3xl">{highlightedText}</p>
      <p className="text-xs md:text-xl xl:text-2xl">{text}</p>
    </div>
  </div>
)
