import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'articles.json');
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }
    const fileData = fs.readFileSync(filePath, 'utf8');
    const articles = JSON.parse(fileData);
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching articles data:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
