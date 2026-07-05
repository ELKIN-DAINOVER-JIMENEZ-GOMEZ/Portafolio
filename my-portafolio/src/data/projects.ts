import finnodeImg from "../assets/images/finnode.png";
import dianImg from "../assets/images/facturas.jpg";
import dentalImg from "../assets/images/dentalcare.png";
import ecofloraImg from "../assets/images/ecoafa.png";

// ── Tipos ─────────────────────────────────────────────────────────────────────
export interface LocalizedText {
  es: string;
  en: string;
}

export interface LocalizedList {
  es: string[];
  en: string[];
}

export interface Project {
  id: number;
  title: LocalizedText;
  tagline: LocalizedText;
  image: string;
  iconColor: "blue" | "green" | "purple" | "amber";
  highlights: LocalizedList;
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
    title: {
      es: "FinNode — Core Bancario",
      en: "FinNode — Banking Core",
    },
    tagline: {
      es: "Motor de pagos distribuido con microservicios bajo el estándar ISO 20022 y detección de fraude en tiempo real.",
      en: "Distributed payment engine built with microservices under the ISO 20022 standard, with real-time fraud detection.",
    },
    image: finnodeImg,
    iconColor: "blue",
    featured: true,
    live: true,
    highlights: {
      es: [
        "5 microservicios: auth, accounts, ledger, payment-orchestrator, api-gateway",
        "Consistencia distribuida con Patrón Saga",
        "Detección de fraude con IA en tiempo real",
      ],
      en: [
        "5 microservices: auth, accounts, ledger, payment-orchestrator, api-gateway",
        "Distributed consistency with the Saga Pattern",
        "Real-time AI-powered fraud detection",
      ],
    },
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
    title: {
      es: "Facturación Electrónica DIAN",
      en: "DIAN Electronic Invoicing",
    },
    tagline: {
      es: "Plataforma Full Stack que automatiza la emisión, procesamiento y validación de facturas ante la DIAN con la API de Factus.",
      en: "Full Stack platform that automates the issuance, processing, and validation of invoices with Colombia's tax authority (DIAN) via the Factus API.",
    },
    image: dianImg,
    iconColor: "green",
    featured: true,
    live: true,
    highlights: {
      es: [
        "Integración directa con API Factus / DIAN",
        "Validación de comprobantes fiscales en tiempo real",
        "Diferenciador clave para empresas colombianas",
      ],
      en: [
        "Direct integration with the Factus / DIAN API",
        "Real-time validation of tax receipts",
        "Key differentiator for Colombian businesses",
      ],
    },
    stack: ["TypeScript", "React", "Strapi", "PostgreSQL", "JWT"],
    github: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/app-factus",
    githubLabel: "Frontend",
    githubAlt: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/Strapi-factus",
    githubAltLabel: "Backend",
    demo: "#",
  },
  {
    id: 3,
    title: {
      es: "Gestor de Citas Dentales",
      en: "Dental Appointment Manager",
    },
    tagline: {
      es: "Sistema clínico de agendamiento con módulo de mensajería interactiva entre pacientes y personal.",
      en: "Clinical scheduling system with an interactive messaging module between patients and staff.",
    },
    image: dentalImg,
    iconColor: "purple",
    live: true,
    highlights: {
      es: [
        "Módulo de mensajería en tiempo real",
        "Arquitectura separada: backend Java + frontend JS",
      ],
      en: [
        "Real-time messaging module",
        "Separated architecture: Java backend + JS frontend",
      ],
    },
    stack: ["Java", "Spring Boot", "JavaScript", "PostgreSQL", "REST API"],
    github: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/Gestor-de-citas-backend",
    githubLabel: "Backend",
    githubAlt: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/Gestor-de-citas-frontend",
    githubAltLabel: "Frontend",
    demo: "https://gestor-de-citas-frontend.vercel.app/",
  },
  {
    id: 4,
    title: {
      es: "Ecoafa — Sitio Corporativo",
      en: "Ecoafa — Corporate Website",
    },
    tagline: {
      es: "Web corporativa a la medida para el sector ambiental. El único proyecto con demo en vivo, optimizado para SEO.",
      en: "Custom corporate website for the environmental sector. The only project with a live demo, optimized for SEO.",
    },
    image: ecofloraImg,
    iconColor: "amber",
    live: true,
    highlights: {
      es: [
        "Desplegado en producción ✓",
        "Optimizado para SEO y rendimiento adaptivo",
      ],
      en: [
        "Deployed to production ✓",
        "Optimized for SEO and adaptive performance",
      ],
    },
    stack: ["TypeScript", "React", "TailwindCSS", "Vite"],
    github: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ/ECOAFA",
    demo: "https://ecoafa.com",
  },
];