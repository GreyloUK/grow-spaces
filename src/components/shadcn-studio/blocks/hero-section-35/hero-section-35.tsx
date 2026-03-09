import { ArrowRightIcon, GlobeIcon, SearchIcon, MousePointerClickIcon, ZapIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

type ServiceCard = {
  Icon: React.ElementType
  title: string
  description: string
  tag: string
}

const services: ServiceCard[] = [
  {
    Icon: GlobeIcon,
    title: 'Web Design & Dev',
    description: 'Conversion-focused websites built specifically for coworking operators — not generic templates.',
    tag: 'Design',
  },
  {
    Icon: SearchIcon,
    title: 'Local SEO',
    description: 'Rank #1 for every search term that brings in real enquiries from your city.',
    tag: 'SEO',
  },
  {
    Icon: MousePointerClickIcon,
    title: 'Paid Ads (PPC)',
    description: 'Google & Meta campaigns that fill desks, not just collect clicks. Performance-driven from day one.',
    tag: 'PPC',
  },
  {
    Icon: ZapIcon,
    title: 'Member Workflows',
    description: 'Automated onboarding sequences that convert leads while you sleep — zero manual follow-up.',
    tag: 'Automation',
  },
]

const HeroSection = () => {
  return (
    <section className='bg-muted pt-20 pb-12 sm:pb-16 lg:pb-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8'>

        {/* Hero Header */}
        <div className='flex max-w-4xl flex-col items-center gap-5 self-center text-center'>
          <Badge variant='outline' className='gap-2 rounded-full border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary'>
            <span className='inline-block h-1.5 w-1.5 rounded-full bg-primary' />
            Full-Suite Growth Agency for Coworking
          </Badge>

          <h1 className='font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl'>
            We fill your space —{' '}
            <em className='font-normal not-italic text-primary'>every month.</em>
          </h1>

          <p className='text-muted-foreground mx-auto max-w-2xl text-xl leading-relaxed'>
            From your website and local SEO to paid ads and member onboarding workflows — we build and run the complete growth system for independent coworking spaces.
          </p>

          <div className='flex flex-col items-center gap-3 pt-2 sm:flex-row'>
            <Button
              size='lg'
              className='gap-2 px-7'
              render={<a href='#contact' />}
              nativeButton={false}
            >
              Start Growing Today
              <ArrowRightIcon className='size-4' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='px-7'
              render={<a href='#how-it-works' />}
              nativeButton={false}
            >
              See How It Works
            </Button>
          </div>
        </div>

        {/* Service Cards */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {services.map((service) => (
            <Card key={service.title} className='group border-border shadow-none transition-shadow hover:shadow-md'>
              <CardContent className='flex flex-col gap-4 p-6'>
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground'>
                    <service.Icon className='size-5' />
                  </div>
                  <Badge className='bg-primary/10 text-primary border-0 text-xs'>
                    {service.tag}
                  </Badge>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <h3 className='font-heading text-lg font-semibold'>{service.title}</h3>
                  <p className='text-muted-foreground text-sm leading-relaxed'>{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HeroSection
