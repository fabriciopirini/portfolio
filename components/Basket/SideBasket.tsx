'use client'

import { ShoppingCartIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

export const SideBasket = ({ basket }) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <ShoppingCartIcon />
      </DrawerTrigger>
      <DrawerContent className="ml-5 w-full max-w-[500px]">
        <div className="flex size-full flex-col gap-4 p-8" data-vaul-no-drag>
          <DrawerHeader className="p-0">
            <DrawerTitle>Your Basket</DrawerTitle>
            <DrawerDescription>Checkout with your items</DrawerDescription>
          </DrawerHeader>
          <div className="flex h-full grow flex-col">
            <span className="m-auto">Your basket is empty</span>
          </div>
          <DrawerFooter>
            <Button className="w-full max-w-[300px] text-lg font-medium md:mx-auto">Checkout</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
