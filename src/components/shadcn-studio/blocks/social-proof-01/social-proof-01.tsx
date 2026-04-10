import { CircleCheckIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const proofPoints = [
  { title: 'Average 2.3× lead growth within the first 90 days' },
  { title: 'Google Partner — certified for coworking space campaigns' },
  { title: '40% lower cost-per-click than industry benchmark' },
  { title: '#1 local rankings for clients in Manchester, Bristol, and London' },
  { title: '80% year-on-year increase in organic enquiries for SEO clients' },
]

const SocialProof = () => {
  return (
    <section id='results' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-20 max-lg:flex-col'>
          <div>
            <div className='space-y-4'>
              <Badge variant='outline' className='rounded-none'>Results</Badge>
              <h2 className='font-heading text-2xl font-semibold sm:text-3xl lg:text-4xl'>
                Spaces that trust us to grow them
              </h2>
              <p className='text-muted-foreground max-w-lg text-lg'>
                Independent operators across the UK use Spaces Agency as their complete marketing team — with measurable results from month one.
              </p>
            </div>

            <ul className='mt-11 space-y-6 text-lg font-medium'>
              {proofPoints.map((point, index) => (
                <li key={index} className='flex gap-2'>
                  <CircleCheckIcon className='text-primary mt-0.75 size-5 shrink-0' />
                  <span>{point.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='shrink-0 flex items-center justify-center w-full lg:w-auto'>
            <div className='relative'>
              <img
                src='/images/dashboard.jpg'
                alt='Coworking space marketing results dashboard showing lead growth'
                className='w-120 rounded-2xl object-cover shadow-xl'
              />
              <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
