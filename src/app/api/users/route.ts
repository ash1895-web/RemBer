import { NextResponse, NextRequest } from 'next/server';

export const GET = async (req: Request) => {
    return NextResponse.json({ 'test': 'message' })
}