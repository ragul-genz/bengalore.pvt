import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .min(10, "Please provide a valid phone number (at least 10 digits)")
    .regex(/^[0-9+\-\s()]+$/, "Phone number contains invalid characters"),
  interestedService: z.string().min(1, "Please select an interested service"),
  projectDetails: z
    .string()
    .min(10, "Please share brief project details (at least 10 characters)"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must consent to the privacy policy to submit your enquiry",
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Save inquiry to local record file
    const inquiryRecord = {
      id: `ENQ-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      receivedAt: new Date().toISOString(),
      ...validatedData,
    };

    const filePath = path.join(process.cwd(), "src", "data", "inquiries.json");
    let currentInquiries = [];

    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        currentInquiries = JSON.parse(fileContent);
      }
    } catch {
      currentInquiries = [];
    }

    currentInquiries.push(inquiryRecord);
    fs.writeFileSync(filePath, JSON.stringify(currentInquiries, null, 2));

    return NextResponse.json(
      {
        success: true,
        referenceId: inquiryRecord.id,
        message:
          "Thank you! Your enquiry has been received and recorded successfully. Our engineering team will contact you shortly.",
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.issues.map((i) => ({ field: i.path[0], message: i.message })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your enquiry. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
