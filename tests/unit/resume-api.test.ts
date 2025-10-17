import { describe, it, expect, vi } from 'vitest'
import { http, HttpResponse } from 'msw'
import { server } from '@/tests/mocks/node'
import { GET } from '@/app/api/resume/route'

// Helper to create a mock Request object
const createMockRequest = (url = 'http://localhost:3000/api/resume') => {
  return new Request(url)
}

describe('Resume API', () => {
  it('successfully fetches PDF from external URL', async () => {
    // MSW is already handling the request with default handler
    const mockRequest = createMockRequest()
    const response = await GET(mockRequest)

    expect(response.status).toBe(200)
    expect(response.headers.get('Content-Type')).toBe('application/pdf')
  })

  it('returns correct Content-Type header', async () => {
    const mockRequest = createMockRequest()
    const response = await GET(mockRequest)

    expect(response.headers.get('Content-Type')).toBe('application/pdf')
  })

  it('returns correct Content-Disposition header with filename', async () => {
    const mockRequest = createMockRequest()
    const response = await GET(mockRequest)

    const contentDisposition = response.headers.get('Content-Disposition')
    expect(contentDisposition).toContain('attachment')
    expect(contentDisposition).toContain('filename=')
  })

  it('returns binary data in response body', async () => {
    const mockRequest = createMockRequest()
    const response = await GET(mockRequest)
    const arrayBuffer = await response.arrayBuffer()

    expect(arrayBuffer).toBeInstanceOf(ArrayBuffer)
    expect(arrayBuffer.byteLength).toBeGreaterThan(0)
  })

  it('handles fetch errors and returns 500 status', async () => {
    // Suppress expected console.error output
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    // Override the default handler to simulate a network error
    server.use(
      http.get('https://raw.githubusercontent.com/fabriciopirini/utils/master/Resume/Fabricio_Pirini_CV.pdf', () => {
        return HttpResponse.error()
      })
    )

    const mockRequest = createMockRequest()
    const response = await GET(mockRequest)

    expect(response.status).toBe(500)
    expect(consoleErrorSpy).toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
  })

  it('returns error message on failure', async () => {
    // Suppress expected console.error output
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    // Override the default handler to simulate a network error
    server.use(
      http.get('https://raw.githubusercontent.com/fabriciopirini/utils/master/Resume/Fabricio_Pirini_CV.pdf', () => {
        return HttpResponse.error()
      })
    )

    const mockRequest = createMockRequest()
    const response = await GET(mockRequest)
    const text = await response.text()

    expect(text).toContain('Failed to download')
    expect(consoleErrorSpy).toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
  })

  it('handles HTTP error responses', async () => {
    // Suppress expected console.error output
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    // Override the default handler to simulate a 404 response
    server.use(
      http.get('https://raw.githubusercontent.com/fabriciopirini/utils/master/Resume/Fabricio_Pirini_CV.pdf', () => {
        return new HttpResponse(null, { status: 404, statusText: 'Not Found' })
      })
    )

    const mockRequest = createMockRequest()
    const response = await GET(mockRequest)

    expect(response.status).toBe(500)
    expect(await response.text()).toContain('Failed to download')
    expect(consoleErrorSpy).toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
  })
})
