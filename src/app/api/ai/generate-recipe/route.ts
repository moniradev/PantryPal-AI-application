import { NextRequest, NextResponse } from "next/server";
import { GenerateRecipePromptSchema } from "@/lib/validations/ai.schema";
import { generatePantryRecipe } from "@/lib/ai/gemini";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = GenerateRecipePromptSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Invalid recipe generation request.",
            details: validated.error.format(),
          },
        },
        { status: 400 }
      );
    }

    const result = await generatePantryRecipe(validated.data);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Recipe generator route error:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "RECIPE_GEN_ERROR",
          message: error.message || "Failed to generate recipe.",
        },
      },
      { status: 500 }
    );
  }
}
