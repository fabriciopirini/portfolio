import { http, HttpResponse } from 'msw'

export const handlers = [
  // Mock the resume PDF endpoint
  http.get('https://raw.githubusercontent.com/fabriciopirini/utils/master/Resume/Fabricio_Pirini_CV.pdf', () => {
    // Return a mock PDF buffer
    const mockPdfData = new ArrayBuffer(100)
    return HttpResponse.arrayBuffer(mockPdfData, {
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
  }),
]
