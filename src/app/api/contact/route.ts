import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { email, name, message, subject } = body;

    // Validate the required fields
    if (!email || !name || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    try {
      // Send email using Resend
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // Update this with your verified domain
        to: ['ilyasabukar@gmail.com'], // Your email address
        subject: subject || `New message from ${name}`,
        html: `
          <div>
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div>${message}</div>
          </div>
        `,
      });

      return NextResponse.json(
        { message: 'Email sent successfully', data },
        { status: 200 }
      );
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Error sending email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Error processing request' },
      { status: 400 }
    );
  }
}