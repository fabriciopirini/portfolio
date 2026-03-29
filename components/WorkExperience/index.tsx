import { BadgeCheckIcon } from 'lucide-react'

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
            From web scrapers to design systems. Each role added a layer — performance at scale, the full stack, then
            what it means to make something feel right for the person using it.
          </p>
        </div>
        <div>
          <div className="relative ml-2 basis-3/5 md:ml-8">
            <BadgeCheckIcon
              fill="#ffc457"
              className="pointer-events-none absolute top-0 -ml-6 -mt-1 size-14 text-primary-background"
            />
            <div className="mt-1 border-l-[7px] border-dotted border-accent/50 pb-10 pl-12">
              <div className="size-full space-y-5 rounded-xl border border-white bg-[#1E1E1E] p-7">
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Scaling data collection</p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    Rebuilt web crawlers and scrapers from the ground up — 10x faster, half the resource cost. First
                    exposure to shipping at scale and learning that performance is a feature, not an afterthought.
                  </p>
                  <p>Learned how teams actually work together: Agile in practice, not on a slide deck.</p>
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
              <div className="size-full space-y-5 rounded-xl border border-white bg-[#1E1E1E] p-7">
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Scaling the platform</p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    Migrated a legacy codebase to React — not just a rewrite, but a chance to rethink every interaction
                    from the user&apos;s perspective. Worked with the design team to close the gap between what was
                    designed and what actually shipped.
                  </p>
                  <p>
                    Mentored developers while on-call for the Django backend. Knowing the full stack is what lets me
                    make better front-end decisions.
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
            When I took on leadership, I realized it wasn&apos;t about me anymore. It was about making my team and
            company better.
          </p>
        </div>
        <div>
          <div className="relative ml-2 basis-3/5 md:ml-8">
            <BadgeCheckIcon
              fill="#ffc457"
              className="pointer-events-none absolute top-0 -ml-6 -mt-1 size-14 text-primary-background"
            />
            <div className="mt-1 border-l-[7px] border-dotted border-accent/50 pb-10 pl-12">
              <div className="size-full space-y-5 rounded-xl border border-white bg-[#1E1E1E] p-7">
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">
                  Frontend performance & design systems
                </p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    Led frontend architecture for an e-commerce platform. Made things{' '}
                    <span className="font-semibold text-accent">40% faster</span> by treating performance as a design
                    problem, not a backend problem.
                  </p>
                  <p>
                    Worked directly with designers to close the gap between intent and implementation. The UI shipped
                    looking exactly like the Figma file. That became the standard.
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
              <div className="size-full space-y-5 rounded-xl border border-white bg-[#1E1E1E] p-7">
                <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Defining the front-end standard</p>
                <div className="space-y-5 text-primary/70 lg:text-2xl">
                  <p>
                    Set the component architecture, design token strategy, and front-end practices that gave all teams a
                    shared language between design and code.
                  </p>
                  <p>
                    The engineering breadth — knowing the cloud, the infra, the stack — informed those standards.
                    Knowing how the system works end to end is what makes the front-end layer more durable.
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
            Bridging design and engineering. Design systems that scale, visual testing that ships with confidence,
            tokens that let designers work directly in production.
          </p>
        </div>
        <div className="relative ml-2 basis-3/5 md:ml-8">
          <BadgeCheckIcon
            fill="#ffc457"
            className="pointer-events-none absolute top-0 -ml-6 -mt-1 size-14 text-primary-background"
          />
          <div className="mt-1 border-l-[7px] border-dotted border-accent/50 pb-10 pl-12">
            <div className="size-full space-y-5 rounded-xl border border-white bg-[#1E1E1E] p-7">
              <p className="font-leagueSpartan text-xl font-medium lg:text-3xl">Design systems & engineering craft</p>
              <div className="space-y-5 text-primary/70 lg:text-2xl">
                <p>
                  Automated <span className="font-semibold text-accent">design tokens</span> across 11 core components.
                  Designers now push themes to production without opening a ticket.
                </p>
                <p>
                  Built a <span className="font-semibold text-accent">visual testing system</span> that cut test
                  execution from 12 minutes to under 1 minute and tripled coverage.
                </p>
                <p>
                  Led <span className="font-semibold text-accent">live chat unification</span> across web and mobile.
                  One integration, two platforms, consistent experience.
                </p>
                <p>
                  Rebuilt the <span className="font-semibold text-accent">Sanity content setup</span>. Content teams now
                  deploy articles independently, without engineering involvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
