import finnodeImg from "../assets/images/finnode.png";
import dianImg from "../assets/images/facturas.jpg";
import dentalImg from "../assets/images/dentalcare.png";
import ecofloraImg from "../assets/images/ecoafa.png";

// ── Tipos ─────────────────────────────────────────────────────────────────────
export interface Project {
  id: number;
  title: string;
  tagline: string;
  image: string;
  iconColor: "blue" | "green" | "purple" | "amber";
  highlights: string[];
  stack: string[];
  featured?: boolean;
  live?: boolean;
  github?: string;
  githubLabel?: string;
  githubAlt?: string;
  githubAltLabel?: string;
  demo?: string;
  demoLabel?: string;
}

// ── Datos ─────────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "FinNode — Core Bancario",
    tagline:
      "Motor de pagos distribuido con microservicios bajo el estándar ISO 20022 y detección de fraude en tiempo real.",
    image: finnodeImg,
    iconColor: "blue",
    featured: true,
    live: true,
    highlights: [
      "5 microservicios: auth, accounts, ledger, payment-orchestrator, api-gateway",
      "Consistencia distribuida con Patrón Saga",
      "Detección de fraude con IA en tiempo real",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Kafka",
      "Docker",
      "JWT",
      "Spring AI",
      "OpenAI",
      "Angular",
      "TypeScript",
    ],
    github: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/finnode_backend",
    githubLabel: "Backend",
    githubAlt: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/FInnode-Frontend",
    githubAltLabel: "Frontend",
    demo: "#",
  },
  {
    id: 2,
    title: "Facturación Electrónica DIAN",
    tagline:
      "Plataforma Full Stack que automatiza la emisión, procesamiento y validación de facturas ante la DIAN con la API de Factus.",
    image: dianImg,
    iconColor: "green",
    featured: true,
    live: true,
    highlights: [
      "Integración directa con API Factus / DIAN",
      "Validación de comprobantes fiscales en tiempo real",
      "Diferenciador clave para empresas colombianas",
    ],
    stack: ["TypeScript", "React", "Strapi", "PostgreSQL", "JWT"],
    github: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/app-factus",
    githubLabel: "Frontend",
    githubAlt: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/Strapi-factus",
    githubAltLabel: "Backend",
    demo: "#",
  },
  {
    id: 3,
    title: "Gestor de Citas Dentales",
    tagline:
      "Sistema clínico de agendamiento con módulo de mensajería interactiva entre pacientes y personal.",
    image: dentalImg,
    iconColor: "purple",
    live: true,
    highlights: [
      "Módulo de mensajería en tiempo real",
      "Arquitectura separada: backend Java + frontend JS",
    ],
    stack: ["Java", "Spring Boot", "JavaScript", "PostgreSQL", "REST API"],
    github: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/Gestor-de-citas-backend",
    githubLabel: "Backend",
    githubAlt: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/Gestor-de-citas-frontend",
    githubAltLabel: "Frontend",
    demo: "https://gestor-de-citas-frontend.vercel.app/",
  },
  {
    id: 4,
    title: "Ecoafa — Sitio Corporativo",
    tagline:
      "Web corporativa a la medida para el sector ambiental. El único proyecto con demo en vivo, optimizado para SEO.",
    image: ecofloraImg,
    iconColor: "amber",
    live: true,
    highlights: [
      "Desplegado en producción ✓",
      "Optimizado para SEO y rendimiento adaptivo",
    ],
    stack: ["TypeScript", "React", "TailwindCSS", "Vite"],
    github: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/ECOAFA",
    demo: "https://ecoafa.com",
  },
];