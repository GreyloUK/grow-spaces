import { useState } from 'react'
import type { ReactNode } from 'react'
import { SearchIcon, WrenchIcon, TrendingUpIcon } from 'lucide-react'

import Workflow from '@/components/shadcn-studio/blocks/features-section-26/workflow'
import DottedSheet from '@/components/shadcn-studio/blocks/features-section-26/dotted-sheet'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type DataType = {
  id: string
  icon: ReactNode
  title: string
  description: string
}

const processData: DataType[] = [
  {
    id: 'describe-workflow',
    icon: <SearchIcon />,
    title: 'Audit Your Growth System',
    description: 'We review your website, search visibility, ads, and member journey to find exactly where leads are being lost.',
  },
  {
    id: 'connect-tools',
    icon: <WrenchIcon />,
    title: 'Build Your Full Stack',
    description: 'We design and launch your site, SEO strategy, ad campaigns, and automated member workflows, all connected.',
  },
  {
    id: 'review-and-refine',
    icon: <TrendingUpIcon />,
    title: 'Fill Your Space, Month After Month',
    description: 'We manage, test, and optimise continuously. You get a steady stream of new member enquiries without the guesswork.',
  },
]

const Features = ({ data }: { data: DataType[] }) => {
  const [activeTab, setActiveTab] = useState<string>(data[0].id)
  const [workflowProgress, setWorkflowProgress] = useState<number>(0)

  return (
    <div className='border-y'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid border-x max-lg:divide-y max-lg:divide-y-reverse lg:grid-cols-2 lg:divide-x'>
          <div className='grid h-full grid-rows-3 divide-y max-lg:order-2'>
            {data.map(tab => {
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'focus-visible:ring-ring/50 relative flex cursor-pointer flex-col gap-5 px-6 py-9 text-left transition-colors duration-300 outline-none focus-visible:z-1 focus-visible:ring-3'
                  )}
                >
                  <div className='flex items-center gap-5'>
                    <span className={cn('text-muted-foreground [&>svg]:size-4.5', { 'text-foreground': isActive })}>
                      {tab.icon}
                    </span>
                    <h3 className={cn('text-muted-foreground text-xl font-medium', { 'text-foreground': isActive })}>
                      {tab.title}
                    </h3>
                  </div>
                  <p className='text-muted-foreground'>{tab.description}</p>
                  {isActive && (
                    <div
                      data-state='workflow-progress'
                      className='bg-primary absolute inset-x-0 bottom-0 left-0 h-0.5 transition-none'
                      style={{ width: `${workflowProgress}%` }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className='relative flex items-center justify-center overflow-hidden px-4 max-lg:h-100'>
            <DottedSheet className='absolute inset-0 h-full w-full' />
            <div className='absolute inset-0 bg-[radial-gradient(circle,transparent_0%,var(--background)_80%)]' />
            <Workflow
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setWorkflowProgress={setWorkflowProgress}
              initialTabId={data[0].id}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const ProcessSection = () => {
  return (
    <section id='how-it-works' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto mb-12 max-w-6xl space-y-2.5 px-4 sm:px-6 lg:px-8'>
        <Badge variant='outline' className='rounded-none'>The Process</Badge>
        <h2 className='font-heading text-2xl font-semibold sm:text-3xl lg:text-4xl'>
          Simple to start, powerful at scale
        </h2>
        <p className='text-muted-foreground max-w-xl text-lg'>
          Three steps from first conversation to a full space, with everything built, managed, and optimised for you.
        </p>
      </div>
      <Features data={processData} />
    </section>
  )
}

export default ProcessSection
