export async function GET() {
  const host = process.env.NEXT_PUBLIC_VERCEL_URL ?? 'https://fabriciopirini.com'

  const body = [
    '# Content-Signal: ai-train=no, search=yes, ai-input=yes',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${host}/sitemap.xml`,
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
