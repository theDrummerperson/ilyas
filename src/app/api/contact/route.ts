import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.squarespace.com',
  port: 465, // or 587
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.SQUARESPACE_EMAIL,
    pass: process.env.SQUARESPACE_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Received form data:', formData);

    if (!formData.name || !formData.email || !formData.message) {
      console.log('Missing required fields:', formData);
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email...');

    const mailOptions = {
      from: `"Contact Form" <${process.env.SQUARESPACE_EMAIL}>`,
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

    console.log('Mail options prepared:', { ...mailOptions, text: '[truncated]' });

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      {
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}