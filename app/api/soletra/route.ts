import { NextResponse } from 'next/server'

export const runtime = 'edge'

export type Data = {
  letters: string
  total_score: number
  word_count: number
  pangram_count: number
  pangram_list: Array<string>
  word_list: Array<{
    word: string
    score: number
    pangram: boolean
    label: Array<string>
  }>
  start_datetime: number
  end_datetime: number
}

export async function GET() {
  const URL = 'https://g1.globo.com/jogos/static/soletra.json'

  try {
    const response = await fetch(URL, { cache: 'no-store' })

    if (!response.ok) {
      throw new Error(`Failed to fetch the soletra answers: ${response.statusText}`)
    }

    const data = (await response.json()) as Data

    const processedData = data.word_list.reduce((acc, a) => {
      const length = a.word.length

      if (!acc[length]) acc[length] = []

      acc[length].push(a.word)

      return acc
    }, {}) as Record<number, Array<string>>

    const htmlResponse = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
        <title>Dados do Jogo Soletra</title>
        <style>
          body { font-family: 'Inter', sans-serif; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          td:first-child { text-align: center; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <h1>Respostas do Jogo Soletra</h1>
        <p>${new Date().toLocaleDateString('pt-br', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}</p>
        <p>Quantidade de palavras: ${data.word_count}</p>
        <p>Quantidade de palavras que são pangramas: ${data.pangram_count}</p>
        <p>Pangramas: ${data.pangram_list.join(', ')}</p>
        <table>
          <thead>
            <tr>
              <th>Quantidade de letras</th>
              <th>Palavras</th>
            </tr>
          </thead>
          <tbody>
            ${Object.entries(processedData)
              .map(
                ([length, words]) => `
              <tr>
                <td>${length}</td>
                <td>${words.sort((a, b) => a.localeCompare(b, 'pt-BR')).join(', ')}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
      </body>
      </html>
    `

    return new NextResponse(htmlResponse, { headers: { 'Content-Type': 'text/html' } })
  } catch (error) {
    console.error(error)
    return new NextResponse('Failed to download the soletra answers.', { status: 500 })
  }
}
