import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = searchParams.get('range') || '1mo';
  const interval = searchParams.get('interval') || '1d';
  const symbol = searchParams.get('symbol') || 'ENZY.ST';

  try {
    const response = await fetch(`https://query2.finance.yahoo.com/v8/finance/chart/${symbol}?range=${range}&interval=${interval}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Yahoo Finance API returned ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return NextResponse.json({ error: 'Failed to fetch stock data' }, { status: 500 });
  }
}
