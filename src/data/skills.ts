export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma"]
  },
  {
    name: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Express", "REST API", "GraphQL"]
  },
  {
    name: "Mobile",
    skills: ["Android", "Kotlin", "Jetpack Compose", "Firebase", "ML Kit", "Room DB"]
  },
  {
    name: "AI and ML",
    skills: ["PyTorch", "OpenAI API", "Claude API", "Gemini API", "NVIDIA NIM", "LangChain"]
  },
  {
    name: "Infrastructure",
    skills: ["PostgreSQL", "Supabase", "Firebase", "MySQL", "Docker", "Railway", "Vercel"]
  }
];
