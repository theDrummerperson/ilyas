import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Type definitions for errors
interface SMTPError extends Error {
  code?: string;
  command?: string;
  responseCode?: number;
}

export async function POST(request: Request) {
  try {
    // Log all env variables (except password)
    console.log('Environment check:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      hasPassword: !!process.env.SMTP_PASSWORD,
      contactEmail: process.env.CONTACT_EMAIL
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
    });

    // Test SMTP connection
    try {
      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (error) {
      const smtpError = error as SMTPError;
      console.error('SMTP verification failed:', {
        error: smtpError,
        message: smtpError.message,
        code: smtpError.code,
        command: smtpError.command,
        responseCode: smtpError.responseCode
      });
      throw new Error(`SMTP verification failed: ${smtpError.message}`);
    }

    const formData = await request.json();
    
    // Log form data (excluding sensitive info)
    console.log('Form data received:', {
      hasName: !!formData.name,
      hasEmail: !!formData.email,
      hasMessage: !!formData.message
    });

    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Message from ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    const typedError = error as SMTPError;
    console.error('Detailed error information:', {
      name: typedError.name,
      message: typedError.message,
      code: typedError.code,
      command: typedError.command,
      responseCode: typedError.responseCode,
      stack: typedError.stack
    });

    return NextResponse.json(
      { 
        message: 'Failed to send email',
        error: typedError.message,
        code: typedError.code || 'NO_CODE'
      },
      { status: 500 }
    );
  }
}

