# Pythonic (Vite + React + TypeScript)

Pythonic is now organized as a micro-lesson platform with:
- Daily 3-min mission loop
- Pyodide runner (`Run`) + Gemini validation (`Check`)
- Coins economy for hint tiers and streak freeze
- Tracks + quests + badges + leaderboards + freestyle lab
- Supabase-backed persistence with RLS and server-authoritative XP/coins

## Local Setup

Prerequisites: Node.js

1. Install dependencies:
   `npm install`
2. Configure `.env.local`:
   - `GEMINI_API_KEY=<your-gemini-key>` (or `VITE_GEMINI_API_KEY`)
   - `VITE_SUPABASE_URL=<your-supabase-url>`
   - `VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>`
   - `VITE_AUTH_REDIRECT_URL=<https://your-domain.com/>` (recommended for production OAuth redirects)
3. Apply Supabase migration from:
   - `supabase/migrations/20260211090000_init_pythonic.sql`
4. Start dev server:
   `npm run dev`

## Testing

- Run rule tests (streak + coin/xp logic):
  `npm run test`
