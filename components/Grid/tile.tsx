import Image from 'next/image'

import { Label } from '@/components/Product/label'
import { cn } from '@/lib/utils'

export const GridTileImage = ({
  isInteractive = true,
  active,
  label,
  hasColoredBorder = false,
  ...props
}: {
  isInteractive?: boolean
  active?: boolean
  label?: {
    title: string
    amount: number
    position?: 'bottom' | 'center'
  }
  hasColoredBorder?: boolean
} & React.ComponentProps<typeof Image>) => {
  return (
    <div
      className={cn(
        'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-black hover:border-accent',
        {
          relative: label,
          'border-2 border-accent': active,
          'border-neutral-800': !active,
          'border-shop-card/50': !active && hasColoredBorder,
        }
      )}
    >
      {props.src ? (
        <Image
          className={cn('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out group-hover:scale-105': isInteractive,
          })}
          {...props}
        />
      ) : null}
      {label ? <Label title={label.title} amount={label.amount} position={label.position} /> : null}
    </div>
  )
}
