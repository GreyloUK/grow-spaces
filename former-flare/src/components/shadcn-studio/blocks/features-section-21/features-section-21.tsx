import { ArrowUpRightIcon, LaptopIcon, MessageSquareMoreIcon, MousePointerClickIcon, SearchIcon, ZapIcon } from 'lucide-react'

import BlurText from '@/components/ui/blur-text'
import ImageStack from '@/components/shadcn-studio/blocks/features-section-21/image-stack'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Marquee } from '@/components/ui/marquee'
import { CraftButton, CraftButtonIcon, CraftButtonLabel } from '@/components/ui/craft-button'

const webDesignImages = [
  { id: '1', img: '/images/web1.jpg', alt: 'Coworking website homepage' },
  { id: '2', img: '/images/web2.jpg', alt: 'Coworking membership pricing page' },
  { id: '3', img: '/images/web3.jpg', alt: 'Coworking contact and booking page' },
]

const paidAdsImages = [
  { id: '1', img: '/images/ppc1.jpg', alt: 'Google Ads campaign dashboard' },
  { id: '2', img: '/images/ppc2.jpg', alt: 'Meta Ads Manager' },
  { id: '3', img: '/images/ppc3.jpg', alt: 'Google Analytics dashboard' },
]


const skills = [
  'Google Ads', 'Meta Ads', 'Local SEO', 'Google Business Profile',
  'Technical SEO', 'Email Automation', 'CRM Integration', 'WordPress',
  'HubSpot', 'Cobot', 'Landing Pages', 'Conversion Optimisation',
  'Google Analytics', 'Keyword Research', 'Backlink Building', 'Member Onboarding',
]

const Features = () => {
  return (
    <section id='services' className='py-8 sm:py-16'>
      <div className='mx-auto max-w-6xl space-y-8 px-4 sm:space-y-16 sm:px-6 lg:px-8'>

        {/* Header */}
        <div className='space-y-2.5'>
          <MotionPreset inView={false} fade blur slide={{ direction: 'down', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge variant='outline' className='rounded-none'>
              What We Do
            </Badge>
          </MotionPreset>
          <div className='flex justify-between gap-4 max-md:flex-col'>
            <MotionPreset inView={false} delay={0.3} transition={{ duration: 0.5 }} className='max-w-100'>
              <h2 className='font-heading text-2xl font-semibold sm:text-3xl lg:text-4xl'>
                <BlurText
                  text='Marketing services built for coworking spaces.'
                  delay={50}
                  animateBy='words'
                  direction='bottom'
                />
              </h2>
            </MotionPreset>
            <MotionPreset
              inView={false}
              delay={0.3}
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-muted-foreground max-w-xl text-lg'>
                One partner. One system. Built specifically for independent coworking operators — from your first website visit to a signed membership.
              </p>
            </MotionPreset>
          </div>
        </div>

        <MotionPreset inView={false} delay={0.45} fade blur transition={{ duration: 0.6 }}>
          <Separator />
        </MotionPreset>

        {/* Grid */}
        <div className='grid gap-6 sm:grid-cols-2'>
          <div className='flex flex-col gap-6'>
            {/* Web Design — muted card with ImageStack */}
            <MotionPreset inView={false} fade blur slide={{ offset: 50 }} delay={0.8} transition={{ duration: 0.6 }}>
              <Card className='bg-muted rounded-3xl border-0 shadow-none'>
                <CardHeader className='gap-3'>
                  <CardTitle className='flex items-center gap-2.5 text-xl'>
                    <LaptopIcon className='size-5' />
                    <span>Web Design & Dev</span>
                  </CardTitle>
                  <CardDescription className='text-lg'>
                    A fast, conversion-focused website built to turn visitors into enquiries — tailored to your space and location.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageStack images={webDesignImages} />
                </CardContent>
              </Card>
            </MotionPreset>

            {/* Member Workflows — plain card */}
            <MotionPreset inView={false} fade blur slide={{ offset: 50 }} delay={1.2} transition={{ duration: 0.6 }}>
              <Card className='rounded-3xl shadow-none'>
                <CardHeader className='gap-3'>
                  <CardTitle className='flex items-center gap-2.5 text-xl'>
                    <ZapIcon className='size-5' />
                    <span>Member Workflows</span>
                  </CardTitle>
                  <CardDescription className='text-lg'>
                    Automated email and CRM sequences that move leads from first enquiry to signed membership — without manual effort.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>
          </div>

          <div className='flex flex-col gap-6'>
            {/* Local SEO — plain card */}
            <MotionPreset
              inView={false}
              fade
              blur
              delay={0.6}
              slide={{ direction: 'right', offset: 50 }}
              transition={{ duration: 0.6 }}
            >
              <Card className='rounded-3xl shadow-none'>
                <CardHeader className='gap-3'>
                  <CardTitle className='flex items-center gap-2.5 text-xl'>
                    <SearchIcon className='size-5' />
                    <span>Local SEO</span>
                  </CardTitle>
                  <CardDescription className='text-lg'>
                    Rank for high-intent searches in your area. We handle technical SEO, content, and Google Business — sustainably.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionPreset>

            {/* Paid Ads — muted card with stats marquee */}
            <MotionPreset
              inView={false}
              fade
              blur
              slide={{ direction: 'right', offset: 50 }}
              delay={1}
              transition={{ duration: 0.6 }}
              className='flex-1'
            >
              <Card className='bg-muted h-full rounded-3xl border-0 shadow-none'>
                <CardHeader className='gap-3'>
                  <CardTitle className='flex items-center gap-2.5 text-xl'>
                    <MousePointerClickIcon className='size-5' />
                    <span>Paid Ads (PPC)</span>
                  </CardTitle>
                  <CardDescription className='text-lg'>
                    Google and Meta campaigns that target people actively searching for coworking in your city — ROI you can measure from day one.
                  </CardDescription>
                </CardHeader>
                <Marquee pauseOnHover duration={20} gap={1} className='flex-1 items-center py-0'>
                  {paidAdsImages.map((image, index) => (
                    <img key={index} src={image.img} alt={image.alt} className='h-60 w-full max-w-73 rounded-md' />
                  ))}
                </Marquee>
              </Card>
            </MotionPreset>
          </div>
        </div>

        {/* Skills marquee */}
        <MotionPreset
          className='relative'
          inView={false}
          fade
          blur
          slide={{ direction: 'down', offset: 50 }}
          delay={1.35}
          transition={{ duration: 0.6 }}
        >
          <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-1 w-35 bg-gradient-to-r to-transparent max-sm:hidden' />
          <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-1 w-35 bg-gradient-to-l to-transparent max-sm:hidden' />
          <div className='w-full overflow-hidden'>
            <Marquee pauseOnHover duration={30} gap={1}>
              {skills.map((skill) => (
                <Badge variant='outline' key={skill} className='px-4 py-1 text-sm'>
                  {skill}
                </Badge>
              ))}
            </Marquee>
          </div>
          <div className='w-full overflow-hidden'>
            <Marquee pauseOnHover duration={30} gap={1} reverse>
              {skills.map((skill) => (
                <Badge variant='outline' key={skill} className='px-4 py-1 text-sm'>
                  {skill}
                </Badge>
              ))}
            </Marquee>
          </div>
        </MotionPreset>

        <MotionPreset inView={false} delay={1.5} fade blur transition={{ duration: 0.6 }}>
          <Separator />
        </MotionPreset>

        {/* CTAs */}
        <MotionPreset
          className='flex items-center justify-center gap-4'
          inView={false}
          fade
          blur
          slide={{ direction: 'down', offset: 50 }}
          delay={1.65}
          transition={{ duration: 0.6 }}
        >
          <CraftButton render={<a href='#contact' />}>
            <CraftButtonLabel>Book a Free Audit</CraftButtonLabel>
            <CraftButtonIcon>
              <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
            </CraftButtonIcon>
          </CraftButton>
          <Separator className='!h-9' orientation='vertical' />
          <Button variant='outline' className='rounded-full' render={<a href='#how-it-works' />} nativeButton={false}>
            See How It Works <MessageSquareMoreIcon className='size-4' />
          </Button>
        </MotionPreset>

      </div>
    </section>
  )
}

export default Features
