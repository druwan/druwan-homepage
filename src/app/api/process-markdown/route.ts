import { NextResponse } from 'next/server';
import { processMarkdownFiles } from 'src/app/lib/processMarkdownFiles';

export async function GET() {
  try {
    await processMarkdownFiles();
    return NextResponse.json(
      { message: 'Markdown processed' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing files', error);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
