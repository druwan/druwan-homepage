import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const keepAliveUrl = `${baseUrl}/api/keep-alive`;

    const response = await fetch(keepAliveUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`Failed to trigger keep-alive: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(
      { message: 'Keep-alive triggered', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in cron-keep-alive:', error);
    return NextResponse.json(
      {
        error: 'Failed to trigger keep-alive',
        details: error.message,
      },
      { status: 500 }
    );
  }
}
