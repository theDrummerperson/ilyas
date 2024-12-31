import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface SMTPError extends Error {
  code?: string;
  command?: string;
}

// Log environment check
console.log('Environment check:', {
  hasSmtpPass: !!process.env.SMTP_PASS,
  hasRecipient: !!process.env.RECIPIENT_EMAIL
});

const transporter = nodemailer.createTransport({
  host: 'smtp.squarespace.com',
  port: 587,  // Changed to 587 for TLS
  secure: false,  // False for TLS
  auth: {
    user: 'iabukar@holland-st.com',
    pass: process.env.SMTP_PASS
  },
  debug: true,
  logger: true,
  tls: {
    rejectUnauthorized: false
  }
});

// Verify transport configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('Transport verification failed:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

export async function POST(request: Request) {
  try {
    const data: ContactForm = await request.json();
    
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: {
        name: 'Holland Street Contact Form',
        address: 'iabukar@holland-st.com'
      },
      to: process.env.RECIPIENT_EMAIL || 'ilyasabukar@gmail.com',
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
      `
    };

    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    
    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        id: info.messageId
      },
      { status: 200 }
    );

  } catch (error) {
    const smtpError = error as SMTPError;
    console.error('Detailed send error:', {
      message: smtpError.message,
      code: smtpError.code,
      name: smtpError.name
    });

    return NextResponse.json(
      {
        message: 'Failed to send email',
        error: smtpError.message || 'Connection error',
        code: smtpError.code
      },
      { status: 500 }
    );
  }
}