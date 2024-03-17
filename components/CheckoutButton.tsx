import { InteractionButtonDesktop, InteractionButtonMobile } from '@/components/InteractionButton'

export const CheckoutButton = ({ disabled = false }: { disabled?: boolean }) => {
  return (
    <>
      <InteractionButtonDesktop label="Checkout" disabled={disabled} />
      <InteractionButtonMobile label="Checkout" disabled={disabled} />
    </>
  )
}
