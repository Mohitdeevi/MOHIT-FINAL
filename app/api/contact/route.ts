import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required')
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const result = contactSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json({ error: result.error.errors }, { status: 400 });
    }

    // Here you would handle the contact form submission, e.g., send an email
    // For now, we'll just return a success response
    return NextResponse.json({ data: 'Contact form submitted successfully.' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
