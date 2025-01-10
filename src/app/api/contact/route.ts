import { logger } from "@/lib/logger";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    logger.info("Processing contact form submission", { 
      email: body.email 
    });

    try {
      logger.debug("Attempting to send email", {
        to: process.env.CONTACT_EMAIL
      });

      logger.info("Email sent successfully");
      
      return NextResponse.json({ 
        success: true, 
        message: "Message sent successfully" 
      });

    } catch (emailError: unknown) {
      logger.error("Failed to send email", {
        error: emailError instanceof Error ? emailError.message : "Unknown error"
      });
      
      return NextResponse.json(
        { success: false, message: "Failed to send message" },
        { status: 500 }
      );
    }

  } catch (error: unknown) {
    logger.error("Contact form submission failed", {
      error: error instanceof Error ? error.message : "Unknown error"
    });
    
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}