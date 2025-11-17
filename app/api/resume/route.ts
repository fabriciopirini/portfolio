import { NextResponse } from 'next/server'

const resumeUrl = 'https://raw.githubusercontent.com/fabriciopirini/utils/master/Resume/Fabricio_Pirini_CV.pdf'

export async function GET(_request: Request) {
  return NextResponse.redirect(resumeUrl, { status: 302 })
}
