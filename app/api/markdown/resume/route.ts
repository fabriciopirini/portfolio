import { RESUME } from '@/lib/career-data'

import { markdownResponse } from '../markdown-response'

export function GET() {
  return markdownResponse(
    [
      '# Fabricio Tramontano Pirini',
      '',
      `> ${RESUME.subtitle}. React, React Native, Expo, and Next.js. Brazil (UTC−3), working with US teams.`,
      '',
      'Email: fabricio@fabriciopirini.com · PDF: https://fabriciopirini.com/api/resume · LinkedIn: https://www.linkedin.com/in/fabriciopirini/ · GitHub: https://github.com/fabriciopirini',
      '',
      '## Summary',
      '',
      RESUME.summary,
      '',
      '## Experience',
      ...RESUME.jobs.flatMap(({ company, location, periods }) => [
        '',
        `### ${company} · ${location}`,
        ...periods.flatMap(({ role, years, bullets }) => [
          '',
          `**${role}**, ${years}`,
          '',
          ...bullets.map((b) => `- ${b}`),
        ]),
      ]),
      '',
      '## Skills',
      '',
      ...RESUME.skills.map(({ label, value }) => `- **${label}:** ${value}`),
      '',
      '## Education',
      '',
      ...RESUME.education.map(
        ({ institution, location, credential, years }) => `- **${institution}**, ${credential}. ${location}, ${years}`
      ),
      '',
    ].join('\n')
  )
}
