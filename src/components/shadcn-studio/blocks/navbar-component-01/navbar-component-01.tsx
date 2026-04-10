import { ArrowUpRightIcon, MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { CraftButton, CraftButtonIcon, CraftButtonLabel } from '@/components/ui/craft-button'

const navigationData: { title: string; href: string; external?: boolean }[] = [
  { title: 'Services', href: '#services' },
  { title: 'How It Works', href: '#how-it-works' },
  { title: 'Results', href: '#results' },
  { title: 'Contact', href: '#contact' },
]

const leftLinks = navigationData.slice(0, 2)
const rightLinks = navigationData.slice(2)

const Navbar = () => {
  return (
    <header className='bg-background/90 sticky top-0 z-50 border-b border-border/60 backdrop-blur-sm'>
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-4 sm:px-6'>
        {/* Left links */}
        <div className='text-muted-foreground hidden flex-1 items-center gap-8 font-medium md:flex'>
          {leftLinks.map((item) => (
            <a key={item.href} href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className='hover:text-foreground text-sm transition-colors'>
              {item.title}
            </a>
          ))}
        </div>

        {/* Brand */}
        <a href='/' className='shrink-0'>
          <img
            src='/logo.svg'
            alt='Spaces Agency'
            className='h-16 w-auto'
          />
        </a>

        {/* Right links + CTA */}
        <div className='hidden flex-1 items-center justify-end gap-8 md:flex'>
          {rightLinks.map((item) => (
            <a key={item.href} href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className='text-muted-foreground hover:text-foreground text-sm font-medium transition-colors'>
              {item.title}
            </a>
          ))}
          <CraftButton render={<a href='#contact' />}>
            <CraftButtonLabel>Get in Touch</CraftButtonLabel>
            <CraftButtonIcon>
              <ArrowUpRightIcon className='size-3 stroke-2 transition-transform duration-500 group-hover:rotate-45' />
            </CraftButtonIcon>
          </CraftButton>
        </div>

        {/* Mobile menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className='md:hidden' render={<Button variant='outline' size='icon' />}>
            <MenuIcon />
            <span className='sr-only'>Menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end'>
            <DropdownMenuGroup>
              {navigationData.map((item) => (
                <DropdownMenuItem key={item.href}>
                  <a href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className='w-full'>{item.title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Navbar
