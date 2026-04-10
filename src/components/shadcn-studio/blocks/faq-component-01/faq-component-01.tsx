import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

const faqItems = [
  {
    question: 'What types of workspaces do you work with?',
    answer: 'Coworking spaces, serviced offices, hot desk providers, shared studios, and hybrid spaces that offer a mix. If you run a flexible workspace and want more members through the door, we can help. We don\'t work with large chains; our focus is helping independent operators compete and grow sustainably.',
  },
  {
    question: 'How long before we see results?',
    answer: 'Paid ads typically generate enquiries within the first 2-4 weeks. SEO is a longer game, and most clients see meaningful ranking improvements within 3-6 months. Web design and CRM workflows deliver results from day one of going live.',
  },
  {
    question: 'Do we need to be using Cobot or HubSpot already?',
    answer: 'Not at all. We\'ll assess what tools you\'re currently using and recommend or set up the right stack for your space. We work with a range of CRM and booking platforms and can migrate your data if needed.',
  },
  {
    question: 'What does "full-suite" mean in practice?',
    answer: 'It means we handle everything from your website through to member onboarding: web design, local SEO, Google and Meta ads, email automation, and CRM workflows. You get one team managing one connected system, not four separate agencies.',
  },
  {
    question: 'Is there a minimum contract length?',
    answer: 'We work on a rolling monthly basis after an initial 3-month onboarding period. This gives us time to properly build and test your system before handing over ongoing management.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We track enquiries, cost-per-lead, conversion rate, and member growth. Not vanity metrics. Every client gets a monthly report showing exactly what\'s driving results and what we\'re optimising next.',
  },
]

const FAQ = () => {
  return (
    <section id='contact' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-3 text-center sm:mb-16'>
          <Badge variant='outline' className='rounded-none'>FAQ</Badge>
          <h2 className='font-heading text-2xl font-semibold sm:text-3xl lg:text-4xl'>
            Questions we hear a lot
          </h2>
          <p className='text-muted-foreground text-lg'>
            Everything you need to know before getting started.
          </p>
        </div>

        <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className='text-lg'>{item.question}</AccordionTrigger>
              <AccordionContent className='text-muted-foreground text-base leading-relaxed'>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}

export default FAQ
