import { cn } from '@/lib/utils'

export const Price = ({ amount, className }: { amount: number; className?: string }) => (
  <p
    className={cn(
      'flex h-full w-fit flex-none items-center rounded-r px-3 py-1 text-sm leading-none text-white max-md:border md:bg-black/70 md:text-base',
      className
    )}
  >
    {amount}
    <span className="ml-1 inline">Fab coins</span>
  </p>
)
