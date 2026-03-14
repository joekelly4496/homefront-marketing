import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, homesPerYear, hearAboutUs, message } = body;

    // Try Resend first if API key is set
    if (process.env.RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Homefront <onboarding@resend.dev>',
          to: ['joekelly4496@gmail.com'],
          subject: `New Demo Request from ${name} at ${company}`,
          html: `
            <h2>New Demo Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Homes per year:</strong> ${homesPerYear}</p>
            <p><strong>How they heard about us:</strong> ${hearAboutUs || 'Not specified'}</p>
            <p><strong>Message:</strong> ${message || 'None'}</p>
          `,
        }),
      });

      if (res.ok) {
        return NextResponse.json({ success: true });
      }
    }

    // Fallback: log the submission (in production, connect to your email service)
    console.log('Demo request received:', {
      name,
      company,
      email,
      phone,
      homesPerYear,
      hearAboutUs,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Demo form error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
