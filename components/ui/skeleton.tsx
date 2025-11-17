import { cn } from '@/lib/utils'

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('animate-pulse rounded-xl bg-neutral-400', className)} {...props} suppressHydrationWarning />
}
