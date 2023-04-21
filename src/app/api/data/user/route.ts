import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const data = await prisma.user.findMany({
    select: { email: true },
  });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  //   const data = await req.json();
  const data = await prisma.user.create({
    data: {
      name: 'msr',
      email: 'emon@3masf.com',
    },
    select: {
      id: true,
    },
  });
  return NextResponse.json(data);
}
