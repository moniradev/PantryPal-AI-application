# 🌿 PantryPal AI — Intelligent Food, Grocery & Kitchen Management Platform

> **"Your Intelligent Kitchen, Powered by AI"**  
> Developed for **Monira Akter** • Tailored for Bangladeshi Households & Urban Food Operations.  
> 🌐 **Live Production App:** [https://pantry-pal-ai-application.vercel.app/](https://pantry-pal-ai-application.vercel.app/)

[![Live Deployment](https://img.shields.io/badge/Live%20App-pantry--pal--ai--application.vercel.app-000000?style=flat&logo=vercel)](https://pantry-pal-ai-application.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL%20%2B%20Auth-3ecf8e?style=flat&logo=supabase)](https://supabase.com/)
[![Gemini AI](https://img.shields.io/badge/Google%20Gemini-Multimodal%20Vision-4285F4?style=flat&logo=google)](https://ai.google.dev/)
[![Tests](https://img.shields.io/badge/QA%20Audit-8%2F8%20Passed-success?style=flat)](#automated-qa-testing)

---

## 📌 Project Overview

**PantryPal AI** is an intelligent, full-stack kitchen and food management SaaS application designed to eliminate domestic food waste, track grocery pantry inventory with expiration countdowns, and generate personalized, localized Bengali recipes in real-time under a strict **BDT (৳)** monthly budget.

Unlike generic meal planners, PantryPal AI is purpose-built with **Bangladesh Food Intelligence**:
- **Local Staples:** Miniket rice, masoor dal, farm eggs, mustard oil, local vegetables, spices, and fresh fish.
- **Bilingual Interface:** English and authentic Bengali (বাংলা) ingredient recognition.
- **BDT Currency Optimization:** Dynamic pacing against monthly grocery budgets (e.g. ৳8,000/month).
- **Zero-Waste Prioritization:** Gemini AI crafts dishes using ingredients approaching expiration first (within 24-48 hours).

---

## 🚀 Core Features

### 1. Smart Pantry Inventory (`/pantry`)
- Real-time inventory table with high-resolution food thumbnails.
- Automatic shelf life indicators: `Expiring Soon (≤3 days)`, `Use Soon (≤7 days)`, and `Safe`.
- Local unit support: `kg`, `g`, `L`, `ml`, `pcs`, `hali (4 pcs)`, and `bunch`.
- Add, search, filter, and delete ingredients with instant live reactivity.

### 2. Gemini Multimodal Fridge & Countertop Scanner
- Upload any kitchen photo or take a live picture via mobile/device camera.
- Powered by **Google Gemini Multimodal Vision API** (`/api/ai/vision-detect`).
- Extracts raw ingredients with confidence scores, bilingual names, and storage recommendations before saving to pantry.

### 3. Inventory-Aware AI Recipe Generator (`/recipes`)
- Generates step-by-step cooking instructions utilizing pantry stock to avoid grocery runs.
- Factors in meal slot (*Breakfast, Lunch, Dinner*), servings, cooking duration, and budget in BDT.
- Highlights 100% in-stock items and calculates any missing item costs.

### 4. Smart Grocery Checklist (`/grocery`)
- Aggregates deficits directly from low pantry stock and scheduled meal recipes.
- Dynamic checklist calculation in BDT with one-click transfer to pantry inventory.

### 5. Food Budget & Expense Tracker (`/budget`)
- Monthly budget ceiling tracking, categorization (Fresh Market, Supermarket, Dairy), and balance calculations.

### 6. AI Conversational Kitchen Assistant (`/assistant`)
- Bilingual culinary assistant answering inventory queries, meal ideas, and urgent shelf-life warnings.

### 7. Feature Discovery Pages
- **Pantry Tracking Showcase (`/pantry-tracking`):** Live pantry staple monitoring, expiration indicators, and unit converters.
- **Zero-Waste AI Engine (`/zero-waste-ai`):** Prioritizes expiring staples (≤48h) to generate authentic Bengali recipes with zero grocery spend.
- **BDT Grocery Budget (`/bdt-grocery-budget`):** Dhaka household category breakdowns (Kacha Bazaar, Supermarket, Dairy) and daily pacing calculators.

---

## 🛠️ Technology Stack

- **Frontend:** Next.js (App Router, Turbopack), React 19, TypeScript
- **Design & UI:** Tailwind CSS v4, Lucide React, Custom Warm Linen & Deep Pine Forest Palette (`#183B2B`, `#FAF7F2`)
- **Backend & DB:** Next.js Route Handlers, Supabase (PostgreSQL 16, Row Level Security, SSR Auth)
- **AI Engine:** Google Gemini API (`@google/genai` 1.5 & 2.0 Flash)
- **Validation:** Zod Schema Validation

---

## 📦 Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/moniradev/PantryPal-AI-application.git
cd PantryPal-AI-application
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Set up environment variables:
Create a `.env.local` file based on `.env.example`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
GEMINI_API_KEY=your-gemini-api-key
```

### 4. Run database migrations:
Execute `supabase/migrations/20261122000000_initial_schema.sql` and `supabase/seed.sql` in your Supabase SQL Editor.

### 5. Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Automated QA Testing

Run the automated validation and logic test suite:
```bash
npm run test
```

Audited checks include:
- Strict Zod schema validation
- Expiry date algorithms (urgent, warning, safe)
- BDT budget arithmetic precision
- Inventory recipe matching logic

---

## 👤 Author & Profile

- **User / Owner:** Monira Akter (`monira.akter@pantrypal.ai`)
- **GitHub:** [@moniradev](https://github.com/moniradev)
- **Repository:** [PantryPal-AI-application](https://github.com/moniradev/PantryPal-AI-application)
