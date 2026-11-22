import { GoogleGenAI } from "@google/genai";
import {
  VisionDetectResponseSchema,
  GenerateRecipePromptInput,
} from "@/lib/validations/ai.schema";

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "your-gemini-api-key-here") {
    return null;
  }
  return new GoogleGenAI({ apiKey });
}

/**
 * Prompt 5: AI Ingredient Recognition using Gemini Vision
 */
export async function detectIngredientsFromImage(
  imageBase64: string,
  mimeType: string
) {
  const client = getGeminiClient();

  // If no Gemini API key is configured in environment, return a curated realistic fallback
  if (!client) {
    return {
      success: true,
      data: {
        ingredients: [
          {
            name: "Tomato",
            name_bn: "টমেটো",
            confidence: 0.96,
            category: "vegetables",
            estimated_unit: "g",
            storage_recommendation: "refrigerator" as const,
          },
          {
            name: "Potato",
            name_bn: "আলু",
            confidence: 0.94,
            category: "vegetables",
            estimated_unit: "kg",
            storage_recommendation: "pantry" as const,
          },
          {
            name: "Red Onion",
            name_bn: "দেশি পেঁয়াজ",
            confidence: 0.91,
            category: "vegetables",
            estimated_unit: "kg",
            storage_recommendation: "countertop" as const,
          },
          {
            name: "Farm Eggs",
            name_bn: "ফার্মের ডিম",
            confidence: 0.89,
            category: "dairy_eggs",
            estimated_unit: "pcs",
            storage_recommendation: "refrigerator" as const,
          },
        ],
      },
      warning: "Using local mock detection mode because GEMINI_API_KEY is not configured.",
    };
  }

  try {
    const prompt = `You are a culinary AI specialist focusing on Bangladeshi, South Asian, and global kitchen ingredients.
Analyze this food/kitchen image carefully.
Identify visible raw food ingredients, vegetables, spices, staples, or groceries.
DO NOT guess or invent exact weights or quantities from a 2D image, but recommend the standard measurement unit (e.g., kg, g, L, pcs, bunch).
Provide both the English name and the authentic Bengali (বাংলা) name for each recognized ingredient.
Return strictly a valid JSON object matching this schema:
{
  "ingredients": [
    {
      "name": "string (English name)",
      "name_bn": "string (Bengali name)",
      "confidence": number (between 0.0 and 1.0),
      "category": "grains_staples" | "vegetables" | "meat_poultry" | "fish_seafood" | "dairy_eggs" | "spices_seasoning" | "oils_fats" | "fruits" | "other",
      "estimated_unit": "kg" | "g" | "L" | "ml" | "pcs" | "bunch",
      "storage_recommendation": "pantry" | "refrigerator" | "freezer" | "countertop"
    }
  ]
}`;

    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                data: cleanBase64,
                mimeType: mimeType,
              },
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    const parsed = JSON.parse(text);
    const validated = VisionDetectResponseSchema.parse(parsed);

    return {
      success: true,
      data: validated,
    };
  } catch (err: any) {
    console.error("Gemini Vision API error:", err);
    throw new Error(`Failed to recognize ingredients: ${err.message}`);
  }
}

/**
 * Prompt 6: AI Recipe Generator using Gemini
 * Inventory-Aware, zero-waste prioritized, localized for Bangladesh
 */
export async function generatePantryRecipe(input: GenerateRecipePromptInput) {
  const client = getGeminiClient();

  if (!client) {
    // Return curated authentic Bengali recipe fallback
    return {
      success: true,
      data: {
        recipe: {
          title: "Quick Egg Bhuna with Aloo & Steamed Rice",
          title_bn: "ঝটপট আলু-ডিম ভুনা ও গরম ভাত",
          description:
            "A comforting, protein-packed traditional Bengali dish utilizing pantry eggs, potatoes, and tomatoes before expiry.",
          cooking_time_minutes: 25,
          servings: input.servings || 2,
          estimated_cost_bdt: 95,
          difficulty: "easy",
          match_percentage: 100,
          used_pantry_items: ["Farm Eggs", "Potato", "Tomato", "Red Onion"],
          missing_items: [],
          instructions: [
            "Boil the eggs and potatoes for 10 minutes, peel and prick gently.",
            "In a pan, heat 2 tablespoons of mustard oil and lightly fry the eggs with a pinch of turmeric and salt.",
            "Add chopped onions to the pan and sauté until golden brown.",
            "Add diced tomatoes, ginger-garlic paste, cumin, coriander, and chili powder. Cook until oil separates.",
            "Add the halved potatoes and fried eggs, stir well, add 1/2 cup warm water, and simmer for 5-7 minutes.",
            "Garnish with sliced green chilies and serve warm with steamed rice.",
          ],
          nutrition_estimate: {
            calories: 480,
            protein: "18g",
            carbs: "54g",
          },
        },
      },
      warning: "Using fallback recipe engine because GEMINI_API_KEY is not configured.",
    };
  }

  try {
    const prompt = `You are an expert chef specializing in Bengali home cooking, zero-waste culinary efficiency, and budget meal management.
The user wants to cook a meal with the following constraints:
- Available Pantry Items: ${JSON.stringify(input.pantryItems)}
- Target Meal Slot: ${input.mealSlot}
- Target Servings: ${input.servings}
- Budget Limit: ${input.budgetLimitBDT ? `৳${input.budgetLimitBDT} BDT` : "Flexible / Economical"}
- Max Time: ${input.maxCookingTimeMinutes ? `${input.maxCookingTimeMinutes} minutes` : "30-40 minutes"}
- Allergies to strictly avoid: ${input.allergies.join(", ") || "None declared"}
- Dietary Restrictions: ${input.dietaryRestrictions.join(", ") || "None"}

CRITICAL RULES:
1. Prioritize ingredients marked as 'isExpiringSoon' to prevent food waste.
2. Prefer ingredients already in the pantry. If any missing ingredient is essential (e.g. fresh green chili or cilantro), list it in 'missing_items' with estimated cost in BDT.
3. NEVER ignore declared allergies.
4. Estimate total cost realistically in Bangladeshi Taka (BDT ৳).
5. Output ONLY valid JSON matching this structure:
{
  "recipe": {
    "title": "string (English title)",
    "title_bn": "string (Bengali title)",
    "description": "string",
    "cooking_time_minutes": number,
    "servings": number,
    "estimated_cost_bdt": number,
    "difficulty": "easy" | "medium" | "hard",
    "match_percentage": number,
    "used_pantry_items": ["string"],
    "missing_items": [
      { "name": "string", "quantity": "string", "estimated_bdt": number }
    ],
    "instructions": ["step 1", "step 2", "step 3"],
    "nutrition_estimate": {
      "calories": number,
      "protein": "string",
      "carbs": "string"
    }
  }
}`;

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: { responseMimeType: "application/json" },
    });

    const parsed = JSON.parse(response.text || "{}");
    return {
      success: true,
      data: parsed,
    };
  } catch (err: any) {
    console.error("Gemini Recipe Generation error:", err);
    throw new Error(`Failed to generate recipe: ${err.message}`);
  }
}
