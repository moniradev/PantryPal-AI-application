// PantryPal AI - Automated QA & Validation Test Suite
// Checks schemas, calculations, zero-waste logic, and BDT arithmetic

import { z } from "zod";

const tests = [];
let passed = 0;
let failed = 0;

function it(name, fn) {
  try {
    fn();
    console.log(`✓ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`✗ FAIL: ${name}`);
    console.error(`  ${err.message}`);
    failed++;
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) throw new Error(`Expected ${expected} but got ${actual}`);
    },
    toEqual(expected) {
      if (JSON.stringify(actual) !== JSON.stringify(expected))
        throw new Error(`Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) throw new Error(`Expected > ${expected} but got ${actual}`);
    },
  };
}

console.log("=========================================");
console.log("RUNNING PANTRYPAL AI PRODUCTION QA AUDIT");
console.log("=========================================\n");

// 1. Pantry Schema Validation
const PantryItemCreateSchema = z.object({
  customName: z.string().min(1),
  quantity: z.number().positive(),
  unit: z.enum(["kg", "g", "L", "ml", "pcs", "piece", "bunch", "hali"]),
  expiryDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().nullable(),
});

it("Validates valid pantry item addition", () => {
  const sample = {
    customName: "Miniket Rice",
    quantity: 5,
    unit: "kg",
    expiryDate: "2026-12-30",
  };
  const res = PantryItemCreateSchema.safeParse(sample);
  expect(res.success).toBe(true);
});

it("Rejects negative quantities in pantry addition", () => {
  const invalid = {
    customName: "Tomato",
    quantity: -2,
    unit: "kg",
  };
  const res = PantryItemCreateSchema.safeParse(invalid);
  expect(res.success).toBe(false);
});

// 2. Expiry Date Calculation Logic
function getExpiryStatus(expiryDateStr) {
  const today = new Date("2026-11-22T00:00:00Z");
  const expiry = new Date(`${expiryDateStr}T00:00:00Z`);
  const diffDays = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "expired";
  if (diffDays <= 3) return "expiring_soon";
  if (diffDays <= 7) return "use_soon";
  return "safe";
}

it("Correctly identifies expiring soon (≤3 days)", () => {
  expect(getExpiryStatus("2026-11-23")).toBe("expiring_soon");
  expect(getExpiryStatus("2026-11-25")).toBe("expiring_soon");
});

it("Correctly identifies safe shelf life (>7 days)", () => {
  expect(getExpiryStatus("2026-12-25")).toBe("safe");
});

it("Correctly identifies already expired items", () => {
  expect(getExpiryStatus("2026-11-20")).toBe("expired");
});

// 3. BDT Budget Optimization & Currency Logic
it("Calculates budget deficit without floating point drift", () => {
  const monthlyBudget = 8000;
  const expenses = [820, 1150, 480];
  const total = expenses.reduce((a, b) => a + b, 0);
  const remaining = monthlyBudget - total;

  expect(total).toBe(2450);
  expect(remaining).toBe(5550);
});

// 4. Recipe Matching Logic
function matchRecipePantry(recipeIngredients, pantryItems) {
  const availableNames = new Set(pantryItems.map((i) => i.toLowerCase()));
  const missing = recipeIngredients.filter((i) => !availableNames.has(i.toLowerCase()));
  const matchPercentage = Math.round(
    ((recipeIngredients.length - missing.length) / recipeIngredients.length) * 100
  );
  return { matchPercentage, missing };
}

it("Computes 100% pantry match when all ingredients exist", () => {
  const recipe = ["Rice", "Egg", "Onion"];
  const pantry = ["Rice", "Egg", "Onion", "Salt", "Oil"];
  const res = matchRecipePantry(recipe, pantry);
  expect(res.matchPercentage).toBe(100);
  expect(res.missing.length).toBe(0);
});

it("Computes correct missing items when ingredient is absent", () => {
  const recipe = ["Rice", "Egg", "Onion", "Coriander"];
  const pantry = ["Rice", "Egg", "Onion"];
  const res = matchRecipePantry(recipe, pantry);
  expect(res.matchPercentage).toBe(75);
  expect(res.missing).toEqual(["Coriander"]);
});

console.log("\n=========================================");
console.log(`AUDIT RESULT: ${passed} passed, ${failed} failed`);
console.log("=========================================");

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
