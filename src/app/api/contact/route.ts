import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, message } = body;
    
    // Validate required fields
    if (!email || !name || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    try {
      // Send email using Resend
      await resend.emails.send({
        from: 'Your Website <onboarding@resend.dev>', // Update this
        to: process.env.CONTACT_EMAIL as string,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });
      
      return NextResponse.json({ 
        success: true, 
        message: 'Message sent successfully' 
      });

    } catch (emailError: unknown) {
      console.error('Failed to send email:', emailError);
      
      return NextResponse.json(
        { success: false, message: 'Failed to send message' },
        { status: 500 }
      );
    }

  } catch (error: unknown) {
    console.error('Contact form submission failed:', error);
    
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
}