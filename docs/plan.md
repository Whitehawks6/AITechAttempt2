# AITechExplained.com - Project Plan

## Mission

Educate 2.5 billion non-tech people on AI (1995-2035) with only citable facts. No hype, no paywalls, no sales.

## Page-by-Page Breakdown

### Home Page (`app/page.tsx`)
- Hero section with mission statement in gold text with animated glow
- Embedded Knight Lab timeline (full-width, responsive)
- Timeline displays 20+ events from 1995-2035
- Click event opens EventModal with:
  - Modal image (real photo/GIF)
  - Modal text (minimum 25 words, plain English explanation)
  - 2+ source citations
  - "Ask AI" button for context-aware questions

### AI Agents Page (`app/agents/page.tsx`)
- Intro section: 100-word explanation of what AI agents are (software tools using AI for tasks like writing, analyzing, generating content). Mention approximately how many exist (thousands, but top 10 most popular). Plain English.
- Table format: Name | Best For | Try It | Best Practice
- 10 agents featured: ChatGPT, Claude, Grok, Perplexity, Gemini, Llama 3, Mistral, Cohere, Sora (video), Midjourney (image)
- 150-word description per agent
- Best Practice: plain English text only (no GIFs, no videos)
- "Try It" links to official sites (opens in new tab)

### AI Tools Page (`app/tools/page.tsx`)
- 6 real-world examples with embedded video demos (15 seconds each):
  1. Notion AI → project planner
  2. Jasper → marketing copy
  3. Midjourney → art generation
  4. Descript → podcast editing
  5. Runway → video generation
  6. Replicate → open-source models
- "Use It" button linking to official sites (opens in new tab)

### FAQ Page (`app/faq/page.tsx`)
- 22 FAQs covering common beginner questions
- Accordion UI with dark glass-morphism cards
- Gold answer text for readability
- Examples: "What is a prompt?" "Why does AI hallucinate?" "Is AI safe?"

### Jobs Page (`app/jobs/page.tsx`)
- Current AI Jobs (5):
  1. Prompt Engineer
  2. AI Safety Auditor
  3. Data Labeler
  4. MLOps Engineer
  5. AI Ethicist
- Future AI Jobs (5):
  1. Robot Repair Tech
  2. UBI Policy Designer
  3. AI Trainer
  4. Synthetic Data Curator
  5. Neuro-AI Interface Designer
- Each job includes:
  - Description
  - 3 example tasks
  - 4 skills employers want
  - "Learn More" link to original source (McKinsey, WEF, Glassdoor, etc.)

### Sources Page (`app/sources/page.tsx`)
- Master citation list
- All sources used across the site
- Organized by category

## Theme Specifications

- Background: Dark nebula (#0a0a1a) with subtle star SVG patterns
- Accents: Cyan (#00ffff) and Gold (#ffd700)
- Cards: Glass-morphism effect (frosted glass with backdrop blur)
- Typography: Clean, readable sans-serif (system fonts)
- Navigation: Sticky header with glass-morphism, cyan hover effects
- Hero text: Mission statement in gold with animated glow effect
- All pages inherit the dark theme consistently

## Components

- `TimelineEmbed.tsx`: Embeds Knight Lab timeline from timeline.json
- `EventModal.tsx`: Glass card modal with image, scrollable text (25+ words), sources, and "Ask AI" button
- `AIBot.tsx`: Floating bubble (bottom-right) with cyan pulse animation, uses Grok API or static Q&A fallback

## Technical Stack

- Next.js 15 (App Router)
- Tailwind CSS (dark mode)
- React Server Components
- Pure JavaScript (no backend)
- Vercel (free tier deployment)

## Timeline Events

- 20+ events spanning 1995-2035
- Each event has: title, date, 2-sentence summary, modalImage URL, modalText (25+ words), sources (2+ URLs)
- Events cover major AI milestones, breakthroughs, and predictions

## Quality Checklist

- Theme applied everywhere
- Timeline modals work (image + 25+ word text)
- AI Agents: Intro + 10 agents + text-only best practices
- All links open in new tab
- Mobile performance < 1.5s (Lighthouse)
- No paywalls or sales elements
- All facts are citable

---

**Run curseval.md when done**


