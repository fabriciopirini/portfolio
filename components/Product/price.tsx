import { cn } from '@/lib/utils'

export const Price = ({ amount, className }: { amount: number; className?: string }) => (
  <p
    className={cn(
      'flex h-full w-full items-center rounded-b bg-black/70 px-3 py-1 text-sm leading-none text-white max-md:border max-md:border-t-0 max-sm:justify-center sm:w-fit sm:rounded-r md:text-base',
      className
    )}
  >
    {amount}
    <span className="ml-1 inline">Fab coins</span>
  </p>
)
