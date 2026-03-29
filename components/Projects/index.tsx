import { GithubIconFilled } from '@/components/SvgLogos'
import type { Project } from '@/app/projects'
import { PROJECTS } from '@/app/projects'

export const Projects = () => (
  <section id="projects" className="flex w-full flex-col gap-12 py-16 lg:container md:py-20">
    <div className="flex flex-col gap-4 pl-6 pr-4 md:px-0">
      <h2 className="font-leagueSpartan text-3xl font-medium lg:text-6xl">Things I&apos;ve actually built</h2>
      <p className="text-primary/70 lg:text-2xl">Selected work. What it was, what went sideways, and what shipped.</p>
    </div>
    <div className="grid grid-cols-1 gap-6 pl-6 pr-4 md:grid-cols-2 md:px-0 xl:grid-cols-2">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
)

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-7">
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-sm text-primary/50">{project.role}</span>
        <h3 className="font-leagueSpartan text-xl font-medium lg:text-2xl">{project.title}</h3>
      </div>
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source code on GitHub`}
          className="shrink-0 rounded-full p-2 ring-1 ring-white/20 transition-colors duration-200 hover:ring-white/60"
        >
          <GithubIconFilled className="size-5" />
        </a>
      )}
    </div>
    <p className="text-primary/70">{project.summary}</p>
    <p className="font-semibold text-accent">{project.outcome}</p>
    <div className="flex flex-wrap gap-2">
      {project.stack.map((tech) => (
        <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-sm text-primary/80">
          {tech}
        </span>
      ))}
    </div>
    {project.thingThatWentWrong && (
      <details className="group">
        <summary className="cursor-pointer select-none text-sm text-primary/40 transition-colors duration-200 hover:text-primary/70">
          What went wrong
        </summary>
        <p className="mt-3 text-sm text-primary/60">{project.thingThatWentWrong}</p>
      </details>
    )}
  </article>
)
