import Image from 'next/image'

export const Skills = () => {
  const skills = [
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'GraphQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    },
  ]

  return (
    <section className="container w-full pt-4 md:pt-10">
      <h2 className="text-center text-5xl font-bold">My Skills</h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 py-6 text-2xl md:flex-[1_1_21%]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex h-36 w-36 flex-col items-center justify-center gap-2 rounded-2xl bg-skill-card p-8 shadow-2xl md:h-48 md:w-48 md:gap-4 md:p-16"
          >
            <Image className="h-auto w-auto" width={150} height={150} src={skill.icon} alt={skill.name} />
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
