import { cn } from '@/lib/utils'

export const Price = ({
  amount,
  className,
  type = 'normal',
}: {
  amount: number
  className?: string
  type?: 'normal' | 'label'
} & React.ComponentProps<'p'>) => (
  <p className={className} suppressHydrationWarning>
    {amount}
    <span
      className={cn('ml-1 inline', {
        'hidden @[275px]/label:inline': type === 'label',
      })}
    >
      FAB
    </span>
  </p>
)
