import { MagnifyingGlassIcon, StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Search for live airport weather.',
    description:
      'Enter the airport ICAO identifier and the app fetches airport weather data from a public API.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Add airports to favorites.',
    description: 'Click the star icon to add an airport to your favorites list.',
    icon: StarIcon,
  }
]

export default function Page() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Airport Weather</p>
              <div className='mt-3'>
                <span className="inline-flex items-center rounded-md bg-gray-50 mx-1 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  HTML
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 mx-1 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  CSS
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 mx-1 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  JavaScript
                </span>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A dynamic HTML, CSS, and JavaScript application for pilots who want to view airport weather.
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
            </div>
          </div>
          <Image
            src="/airport-weather.png"
            alt="Airport Weather screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
