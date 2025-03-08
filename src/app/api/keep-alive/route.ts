import { keepAlive } from '@/lib/keepAlive';
import { NextResponse } from 'next/server';

export async function POST() {
  const result = await keepAlive();

  if (result.success) {
    return NextResponse.json(
      { message: 'Keep alive successful', data: result.data },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        error: 'Keep alive failed',
        details: result.error,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}
