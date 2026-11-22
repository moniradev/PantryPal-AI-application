-- PantryPal AI Database Migration
-- Target: PostgreSQL / Supabase
-- Version: 1.0.0

-- Create custom enum types
CREATE TYPE item_category AS ENUM (
  'grains_staples',
  'vegetables',
  'meat_poultry',
  'fish_seafood',
  'dairy_eggs',
  'spices_seasoning',
  'oils_fats',
  'fruits',
  'bakery_snacks',
  'other'
);

CREATE TYPE storage_location AS ENUM (
  'pantry',
  'refrigerator',
  'freezer',
  'countertop'
);

CREATE TYPE meal_type AS ENUM (
  'breakfast',
  'lunch',
  'dinner',
  'snack'
);

CREATE TYPE recipe_difficulty AS ENUM (
  'easy',
  'medium',
  'hard'
);

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 2. User Preferences
CREATE TABLE IF NOT EXISTS public.user_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    preferred_language VARCHAR(5) DEFAULT 'bn' CHECK (preferred_language IN ('bn', 'en')),
    currency VARCHAR(5) DEFAULT 'BDT',
    dietary_preferences TEXT[] DEFAULT '{}',
    allergies TEXT[] DEFAULT '{}',
    daily_food_budget NUMERIC(10,2) DEFAULT 0.00,
    monthly_food_budget NUMERIC(10,2) DEFAULT 0.00,
    household_size SMALLINT DEFAULT 1 CHECK (household_size > 0),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 3. Ingredients (Master Directory)
CREATE TABLE IF NOT EXISTS public.ingredients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    name_bn TEXT NOT NULL,
    category item_category DEFAULT 'other' NOT NULL,
    default_unit VARCHAR(20) DEFAULT 'piece' NOT NULL,
    average_shelf_life_days INT DEFAULT 7,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_ingredients_name ON public.ingredients(name);
CREATE INDEX IF NOT EXISTS idx_ingredients_name_bn ON public.ingredients(name_bn);

-- 4. Pantry Items
CREATE TABLE IF NOT EXISTS public.pantry_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    ingredient_id UUID REFERENCES public.ingredients(id) ON DELETE SET NULL,
    custom_name TEXT,
    custom_name_bn TEXT,
    quantity NUMERIC(10,2) NOT NULL CHECK (quantity >= 0),
    unit VARCHAR(20) NOT NULL,
    purchase_date DATE DEFAULT CURRENT_DATE,
    expiry_date DATE,
    minimum_quantity NUMERIC(10,2) DEFAULT 1.00,
    storage_location storage_location DEFAULT 'pantry',
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_pantry_user_expiry ON public.pantry_items(user_id, expiry_date);

-- 5. Recipes
CREATE TABLE IF NOT EXISTS public.recipes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    title_bn TEXT,
    description TEXT,
    instructions JSONB NOT NULL DEFAULT '[]'::jsonb,
    cooking_time_minutes INT CHECK (cooking_time_minutes > 0),
    servings SMALLINT DEFAULT 2 CHECK (servings > 0),
    estimated_cost NUMERIC(10,2) DEFAULT 0.00,
    difficulty recipe_difficulty DEFAULT 'easy',
    image_url TEXT,
    is_ai_generated BOOLEAN DEFAULT FALSE,
    is_favorite BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_recipes_user_id ON public.recipes(user_id);

-- 6. Recipe Ingredients
CREATE TABLE IF NOT EXISTS public.recipe_ingredients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    recipe_id UUID NOT NULL REFERENCES public.recipes(id) ON DELETE CASCADE,
    ingredient_id UUID REFERENCES public.ingredients(id) ON DELETE SET NULL,
    custom_ingredient_name TEXT,
    quantity NUMERIC(10,2) NOT NULL,
    unit VARCHAR(20) NOT NULL,
    is_optional BOOLEAN DEFAULT FALSE
);

-- 7. Meal Plans
CREATE TABLE IF NOT EXISTS public.meal_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    CHECK (end_date >= start_date)
);

-- 8. Meal Plan Items
CREATE TABLE IF NOT EXISTS public.meal_plan_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meal_plan_id UUID NOT NULL REFERENCES public.meal_plans(id) ON DELETE CASCADE,
    recipe_id UUID REFERENCES public.recipes(id) ON DELETE CASCADE,
    scheduled_date DATE NOT NULL,
    meal_slot meal_type NOT NULL,
    servings SMALLINT DEFAULT 2,
    notes TEXT,
    is_cooked BOOLEAN DEFAULT FALSE
);

-- 9. Grocery Lists
CREATE TABLE IF NOT EXISTS public.grocery_lists (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    total_estimated_cost NUMERIC(10,2) DEFAULT 0.00,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 10. Grocery Items
CREATE TABLE IF NOT EXISTS public.grocery_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    grocery_list_id UUID NOT NULL REFERENCES public.grocery_lists(id) ON DELETE CASCADE,
    ingredient_id UUID REFERENCES public.ingredients(id) ON DELETE SET NULL,
    item_name TEXT NOT NULL,
    quantity NUMERIC(10,2) NOT NULL,
    unit VARCHAR(20) NOT NULL,
    estimated_price NUMERIC(10,2) DEFAULT 0.00,
    is_purchased BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 11. Budgets
CREATE TABLE IF NOT EXISTS public.budgets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,
    budget_limit NUMERIC(10,2) NOT NULL CHECK (budget_limit >= 0),
    currency VARCHAR(5) DEFAULT 'BDT',
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 12. Expenses
CREATE TABLE IF NOT EXISTS public.expenses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    amount NUMERIC(10,2) NOT NULL CHECK (amount >= 0),
    currency VARCHAR(5) DEFAULT 'BDT',
    category VARCHAR(50) DEFAULT 'grocery',
    description TEXT,
    receipt_url TEXT,
    purchase_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 13. Notifications
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(30) NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 14. AI Generations
CREATE TABLE IF NOT EXISTS public.ai_generations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    prompt_type VARCHAR(50) NOT NULL,
    prompt_payload JSONB NOT NULL,
    response_payload JSONB NOT NULL,
    tokens_used INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Row Level Security (RLS) Configuration
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ingredients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pantry_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recipe_ingredients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meal_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meal_plan_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.grocery_lists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.grocery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.budgets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_generations ENABLE ROW LEVEL SECURITY;

-- Master Ingredients: Public read for authenticated users
CREATE POLICY "Allow authenticated read on ingredients"
ON public.ingredients FOR SELECT TO authenticated USING (true);

-- User Profiles
CREATE POLICY "Users can manage their profile"
ON public.profiles FOR ALL TO authenticated
USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- User Preferences
CREATE POLICY "Users can manage their preferences"
ON public.user_preferences FOR ALL TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Pantry Items
CREATE POLICY "Users can manage their pantry items"
ON public.pantry_items FOR ALL TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Recipes
CREATE POLICY "Users can manage their recipes"
ON public.recipes FOR ALL TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Recipe Ingredients
CREATE POLICY "Users can manage recipe ingredients through recipe ownership"
ON public.recipe_ingredients FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.recipes WHERE public.recipes.id = public.recipe_ingredients.recipe_id AND public.recipes.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.recipes WHERE public.recipes.id = public.recipe_ingredients.recipe_id AND public.recipes.user_id = auth.uid()));

-- Grocery Lists & Items
CREATE POLICY "Users can manage their grocery lists"
ON public.grocery_lists FOR ALL TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage grocery items through list ownership"
ON public.grocery_items FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.grocery_lists WHERE public.grocery_lists.id = public.grocery_items.grocery_list_id AND public.grocery_lists.user_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.grocery_lists WHERE public.grocery_lists.id = public.grocery_items.grocery_list_id AND public.grocery_lists.user_id = auth.uid()));

-- Expenses & Budgets
CREATE POLICY "Users can manage their budgets"
ON public.budgets FOR ALL TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage their expenses"
ON public.expenses FOR ALL TO authenticated
USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
