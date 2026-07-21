import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch from ZenQuotes server-side to bypass browser CORS restrictions
    const res = await fetch('https://zenquotes.io/api/today', { cache: 'no-store' });
    
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    }
    
    return NextResponse.json({ error: 'Failed to fetch from ZenQuotes' }, { status: res.status });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
