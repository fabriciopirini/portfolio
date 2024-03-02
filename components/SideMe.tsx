'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import ProfilePic from '@/public/assets/lego_me.png'

export const SideMe = () => {
  const [animate, setAnimate] = useState(false)
  const [animateReturn, setAnimateReturn] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [showBubbleReturn, setShowBubbleReturn] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const interactionEnded = searchParams.has('interactionEnded')

  const { toast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true)

      const bubbleTimer = setTimeout(() => {
        setShowBubble(true)
      }, 1000)

      return () => clearTimeout(bubbleTimer)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-[300px]:hidden">
      <div
        className={cn(
          'fixed bottom-40 left-0 z-[1000] -translate-x-full rotate-0 fill-mode-both min-[250px]:bottom-36 min-[300px]:bottom-40 min-[350px]:bottom-28 sm:bottom-20',
          {
            'animate-sideMe': animate && !interactionEnded,
            'animate-sideMeReturn': animateReturn,
          }
        )}
      >
        <div className="motion-safe:animate-none motion-safe:fill-mode-backwards">
          <Image
            src={ProfilePic}
            alt="3D Lego portrait of the shop's author, Fabricio Pirini"
            className="h-64 w-auto"
          />
        </div>
      </div>
      <div
        className={cn('pointer-events-auto fixed bottom-5 left-28 z-[1001] w-0 origin-left opacity-0', {
          'w-auto animate-scaleConversationBubble opacity-100': showBubble && !interactionEnded,
          'animate-scaleConversationBubbleReturn opacity-0': showBubbleReturn,
        })}
      >
        <div className="relative will-change-transform">
          <div className="relative z-[2] mr-5 min-h-20 w-auto rounded-3xl bg-white p-5 text-primary drop-shadow max-sm:max-w-[250px] sm:w-[350px] sm:px-8 sm:py-6">
            <div className="pointer-events-none absolute left-[1px] top-[-10px] -translate-x-full">
              <svg width="65" height="78" viewBox="0 0 95 95" fill="none" preserveAspectRatio="none">
                <path
                  d="M0 0C0 0 24.8936 38.9937 47 58C57.5966 67.1106 73.8292 77.0249 84.1762 83C90.03 86.3804 94 95 94 95L94.5 36C94.5 36 88.5727 43.1045 81 41.4825C70.8874 39.3165 56.9488 35.8549 47 31.5C26.7586 22.6397 0 0 0 0Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              className={cn(
                'origin-left translate-x-0 scale-100 text-base text-primary-background opacity-100 sm:text-lg'
              )}
            >
              <p className="mb-4 font-semibold">
                Hey! it seems like you&apos;re enjoying the site. Would you like to chat? I&apos;m here to help!
              </p>
              <div className="flex flex-col-reverse justify-between gap-5 px-2 sm:flex-row">
                <button
                  className="font-semibold opacity-80"
                  onClick={() => {
                    setShowBubbleReturn(true)

                    const bubbleTimer = setTimeout(() => {
                      setAnimateReturn(true)

                      const timer = setTimeout(() => {
                        const queryParams = {
                          ...(searchParams.get('cart') ? { cart: searchParams.get('cart') as string } : {}),
                          interactionEnded: 'true',
                        }

                        router.push(`${pathname}?${new URLSearchParams(queryParams)}`, { scroll: false })
                      }, 500)

                      return () => clearTimeout(timer)
                    }, 300)

                    return () => clearTimeout(bubbleTimer)
                  }}
                >
                  No thanks
                </button>
                <Button
                  className="text-base font-semibold sm:text-lg"
                  onClick={() =>
                    toast({
                      title: 'Work in progress 🚧',
                      description: 'This feature is being worked on and will be available soon!',
                    })
                  }
                >
                  Sure!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
