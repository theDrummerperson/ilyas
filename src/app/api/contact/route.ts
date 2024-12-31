import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Type definitions
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // Add timeout settings
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 10000, // 10 seconds
  socketTimeout: 10000, // 10 seconds
});

export async function POST(request: Request) {
  try {
    const data: ContactForm = await request.json();
    
    // Validate input
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || data.email, // Fallback to sender's email if recipient not configured
      subject: `New Contact Form Message from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error: unknown) {
    // Log the error safely
    console.error('An error occurred:', error);

    // Type guard for Error objects
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const errorStack = error instanceof Error ? error.stack : undefined;

    if (errorStack) {
      console.error('Stack trace:', errorStack);
    }

    return NextResponse.json(
      {
        message: 'Failed to send email',
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}