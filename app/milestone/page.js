import { PlusIcon, ListBulletIcon, CalendarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Create Projects.',
    description:
      'Create a project with milestones.',
    icon: PlusIcon,
  },
  {
    name: 'Add tasks to each milestone.',
    description: 'Add tasks to each milestone and mark them as complete by clicking on the task.',
    icon: ListBulletIcon,
  },
  {
    name: 'Set a due date for each milestone.',
    description: 'Click the calendar icon to set a due date for each milestone.',
    icon: CalendarIcon,
  }
]

export default function Page() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Milestone</p>
              <div className='mt-3'>
                <span className="inline-flex items-center rounded-md bg-gray-50 mx-1 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  React
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 mx-1 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  Bootstrap
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 mx-1 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  Node
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 mx-1 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  Express
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 mx-1 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  PostgreSQL
                </span>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A full stack application for organizers who want to track a project.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-[#3E92CC]" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className='flex mt-10 justify-between'>
                <a href='https://github.com/parkersiu/milestone' target="_blank"
                  className='flex items-center justify-between rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
                hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-white'>
                  <Image
                    src='/github-logo.png'
                    alt='github logo'
                    className='pr-3'
                    width={30}
                    height={30}
                  />
                  Repository
                </a>
                <a href='https://milestone.parkersiu.com/' target="_blank"
                  className='flex items-center justify-between rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
                hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-white'>
                  Visit Deployed<span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <Image
            src="/milestone.png"
            alt="Milestone screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
