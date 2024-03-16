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
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerNested,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const recipient = encodeURIComponent('fabricio@fabriciopirini.com')
// const recipient = 'Fabricio Pirini<me@fabriciopirini.com>'
const subject = encodeURIComponent("Let's have a chat")
const body = encodeURIComponent(
  "Hey, Fabricio! I'm very interested in your services. Can we have a chat? By the way, loved the website! 🚀"
)

const mailTo = `mailto:${recipient}?subject=${subject}&body=${body}`

const gmailLink = `https://mail.google.com/mail/?view=cm&to=${recipient}&su=${subject}&body=${body}`
const outlookLink = `https://outlook.office.com/mail/deeplink/compose?to=${recipient}&subject=${subject}&body=${body}`

export const CheckoutButton = ({ disabled = false }: { disabled?: boolean }) => {
  return (
    <>
      <CheckoutButtonDesktop disabled={disabled} />
      <CheckoutButtonMobile disabled={disabled} />
    </>
  )
}

const CheckoutButtonDesktop = ({ disabled }: { disabled: boolean }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="hidden md:block">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button disabled={disabled} className="w-full max-w-[300px] text-base font-medium md:mx-auto">
            Checkout
          </Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-8 bg-primary pb-10 pt-8 text-primary">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Interested?</DialogTitle>
            <DialogDescription className="flex flex-col text-center">
              <span>You seemed interested on the values I can bring to your project.</span>
              <span>Let&apos;s have a chat!</span>
            </DialogDescription>
          </DialogHeader>
          <CheckoutInfoContent />
        </DialogContent>
      </Dialog>
    </div>
  )
}

const CheckoutButtonMobile = ({ disabled }: { disabled: boolean }) => {
  return (
    <div className="block w-full md:hidden">
      <DrawerNested direction="bottom" shouldScaleBackground={false}>
        <DrawerTrigger asChild>
          <Button disabled={disabled} className="w-full max-w-[300px] text-base font-medium md:mx-auto">
            Checkout
          </Button>
        </DrawerTrigger>
        <DrawerContent className="inset-x-0 bottom-0 h-auto w-full rounded-t-mobile pb-5 text-secondary">
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
        Send email from your favorite app
      </a>
      <a href={mailTo} type="submit" className="block p-1 md:hidden">
        Send email
      </a>
    </Button>
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
    {/* <span>or</span>
    <div className="flex flex-col text-center">
      <span>Click on the email to copy it</span>
      <button
        className="underline"
        onClick={() => {
          try {
            navigator?.clipboard?.writeText(recipient)
          } catch (err) {
            fallbackCopyTextToClipboard(recipient)
          }
        }}
      >
        me@fabriciopirini.com
      </button>
    </div> */}
  </div>
)

// const fallbackCopyTextToClipboard = (text) => {
//   const textArea: HTMLTextAreaElement = document.createElement('textarea')
//   textArea.value = text
//   textArea.style.position = 'fixed'
//   textArea.style.opacity = '0'
//   textArea.style.left = '-999999px'
//   document.body.appendChild(textArea)
//   textArea.focus()
//   textArea.select()

//   return new Promise<void>((res, rej) => {
//     document.execCommand('copy') ? res() : rej()
//     textArea.remove()
//   })
// }
