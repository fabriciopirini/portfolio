import { Price } from '@/components/Product/price'
import { cn } from '@/lib/utils'

export const Label = ({ title, amount, className }: { title: string; amount: number; className?: string }) => {
  return (
    <div className={cn('flex w-full', className)}>
      <div className="flex items-center font-semibold backdrop-blur-md">
        <h2 className="m-auto line-clamp-2 h-full grow rounded-l bg-accent px-3 py-1 text-primary-background">
          {title}
        </h2>
        <Price amount={amount} />
      </div>
    </div>
  )
}
