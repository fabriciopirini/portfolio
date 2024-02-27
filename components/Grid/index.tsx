import { cn } from '@/lib/utils'

export const Grid = (props: React.ComponentProps<'ul'>) => (
  <ul {...props} className={cn('grid grid-flow-row gap-4', props.className)}>
    {props.children}
  </ul>
)

const GridItem = (props: React.ComponentProps<'li'>) => (
  <li {...props} className={cn('aspect-square transition-opacity', props.className)}>
    {props.children}
  </li>
)

Grid.Item = GridItem
