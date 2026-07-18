// ── Tipos ─────────────────────────────────────────────────────────────────────
export type SkillLevel = "principal" | "intermedio" | "básico";

export interface Skill {
  name: string;
  level: SkillLevel;
  /** Porcentaje de dominio (0-100) — controla el ancho de la barra */
  pct: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  /** Color de acento de la card (barra lateral + barras de progreso) */
  accent: string;
  /** Fondo del ícono */
  iconBg: string;
  skills: Skill[];
}

// ── Datos ─────────────────────────────────────────────────────────────────────
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "⚡",
    accent: "#58A6FF",
    iconBg: "rgba(88,166,255,0.1)",
    skills: [
      { name: "React",        level: "principal",  pct:64 },
      { name: "TypeScript",   level: "principal",  pct: 64 },
      { name: "TailwindCSS",  level: "principal",  pct: 64 },
      { name: "JavaScript",   level: "principal", pct: 64 },
      { name: "Angular",      level: "principal", pct: 64 },
      { name: "HTML5 / CSS3", level: "principal",  pct: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "🔧",
    accent: "#3FB950",
    iconBg: "rgba(63,185,80,0.1)",
    skills: [
      { name: "Java",        level: "principal",  pct: 75 },
      { name: "Spring Boot", level: "principal",  pct: 80 },
      { name: "REST API",    level: "principal",  pct: 80 },
      { name: "JWT / Auth",  level: "principal",  pct: 80 },
      { name: "Strapi",      level: "intermedio", pct: 65 },
    ],
  },
  {
    category: "Bases de datos",
    icon: "🗄️",
    accent: "#F0B429",
    iconBg: "rgba(240,180,41,0.1)",
    skills: [
      { name: "PostgreSQL", level: "principal",  pct: 85 },
      { name: "SQL",        level: "principal",  pct: 88 },
      { name: "MySQL",      level: "principal", pct: 70 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "🐳",
    accent: "#A371F7",
    iconBg: "rgba(163,113,247,0.1)",
    skills: [
      { name: "Docker",       level: "intermedio", pct: 70 },
      { name: "Git / GitHub", level: "principal",  pct: 88 },
      { name: "NGINX",        level: "básico",     pct: 40 },
      { name: "Kafka",        level: "intermedio", pct: 62 },
    ],
  },
];

// ── Stats de la sección ───────────────────────────────────────────────────────
export const SKILL_STATS = [
  { num: "14", suffix: "+", label: "Tecnologías activas"     },
  { num: "1.5", suffix: "+", label: "Años de experiencia"    },
  { num: "4",  suffix: "",  label: "Proyectos construidos"   },
  { num: "2",  suffix: "",  label: "Integraciones fiscales"  },
];