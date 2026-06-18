export interface Project {
  id: string;
  featured: boolean;
  title: string;
  categories: string[];
  short: string;
  metric: string;
  tech: string[];
  image: string;
  full: string;
}

export const projects: Project[] = [
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

export const projectGradients: Record<string, string> = {
  "school-saas": "linear-gradient(135deg, #1D4ED8 0%, #7C3AED 100%)",
  "kirana-app": "linear-gradient(135deg, #0F2044 0%, #1D4ED8 100%)",
  "arena-fire": "linear-gradient(135deg, #0F2044 0%, #7C3AED 100%)",
  "whatsapp-chatbot": "linear-gradient(135deg, #10B981 0%, #1D4ED8 100%)",
  "medschedule": "linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)",
  "himalayan-commerce": "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
  "finflow": "linear-gradient(135deg, #0F2044 0%, #1D4ED8 60%, #7C3AED 100%)",
  "restaurant-pos": "linear-gradient(135deg, #064E3B 0%, #0EA5E9 100%)"
};

export const filterCategories = [
  { id: "all", label: "All" },
  { id: "web-app", label: "Web App" },
  { id: "mobile-app", label: "Mobile App" },
  { id: "ai-automation", label: "AI / Automation" },
  { id: "saas", label: "SaaS" }
];
