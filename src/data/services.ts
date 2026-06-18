import { Code2, Smartphone, Bot, Layers, LayoutDashboard, Plug, LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description: "Complete web applications built with Next.js, FastAPI, and PostgreSQL. Scalable architecture, clean code, and production-ready deployments. From marketing sites to complex multi-tenant SaaS platforms.",
    tags: ["Next.js", "FastAPI", "TypeScript", "PostgreSQL"]
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    description: "Native Android applications built with Kotlin and Jetpack Compose. High-performance, modern UI, integrated with Firebase and REST APIs. Built to ship and engineered to scale.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "REST APIs"]
  },
  {
    icon: Bot,
    title: "AI Integration and Automation",
    description: "Business automation using large language models, WhatsApp AI bots, and custom AI workflows. I connect AI to your existing processes to reduce operational overhead and response time.",
    tags: ["LLM APIs", "WhatsApp AI", "Claude API", "NVIDIA NIM"]
  },
  {
    icon: Layers,
    title: "SaaS Product Development",
    description: "End-to-end SaaS development from database design to user-facing dashboards. Multi-tenant architecture, role-based access, subscription billing, and admin panels included.",
    tags: ["SaaS", "Multi-tenant", "Auth", "Supabase"]
  },
  {
    icon: LayoutDashboard,
    title: "IT Consulting and Architecture",
    description: "Technical consulting for startups and growing businesses. System design reviews, tech stack selection, performance audits, and engineering direction. Get a clear roadmap before you build.",
    tags: ["System Design", "Tech Audit", "Roadmap"]
  },
  {
    icon: Plug,
    title: "API Development and Integrations",
    description: "Robust REST APIs, third-party integrations including payment gateways, WhatsApp, SMS, and email, and API architecture designed to support mobile and web frontends simultaneously.",
    tags: ["REST API", "Payment APIs", "Webhooks"]
  }
];
