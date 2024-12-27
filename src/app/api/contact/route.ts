import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Log the form data for now to verify it's being received
    console.log('Received form data:', formData);

    // Here you would typically:
    // 1. Validate the data
    // 2. Send an email using your preferred email service
    // 3. Store the submission in a database if needed

    // For now, we'll just return a success response
    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Error processing your request' },
      { status: 500 }
    );
  }
}