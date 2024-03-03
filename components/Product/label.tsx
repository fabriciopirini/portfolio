import { cn } from '@/lib/utils'

export const Label = ({ title, amount, className }: { title: string; amount: number; className?: string }) => {
  return (
    <div className={cn('flex w-auto flex-col items-center font-semibold backdrop-blur-md sm:flex-row', className)}>
      <h2 className="m-auto line-clamp-1 size-full rounded-t bg-accent px-3 py-1 text-center text-primary-background max-[375px]:line-clamp-2 max-[375px]:max-w-40 sm:w-auto sm:rounded-l sm:rounded-tr-none">
        {title}
      </h2>
      <p
        className={cn(
          'flex h-full w-full items-center rounded-b bg-black/70 px-3 py-1 text-sm leading-normal text-white max-sm:justify-center sm:w-fit sm:rounded-r sm:rounded-bl-none sm:text-base'
        )}
      >
        {amount}
        <span className="ml-1 inline">Fab coins</span>
      </p>
    </div>
  )
}
