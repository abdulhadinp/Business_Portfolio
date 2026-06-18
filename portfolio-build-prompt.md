# PORTFOLIO WEBSITE BUILD INSTRUCTIONS
# Client: Abdul Hadi | Founder, Zyvora Technologies
# Type: Professional Lead-Generation Portfolio
# Agentic Build: Read every section before writing a single line of code.

---

## AGENT BRIEF

You are building a complete, production-ready professional portfolio website for Abdul Hadi, Founder of Zyvora Technologies, based in Kathmandu, Nepal. This is a lead-generation website that must communicate credibility, technical depth, and professionalism at a glance.

The previous website at abdulhadi.com.np was built as a student portfolio and is being replaced entirely. There is zero reference to academics, university, or student identity anywhere on this new site. This person runs a technology company and provides professional IT services.

The first impression must be indistinguishable from a premium agency or senior engineer portfolio. Every design decision, copy choice, and animation must serve one goal: turn a visitor into a paying client or qualified lead.

Read this entire document before touching any file. Then build everything in one complete pass.

---

## TECH STACK

Framework: Next.js 15 (App Router)
Language: TypeScript (strict mode)
Styling: Tailwind CSS v4
Animations: Framer Motion
Icons: Lucide React
Contact Form: EmailJS (client-side, no backend needed)
Fonts: next/font/google (Bricolage Grotesque for headings, Inter for body)
Images: next/image (all images optimized)
Deployment Target: Vercel

Install all dependencies first:

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir
npm install framer-motion lucide-react @emailjs/browser
npm install @fontsource/bricolage-grotesque
```

---

## DESIGN SYSTEM (STRICT, DO NOT DEVIATE)

### Color Tokens

Define all tokens in globals.css as CSS custom properties:

```css
:root {
  /* Backgrounds */
  --bg-base: #FFFFFF;
  --bg-soft: #F5F7FF;
  --bg-card: #FFFFFF;
  --bg-card-hover: #FAFBFF;
  --bg-dark: #0A1628;
  --bg-dark-mid: #142240;

  /* Text */
  --text-primary: #0A1628;
  --text-secondary: #3D5168;
  --text-muted: #7A8EA8;
  --text-on-dark: #FFFFFF;
  --text-on-dark-muted: #94A8C0;

  /* Accent Blue (primary brand, trust) */
  --accent: #1D4ED8;
  --accent-hover: #1A40B8;
  --accent-light: #EEF3FF;
  --accent-glow: rgba(29, 78, 216, 0.18);

  /* Violet (secondary brand, distinctiveness) */
  --violet: #7C3AED;
  --violet-light: #F3EEFF;
  --violet-glow: rgba(124, 58, 237, 0.15);

  /* Borders */
  --border: #DDE5F0;
  --border-hover: #B5C5DC;

  /* Status */
  --green: #10B981;
  --green-light: #ECFDF5;
  --orange: #F59E0B;

  /* Gradients */
  --gradient-hero-text: linear-gradient(90deg, #1D4ED8, #7C3AED);
  --gradient-dark-section: linear-gradient(135deg, #0A1628 0%, #142240 60%, #1D4ED8 150%);
  --gradient-card-border: linear-gradient(145deg, #DDE5F0, #EEF3FF);
}
```

### Typography

Headings: Bricolage Grotesque (Google Fonts), weights 600 and 700
Body: Inter, weights 400 and 500

This pairing is deliberate. Bricolage Grotesque is used by serious product studios in 2024-2025. It has personality without being decorative, which matches the Zyvora brand. Inter is the standard for clean legibility.

Type Scale (set in Tailwind config):
- Hero heading: clamp(2.8rem, 6vw, 5.2rem), weight 700, line-height 1.1
- H2 section heading: clamp(2rem, 4vw, 3rem), weight 700, line-height 1.2
- H3 card heading: 1.25rem, weight 600, line-height 1.35
- Body large: 1.125rem, line-height 1.7
- Body: 1rem, line-height 1.7
- Label: 0.75rem, weight 600, letter-spacing 0.1em, text-transform: uppercase

### Spacing

- Section vertical padding: 120px desktop, 80px tablet, 64px mobile
- Container: max-width 1180px, margin auto, padding 0 24px
- Card grid gap: 24px
- Card internal padding: 32px

### Borders and Radius

- Cards: border-radius 16px
- Buttons: border-radius 10px
- Chips and tags: border-radius 6px
- Input fields: border-radius 10px
- Photo container: border-radius 24px

### Shadows

```css
--shadow-card: 0 1px 3px rgba(10, 22, 40, 0.05), 0 4px 20px rgba(10, 22, 40, 0.04);
--shadow-card-hover: 0 8px 40px rgba(29, 78, 216, 0.12), 0 2px 8px rgba(10, 22, 40, 0.08);
--shadow-button: 0 4px 16px rgba(29, 78, 216, 0.32);
--shadow-photo: 0 24px 64px rgba(10, 22, 40, 0.18);
```

### Signature Design Element

The single most memorable thing on this site: each project card has a "SHIPPED" or "LIVE" circular stamp that appears on hover. It rotates into view subtly (not aggressively) and reads like a real delivery stamp in a condensed uppercase font. This signals that these are real, deployed products, not side projects or mockups. The stamp rotates -15deg and uses the accent or violet color on a near-transparent white circle. Implement with Framer Motion whileHover.

---

## FILE STRUCTURE

Build this exact structure:

```
/public
  /assets
    profile.jpg          (Abdul Hadi's photo, will be placed here manually)
    zyvora-logo.svg      (create a minimal text-based SVG logo)
  /projects
    school-saas.jpg
    kirana-app.jpg
    arena-fire.jpg
    whatsapp-chatbot.jpg
    medschedule.jpg
    himalayan-commerce.jpg
    finflow.jpg
    restaurant-pos.jpg

/src
  /app
    layout.tsx
    page.tsx
    globals.css
  /components
    /layout
      Navbar.tsx
      Footer.tsx
      FloatingCTA.tsx
    /sections
      Hero.tsx
      About.tsx
      Services.tsx
      Projects.tsx
      Zyvora.tsx
      Skills.tsx
      Testimonials.tsx
      CodeByHadi.tsx
      Contact.tsx
    /ui
      Button.tsx
      SectionLabel.tsx
      Tag.tsx
      AnimatedCounter.tsx
      ProjectCard.tsx
      ProjectModal.tsx
      ServiceCard.tsx
      ScrollReveal.tsx
      ShippedStamp.tsx
  /data
    projects.ts
    services.ts
    skills.ts
    testimonials.ts
  /lib
    animations.ts
    utils.ts
  /hooks
    useScrollY.ts
    useInView.ts
```

---

## CONTENT AND COPY (USE EXACTLY AS WRITTEN)

### Personal Information

```
Full Name: Abdul Hadi
Primary Title: Founder, Zyvora Technologies
Role Labels (cycling in hero): Full-Stack Engineer | Android Developer | AI Engineer | IT Consultant
Location: Kathmandu, Nepal
Email: abdul@abdulhadi.com.np
Phone: +977 9704572596
LinkedIn: https://www.linkedin.com/in/abdulhadinp/
Website: https://www.abdulhadi.com.np
WhatsApp CTA: https://wa.me/9779704572596?text=Hi%20Abdul%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20discuss%20a%20project.
```

### Profile Photo

Location: /public/assets/profile.jpg

This image will be placed manually before deployment. Use it in the Hero section (right column) and in the About section. Apply object-fit: cover, crop toward the top third. Add a subtle gradient overlay on the bottom edge (transparent to white, 40px height) to blend with the card background. Do NOT use any AI placeholder or stock image for this. If the file is missing at build time, show a neutral gradient placeholder with initials "AH" centered.

---

## SECTION-BY-SECTION BUILD INSTRUCTIONS

---

### SECTION 1: NAVBAR

Position: fixed top, full width, z-index 50
Background: transparent initially, transitions to rgba(255,255,255,0.92) with backdrop-blur(16px) after 60px scroll, with bottom border-bottom: 1px solid var(--border) appearing at the same time.

Layout:
- Left side: "AH" monogram (18px, weight 700, accent blue) followed by a thin vertical divider, then "Abdul Hadi" (15px, weight 500, text-primary)
- Right side: navigation links + CTA button

Nav links (desktop only, hidden on mobile):
About | Services | Projects | Zyvora | Contact

Each link: text-secondary on default, text-primary on hover, with a 2px accent-blue underline sliding in from left on hover (CSS pseudo-element, transform scaleX from 0 to 1).

CTA button: "Hire Me" in accent blue, filled, small (12px text, 10px 20px padding). On hover: shadow-button, scale 1.03.

Mobile: Show hamburger icon (Lucide Menu). Clicking opens a full-screen drawer from the top with all nav links stacked vertically at large size. Close on outside click or link click.

Smooth scroll behavior: All nav links trigger smooth scroll to their sections. Highlight the active section link based on scroll position using IntersectionObserver.

---

### SECTION 2: HERO

Background: White (#FFFFFF) with a very faint radial dot pattern. Generate this with CSS:

```css
.hero-bg {
  background-color: #FFFFFF;
  background-image: radial-gradient(circle, #DDE5F0 1px, transparent 1px);
  background-size: 28px 28px;
}
```

Layout: Two columns (60% content, 40% photo) on desktop. Single column with photo below content on mobile.

#### Left Column Content:

AVAILABILITY BADGE (at top, before headline):
A small pill with a pulsing green dot animation on the left and the text "Available for new projects" in text-secondary. Green dot pulses using a CSS keyframe (scale and opacity loop).

HEADLINE:
```
I Build Digital Products
That Actually Work
```
"Digital Products" should render with the gradient-hero-text applied as a background-clip text gradient (blue to violet). The rest of the text is text-primary.

ROLE TICKER (below headline):
A line that reads: "Founder, Zyvora Technologies" and below it a cycling typewriter-style text that cycles through:
- "Full-Stack Engineer"
- "Android Developer"
- "AI Engineer"
- "IT Consultant"
Implement with Framer Motion AnimatePresence with a fade-and-slide-up transition. Each label stays for 2.5 seconds.

SUBHEADLINE:
```
I turn complex business problems into clean, scalable software. Based in Kathmandu, Nepal. Building for clients across South Asia and beyond.
```

STATS ROW (animated counters, 3 items in a row):
```
"20+"    label: "Projects Delivered"
"3+"     label: "Years Building"
"100%"   label: "Client Satisfaction"
```
Each stat: number in large weight 700 accent-blue, label below in text-muted at 0.8rem. Stat numbers count up from 0 when the hero enters the viewport. Use a custom useCountUp hook.

CTA BUTTONS (horizontal row):
Primary: "View My Work" - filled accent blue, with ArrowRight icon on right. Smooth scroll to #projects.
Secondary: "Let's Talk" - white background, border var(--border), text-primary, with MessageSquare icon. Smooth scroll to #contact.

On hover, primary lifts with shadow-button. Secondary gets border-color: var(--accent), text color changes to accent.

TECH STACK CHIPS (small row below CTAs, label "BUILT WITH:" in uppercase label style):
"Next.js" | "Python" | "Android" | "AI / ML" | "TypeScript"
Each chip: 6px radius, bg var(--accent-light), text var(--accent), 0.75rem font, 4px 10px padding.

#### Right Column Content:

Photo container styling:
- Width: 380px max, aspect-ratio 3/4
- Border-radius: 24px
- Background: gradient from #EEF3FF to #F3EEFF (subtle blue-to-violet gradient behind the photo)
- Box-shadow: var(--shadow-photo)
- The photo itself fills the container with next/image, object-fit: cover, object-position: top center

Floating Badge 1 (top-right corner of photo, slightly outside frame):
White card, shadow, border-radius 10px, padding 10px 14px.
Content: Zyvora icon (use Building2 from Lucide) + "Zyvora Technologies" in 11px weight 600 + "Founder" in 10px text-muted.
Animation: floats with subtle y oscillation (between 0 and -8px, 4s ease-in-out loop).

Floating Badge 2 (bottom-left corner of photo, slightly outside frame):
White card, shadow, border-radius 10px, padding 10px 14px.
Content: MapPin icon (Lucide, green) + "Kathmandu, Nepal" in 11px weight 600.
Animation: floats with opposite phase (between 0 and +8px, 4s loop, phase offset by 2s).

Decorative element behind photo: A soft radial gradient blob, 500px diameter, bg var(--violet-glow), positioned behind the photo container. It drifts very slowly (20s loop, 10px movement) to add liveliness without distraction.

SCROLL INDICATOR (bottom center of hero section, visible on desktop only):
A small "Scroll to explore" label in text-muted at 0.75rem with a ChevronDown icon bouncing slowly below it. Disappears once user scrolls past 100px.

---

### SECTION 3: ABOUT

id="about"
Background: var(--bg-soft)

Section Label: "ABOUT ME"

Heading: "Engineer by Trade. Founder by Choice."

Layout: Two columns. Left column: content. Right column: four highlight boxes in 2x2 grid.

Body Copy:
```
I am Abdul Hadi, a software engineer and founder who builds systems that solve real problems. I started Zyvora Technologies to bring enterprise-level digital products to businesses across Nepal and South Asia: from AI-powered SaaS platforms to production-grade mobile applications.

I do not just write code. I architect solutions that grow with your business. Whether you need a high-performance web platform, a custom Android application, or an AI integration that adds measurable value to your operations, I bring the technical depth and product thinking to make it happen.

With a background spanning full-stack web development, Android engineering, and applied AI, I approach every project as a product challenge first and a technical challenge second. The goal is always the same: software that works, scales, and delivers real results.
```

Below body copy: A subtle "Connect on LinkedIn" link with the LinkedIn icon, text accent color, that opens LinkedIn in a new tab.

Right column (2x2 grid of highlight boxes):

```
Box 1: Icon: Globe2 (Lucide), Title: "Full-Stack Web", Detail: "Next.js, FastAPI, Supabase"
Box 2: Icon: Smartphone, Title: "Android Dev", Detail: "Kotlin, Jetpack Compose"
Box 3: Icon: Bot, Title: "AI Engineering", Detail: "LLM APIs, PyTorch, Automation"
Box 4: Icon: Layers, Title: "SaaS Architecture", Detail: "Multi-tenant, scalable systems"
```

Each box: white background, border var(--border), 16px radius, 24px padding, icon in accent-light circle, hover raises with shadow-card-hover and border transitions to var(--accent). Stagger animation on scroll entry.

---

### SECTION 4: SERVICES

id="services"
Background: white

Section Label: "WHAT I BUILD"

Heading: "Services I Offer"

Subtext: "From first conversation to production deployment, I build complete digital products for businesses that want to grow."

Grid: 3 columns on desktop, 2 on tablet, 1 on mobile. 6 cards total.

Card design: White bg, 1px border var(--border), 16px radius, 32px padding. Icon in a 48px circle (bg var(--accent-light)). Title in H3. Description in body. Tags row at bottom. Left border transitions from transparent to 3px solid var(--accent) on hover. Shadow lifts on hover.

```
Card 1:
Icon: Code2
Title: Full-Stack Web Development
Description: Complete web applications built with Next.js, FastAPI, and PostgreSQL. Scalable architecture, clean code, and production-ready deployments. From marketing sites to complex multi-tenant SaaS platforms.
Tags: Next.js, FastAPI, TypeScript, PostgreSQL

Card 2:
Icon: Smartphone
Title: Android App Development
Description: Native Android applications built with Kotlin and Jetpack Compose. High-performance, modern UI, integrated with Firebase and REST APIs. Built to ship and engineered to scale.
Tags: Kotlin, Jetpack Compose, Firebase, REST APIs

Card 3:
Icon: Bot
Title: AI Integration and Automation
Description: Business automation using large language models, WhatsApp AI bots, and custom AI workflows. I connect AI to your existing processes to reduce operational overhead and response time.
Tags: LLM APIs, WhatsApp AI, Claude API, NVIDIA NIM

Card 4:
Icon: Layers
Title: SaaS Product Development
Description: End-to-end SaaS development from database design to user-facing dashboards. Multi-tenant architecture, role-based access, subscription billing, and admin panels included.
Tags: SaaS, Multi-tenant, Auth, Supabase

Card 5:
Icon: LayoutDashboard
Title: IT Consulting and Architecture
Description: Technical consulting for startups and growing businesses. System design reviews, tech stack selection, performance audits, and engineering direction. Get a clear roadmap before you build.
Tags: System Design, Tech Audit, Roadmap

Card 6:
Icon: Plug
Title: API Development and Integrations
Description: Robust REST APIs, third-party integrations including payment gateways, WhatsApp, SMS, and email, and API architecture designed to support mobile and web frontends simultaneously.
Tags: REST API, Payment APIs, Webhooks
```

---

### SECTION 5: PROJECTS

id="projects"
Background: var(--bg-soft)

Section Label: "SELECTED WORK"

Heading: "Projects That Speak for Themselves"

Subtext: "Real products, real clients, real results."

FILTER TABS: A horizontal row of tabs above the grid. Options: All | Web App | Mobile App | AI / Automation | SaaS. Selected tab: solid accent bg, white text. Unselected: outline style. Clicking filters the visible projects with a smooth Framer Motion layout animation.

GRID: 3 columns on desktop, 2 on tablet, 1 on mobile. First project spans full width as a "featured" card.

#### PROJECT CARD DESIGN

Each card:
- White background, 16px radius, border var(--border)
- Image area at top: aspect-ratio 16/9, overflow hidden. On hover, image scale to 1.05 (smooth 400ms)
- Content area below: 24px padding
- Category tags row (tiny chips, var(--accent-light) bg)
- Project title (H3)
- Short description (2 sentences, text-secondary)
- Tech stack chips row
- Key metric box: a subtle highlighted row with a TrendingUp icon and the result in bold
- "View Case Study" button (ghost style, accent text, with ArrowUpRight icon)
- On hover: the SHIPPED stamp appears (see Signature Design Element spec)

For the SHIPPED stamp: a circular element 80px diameter, positioned absolute top-4 right-4. On card hover, it becomes visible (opacity 0 to 1) and rotates from -25deg to -15deg. Text: "SHIPPED" in 9px uppercase weight 700, circular path. Color: white text on semi-transparent accent bg circle with a dashed border. Use CSS border-radius 50% with the text positioned using CSS.

If project images are not yet in /public/projects/, generate a consistent gradient placeholder for each:

```typescript
const gradients: Record<string, string> = {
  "school-saas": "linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)",
  "kirana-app": "linear-gradient(135deg, #0F2044 0%, #1D4ED8 100%)",
  "arena-fire": "linear-gradient(135deg, #0F2044 0%, #7C3AED 100%)",
  "whatsapp-chatbot": "linear-gradient(135deg, #10B981 0%, #1D4ED8 100%)",
  "medschedule": "linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)",
  "himalayan-commerce": "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
  "finflow": "linear-gradient(135deg, #0F2044 0%, #1D4ED8 60%, #7C3AED 100%)",
  "restaurant-pos": "linear-gradient(135deg, #064E3B 0%, #0EA5E9 100%)"
};
```

Overlay the gradient with a subtle grid or circuit pattern (CSS background-image, very low opacity lines) to make the placeholder feel designed, not empty.

#### PROJECT CLICKING: MODAL

When a user clicks "View Case Study," open a modal overlay (not a new route). The modal:
- Covers the screen with a dark overlay (bg rgba(10,22,40,0.7), backdrop blur)
- Centered white card, max-width 800px, max-height 90vh, scrollable
- Top: full-width project image
- Below: full description, tech stack, key metric
- Bottom CTA button: "Discuss a Similar Project" (accent blue, scrolls to #contact on modal close)
- Close button: X icon, top-right corner
- Animates in with scaleIn + fadeIn from Framer Motion

#### ALL 8 PROJECTS (complete data for /src/data/projects.ts):

```typescript
export const projects = [
  {
    id: "school-saas",
    featured: true,
    title: "EduTrack: School Management SaaS",
    categories: ["saas", "web-app"],
    short: "A multi-school SaaS platform that handles student records, fee management, timetables, and AI-assisted administration across multiple campuses, built for scale from day one.",
    metric: "Manages 10+ schools from a single dashboard",
    tech: ["Next.js", "FastAPI", "Supabase", "Claude API", "PostgreSQL"],
    image: "/projects/school-saas.jpg",
    full: "EduTrack is a complete school management SaaS platform built under Zyvora Technologies. The system supports multiple schools on a single instance with fully isolated data, per-school AI API routing with encrypted key storage, student and teacher records management, fee tracking, attendance, timetable generation, and a super admin dashboard with cross-school analytics. Built with a FastAPI backend, Next.js frontend, Supabase PostgreSQL, and integrated with multiple AI providers including OpenAI, Claude, Gemini, and NVIDIA NIM. The authentication system supports role-based access across Super Admin, School Admin, Teacher, and Parent tiers. The system was designed as a SaaS product, meaning any school can be onboarded and managed without code changes."
  },
  {
    id: "kirana-app",
    featured: false,
    title: "KiranaOS: Retail Management for Nepal",
    categories: ["mobile-app"],
    short: "A native Android application that brings modern retail management to Nepali kirana shops with inventory tracking, Bikram Sambat calendar, the traditional bhadi credit system, and ML-powered barcode scanning.",
    metric: "Reduces inventory tracking errors by 70% for shop owners",
    tech: ["Kotlin", "Jetpack Compose", "ML Kit", "Room DB"],
    image: "/projects/kirana-app.jpg",
    full: "KiranaOS is a production-ready Android application targeting Nepali kirana shop owners who previously managed everything in handwritten notebooks. Features include full inventory management, the Bikram Sambat calendar for Nepali dates, the traditional bhadi credit system for tracking per-customer credit balances, ML Kit barcode scanning for fast product lookup, daily and monthly sales summaries, and a Jetpack Compose UI designed specifically for the Nepali market context. Available at two price tiers: a shop owner license for daily management use, and a full developer license with complete source code for developers looking to build on top of the system."
  },
  {
    id: "arena-fire",
    featured: false,
    title: "ArenaFire: Esports Tournament Platform",
    categories: ["mobile-app"],
    short: "A complete esports tournament platform for the Free Fire mobile game targeting Nepal's growing competitive gaming market, with integrated eSewa payments and real-time slot management.",
    metric: "Supports 500+ concurrent tournament registrations",
    tech: ["Kotlin", "Jetpack Compose", "Firebase", "eSewa API"],
    image: "/projects/arena-fire.jpg",
    full: "ArenaFire is a Free Fire tournament management app designed for Nepal's esports community. Players browse open tournaments, pay entry fees directly through eSewa (Nepal's leading payment gateway), receive their lobby ID and password credentials automatically after payment confirmation, and see results posted in real time. The admin panel handles room creation, slot numbering for in-game lobby verification, screenshot-based winner verification, and payout management. Built with Firebase Realtime Database for live updates and Jetpack Compose for the player-facing interface. The system was designed to compete with existing manual tournament management processes that rely on WhatsApp groups."
  },
  {
    id: "whatsapp-chatbot",
    featured: false,
    title: "ZyvoraChat: AI WhatsApp Business Automation",
    categories: ["ai-automation"],
    short: "A multi-client WhatsApp AI automation platform that allows businesses to deploy intelligent chatbots through the official Meta WhatsApp Cloud API with fully customized AI personas.",
    metric: "Automates 80% of routine customer inquiries for each client",
    tech: ["Python", "Flask", "Meta WhatsApp API", "NVIDIA NIM", "Supabase", "Railway"],
    image: "/projects/whatsapp-chatbot.jpg",
    full: "ZyvoraChat is a SaaS-style WhatsApp chatbot platform where businesses onboard and deploy AI-powered bots under their own WhatsApp business numbers. The system uses the official Meta WhatsApp Cloud API with webhook signature verification, a conversation state machine, rate limiting, message deduplication, and owner notifications for escalations. The AI engine uses NVIDIA NIM's inference API for low-latency responses. Each client gets a fully customized AI persona with their own knowledge base and response style. Features include per-client conversation audit logging, admin dashboards, and configurable response boundaries. Deployed on Railway with Supabase for data persistence. Version 3 resolved a critical deployment conflict between the openai and httpx libraries."
  },
  {
    id: "medschedule",
    featured: false,
    title: "MedSchedule: Doctor Appointment Platform",
    categories: ["web-app"],
    short: "A healthcare appointment booking platform connecting patients with doctors across Kathmandu, with automated SMS reminders, online payment, and a clean schedule management dashboard for providers.",
    metric: "Reduced appointment no-shows by 45% through SMS reminders",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Twilio", "Stripe"],
    image: "/projects/medschedule.jpg",
    full: "MedSchedule is a healthcare SaaS application built for a Kathmandu-based medical network. Patients search for doctors by specialty, view real-time availability, book appointments, and receive automated SMS confirmations and 24-hour reminders via Twilio. Doctors have a scheduling dashboard with patient notes, appointment history, and earnings summaries. The platform supports online payments via Stripe, consultation video links, and prescription note management. Built with Next.js 15, FastAPI, and PostgreSQL with full authentication and role-based access. The SMS reminder system alone reduced appointment no-shows by 45% in the first month of operation."
  },
  {
    id: "himalayan-commerce",
    featured: false,
    title: "Himalayan Commerce: Premium E-Commerce Platform",
    categories: ["web-app"],
    short: "A bespoke e-commerce platform for a premium Nepali lifestyle brand, featuring a curated product catalog managed through a custom CMS, multi-currency support, and an editorial shopping experience.",
    metric: "3.2x conversion rate improvement over the previous website",
    tech: ["Next.js", "Stripe", "Sanity CMS", "TypeScript", "Vercel"],
    image: "/projects/himalayan-commerce.jpg",
    full: "A fully custom e-commerce platform built for a high-end Nepali lifestyle brand selling handcrafted goods and premium apparel. The platform features a CMS-managed product catalog via Sanity, dynamic filtering, wishlists, multi-currency display in NPR and USD, Stripe checkout, order tracking, and an admin inventory panel. Built with Next.js 15 for optimal performance, achieving sub-2s load times and a 98 Lighthouse performance score. The design focused on visual storytelling with full-bleed photography and editorial-style product layouts, moving away from the standard grid-of-products approach. Compared to their previous website, the conversion rate improved by 3.2x in the first 60 days."
  },
  {
    id: "finflow",
    featured: false,
    title: "FinFlow: Investment Analytics Dashboard",
    categories: ["web-app"],
    short: "A financial analytics dashboard for a Kathmandu-based investment consulting firm that aggregates portfolio data, visualizes market trends, and generates automated performance reports for client meetings.",
    metric: "Reduced manual report preparation from 8 hours to 20 minutes",
    tech: ["React", "FastAPI", "PostgreSQL", "Recharts", "pandas"],
    image: "/projects/finflow.jpg",
    full: "FinFlow is a private investment analytics platform built for an investment consulting firm managing multiple client portfolios. The system aggregates portfolio data, generates interactive charts including allocation breakdowns, performance over time, and risk distribution metrics, and produces branded PDF reports automatically. Built with a React frontend using Recharts for visualization, a FastAPI backend with Python pandas for financial calculations, and PostgreSQL for structured data storage. The platform includes separate dashboards for analysts and clients, automated weekly summary emails, and a portfolio comparison tool. Before FinFlow, the firm spent 8 hours every week preparing reports manually in Excel."
  },
  {
    id: "restaurant-pos",
    featured: false,
    title: "TableTrack: Restaurant Management System",
    categories: ["web-app", "mobile-app"],
    short: "A complete point-of-sale and restaurant management system covering order processing, kitchen display, inventory tracking, and daily financial reporting, deployed across three locations simultaneously.",
    metric: "Cut order processing time by 60% across 3 locations",
    tech: ["Next.js", "Kotlin", "Firebase", "TypeScript", "PostgreSQL"],
    image: "/projects/restaurant-pos.jpg",
    full: "TableTrack is a full-stack restaurant management system covering the entire operational workflow. Wait staff use Android tablets running a Kotlin and Jetpack Compose order-taking app. Kitchen staff see real-time orders on a kitchen display system (KDS). Managers access daily and monthly P&L reports via a Next.js web dashboard. The system automatically deducts inventory items per order, tracks waiter performance, handles split billing, and integrates with a thermal receipt printer. Features include table layout management, peak hour analytics, and staff attendance tracking. Deployed across 3 restaurant locations simultaneously with a shared backend and real-time Firebase sync."
  }
];
```

---

### SECTION 6: ZYVORA TECHNOLOGIES

id="zyvora"
Background: use the dark section gradient (--gradient-dark-section), overlaid with a very subtle radial glow at center in var(--violet-glow) at very low opacity.
Text color: white throughout.

Section Label: "ZYVORA TECHNOLOGIES" (in var(--violet) color)

Heading: "The Company Behind the Work" (white, H2 size)

Body Copy:
```
Zyvora Technologies is a Kathmandu-based technology company building AI-first digital products and providing software development services to businesses in Nepal and across South Asia.

Founded and led by Abdul Hadi, Zyvora operates across four core verticals: software development and IT services, digital commerce solutions, developer education, and creative technology production.

The mission is straightforward: give every business access to the kind of technology that was previously only available to well-funded startups.
```

Button: "Work with Zyvora" (white outlined, hover: filled white bg with dark text)

Right side: Four subsidiary cards in a 2x2 grid. Each card: dark bg (#142240), left accent border (violet for odd, accent for even), 16px radius, 24px padding.

```
Card 1: Building2 icon | "Zyvora Technologies" | "Software Development, SaaS, AI Solutions, IT Consulting"
Card 2: ShoppingBag icon | "Zyvora Commerce" | "E-Commerce, Digital Marketplaces, Payment Integration"
Card 3: GraduationCap icon | "Zyvora Academy" | "Developer Education, Technical Training, Bootcamps"
Card 4: Palette icon | "Zyvora Studios" | "Creative Technology, Product Design, Media Production"
```

All cards: text-on-dark-muted for descriptions, white for titles, icon in violet or accent circle.

---

### SECTION 7: SKILLS

id="skills"
Background: white

Section Label: "TECHNICAL SKILLS"

Heading: "The Tools I Build With"

Layout: Vertical list of categories. Each category has a label row and a horizontal row of badge chips below it.

NO progress bars. NO percentage scores. The categories and groupings communicate depth without fake metrics.

```
Category 1: "Frontend"
Next.js | React | TypeScript | Tailwind CSS | Framer Motion | Figma

Category 2: "Backend"
Python | FastAPI | Node.js | Express | REST API | GraphQL

Category 3: "Mobile"
Android | Kotlin | Jetpack Compose | Firebase | ML Kit | Room DB

Category 4: "AI and ML"
PyTorch | OpenAI API | Claude API | Gemini API | NVIDIA NIM | LangChain

Category 5: "Infrastructure"
PostgreSQL | Supabase | Firebase | MySQL | Docker | Railway | Vercel
```

Each chip: white bg, border var(--border), 6px radius, hover bg var(--accent-light), hover border var(--accent). Display the relevant react-icons icon to the left of each skill name where possible (use devicons from simple-icons or react-icons/si).

---

### SECTION 8: TESTIMONIALS

id="testimonials"
Background: var(--bg-soft)

Section Label: "CLIENT FEEDBACK"

Heading: "What Clients Say"

Layout: 3 cards in a row on desktop, scroll-snapping carousel on mobile.

Each card: white bg, border var(--border), 16px radius, 32px padding. Five-star rating in amber (#F59E0B) at top. Quote text in italic. Author info at bottom with avatar (initials in circle, accent bg).

```
Testimonial 1:
Stars: 5
Quote: Abdul built our school management system from scratch. The AI integration alone saves our administrative staff over 10 hours per week. The system handles everything we needed and the handover was seamless.
Name: Sanjay Shrestha
Title: Principal, Sunrise International Academy, Kathmandu
Initials: SS

Testimonial 2:
Stars: 5
Quote: The KiranaOS app completely changed how I manage my shop. Tracking credit used to take me 30 minutes every evening. Now it takes 2 minutes. Worth every rupee.
Name: Ramesh Tamang
Title: Shop Owner, New Road, Kathmandu
Initials: RT

Testimonial 3:
Stars: 5
Quote: Our customer inquiry volume was overwhelming the team. After deploying the WhatsApp AI bot, 80 percent of routine questions get handled automatically. The team now focuses on actual sales conversations.
Name: Priya Manandhar
Title: Operations Manager, Himalayan Commerce
Initials: PM
```

---

### SECTION 9: CODEBYHADI

Background: var(--accent-light), subtle gradient to var(--violet-light) at edges.

Layout: Two columns. Left: text. Right: social platform cards.

Heading: "I Also Teach What I Build"

Body:
```
CodeByHadi is my tech education brand where I break down complex engineering topics into practical, clear content. From Python and machine learning to full-stack development and Android apps, I create tutorials for developers across Nepal and India. Find me at @CodeByHadi.
```

Right side: Three platform cards (YouTube, Instagram, Facebook). Each card: white bg, platform icon in brand color, platform name, "@CodeByHadi" handle, a small arrow-right. Hover: slight lift.

---

### SECTION 10: CONTACT

id="contact"
Background: white

Section Label: "GET IN TOUCH"

Heading: "Let's Build Something Together"

Subtext: "Have a project in mind? Whether it is a new product, an ongoing development need, or just a technical question, reach out and I will get back to you within 24 hours."

Layout: Two columns. Left: form. Right: contact info.

#### Left Column (Form):

Use EmailJS for submission. Add a TODO comment for the EmailJS service ID, template ID, and public key so Abdul Hadi can fill them in.

Fields:
- Name (required, text)
- Email (required, email)
- Company or Project Name (optional, text)
- Budget Range (required, select dropdown):
  Options: "Select a budget range" (disabled default) | "Under $500" | "$500 to $2,000" | "$2,000 to $5,000" | "$5,000 and above"
- Message (required, textarea, 5 rows)

Submit Button: "Send Message" full width, accent blue, with Send icon. Shows a loading spinner during submission. On success: replace form with a clean success message ("Your message is on its way. I will get back to you shortly."). On error: show an error notice with a retry option.

All inputs: white bg, border var(--border), 10px radius, 14px padding, focus border var(--accent), focus shadow 0 0 0 3px var(--accent-glow).

#### Right Column (Contact Info):

```
Email:    abdul@abdulhadi.com.np (mailto link, Mail icon)
Phone:    +977 9704572596 (tel link, Phone icon)
LinkedIn: linkedin.com/in/abdulhadinp (external link, Linkedin icon)
Location: Kathmandu, Nepal (MapPin icon)
```

Availability Card (below contact info):
White card, border var(--border), 16px radius, 20px padding.
Green pulsing dot + "Currently Accepting New Projects"
Below: "Slots are limited. Reach out early."
Below: "Response time: within 24 hours" in text-muted.

---

### SECTION 11: FOOTER

Background: var(--bg-dark) (#0A1628)
Text: white

Three-column layout on desktop, single column stacked on mobile.

Column 1:
"AH" monogram in accent blue, then "Abdul Hadi" in white weight 600.
"Founder, Zyvora Technologies" in text-on-dark-muted.
A one-liner: "Building AI-first digital products from Kathmandu, Nepal."
Social icon row below: LinkedIn, YouTube, Instagram, Facebook (all external links, icon buttons with hover:text-accent).

Column 2:
Label: "Quick Links"
Links: About | Services | Projects | Zyvora | Contact (all smooth scroll)

Column 3:
Label: "Services"
Links: Web Development | Android Apps | AI Integration | SaaS Development | IT Consulting (all scroll to #services)

Bottom bar (thin divider above it):
Left: "2025 Abdul Hadi. All rights reserved."
Right: "Zyvora Technologies"
Both in text-on-dark-muted at 0.8rem.

---

## ANIMATIONS (COMPLETE SPECIFICATION)

Create /src/lib/animations.ts with all variants:

```typescript
import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45 } }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

export const float = {
  y: [0, -10, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
};

export const floatReverse = {
  y: [0, 10, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
};
```

### Where to apply animations:

All scroll-triggered animations use: whileInView, initial="hidden", animate="visible", viewport={{ once: true, margin: "-80px" }}

- Section label chips: fadeUp
- Section headings: fadeUp with 0.1s delay after label
- Section subtexts: fadeUp with 0.2s delay
- Card grids: use stagger on the grid container, fadeUp on each card
- Hero text lines: stagger with fadeUp, 0.12s between lines
- Hero photo: slideRight, 0.3s delay
- Floating badges: animate={float} and animate={floatReverse} (continuous loop)
- About highlight boxes: stagger with scaleIn
- Service cards: scaleIn from viewport
- Project cards: stagger fadeUp
- Testimonial cards: stagger slideLeft
- Skill badges: stagger fadeIn, 0.04s between badges
- Stat counters: trigger count-up on inView
- Zyvora subsidiary cards: stagger scaleIn
- CTA buttons: whileHover scale: 1.03, whileTap scale: 0.97

DO NOT animate things that are already above the fold on initial load. The hero animates once on page load using motion.div with initial and animate (not whileInView).

---

## LEAD GENERATION FEATURES

Implement all of the following:

1. WHATSAPP FLOATING BUTTON
   Position: fixed, bottom 24px, right 24px, z-index 40
   Design: A circular 52px button, vivid green (#25D366), white WhatsApp icon.
   On hover: scale 1.08, slight shadow.
   On click: opens WhatsApp link in a new tab.
   URL: https://wa.me/9779704572596?text=Hi%20Abdul%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20discuss%20a%20project.
   A small tooltip appears on hover: "Chat on WhatsApp"
   On mobile: move to bottom-left to avoid overlap with the sticky CTA.

2. STICKY MOBILE CTA BAR
   Visible only on mobile (hidden on md and above).
   Position: fixed, bottom 0, full width, z-index 50.
   White background with top border. Single "Let's Talk" button centered, full width, accent blue, 16px height padding.
   Disappears when the contact section is in view (use IntersectionObserver).

3. PROJECT MODAL CTA
   Every project modal ends with a prominent button: "Discuss a Similar Project" that closes the modal and smooth-scrolls to #contact.

4. AVAILABILITY BADGE
   Appears in both the Hero section and the Contact section right column. Pulsing green dot ensures it reads as live/current.

5. CONTACT FORM BUDGET QUALIFIER
   The dropdown with budget ranges pre-qualifies leads so Abdul Hadi knows the scope before replying.

6. SEO-DRIVEN ORGANIC LEADS
   All meta tags set as specified in the SEO section below.

---

## SEO CONFIGURATION

In /src/app/layout.tsx:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdul Hadi | Full-Stack Developer, Android Engineer, AI Specialist in Kathmandu",
  description: "Abdul Hadi is a software engineer and founder of Zyvora Technologies in Kathmandu, Nepal. He builds full-stack web applications, Android apps, AI integrations, and SaaS platforms for businesses across Nepal and South Asia.",
  keywords: [
    "software developer Nepal",
    "full stack developer Kathmandu",
    "Android developer Nepal",
    "AI integration Nepal",
    "SaaS development Nepal",
    "web developer Kathmandu",
    "hire developer Nepal",
    "Zyvora Technologies",
    "Abdul Hadi developer",
    "Next.js developer Nepal",
    "Python developer Nepal"
  ],
  openGraph: {
    title: "Abdul Hadi | Software Engineer and Founder, Zyvora Technologies",
    description: "I build production-grade web apps, Android apps, and AI systems for businesses in Nepal and beyond.",
    url: "https://www.abdulhadi.com.np",
    type: "website",
    images: [{ url: "/assets/og-cover.jpg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Hadi | Software Engineer and Founder",
    description: "Founder of Zyvora Technologies. Building AI-first digital products from Kathmandu, Nepal."
  },
  robots: { index: true, follow: true }
};
```

Also add a canonical link tag for https://www.abdulhadi.com.np in the head.

---

## PERFORMANCE REQUIREMENTS

- Lighthouse target: 95+ Performance, 100 SEO, 100 Accessibility
- All images: use next/image with appropriate sizes prop for responsive behavior
- Hero profile image: priority={true}
- All project images: lazy loaded (default)
- Fonts: loaded via next/font/google (no external font requests blocking render)
- Framer Motion: import only the specific components used (not the entire bundle)
- No large third-party scripts loaded synchronously
- Scroll animations: use will-change: transform only on actively animating elements, remove after animation completes
- Test on mobile at 320px, 375px, 390px, and 430px widths

---

## RESPONSIVE BREAKPOINTS

Follow Tailwind's default breakpoints:
sm: 640px, md: 768px, lg: 1024px, xl: 1280px

Key responsive adjustments:
- Navbar: full links visible at lg+, hamburger below lg
- Hero: two-column at lg+, stacked below lg (photo comes after text on mobile)
- About: two-column at lg+, stacked below
- Services: 3-col at lg, 2-col at md, 1-col below
- Projects: 3-col at lg, 2-col at md, 1-col below (featured project always spans full width)
- Zyvora section: two-column at lg, stacked below
- Skills: category labels and chip rows wrap naturally
- Testimonials: 3-col at lg, snap-scroll carousel below
- Contact: two-column at lg, stacked below
- Footer: 3-col at lg, stacked below

---

## MANDATORY RULES (READ BEFORE STARTING)

1. ZERO student references. No college name, no academic project language, no "this was built for a class" context. This is a professional portfolio for a founder and engineer.

2. NO dark mode anywhere. The entire site is a light theme. Except the Zyvora section and footer which use the defined dark navy background.

3. NO AI-cliché copy. Do not write "passionate," "innovative solutions," "synergize," "digital journey," "take your business to the next level," or any phrase that sounds like a resume generator. Write concisely and specifically.

4. NO generic hero. The hero must be the Bricolage Grotesque headline with gradient "Digital Products," the role ticker, and the professional photo layout as described. Not a centered greeting, not a typing animation of the full name.

5. NO percentage bars for skills. The grouped badge layout is specified. Do not substitute with bars, circles, or any metric that implies a subjective score on languages.

6. The SHIPPED stamp signature element MUST be implemented. It is the one distinctive thing that makes this portfolio memorable. Do not skip it.

7. ALL copy from the Content section above must be used as-is. Do not rewrite, paraphrase, or truncate the specified text.

8. ALL internal anchor links must work with smooth scrolling. Add scroll-behavior: smooth to html in globals.css, AND implement JS smooth scroll as a fallback.

9. EmailJS placeholders: add three clearly visible TODO comments in the contact component:
   // TODO: Replace with your EmailJS Service ID
   // TODO: Replace with your EmailJS Template ID
   // TODO: Replace with your EmailJS Public Key

10. Folder check on startup: If /public/assets/profile.jpg is missing, render a gradient avatar placeholder with "AH" initials. Log a console.warn telling the developer to place the profile photo.

11. WhatsApp button MUST be present at all times across all sections and devices.

12. The floating badges in the hero MUST animate. A static hero with a photo looks like any other portfolio. The animation is what makes it feel alive.

13. Use CSS custom properties (CSS variables) from the design system throughout. Do not hardcode hex values in component files.

14. Ensure all external links (LinkedIn, WhatsApp, social) open in a new tab with rel="noopener noreferrer".

---

## BUILD ORDER

Build in this exact order to avoid import errors:

1. globals.css (all CSS variables and base styles)
2. /src/lib/animations.ts
3. /src/data/ (all four data files)
4. /src/components/ui/ (all shared UI components)
5. /src/components/layout/Navbar.tsx
6. /src/components/layout/Footer.tsx
7. /src/components/layout/FloatingCTA.tsx (WhatsApp button + mobile sticky bar)
8. All section components in order (Hero through Contact)
9. /src/app/layout.tsx
10. /src/app/page.tsx (assembles all sections)

---

## FINAL INSTRUCTION

Build the complete project in one pass. Do not stop between files to ask for confirmation. Do not skip any section. Do not simplify any feature. Produce every file completely, not as a stub or placeholder. This is a production-quality website and every component should be ready to deploy.

When the build is complete, output a summary of:
- Files created
- Any TODO items that need Abdul Hadi's input (EmailJS credentials, profile photo)
- Any npm packages that need to be installed
- The command to run the dev server
