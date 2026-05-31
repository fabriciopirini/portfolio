import { NextResponse } from 'next/server';

const SOLETRA_URL = 'https://g1.globo.com/jogos/static/soletra.json';

interface SoletraWord {
  word: string;
  score: number;
  pangram: boolean;
  label: string[];
}

interface SoletraResponse {
  word_list: SoletraWord[];
}

export async function GET() {
  try {
    const res = await fetch(SOLETRA_URL);
    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch soletra data' },
        { status: res.status }
      );
    }

    const data: SoletraResponse = await res.json();
    const words = data.word_list.map((w) => w.word);

    const grouped = new Map<number, string[]>();
    for (const word of words) {
      const len = word.length;
      if (!grouped.has(len)) {
        grouped.set(len, []);
      }
      grouped.get(len)!.push(word);
    }

    const sortedLengths = Array.from(grouped.keys()).sort((a, b) => a - b);

    const lines: string[] = [];
    for (const len of sortedLengths) {
      lines.push(`${len} letters:`);
      const groupWords = grouped.get(len)!.sort((a, b) =>
        a.localeCompare(b, 'pt-BR')
      );
      lines.push(...groupWords);
      lines.push('');
    }

    return new NextResponse(lines.join('\n'), {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}