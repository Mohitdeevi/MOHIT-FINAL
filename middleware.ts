import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Example middleware for rate limiting
  // This is a placeholder and should be replaced with actual rate limiting logic
  const rateLimitExceeded = false; // Replace with actual check

  if (rateLimitExceeded) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/contact',
};
