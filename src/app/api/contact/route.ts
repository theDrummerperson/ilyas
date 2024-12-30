import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Type for environment validation
type EnvCheck = {
  isProduction: boolean;
  hasHost: boolean;
  hasPort: boolean;
  hasUser: boolean;
  hasPass: boolean;
  hasContactEmail: boolean;
};

// Validate environment variables at startup
const validateEnv = (): EnvCheck => {
  const check = {
    isProduction: process.env.NODE_ENV === 'production',
    hasHost: !!process.env.SMTP_HOST,
    hasPort: !!process.env.SMTP_PORT,
    hasUser: !!process.env.SMTP_USER,
    hasPass: !!process.env.SMTP_PASSWORD,
    hasContactEmail: !!process.env.CONTACT_EMAIL,
  };

  console.log('Environment validation:', check);
  return check;
};

// Create mail transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

export async function POST(request: Request) {
  try {
    // Validate environment - only check required variables
    const envCheck = validateEnv();
    const requiredVars = {
      hasHost: envCheck.hasHost,
      hasPort: envCheck.hasPort,
      hasUser: envCheck.hasUser,
      hasPass: envCheck.hasPass,
      hasContactEmail: envCheck.hasContactEmail,
    };

    if (!Object.values(requiredVars).every(Boolean)) {
      console.error('Missing required environment variables:', requiredVars);
      throw new Error('Missing required environment variables');
    }

    // Parse incoming request
    const formData = await request.json();
    console.log('Received form data:', {
      ...formData,
      message: formData.message?.slice(0, 50) + '...' // Log truncated message
    });

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create and verify transporter
    const transporter = createTransporter();
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (smtpError) {
      console.error('SMTP verification failed:', smtpError);
      throw new Error('Failed to connect to email server');
    }

    // Prepare email
    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Message from ${formData.name}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        
        Message:
        ${formData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      response: info.response
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    // Detailed error logging
    const typedError = error as Error;
    console.error('Detailed error:', {
      name: typedError.name,
      message: typedError.message,
      stack: typedError.stack
    });

    return NextResponse.json(
      {
        message: 'Failed to send email',
        error: typedError.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}