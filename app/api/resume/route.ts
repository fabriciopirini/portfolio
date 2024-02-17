import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: Request) {
  const resumeUrl = 'https://raw.githubusercontent.com/fabriciopirini/utils/master/Resume/Fabricio_Pirini_CV.pdf'

  try {
    const response = await fetch(resumeUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch the resume: ${response.statusText}`)
    }

    const arrayBuffer = await response.arrayBuffer()
    const headers = new Headers({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Fabricio_Pirini_Resume.pdf"',
    })

    return new NextResponse(arrayBuffer, { headers })
  } catch (error) {
    console.error(error)
    return new NextResponse('Failed to download the resume.', { status: 500 })
  }
}
