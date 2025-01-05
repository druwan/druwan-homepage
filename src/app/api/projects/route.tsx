import { NextResponse } from 'next/server';
import { query } from 'src/app/lib/db';

export async function GET() {
  try {
    const projects = await query('SELECT * from projects');
    return NextResponse.json(projects);
  } catch (error) {
    console.error(`Error fetching projects: ${error}`);
    return NextResponse.json(
      { error: `Error fetching projects: ${error.message || error}` },
      { status: 500 }
    );
  }
}
