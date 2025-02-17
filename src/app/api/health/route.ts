import { NextResponse } from 'next/server';

export async function GET() {
  console.log('Health check pinged at', new Date().toISOString());
  return NextResponse.json({ status: 'Ok' }, { status: 200 });
}
