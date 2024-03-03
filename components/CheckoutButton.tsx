import { useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

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
import { DrawerClose, DrawerFooter } from '@/components/ui/drawer'
import { cn } from '@/lib/utils'

const recipient = 'me@fabriciopirini.com'
const subject = "Let's have a chat"
const body =
  "Hey, Fabricio! I'm very interested in your services. Can we have a chat? By the way, loved the website! 🚀"

const mailTo = `mailto:${recipient}?subject=${subject}&body=${body}`

const gmailLink = `https://mail.google.com/mail/?view=cm&to=${recipient}&su=${subject}&body=${body}`
const outlookLink = `https://outlook.office.com/mail/deeplink/compose?to=${recipient}&subject=${subject}&body=${body}`

export const CheckoutButton = () => {
  const [open, setOpen] = useState(false)
  const isDesktop = useWindowSize()?.width > 768

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full max-w-[300px] text-lg font-medium md:mx-auto">Checkout</Button>
      </DialogTrigger>
      <DialogContent className={cn('flex flex-col gap-8 bg-white text-black', { 'sm:max-w-[425px]': isDesktop })}>
        <DialogHeader className={cn({ 'text-left': isDesktop })}>
          <DialogTitle className="text-xl">Interested?</DialogTitle>
          <DialogDescription className="flex flex-col text-black">
            <span>You seemed interested on the values I can bring to your project.</span>
            <span>Let&apos;s have a chat!</span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full flex-col items-center justify-between gap-3">
          <Button className="text-base">
            <a href={mailTo} type="submit">
              Send email from your favorite client
            </a>
          </Button>
          <span>or</span>
          <div className="flex gap-3">
            <Button className="text-base">
              <a href={gmailLink} target="_blank" rel="noreferrer" type="submit" className="flex items-center gap-3">
                <GmailLogo className="size-5" /> Gmail
              </a>
            </Button>
            <Button className="text-base">
              <a href={outlookLink} target="_blank" rel="noreferrer" type="submit" className="flex items-center gap-3">
                <OutlookLogo className="size-5" /> Outlook
              </a>
            </Button>
          </div>
        </div>
        {!isDesktop && (
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button className="mx-auto w-auto max-w-[200px] text-sm" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
