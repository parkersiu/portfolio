import Image from "next/image"

const links = [
  { name: 'Contact Me', href: '/contact' }
]
const stats = [
  { name: 'Location', value: 'San Diego, CA' }
]

export default function Page() {
  return (
    <div className="flex justify-center relative isolate overflow-hidden py-12 sm:py-16">
      <div className="max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Hello! I&apos;m Parker Siu, a software engineer with a profound enthusiasm for technology and engineering.
            While pursuing my bachelor&apos;s degree in economics, I dedicated a significant amount of my time flight training and earned a commercial
            pilot license. Aviation opened my eyes to a world of engineering and software technology that I have become fascinated with.
            Technology is paramount for safety in aviation, and I have witnessed significant advancements in technology over the past several years.
          </p><p className="mt-1 text-lg leading-8 text-black">
            Flight training places an emphasis is on the aviator&apos;s decision making. This involves solving complex problems, often under
            high stress workloads that flying an airplane demands. Problem solving quickly became one of my biggest strengths. This similarity between flying
            and software development is what ultimately drew me in.
          </p><p className="mt-1 text-lg leading-8 text-black">
            I attended a coding bootcamp to improve my technical skills in front-end and
            back-end languages/techonologies. This intensive program laid a foundation for continuous learning and improving of my technical skills.
            Since graduating, I have been working on personal projects aimed at further increasing my skills, and I invite you
            to view them from the links above. If you would like to speak with me, please fill out the contact form or reach out via LinkedIn.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-5 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mt-12">
        <Image
          src="/headshot.jpg"
          alt="headshot image"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}
