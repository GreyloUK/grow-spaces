import { Fragment } from 'react'
import { LinkedinIcon, MessageSquareTextIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { CraftButton, CraftButtonLabel, CraftButtonIcon } from '@/components/ui/craft-button'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      {/* Logo */}
      <div className='mx-auto flex max-w-2xl justify-center border-x px-8 py-7 xl:max-w-6xl'>
        <a href='/' className='flex flex-col items-center gap-2'>
          <span className='font-heading text-2xl font-semibold text-foreground'>Spaces Agency</span>
          <span className='text-muted-foreground text-sm'>Growth for Coworking Spaces</span>
        </a>
      </div>

      <Separator />

      {/* CTA */}
      <div className='mx-auto flex max-w-2xl flex-col items-center gap-6 border-x px-8 py-7 xl:max-w-6xl'>
        <h2 className='font-heading max-w-89 text-center text-2xl font-semibold md:text-3xl lg:text-4xl'>
          Ready to fill your space?
        </h2>
        <CraftButton render={<a href='#contact' />}>
          <CraftButtonLabel>Book a Free Audit</CraftButtonLabel>
          <CraftButtonIcon>
            <MessageSquareTextIcon className='size-3' />
          </CraftButtonIcon>
        </CraftButton>
      </div>

      <Separator />

      {/* Nav links */}
      <div className='mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3 border-x px-8 py-7 xl:max-w-6xl'>
        {navLinks.map((link, i) => (
          <Fragment key={link.href}>
            <a
              href={link.href}
              className='text-muted-foreground link-animated hover:text-foreground text-lg transition-colors duration-300'
            >
              {link.label}
            </a>
            {i < navLinks.length - 1 && (
              <Separator orientation='vertical' className='data-[orientation=vertical]:h-4' />
            )}
          </Fragment>
        ))}
      </div>

      <Separator />

      {/* Social + copyright */}
      <div className='mx-auto flex max-w-2xl flex-col items-center gap-4 border-x px-8 py-7 xl:max-w-6xl'>
        <div className='flex items-center gap-4'>
          <a href='https://www.linkedin.com/company/spaces-agency' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
            <LinkedinIcon className='size-5 text-sky-600 dark:text-sky-400' />
          </a>
        </div>
        <p className='text-muted-foreground text-sm'>© {year} Spaces Agency. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
