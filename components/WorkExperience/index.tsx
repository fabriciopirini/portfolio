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
            From web scrapers to leading teams. Each role taught me something about building better systems and helping
            people ship faster.
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
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Scaling data collection</p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    Rebuilt web crawlers and scrapers from the ground up. Made them 10x faster and lean. Data collection
                    became efficient instead of resource-hungry.
                  </p>
                  <p>
                    Got my first real taste of Agile and shipping features that mattered. Learned how teams actually
                    work together at scale.
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
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Scaling the platform</p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    Modernized legacy platform to React while supporting explosive growth. Built infrastructure that let
                    the company expand without breaking a sweat.
                  </p>
                  <p>
                    Mentored newer developers while on-call for the Django backend. There&apos;s no better way to learn a
                    system than being responsible for keeping it running.
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
            When I took on leadership, I realized it wasn&apos;t about me anymore. It was about making my team and company
            better.
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
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">
                  Frontend performance & design systems
                </p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    Led frontend architecture for their e-commerce platform. Made things{' '}
                    <span className="font-semibold text-accent">40% faster</span> and worked closely with designers to
                    improve how users experienced the product.
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
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Setting technical direction</p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    Established architectural baseline across all tech teams. Set technology standards for cloud
                    infrastructure, stack decisions, and infrastructure patterns that scaled the entire department.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="shrink-0 basis-2/5">
          <p className="mb-7 font-leagueSpartan text-3xl font-medium lg:mb-14 lg:text-6xl">Current work</p>
          <p className="lg:mb-10 lg:text-3xl">
            Building <span className="font-semibold text-accent">platform tools</span> that make developers faster.
            Infrastructure, tooling, design systems.
          </p>
        </div>
        <div className="relative ml-2 basis-3/5 md:ml-8">
          <BadgeCheckIcon
            fill="#ffc457"
            className="pointer-events-none absolute top-0 -ml-6 -mt-1 size-14 text-primary-background"
          />
          <div className="mt-1 border-l-[7px] border-dotted border-accent/50 pb-10 pl-12">
            <div className="size-full space-y-5 rounded border border-white bg-[#1E1E1E] p-7">
              <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Automation systems that save money</p>
              <div className="space-y-5 text-primary/70 lg:text-2xl">
                <p>
                  Built a <span className="font-semibold text-accent">visual testing system</span> that cut test
                  execution from 12 minutes to under 1 minute and tripled coverage, saved the team thousands of hours.
                </p>
                <p>
                  Automated <span className="font-semibold text-accent">design tokens</span> across 11 core components.
                  Designers now push themes to production without engineering overhead.
                </p>
                <p>
                  Led <span className="font-semibold text-accent">live chat unification</span> across web and mobile
                  apps. A big initiative that centralized support tooling for the entire platform.
                </p>
                <p>
                  Enhanced <span className="font-semibold text-accent">Sanity content setup</span>, improving how
                  content teams manage and deploy articles across all products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
