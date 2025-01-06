import { NextResponse } from 'next/server';
import { supabase } from 'src/app/lib/supabaseClient';

export async function GET() {
  try {
    const { data, error } = await supabase.from('projects').select('*');
    if (error) {
      console.error(`Error fetching projects: ${error.message}`);
      return NextResponse.json(
        { error: `Error fetching projects: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(`Unexpected error fetching projects: ${error}`);
    return NextResponse.json(
      {
        error: `Unexpected error fetching projects: ${error.message || error}`,
      },
      { status: 500 }
    );
  }
}
