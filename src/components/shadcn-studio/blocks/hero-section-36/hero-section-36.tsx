'use client'

import { ArrowUpRightIcon, Building2Icon, TrendingUpIcon, UsersIcon } from 'lucide-react'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Rating } from '@/components/ui/rating'
import { Marquee } from '@/components/ui/marquee'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from '@/components/ui/craft-button'
import { Badge } from '@/components/ui/badge'
import CardStack from '@/components/shadcn-studio/blocks/hero-section-36/card-stack'

const clients = [
  { fallback: 'SO', name: 'Sarah Okafor — Launchpad Cowork, Manchester' },
  { fallback: 'TD', name: 'Tom Driscoll — The Hub Studios, Bristol' },
  { fallback: 'PM', name: 'Priya Mehta — Cornerstone Workspace, London' },
]

const stats = [
  '↑ 2.3× Avg. Lead Growth',
  '#1 Local Rankings',
  '95% Client Retention',
  '↑ 80% Organic Sign-ups',
  '50+ UK Spaces',
  'Google Partner',
  'Meta Ads Certified',
  '↑ 2× Enquiry Rates',
]

const HeroSection = () => {
  return (
    <TooltipProvider>
      <section className='flex-1'>
        <div className='mx-auto grid h-full max-w-6xl grid-cols-1 flex-col gap-12 px-4 py-12 sm:gap-16 sm:px-6 sm:py-16 md:grid-cols-2 lg:gap-24 lg:px-8 lg:py-24'>

          {/* Left column */}
          <div className='space-y-5'>
            <MotionPreset fade slide blur transition={{ duration: 0.5 }}>
              <Badge className='px-2.5 py-1 shadow-sm' variant='outline'>
                <span className='relative flex size-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75 dark:bg-green-400'></span>
                  <span className='relative inline-flex size-2 rounded-full bg-green-600 dark:bg-green-400'></span>
                </span>
                Taking new clients | 3 spots available
              </Badge>
            </MotionPreset>

            <MotionPreset fade blur transition={{ duration: 0.9 }} delay={0.2}>
              <div className='font-heading flex flex-col gap-2 text-2xl font-semibold sm:text-3xl lg:text-5xl'>

                {/* Line 1 */}
                <div className='flex items-center gap-2.5'>
                  <MotionPreset
                    slide={{ direction: 'left', offset: 40 }}
                    blur='6px'
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    delay={0.8}
                    motionProps={{ initial: { rotate: -5, opacity: 0.7 }, animate: { rotate: 0, opacity: 0.7 } }}
                  >
                    <span className='text-muted-foreground'>Growing</span>
                  </MotionPreset>

                  <MotionPreset
                    zoom={{ initialScale: 0.3, scale: 1 }}
                    blur='10px'
                    transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                    delay={1}
                    motionProps={{ initial: { rotate: 30 }, animate: { rotate: 0 }, whileHover: { scale: 1.1, rotate: 5 } }}
                  >
                    <div className='flex -space-x-1'>
                      <span className='flex size-10 shrink-0 rotate-[10deg] items-center justify-center rounded-[7px] bg-primary/15 text-primary'>
                        <Building2Icon className='size-5' />
                      </span>
                      <span className='ring-background flex size-10 shrink-0 rotate-[-6deg] items-center justify-center rounded-[7px] bg-primary/10 text-primary ring-3'>
                        <UsersIcon className='size-5' />
                      </span>
                    </div>
                  </MotionPreset>

                  <MotionPreset
                    zoom={{ initialScale: 0.8, scale: 1 }}
                    blur='6px'
                    transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                    delay={1.15}
                    motionProps={{ initial: { rotate: 3 }, animate: { rotate: 0 } }}
                  >
                    <span>Spaces</span>
                  </MotionPreset>
                </div>

                {/* Line 2 */}
                <div className='flex items-center gap-2.5'>
                  <MotionPreset
                    slide={{ direction: 'up', offset: 35 }}
                    blur='6px'
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    delay={1.25}
                    motionProps={{ initial: { rotate: -2 }, animate: { rotate: 0 } }}
                  >
                    <span>That Stay</span>
                  </MotionPreset>
                  <MotionPreset
                    zoom={{ initialScale: 0.7, scale: 1 }}
                    blur='8px'
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    delay={1.4}
                    motionProps={{ initial: { rotate: 8 }, animate: { rotate: 0 }, whileHover: { scale: 1.05, rotate: -2 } }}
                  >
                    <span className='inline-block'>Full,</span>
                  </MotionPreset>
                </div>

                {/* Line 3 */}
                <div className='flex items-center gap-2.5'>
                  <MotionPreset
                    slide={{ direction: 'right', offset: 40 }}
                    blur='6px'
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    delay={1.5}
                    motionProps={{ initial: { rotate: 4 }, animate: { rotate: 0 } }}
                  >
                    <span>Month</span>
                  </MotionPreset>

                  <MotionPreset
                    zoom={{ initialScale: 0, scale: 1 }}
                    blur='12px'
                    transition={{ type: 'spring', stiffness: 350, damping: 12, mass: 0.8 }}
                    delay={1.65}
                    motionProps={{ initial: { rotate: 180 }, animate: { rotate: 0 }, whileHover: { scale: 1.15, rotate: 10 } }}
                  >
                    <span className='bg-primary/15 text-primary flex size-10 shrink-0 items-center justify-center rounded-[7px]'>
                      <TrendingUpIcon className='size-6 stroke-[2.5]' />
                    </span>
                  </MotionPreset>

                  <MotionPreset
                    zoom={{ initialScale: 0.5, scale: 1 }}
                    blur='10px'
                    transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
                    delay={1.8}
                    motionProps={{ initial: { rotate: -5, opacity: 0.7 }, animate: { rotate: 0, opacity: 0.7 }, whileHover: { scale: 1.05 } }}
                  >
                    <span className='text-muted-foreground'>After Month.</span>
                  </MotionPreset>
                </div>

              </div>
            </MotionPreset>

            {/* Description */}
            <MotionPreset fade slide blur transition={{ duration: 0.5 }} delay={0.5}>
              <p className='text-muted-foreground'>
                From your website and local SEO to paid ads and member onboarding,{' '}
                <span className='text-foreground'>we build and run the complete growth system</span>{' '}
                for independent coworking spaces. You focus on your space —{' '}
                <span className='text-foreground'>we fill it.</span>
              </p>
            </MotionPreset>

            {/* CTA */}
            <MotionPreset fade slide blur transition={{ duration: 0.5 }} delay={0.7}>
              <CraftButton render={<a href='#contact' />}>
                <CraftButtonLabel>Book a Free Audit</CraftButtonLabel>
                <CraftButtonIcon>
                  <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
                </CraftButtonIcon>
              </CraftButton>
            </MotionPreset>
          </div>

          {/* Right column — card stack */}
          <MotionPreset
            fade
            blur
            transition={{ duration: 0.5 }}
            delay={0.8}
            className='flex w-full items-center justify-center max-md:mt-12 max-md:-mb-12'
          >
            <CardStack />
          </MotionPreset>
        </div>

        {/* Social proof strip */}
        <MotionPreset
          fade
          blur
          transition={{ duration: 0.5 }}
          delay={0.4}
          className='border-primary/10 relative flex border-t border-b'
        >
          <div className='m-1.75 w-full [background-image:radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_15%,transparent)_2px,transparent_2px)] [background-size:18px_18px]'></div>

          <div className='bg-background border-primary/10 flex max-w-6xl gap-2.5 overflow-hidden px-4 py-2.5 max-sm:flex-col sm:px-6 lg:px-8'>
            {/* Avatars + rating */}
            <MotionPreset
              fade
              slide
              blur
              transition={{ duration: 0.5 }}
              delay={0.8}
              className='flex flex-1 items-center gap-1.75 max-sm:flex-col max-sm:justify-center max-sm:text-center'
            >
              <div className='flex -space-x-4'>
                {clients.map((client, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger render={<Avatar className='ring-background size-12 ring-2 transition-all duration-300 ease-in-out hover:z-1 hover:-translate-y-1 hover:shadow-md' />}>
                      <AvatarFallback className='bg-primary/10 text-primary text-xs font-semibold'>{client.fallback}</AvatarFallback>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{client.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>

              <div>
                <div className='flex items-center gap-1.75'>
                  <Rating readOnly variant='yellow' size={24} value={4.9} precision={0.5} className='max-sm:justify-center' />
                  <p className='font-medium'>4.9</p>
                </div>
                <p className='text-sm text-nowrap'>Trusted by 50+ UK spaces</p>
              </div>
            </MotionPreset>

            {/* Stats marquee */}
            <MotionPreset fade blur delay={0.9} transition={{ duration: 0.5 }} className='relative overflow-hidden'>
              <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-25 bg-gradient-to-r via-85% to-transparent' />
              <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-25 bg-gradient-to-l via-85% to-transparent' />
              <Marquee pauseOnHover duration={25} reverse gap={4} className='*:items-center'>
                {stats.map((stat) => (
                  <span
                    key={stat}
                    className='shrink-0 rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-foreground'
                  >
                    {stat}
                  </span>
                ))}
              </Marquee>
            </MotionPreset>
          </div>

          <div className='m-1.75 w-full [background-image:radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_15%,transparent)_2px,transparent_2px)] [background-size:18px_18px]'></div>
        </MotionPreset>
      </section>
    </TooltipProvider>
  )
}

export default HeroSection
