import Image from 'next/image'

import NGLogo from '/public/assets/logos/ng-logo-squared.avif'
import OdaLogo from '/public/assets/logos/oda-logo.avif'
import SportradarLogo from '/public/assets/logos/sportradar-logo.avif'
import SidiLogo from '/public/assets/logos/sidi-logo.avif'
import { ExternalLinkIcon } from 'lucide-react'

export const WorkExperience = () => {
  const localizer = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
  })

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

  return (
    <section className="container w-full py-16 md:py-32">
      <h2 className="text-5xl font-bold">Experience</h2>
      <hr className="mt-4 block h-1 w-full bg-accent md:inline-block md:w-1/12" />
      <div className="flex flex-col w-full gap-14 py-6 text-2xl md:pr-10 xl:pr-0">
        {experiences.map(experience => (
          <div key={experience.company} className="flex flex-col gap-5">
            <div className="flex-col sm:flex-row flex items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src={experience.logo}
                  width={50}
                  height={62}
                  alt={experience.company}
                  className="object-cover w-[50px] h-[62px]"
                />
                <div className="flex flex-col sm:flex-row">
                  <h3 className="text-3xl font-bold">
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex gap-2 items-baseline hover:underline"
                    >
                      {experience.company}{' '}
                      <ExternalLinkIcon size={18} className="h-[0.5em] w-[0.5em] min-h-[0.5em] min-w-[0.5em]" />
                    </a>
                  </h3>
                  <p className="text-xl sm:hidden italic font-light text-accent">{experience.location}</p>
                </div>
              </div>
              <p className="text-xl italic hidden sm:block font-light text-accent">{experience.location}</p>
            </div>
            <div className="flex flex-col w-full gap-10">
              {experience.roles.map(role => (
                <div key={`${experience.company}-${role.title}`} className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row justify-between w-full">
                    <p className="text-2xl font-semibold">{role.title}</p>
                    <p className="text-lg sm:text-xl italic font-light">{`${localizer.format(role.startDate)} - ${
                      role.endDate ? localizer.format(role.endDate) : 'Present'
                    }`}</p>
                  </div>
                  {role.bullets ? (
                    <ul key={`${experience.company}-${role.title}`} className="flex flex-col gap-2">
                      {role.bullets.map(bullet => (
                        <li key={bullet} className="text-xl list-item list-disc list-inside">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
