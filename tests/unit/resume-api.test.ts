import { describe, expect, it } from 'vitest'
import { GET } from '@/app/api/resume/route'

describe('Resume API', () => {
  it('redirects to the current resume PDF', async () => {
    const response = await GET(new Request('http://localhost:3000/api/resume'))

    expect(response.status).toBe(302)
    expect(response.headers.get('Location')).toBe(
      'https://raw.githubusercontent.com/fabriciopirini/utils/master/Resume/Fabricio_Pirini_CV.pdf'
    )
  })
})
