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
          <p className="mb-7 font-leagueSpartan text-3xl font-medium lg:mb-14 lg:text-6xl">
            Experience in innovation and leadership
          </p>
          <p className="lg:mb-10 lg:text-3xl">
            My journey in the tech landscape has been a blend of innovation, leadership, and continuous improvement,
            marked by significant milestones that showcase my growth and contributions to the companies I&apos;ve been
            part of.
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
                    At Sportradar, my entry into the tech world involved refining web crawlers and scrapers specifically
                    tailored for e-commerce applications, enhancing data collection and introducing microservices to
                    boost the scalability and efficiency crucial for dynamic online marketplaces.
                  </p>
                  <p>
                    My work here laid a strong foundation in Agile methodologies, optimizing team workflows and project
                    delivery to meet the fast-paced demands of e-commerce platforms.
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
                    Moving to Oda marked a significant chapter where I led the transition of a major e-commerce platform
                    to a modern React frontend, directly contributing to improved user interactions and increased online
                    sales.
                  </p>
                  <p>
                    My responsibilities expanded to include crucial on-call support for a Django-based e-commerce
                    backbone, ensuring seamless transaction processing.
                  </p>
                  <p>
                    Mentoring junior developers, I emphasized the nuances of e-commerce development, fostering a team
                    capable of rapidly evolving and scaling our offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="shrink-0 basis-2/5">
          <p className="mb-7 font-leagueSpartan text-3xl font-medium lg:mb-14 lg:text-6xl">
            The role of Lead Frontend Engineer
          </p>
          <p className="lg:mb-10 lg:text-3xl">
            Each role has been a chapter in my story, filled with learning, overcoming challenges, and making a tangible
            impact. My journey reflects a commitment to excellence, innovation, and a dedication to contributing
            positively to the tech community.
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
                    At Norsk Gjenvinning, my e-commerce journey reached new heights. Initially joining as a Lead
                    Frontend Engineer, I led the development of frontend architectures for our e-commerce platforms.
                  </p>
                  <p>
                    This role demanded a keen focus on optimizing web performance and user engagement, significantly
                    improving the online shopping experience for our customers.
                  </p>
                  <p>
                    My collaboration with UX/UI designers was key to implementing user-friendly interfaces that drove
                    customer satisfaction.
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
                    My role evolved into that of Lead Software Engineer & Tech Lead, marking a pivotal expansion in my
                    responsibilities and impact.
                  </p>
                  <p>
                    In this capacity, I managed a team dedicated to developing scalable e-commerce solutions, further
                    refining our platforms to enhance UI responsiveness and reduce load times dramatically.
                  </p>
                  <p>
                    My leadership was instrumental in adopting best practices for code quality and development
                    processes, markedly reducing bugs and increasing deployment efficiency.
                  </p>
                  <p>
                    Advocating for new technologies, I ensured our e-commerce platforms remained cutting-edge, directly
                    contributing to improved project delivery speeds and system reliability.
                  </p>
                </div>
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
    company: 'Norsk Gjenvinning',
    location: 'Oslo, Norway',
    logo: NGLogo,
    url: 'https://www.ngn.no/',
    roles: [
      {
        title: 'Lead Software Engineer & Tech Lead',
        startDate: new Date('2023-09-01'),
        endDate: null,
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
