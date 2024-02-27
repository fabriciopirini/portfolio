import { Price } from '@/components/Product/price'
import { cn } from '@/lib/utils'

export const Label = ({
  title,
  amount,
  position = 'bottom',
}: {
  title: string
  amount: number
  position?: 'bottom' | 'center'
}) => {
  return (
    <div
      className={cn('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center',
      })}
    >
      <div className="flex items-center gap-4 rounded-full border border-neutral-800 bg-black/70 p-1 font-semibold text-white backdrop-blur-md">
        <h3 className="line-clamp-2 grow pl-2 text-sm leading-none tracking-tight">{title}</h3>
        <Price amount={amount} />
      </div>
    </div>
  )
}
