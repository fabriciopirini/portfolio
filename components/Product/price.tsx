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
  <p
    className={cn('w-fit flex-none rounded-full bg-accent p-2 text-sm font-medium text-primary-background', className)}
    suppressHydrationWarning
  >
    {amount}
    <span
      className={cn('ml-1 inline', {
        'hidden @[275px]/label:inline': type === 'label',
      })}
    >
      FAB COINS
    </span>
  </p>
)
