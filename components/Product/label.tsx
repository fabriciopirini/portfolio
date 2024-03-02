import { Price } from '@/components/Product/price'
import { cn } from '@/lib/utils'

export const Label = ({ title, amount, className }: { title: string; amount: number; className?: string }) => {
  return (
    <div className={cn('flex w-full', className)}>
      <div className="flex w-full flex-col items-center font-semibold backdrop-blur-md sm:flex-row">
        <h2 className="m-auto line-clamp-1 size-full grow truncate rounded-t bg-accent px-3 py-1 text-primary-background sm:w-auto sm:rounded-l">
          {title}
        </h2>
        <Price amount={amount} />
      </div>
    </div>
  )
}
