import { useState } from 'react'
import { InboxIcon } from 'lucide-react'
import Image from 'next/image'

import { GmailLogo, OutlookLogo } from '@/components/SvgLogos'
import { Button, type ButtonProps } from '@/components/ui/button'
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
import { cn } from '@/lib/utils'
import ProfilePic from '@/public/assets/lego_me.png'

const recipient = encodeURIComponent('fabricio@fabriciopirini.com')
// const recipient = 'Fabricio Pirini<me@fabriciopirini.com>'
const subject = encodeURIComponent("Let's have a chat")
const body = encodeURIComponent(
  "Hey, Fabricio! I'm very interested in your services. Can we have a chat? By the way, loved the website! 🚀"
)

export const mailTo = `mailto:${recipient}?subject=${subject}&body=${body}`

const gmailLink = `https://mail.google.com/mail/?view=cm&to=${recipient}&su=${subject}&body=${body}`
const outlookLink = `https://outlook.office.com/mail/deeplink/compose?to=${recipient}&subject=${subject}&body=${body}`

export const InteractionButtonDesktop = ({
  disabled = false,
  label,
  className,
  ...props
}: ButtonProps & {
  disabled?: boolean
  label: string
  className?: string
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="hidden md:block">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            disabled={disabled}
            className={cn('w-full max-w-[300px] text-base font-medium md:mx-auto', className)}
            {...props}
          >
            {label}
          </Button>
        </DialogTrigger>
        <DialogContent className="flex max-h-[calc(100vh-4rem)] flex-col gap-12 overflow-y-auto bg-white p-10 pt-14 text-secondary">
          <DialogHeader className="flex flex-col items-center">
            <div className="mb-1 size-24 overflow-hidden rounded-full bg-accent ring-4 ring-accent/30 ring-offset-4 ring-offset-white">
              <Image
                className="mt-7 size-full scale-[1.60]"
                src={ProfilePic}
                alt="Profile Picture"
                width={200}
                height={125}
                priority
              />
            </div>
            <DialogTitle className="pb-8 text-center font-leagueSpartan text-5xl font-normal text-secondary">
              Interested?
            </DialogTitle>
            <DialogDescription className="flex flex-col text-center text-2xl text-black">
              <span>You seemed interested on the values I can bring to your project. Let&apos;s have a chat!</span>
            </DialogDescription>
          </DialogHeader>
          <hr className="mx-auto h-px w-3/4 border-black/30" />
          <InteractionInfoContent />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export const InteractionButtonMobile = ({
  disabled = false,
  label,
  className,
  ...props
}: ButtonProps & {
  disabled?: boolean
  label: string
  className?: string
}) => {
  return (
    <div className="block w-full md:hidden">
      <DrawerNested direction="bottom" shouldScaleBackground={false}>
        <DrawerTrigger asChild>
          <Button
            disabled={disabled}
            className={cn('w-full max-w-[300px] text-base font-medium md:mx-auto', className)}
            {...props}
          >
            {label}
          </Button>
        </DrawerTrigger>
        <DrawerContent className="inset-x-0 bottom-0 h-auto w-full rounded-t-3xl pb-5 text-secondary">
          <div className="mx-auto flex h-auto w-full max-w-sm flex-col gap-8 p-8 md:h-full md:w-auto md:max-w-md">
            <DrawerHeader className="flex w-full flex-col items-center gap-3 p-0">
              <div className="mb-5 size-24 overflow-hidden rounded-full bg-accent ring-4 ring-accent/30 ring-offset-4 ring-offset-white">
                <Image
                  className="mt-7 size-full scale-[1.60]"
                  src={ProfilePic}
                  alt="Profile Picture"
                  width={200}
                  height={125}
                  priority
                />
              </div>
              <DrawerTitle>Interested?</DrawerTitle>
              <DrawerDescription className="flex flex-col gap-1">
                <span>You seemed interested on the values I can bring to your project. Let&apos;s have a chat!</span>
              </DrawerDescription>
            </DrawerHeader>
            <InteractionInfoContent />
          </div>
        </DrawerContent>
      </DrawerNested>
    </div>
  )
}

const InteractionInfoContent = () => (
  <div className="flex w-full flex-col items-center justify-between gap-3">
    <span className="hidden lg:mb-5 lg:block lg:text-2xl">Send me an Email from:</span>
    <Button className="flex items-center gap-3 text-base transition-all duration-300 hover:scale-[1.02] lg:h-20 lg:px-14 lg:py-5 lg:text-2xl">
      <InboxIcon className="pointer-events-none lg:h-9 lg:w-auto" strokeWidth={1.5} />
      <a href={mailTo} type="submit" className="hidden text-base font-normal md:block lg:text-2xl">
        Your favorite app
      </a>
      <a href={mailTo} type="submit" className="block p-1 md:hidden">
        Send email
      </a>
    </Button>
    <span className="hidden text-xl lg:block">or</span>
    <div className="hidden w-full justify-center gap-3 md:flex lg:text-2xl">
      <Button className="transition-all duration-300 hover:scale-[1.02] lg:h-20 lg:w-60 lg:py-5">
        <a
          href={gmailLink}
          target="_blank"
          rel="noopener"
          type="submit"
          className="flex items-center gap-3 text-base font-normal lg:text-2xl"
        >
          <GmailLogo className="lg:h-9 lg:w-auto" /> Gmail
        </a>
      </Button>
      <Button className="transition-all duration-300 hover:scale-[1.02] lg:h-20 lg:w-60 lg:py-4">
        <a
          href={outlookLink}
          target="_blank"
          rel="noopener"
          type="submit"
          className="flex items-center gap-3 text-base font-normal lg:text-2xl"
        >
          <OutlookLogo className="lg:h-12 lg:w-auto" /> Outlook
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
