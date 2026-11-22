import { NextRequest, NextResponse } from "next/server";
import { VisionDetectSchema } from "@/lib/validations/ai.schema";
import { detectIngredientsFromImage } from "@/lib/ai/gemini";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = VisionDetectSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Invalid image upload payload.",
            details: validated.error.format(),
          },
        },
        { status: 400 }
      );
    }

    // Size limit check (Base64 string length roughly corresponds to ~5MB file max)
    if (validated.data.imageBase64.length > 7 * 1024 * 1024) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "PAYLOAD_TOO_LARGE",
            message: "Image payload exceeds 5MB limit.",
          },
        },
        { status: 413 }
      );
    }

    const result = await detectIngredientsFromImage(
      validated.data.imageBase64,
      validated.data.mimeType
    );

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Vision Detect route error:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "AI_PROCESSING_ERROR",
          message: error.message || "Failed to process image.",
        },
      },
      { status: 500 }
    );
  }
}
