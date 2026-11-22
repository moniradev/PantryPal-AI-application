# PantryPal AI — Design System & Visual Guidelines

## 1. Core Principles
- **No Purple Gradients**: Strictly culinary, organic, and trustworthy tones (Deep Pine Forest, Warm Linen, Muted Moss, Ochre Accent).
- **No Emojis in UI**: Pure vector iconography (Lucide React) with refined optical sizing and consistent stroke widths (1.5px to 1.75px).
- **Asymmetric Bento Layouts**: No generic "3 feature cards in a row". Asymmetric grid compositions with high informational density, live previews, and content hierarchy.
- **Authentic Culinary Photography**: Curated high-resolution imagery for ingredients, cookware, and recipes instead of abstract vectors or 3D clays.
- **Specific & Concrete Copy**: Highlighting real kitchen workflows, local Bangladeshi staples (চাল, মসুর ডাল, ডিম, সরিষার তেল), BDT (৳) pricing, and expiry timelines.
- **Zero Scroll Gimmicks**: Instant rendering, no scroll fade-in latency, crisp CSS transitions (150ms-200ms ease-out).

---

## 2. Color Palette & Semantic Tokens

```
Background:
  Linen Canvas:        #FAF7F2
  Surface (Card):      #FFFFFF
  Subtle Inset:        #F3EFE8
  Border & Divider:    #E5DFD5
  Muted Hover:         #EFEAE1

Primary Accent (Forest Culinary):
  Deep Forest:         #183B2B (Main brand, headers, solid CTA buttons)
  Forest Hover:        #244D3A
  Soft Sage Badge:     #D8E8DC
  Forest Text on Sage: #143525

Secondary / Culinary Accents:
  Ochre Gold (Alert):  #C28839 (Used for expiry alerts & warnings)
  Ochre Light:         #FBF2E3
  Brick Red (Urgent):  #B93828
  Fresh Mint (Safe):   #2D7A54
  Mint Light:          #E3F4EA

Neutral Typography:
  Foreground Primary:  #18211E (Charcoal pine, 95% black with warm undertone)
  Foreground Muted:    #5E6B65 (Body and metadata)
  Foreground Subtle:   #8C9993 (Placeholders and timestamps)
```

---

## 3. Typography
- **Primary Display & Interface**: `Plus Jakarta Sans` / `Geist` — Clean geometric sans with warm humanistic curves suited for high-density SaaS tables and dashboards.
- **Code / Mono Numbers**: `Geist Mono` — Tabular figures for exact BDT prices, ingredient weights (`500 g`, `1.5 L`, `৳2,450`), and nutritional ratios.

---

## 4. Layout Architecture
- **Marketing Page**: Hero split with live dashboard cockpit preview, Bento Grid showcasing:
  1. Real-time expiry radar
  2. Inventory-aware recipe matcher
  3. BDT weekly budget engine
  4. Camera receipt & fridge scanner
- **App Dashboard**:
  - Top Command Bar: Contextual time-of-day greeting, quick action buttons, localized currency and language toggle.
  - Asymmetric Metrics: 4 distinct status tiles with custom micro-visualizers.
  - Interactive Kitchen Workspace: Dual-column layout (7/5 split) pairing urgency alerts with scheduled meal prep.
