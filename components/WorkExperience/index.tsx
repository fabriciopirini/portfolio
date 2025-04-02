import { BadgeCheckIcon } from 'lucide-react'

import NGLogo from '/public/assets/logos/ng-logo-squared.avif'
import OdaLogo from '/public/assets/logos/oda-logo.avif'
import SidiLogo from '/public/assets/logos/sidi-logo.avif'
import SportradarLogo from '/public/assets/logos/sportradar-logo.avif'

export const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="flex w-full flex-col gap-16 py-16 pl-6 pr-4 lg:container md:px-0 md:py-32 lg:gap-32"
    >
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="shrink-0 basis-2/5">
          <p className="mb-7 font-leagueSpartan text-3xl font-medium lg:mb-14 lg:text-6xl">Where it all started</p>
          <p className="lg:mb-10 lg:text-3xl">
            I&apos;ve had the chance to work with some great companies, starting from my early days writing web scrapers
            all the way to leading development teams. Here&apos;s how that journey unfolded.
          </p>
        </div>
        <div>
          <div className="relative ml-2 basis-3/5 md:ml-8">
            <BadgeCheckIcon
              fill="#ffc457"
              className="pointer-events-none absolute top-0 -ml-6 -mt-1 size-14 text-primary-background"
            />
            <div className="mt-1 border-l-[7px] border-dotted border-accent/50 pb-10 pl-12">
              <div className="size-full space-y-5 rounded border border-white bg-[#1E1E1E] p-7">
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Starting at Sportradar</p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    My tech journey kicked off at Sportradar, where I got my hands dirty with web crawlers and data
                    collection. We were building tools to gather data from various e-commerce sites, and I learned a ton
                    about making systems that could handle large amounts of data efficiently.
                  </p>
                  <p>
                    This was also where I got my first real taste of Agile development - learning how to work in sprints
                    and deliver features that actually made a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative ml-2 basis-3/5 md:ml-8">
            <BadgeCheckIcon
              fill="#ffc457"
              className="pointer-events-none absolute top-0 -ml-6 -mt-1 size-14 text-primary-background"
            />
            <div className="mt-1 pb-10 pl-12">
              <div className="size-full space-y-5 rounded border border-white bg-[#1E1E1E] p-7">
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">I joined Oda</p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    At Oda, I got to work on something really cool - helping transform their e-commerce platform with a
                    modern React frontend. It was exciting to see how our changes directly improved the shopping
                    experience for customers.
                  </p>
                  <p>
                    I also joined the on-call rotation for our Django backend - nothing teaches you more about a system
                    than being responsible for keeping it running smoothly!
                  </p>
                  <p>
                    One of my favorite parts was mentoring newer developers on the team. Helping others grow while
                    building something meaningful together - that&apos;s what it&apos;s all about.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="shrink-0 basis-2/5">
          <p className="mb-7 font-leagueSpartan text-3xl font-medium lg:mb-14 lg:text-6xl">Growing into leadership</p>
          <p className="lg:mb-10 lg:text-3xl">
            Sometimes opportunities come up that push you to grow in new ways. That&apos;s what happened when I took on
            more leadership responsibilities and learned what it means to guide a team.
          </p>
        </div>
        <div>
          <div className="relative ml-2 basis-3/5 md:ml-8">
            <BadgeCheckIcon
              fill="#ffc457"
              className="pointer-events-none absolute top-0 -ml-6 -mt-1 size-14 text-primary-background"
            />
            <div className="mt-1 border-l-[7px] border-dotted border-accent/50 pb-10 pl-12">
              <div className="size-full space-y-5 rounded border border-white bg-[#1E1E1E] p-7">
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Norsk Gjenvinning</p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    I joined Norsk Gjenvinning as a Lead Frontend Engineer, where I got to shape how we built our
                    frontend systems. Working closely with designers, we focused on making things faster and easier to
                    use for our customers.
                  </p>
                  <p>
                    The best part was seeing how small improvements in performance and usability could make a big
                    difference in how people used our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative ml-2 basis-3/5 md:ml-8">
            <BadgeCheckIcon
              fill="#ffc457"
              className="pointer-events-none absolute top-0 -ml-6 -mt-1 size-14 text-primary-background"
            />
            <div className="mt-1 pb-10 pl-12">
              <div className="size-full space-y-5 rounded border border-white bg-[#1E1E1E] p-7">
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Evolving into the role</p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    Later, I stepped up as Lead Software Engineer & Tech Lead. It was a chance to not just write code,
                    but to help shape how our whole team worked together.
                  </p>
                  <p>
                    We made our apps faster, more reliable, and easier to work with. But more importantly, we built a
                    team that really knew how to work together and deliver great results.
                  </p>
                  <p>
                    I pushed for trying out new tech when it made sense, always with the goal of making our platform
                    better and our development process smoother.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="shrink-0 basis-2/5">
          <p className="mb-7 font-leagueSpartan text-3xl font-medium lg:mb-14 lg:text-6xl">What I&apos;m up to now</p>
          <p className="lg:mb-10 lg:text-3xl">
            These days, I&apos;m working with a big US tech company, helping build the tools and systems that other
            developers use to build great products.
          </p>
        </div>
        <div className="relative ml-2 basis-3/5 md:ml-8">
          <BadgeCheckIcon
            fill="#ffc457"
            className="pointer-events-none absolute top-0 -ml-6 -mt-1 size-14 text-primary-background"
          />
          <div className="mt-1 border-l-[7px] border-dotted border-accent/50 pb-10 pl-12">
            <div className="size-full space-y-5 rounded border border-white bg-[#1E1E1E] p-7">
              <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Current Platform Team Role</p>
              <div className="space-y-5 text-primary/70 lg:text-2xl">
                <p>
                  I&apos;m working as a contractor on the Platform team, where we build and maintain the tools that help
                  other developers do their best work.
                </p>
                <p>
                  It&apos;s all about making the development experience better - from improving build times to creating
                  tools that make complex tasks simpler. When other developers can work more efficiently, everyone wins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const experiences = [
  {
    company: 'US Tech Company (Contract)',
    location: 'Remote',
    roles: [
      {
        title: 'Platform Engineer',
        startDate: new Date('2024-10-01'),
        endDate: null,
        bullets: [
          'Working as part of the Platform team, contributing to critical infrastructure and developer tools.',
          'Focusing on improving developer experience and platform reliability.',
          'Collaborating with cross-functional teams to enhance the company&apos;s technical foundation.',
        ],
      },
    ],
  },
  {
    company: 'Norsk Gjenvinning',
    location: 'Oslo, Norway',
    logo: NGLogo,
    url: 'https://www.ngn.no/',
    roles: [
      {
        title: 'Lead Software Engineer & Tech Lead',
        startDate: new Date('2023-09-01'),
        endDate: new Date('2024-09-31'),
        bullets: [
          'Managed a team of 3 software engineers in developing scalable e-commerce solutions, resulting in a 40% enhancement in UI responsiveness and a 50% reduction in load times.',
          'Implemented best practices in code quality and development processes, reducing bug rates by 30% and improving deployment frequency by 50%.',
          'Championed the integration of new technologies, leading to a 20% improvement in project delivery speed and system reliability.',
        ],
      },
      {
        title: 'Lead Frontend Engineer',
        startDate: new Date('2022-09-01'),
        endDate: new Date('2023-08-30'),
        bullets: [
          'Led the development of frontend architectures for e-commerce platforms using React and Next.js, reducing page load times by 30% and improving user engagement by 25%.',
          'Collaborated with UX/UI designers on projects that increased customer satisfaction scores by 20%, through the implementation of user-friendly interfaces.',
        ],
      },
    ],
  },
  {
    company: 'Oda',
    location: 'Oslo, Norway',
    logo: OdaLogo,
    url: 'https://www.oda.com/',
    roles: [
      {
        title: 'Software Engineer',
        startDate: new Date('2020-08-01'),
        endDate: new Date('2022-08-01'),
        bullets: [
          'Transitioned major e-commerce platform to React frontend, enhancing user interface responsiveness and contributing to a 15% increase in online customer transactions.',
          'Participated in an on-call rotation, managing critical issues for a Django monolith that supported monthly transactions worth over $100,000.',
          'Mentored 8 junior developers over 13 months, improving team proficiency in modern web technologies and best practices, which resulted in a 25% reduction in onboarding time and a 20% increase in team productivity.',
          'Led initiatives for configuration flexibility in the Django platform, accommodating a 30% increase in product offerings without compromising system performance.',
        ],
      },
    ],
  },
  {
    company: 'Sportradar',
    location: 'Oslo, Norway',
    logo: SportradarLogo,
    url: 'https://www.sportradar.com/',
    roles: [
      {
        title: 'Software Engineer',
        startDate: new Date('2018-09-01'),
        endDate: new Date('2020-07-01'),
        bullets: [
          'Enhanced web crawler/scrapers, improving data collection efficiency by 40% and reducing server load by 25%.',
          'Migrated to microservices architecture, resulting in a 30% improvement in scalability and 20% reduction in latency.',
          'Advocated for Agile methodologies, increasing team productivity by 15% and improving project delivery timelines by 20%.',
        ],
      },
    ],
  },
  {
    company: 'Samsung R&D Institute - SIDI',
    location: 'Campinas, Brazil',
    logo: SidiLogo,
    url: 'https://www.sidi.org.br/',
    roles: [
      {
        title: 'Software Engineering Intern',
        startDate: new Date('2017-01-01'),
        endDate: new Date('2018-01-01'),
      },
    ],
  },
] as const
