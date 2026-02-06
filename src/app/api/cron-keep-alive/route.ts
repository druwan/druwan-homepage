import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  try {
    const keepAliveUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/keep-alive`;

    console.log(
      'Attempting to trigger keep-alive at relative path:',
      keepAliveUrl,
    );

    const response = await fetch(keepAliveUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'Vercel-Edge-Function',
      },
      body: JSON.stringify({}),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Keep alive response status:', response.status);
      console.error('Keep alive response body:', errorText);
      throw new Error(
        `Failed to trigger keep-alive: ${response.status} - ${errorText}`,
      );
    }

    const data = await response.json();
    console.log('Keep-alive successful:', data);
    return NextResponse.json(
      { message: 'Keep-alive triggered', data },
      { status: 200 },
    );
  } catch (error: any) {
    let errorMessage = 'Failed to trigger keep-alive';
    if (error instanceof Error) {
      console.error('Error in cron-keep-alive:', error);
      return NextResponse.json(
        {
          error: errorMessage,
          details: error.message,
        },
        { status: 500 },
      );
    }
  }
}
