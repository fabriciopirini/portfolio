import { NextResponse } from 'next/server'

const resumeUrl = 'https://raw.githubusercontent.com/fabriciopirini/utils/master/Resume/Fabricio_Pirini_CV.pdf'

export async function GET(_request: Request) {
  try {
    const response = await fetch(resumeUrl)

    if (!response.ok) {
      console.error(
        `[CRITICAL] Failed to fetch resume: ${response.status} ${response.statusText} - Potential opportunity loss!`
      )
      return new NextResponse(
        'Sorry, the resume is temporarily unavailable due to GitHub instability. Please try again in a few moments.',
        {
          status: 503,
          headers: {
            'Content-Type': 'text/plain',
            'Retry-After': '30',
          },
        }
      )
    }

    const pdfBuffer = await response.arrayBuffer()

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Fabricio_Pirini_CV.pdf"',
      },
    })
  } catch (error) {
    console.error('[CRITICAL] Error fetching resume - Potential opportunity loss!', error)
    return new NextResponse(
      'Sorry, the resume is temporarily unavailable. This might be due to temporary network issues. Please try again in a few moments.',
      {
        status: 503,
        headers: {
          'Content-Type': 'text/plain',
          'Retry-After': '30',
        },
      }
    )
  }
}
