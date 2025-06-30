import { NextResponse } from "next/server";

let people: any[] = []; // In-memory storage

export async function GET() {
  return NextResponse.json(people);
}

export async function POST(req: Request) {
  const data = await req.json();
  people.push(data);
  return NextResponse.json({ success: true });
}
