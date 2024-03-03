import { useState } from 'react'

import { GmailLogo, OutlookLogo } from '@/components/SvgLogos'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerNested,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const recipient = '"Fabricio Pirini" <me@fabriciopirini.com>'
const subject = "Let's have a chat"
const body =
  "Hey, Fabricio! I'm very interested in your services. Can we have a chat? By the way, loved the website! 🚀"

const mailTo = `mailto:${recipient}?subject=${subject}&body=${body}`

const gmailLink = `https://mail.google.com/mail/?view=cm&to=${recipient}&su=${subject}&body=${body}`
const outlookLink = `https://outlook.office.com/mail/deeplink/compose?to=${recipient}&subject=${subject}&body=${body}`

export const CheckoutButton = () => {
  return (
    <>
      <CheckoutButtonDesktop />
      <CheckoutButtonMobile />
    </>
  )
}

const CheckoutButtonDesktop = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="hidden md:block">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full max-w-[300px] text-base font-medium md:mx-auto">Checkout</Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-8 bg-primary-hero text-primary">
          <DialogHeader>
            <DialogTitle className="text-xl">Interested?</DialogTitle>
            <DialogDescription className="flex flex-col">
              <span>You seemed interested on the values I can bring to your project.</span>
              <span>Let&apos;s have a chat!</span>
            </DialogDescription>
          </DialogHeader>
          <CheckoutInfoContent />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button className="mx-auto w-auto max-w-[200px] text-sm" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const CheckoutButtonMobile = () => {
  return (
    <div className="block w-full md:hidden">
      <DrawerNested direction="bottom" shouldScaleBackground={false}>
        <DrawerTrigger asChild>
          <Button className="w-full max-w-[300px] text-base font-medium md:mx-auto">Checkout</Button>
        </DrawerTrigger>
        <DrawerContent className="inset-x-0 bottom-0 h-auto w-full rounded-t-3xl pb-5">
          <div className="mx-auto flex h-auto w-full max-w-sm flex-col gap-8 p-8 md:h-full md:w-auto md:max-w-md">
            <DrawerHeader className="flex w-full flex-col items-center gap-3 p-0">
              <DrawerTitle>Interested?</DrawerTitle>
              <DrawerDescription className="flex flex-col gap-1">
                <span>You seemed interested on the values I can bring to your project.</span>
                <span>Let&apos;s have a chat!</span>
              </DrawerDescription>
            </DrawerHeader>
            <CheckoutInfoContent />
          </div>
        </DrawerContent>
      </DrawerNested>
    </div>
  )
}

const CheckoutInfoContent = () => (
  <div className="flex w-full flex-col items-center justify-between gap-3">
    <Button className="text-base transition-all duration-300 hover:scale-[1.02]">
      <a href={mailTo} type="submit" className="hidden md:block">
        Send email from your favorite client
      </a>
      <a href={mailTo} type="submit" className="block md:hidden">
        Send email
      </a>
    </Button>
    <span className="hidden md:block">or</span>
    <div className="hidden gap-3 md:flex">
      <Button className="text-base transition-all duration-300 hover:scale-[1.02]">
        <a href={gmailLink} target="_blank" rel="noreferrer" type="submit" className="flex items-center gap-3">
          <GmailLogo className="size-5" /> Gmail
        </a>
      </Button>
      <Button className="text-base transition-all duration-300 hover:scale-[1.02]">
        <a href={outlookLink} target="_blank" rel="noreferrer" type="submit" className="flex items-center gap-3">
          <OutlookLogo className="size-5" /> Outlook
        </a>
      </Button>
    </div>
  </div>
)
