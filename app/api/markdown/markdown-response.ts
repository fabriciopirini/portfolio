export const markdownResponse = (markdown: string) =>
  new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown',
      Vary: 'Accept',
      'x-markdown-tokens': String(Math.ceil(markdown.length / 4)),
    },
  })
