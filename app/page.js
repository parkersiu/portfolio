import { ServerStackIcon, CodeBracketIcon, EllipsisHorizontalIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Languages',
    description:
      'HTML | CSS | JavaScript | SQL | PHP',
    icon: CodeBracketIcon,
  },
  {
    name: 'Front End',
    description:
      'React.js | Bootstrap | Tailwind CSS | Next.js',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Back End',
    description:
      'Node.js | Express.js',
    icon: ServerStackIcon,
  },
  {
    name: 'Others',
    description:
      'Git | AWS | Vercel',
    icon: EllipsisHorizontalIcon,
  },
]

export default function Page() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to <span className='text-blue-700'>Parker Siu&apos;s</span> Portfolio
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Engineer. Developer. Problem Solver.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
