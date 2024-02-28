import { cookies } from 'next/headers'

import { SideBasket } from '@/components/Basket/SideBasket'

export const Basket = () => {
  const basket = cookies().get('basket')?.value

  if (basket) {
    console.log('basket', basket)
  }

  return <SideBasket basket={basket} />
}
