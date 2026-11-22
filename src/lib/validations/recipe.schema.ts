import { z } from "zod";

export const RecipeCreateSchema = z.object({
  title: z.string().min(2, "Recipe title is required."),
  titleBn: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  cookingTimeMinutes: z.number().int().positive(),
  servings: z.number().int().positive().default(2),
  estimatedCost: z.number().nonnegative().default(0),
  difficulty: z.enum(["easy", "medium", "hard"]).default("easy"),
  imageUrl: z.string().url().optional().nullable(),
  instructions: z.array(z.string()).min(1, "At least one instruction step is required."),
  ingredients: z.array(
    z.object({
      name: z.string().min(1),
      quantity: z.number().positive(),
      unit: z.string(),
      isOptional: z.boolean().default(false),
      isAvailableInPantry: z.boolean().default(false),
    })
  ),
  isAiGenerated: z.boolean().default(false),
});

export type RecipeCreateInput = z.infer<typeof RecipeCreateSchema>;
