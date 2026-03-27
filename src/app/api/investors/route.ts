import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'investors.json');

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ reports: [], pressReleases: [], stock: {}, calendar: [] });
    }
    const fileData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileData);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading investor data:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Ensure directory exists
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error saving investor data:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
