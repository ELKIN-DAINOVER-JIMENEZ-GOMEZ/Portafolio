// src/data/skills.ts
// Skills basadas en el CV. Los nombres de categoría y las etiquetas de stats
// se traducen con las claves de i18n (ver es.json / en.json → "skills").

export interface Skill {
  name: string;
}

export interface SkillCategory {
  /** Clave de i18n relativa a "skills." (ej. "backend" → t("skills.backend")) */
  key: string;
  icon: string;
  accent: string;
  iconBg: string;
  skills: Skill[];
}

export interface SkillStat {
  num: string;
  suffix: string;
  /** Clave de i18n completa */
  labelKey: string;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    key: "backend",
    icon: "⚙️",
    accent: "#58A6FF",
    iconBg: "rgba(88,166,255,0.12)",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "API REST" },
      { name: "Spring Security" },
      { name: "Microservicios" },
      { name: "Python" },
      { name: "FastAPI" },
    ],
  },
  {
    key: "frontend",
    icon: "🎨",
    accent: "#BC8CFF",
    iconBg: "rgba(188,140,255,0.12)",
    skills: [
      { name: "React.js" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "JavaScript" },
    ],
  },
  {
    key: "base_datos",
    icon: "🗄️",
    accent: "#3FB950",
    iconBg: "rgba(63,185,80,0.12)",
    skills: [{ name: "SQL" }],
  },
  {
    key: "devops",
    icon: "🐳",
    accent: "#F78166",
    iconBg: "rgba(247,129,102,0.12)",
    skills: [
      { name: "Git / GitHub" },
      { name: "Docker" },
      { name: "Apache Kafka (Saga)" },
      { name: "Postman" },
    ],
  },
  {
    key: "calidad",
    icon: "✅",
    accent: "#D29922",
    iconBg: "rgba(210,153,34,0.12)",
    skills: [{ name: "JUnit" }, { name: "Mockito" }, { name: "Scrum" }],
  },
  {
    key: "cloud",
    icon: "☁️",
    accent: "#39C5CF",
    iconBg: "rgba(57,197,207,0.12)",
    skills: [{ name: "AWS Cloud Foundations" }],
  },
];

export const SKILL_STATS: SkillStat[] = [
  { num: "3", suffix: "", labelKey: "skills.stat_proyectos" },
  { num: "1", suffix: "", labelKey: "skills.stat_cliente" },
  { num: "6", suffix: "/8", labelKey: "skills.stat_semestres" },
];