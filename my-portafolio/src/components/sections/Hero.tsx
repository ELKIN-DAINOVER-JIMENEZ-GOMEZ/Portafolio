import { useEffect, useState, useRef } from "react";
import cvPdf from "../../assets/cv/Hoja de vida Elkin B.pdf";

// ── Iconos inline ─────────────────────────────────────────────────────────────
const ProjectsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v13M6 10l6 7 6-7M4 20h16" />
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 15" />
  </svg>
);

// ── Tipos ─────────────────────────────────────────────────────────────────────
interface HeroProps {
  /** Tema del sitio, controlado desde App.tsx con el toggle del Navbar */
  isDark: boolean;
}

// ── Roles para el typewriter ──────────────────────────────────────────────────
const ROLES = [
  "Full Stack Developer",
  "Backend Engineer",
  "Java · Spring Boot",
  "React · TypeScript",
];

// ── Stack badges ──────────────────────────────────────────────────────────────
const STACK = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Kafka",
  "ISO 20022",
];

// ── Componente ────────────────────────────────────────────────────────────────
export default function Hero({ isDark }: HeroProps) {
  const [displayedRole, setDisplayedRole] = useState(ROLES[0]);
  const roleIdxRef  = useRef(0);
  const charIdxRef  = useRef(ROLES[0].length);
  const deletingRef = useRef(false);

  // ── Typewriter ──────────────────────────────────────────────────────────────
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = ROLES[roleIdxRef.current];

      if (!deletingRef.current) {
        charIdxRef.current++;
        setDisplayedRole(current.slice(0, charIdxRef.current));

        if (charIdxRef.current === current.length) {
          deletingRef.current = true;
          timeout = setTimeout(tick, 2400);
          return;
        }
      } else {
        charIdxRef.current--;
        setDisplayedRole(current.slice(0, charIdxRef.current));

        if (charIdxRef.current === 0) {
          deletingRef.current = false;
          roleIdxRef.current  = (roleIdxRef.current + 1) % ROLES.length;
        }
      }

      timeout = setTimeout(tick, deletingRef.current ? 38 : 62);
    };

    timeout = setTimeout(tick, 2000);
    return () => clearTimeout(timeout);
  }, []);

  // ── Scroll a sección ────────────────────────────────────────────────────────
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // ── Paletas de color según tema ─────────────────────────────────────────────
  const c = {
    bg:            isDark ? "bg-[#0D1117]"       : "bg-[#F6F8FA]",
    eyebrowText:   isDark ? "text-[#58A6FF]"     : "text-[#1D6FA8]",
    eyebrowBg:     isDark ? "bg-[#58A6FF]/8 border-[#58A6FF]/18"   : "bg-[#1D6FA8]/8 border-[#1D6FA8]/20",
    greeting:      isDark ? "text-[#8B949E]"     : "text-[#57606A]",
    name:          isDark ? "text-[#E6EDF3]"     : "text-[#1F2328]",
    role:          isDark ? "text-[#58A6FF]"     : "text-[#1D6FA8]",
    cursor:        isDark ? "bg-[#58A6FF]"       : "bg-[#1D6FA8]",
    desc:          isDark ? "text-[#8B949E]"     : "text-[#57606A]",
    descHighlight: isDark
      ? "text-[#C9D1D9] bg-[#58A6FF]/8"
      : "text-[#1F2328] bg-[#1D6FA8]/8",
    badgeBorder:   isDark ? "border-[#30363D]/90 text-[#8B949E] hover:text-[#58A6FF] hover:border-[#58A6FF]/30 hover:bg-[#58A6FF]/6"
      : "border-[#D0D7DE]/90 text-[#57606A] hover:text-[#1D6FA8] hover:border-[#1D6FA8]/30 hover:bg-[#1D6FA8]/6",
    btnPrimary:    isDark
      ? "bg-[#58A6FF] text-[#0D1117] hover:bg-[#79BFFF] hover:shadow-[0_8px_24px_rgba(88,166,255,0.3)]"
      : "bg-[#1D6FA8] text-white hover:bg-[#1A5F91] hover:shadow-[0_8px_24px_rgba(29,111,168,0.25)]",
    btnSecondary:  isDark
      ? "text-[#E6EDF3] border-[#30363D]/90 hover:border-[#58A6FF]/40 hover:text-[#58A6FF] hover:bg-[#58A6FF]/5"
      : "text-[#1F2328] border-[#D0D7DE]/90 hover:border-[#1D6FA8]/40 hover:text-[#1D6FA8] hover:bg-[#1D6FA8]/5",
    metaBorder:    isDark ? "border-[#30363D]/50" : "border-[#D0D7DE]/60",
    metaText:      isDark ? "text-[#8B949E]"     : "text-[#57606A]",
    available:     isDark ? "text-[#3FB950]"     : "text-[#1A7F37]",
    availDot:      isDark ? "bg-[#3FB950]"       : "bg-[#1A7F37]",
    // Colores del diagrama SVG de fondo
    svgAccent:     isDark ? "#58A6FF"            : "#1D6FA8",
    svgGreen:      isDark ? "#3FB950"            : "#1A7F37",
    svgYellow:     isDark ? "#F0B429"            : "#B45309",
    svgMuted:      isDark ? "#8B949E"            : "#57606A",
    svgDash1:      isDark ? "0.18"               : "0.12",
    svgDash2:      isDark ? "0.15"               : "0.10",
    svgDash3:      isDark ? "0.12"               : "0.08",
    svgNode1:      isDark ? "0.22"               : "0.15",
    svgNode2:      isDark ? "0.16"               : "0.11",
    svgNode3:      isDark ? "0.13"               : "0.09",
    svgNode4:      isDark ? "0.10"               : "0.07",
    svgNode5:      isDark ? "0.08"               : "0.05",
    svgNode6:      isDark ? "0.07"               : "0.04",
  };

  return (
    <section
      id="inicio"
      className={`
        relative min-h-screen flex items-center overflow-hidden
        px-5 pt-28 pb-20 transition-colors duration-500
        ${c.bg}
      `}
    >
      {/* ── Diagrama de microservicios como fondo ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="arr-ms"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path
                d="M2 1L8 5L2 9"
                fill="none"
                stroke="context-stroke"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>

          {/* Líneas de conexión */}
          <g strokeWidth="0.8" fill="none">
            <path d="M600 350 C600 290,400 270,380 220" stroke={c.svgAccent} strokeDasharray="5 5" opacity={c.svgDash1} markerEnd="url(#arr-ms)" />
            <path d="M600 350 C600 290,820 270,840 220" stroke={c.svgAccent} strokeDasharray="5 5" opacity={c.svgDash1} markerEnd="url(#arr-ms)" />
            <path d="M380 160 C380 100,240 110,200 150" stroke={c.svgGreen} strokeDasharray="4 6" opacity={c.svgDash2} markerEnd="url(#arr-ms)" />
            <path d="M840 160 C840 100,980 110,1000 155" stroke={c.svgGreen} strokeDasharray="4 6" opacity={c.svgDash2} markerEnd="url(#arr-ms)" />
            <path d="M600 350 C700 380,900 370,990 200" stroke={c.svgYellow} strokeDasharray="3 7" opacity={c.svgDash3} markerEnd="url(#arr-ms)" />
            <path d="M600 350 L600 500" stroke={c.svgAccent} strokeDasharray="3 8" opacity="0.10" />
            <path d="M200 200 C300 250,450 300,550 340" stroke={c.svgGreen} strokeDasharray="6 4" opacity="0.08" />
            <path d="M1000 200 C900 260,750 310,650 345" stroke={c.svgGreen} strokeDasharray="6 4" opacity="0.08" />
          </g>

          {/* API Gateway */}
          <g opacity={c.svgNode1}>
            <rect x="530" y="320" width="140" height="52" rx="10" fill="none" stroke={c.svgAccent} strokeWidth="1" />
            <text x="600" y="340" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill={c.svgAccent}>api-gateway</text>
            <text x="600" y="356" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill={c.svgAccent} opacity="0.7">:8080</text>
          </g>

          {/* Auth Service */}
          <g opacity={c.svgNode2}>
            <rect x="320" y="130" width="120" height="48" rx="8" fill="none" stroke={c.svgGreen} strokeWidth="0.8" />
            <text x="380" y="150" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={c.svgGreen}>auth-service</text>
            <text x="380" y="166" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={c.svgGreen} opacity="0.7">JWT · Spring</text>
          </g>

          {/* Accounts */}
          <g opacity={c.svgNode3}>
            <rect x="140" y="160" width="110" height="44" rx="8" fill="none" stroke={c.svgMuted} strokeWidth="0.7" />
            <text x="195" y="179" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={c.svgMuted}>accounts</text>
            <text x="195" y="194" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={c.svgMuted} opacity="0.7">PostgreSQL</text>
          </g>

          {/* Payment Orchestrator */}
          <g opacity={c.svgNode2}>
            <rect x="780" y="130" width="130" height="48" rx="8" fill="none" stroke={c.svgGreen} strokeWidth="0.8" />
            <text x="845" y="150" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={c.svgGreen}>payment-orch</text>
            <text x="845" y="166" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={c.svgGreen} opacity="0.7">Saga Pattern</text>
          </g>

          {/* Ledger */}
          <g opacity={c.svgNode3}>
            <rect x="940" y="162" width="110" height="44" rx="8" fill="none" stroke={c.svgMuted} strokeWidth="0.7" />
            <text x="995" y="181" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fill={c.svgMuted}>ledger</text>
            <text x="995" y="196" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill={c.svgMuted} opacity="0.7">immutable · PG</text>
          </g>

          {/* Kafka stream */}
          <g opacity={c.svgNode4}>
            <rect x="490" y="460" width="220" height="34" rx="6" fill="none" stroke={c.svgYellow} strokeWidth="0.7" />
            <text x="600" y="475" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill={c.svgYellow}>kafka · event-stream</text>
            <text x="600" y="488" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill={c.svgYellow} opacity="0.7">ISO 20022 · distributed</text>
          </g>

          {/* Floating ISO label */}
          <g opacity={c.svgNode5}>
            <text x="600" y="560" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill={c.svgAccent}>ISO 20022</text>
          </g>

          {/* Extra ambient labels */}
          <g opacity={c.svgNode5}>
            <text x="110" y="260" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill={c.svgMuted}>docker compose</text>
          </g>
          <g opacity={c.svgNode6}>
            <text x="980" y="270" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill={c.svgMuted}>PostgreSQL</text>
          </g>
        </svg>
      </div>

      {/* ── Contenido ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[680px] w-full mx-auto">

        {/* Eyebrow */}
        <div
          className={`
            inline-flex items-center gap-2 mb-7
            font-mono text-[11.5px] font-medium tracking-[0.1em] uppercase
            border rounded-full px-3.5 py-1.5
            animate-[fadeSlideUp_0.6s_ease_both]
            ${c.eyebrowText} ${c.eyebrowBg}
          `}
        >
          {/* Punto pulsante disponibilidad */}
          <span className="relative flex w-1.5 h-1.5">
            <span className={`absolute inset-0 rounded-full animate-ping opacity-40 ${c.availDot}`} />
            <span className={`relative block w-1.5 h-1.5 rounded-full ${c.availDot}`} />
          </span>
          Full Stack Developer · Colombia
        </div>

        {/* Nombre */}
        <p className={`text-[18px] font-normal mb-1 ${c.greeting} animate-[fadeSlideUp_0.6s_0.1s_ease_both]`}>
          Hola, soy
        </p>
        <h1
          className={`
            font-bold leading-[1.05] tracking-[-0.035em]
            text-[clamp(40px,8vw,64px)]
            mb-2 ${c.name}
            animate-[fadeSlideUp_0.6s_0.15s_ease_both]
          `}
        >
          Elkin Jiménez
        </h1>

        {/* Rol con typewriter */}
        <div
          className={`
            flex items-center gap-2.5 mb-7
            font-mono font-medium
            text-[clamp(17px,3.5vw,26px)]
            ${c.role}
            animate-[fadeSlideUp_0.6s_0.2s_ease_both]
          `}
        >
          <span>{displayedRole}</span>
          {/* Cursor parpadeante */}
          <span
            className={`
              inline-block w-[3px] h-[1em] rounded-sm
              animate-[blink_1s_step-end_infinite]
              relative top-[-1px]
              ${c.cursor}
            `}
          />
        </div>

        {/* Descripción */}
        <p
          className={`
            text-[16.5px] leading-[1.75] max-w-[520px] mb-9
            ${c.desc}
            animate-[fadeSlideUp_0.6s_0.25s_ease_both]
          `}
        >
          Convierto reglas de negocio complejas —{" "}
          <strong className={`font-medium rounded px-1 py-px font-mono text-[14.5px] ${c.descHighlight}`}>
            normativa DIAN
          </strong>{" "}
          y{" "}
          <strong className={`font-medium rounded px-1 py-px font-mono text-[14.5px] ${c.descHighlight}`}>
            estándar ISO 20022
          </strong>{" "}
          — en software limpio y listo para producción. Especializado en
          arquitecturas backend con Java + Spring Boot y frontends modernos
          en React + TypeScript.
        </p>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-2 mb-10 animate-[fadeSlideUp_0.6s_0.3s_ease_both]">
          {STACK.map((tech) => (
            <span
              key={tech}
              className={`
                font-mono text-[12px] font-medium
                border rounded-md px-2.5 py-1
                transition-all duration-200 cursor-default
                bg-transparent
                ${c.badgeBorder}
              `}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3 flex-wrap items-center mb-14 animate-[fadeSlideUp_0.6s_0.35s_ease_both]">
          <button
            onClick={() => scrollTo("proyectos")}
            className={`
              flex items-center gap-2 px-6 py-3
              rounded-[10px] text-[14.5px] font-semibold
              transition-all duration-200 hover:-translate-y-0.5
              cursor-pointer border-none
              ${c.btnPrimary}
            `}
          >
            <ProjectsIcon />
            Ver proyectos
          </button>

          <a
            href={cvPdf}
            download
            className={`
              flex items-center gap-2 px-6 py-3
              rounded-[10px] text-[14.5px] font-medium
              border no-underline
              transition-all duration-200 hover:-translate-y-0.5
              ${c.btnSecondary}
            `}
          >
            <DownloadIcon />
            Descargar CV
          </a>
        </div>

        {/* Meta info */}
        <div
          className={`
            flex items-center gap-6 flex-wrap
            pt-6 border-t
            animate-[fadeSlideUp_0.6s_0.4s_ease_both]
            ${c.metaBorder}
          `}
        >
          <div className={`flex items-center gap-1.5 text-[13px] opacity-60 ${c.metaText}`}>
            <PinIcon />
            Colombia
          </div>

          <div className={`flex items-center gap-1.5 text-[13px] opacity-60 ${c.metaText}`}>
            <ClockIcon />
            +1.5 años de experiencia
          </div>

          <div className={`flex items-center gap-1.5 text-[13px] ${c.available}`}>
            <span
              className={`
                w-[7px] h-[7px] rounded-full flex-shrink-0
                animate-pulse ${c.availDot}
              `}
            />
            Disponible para nuevas oportunidades
          </div>
        </div>
      </div>

      {/*
       * ── Animaciones globales (añadir a index.css o tailwind.config.js) ──
       *
       * En tu tailwind.config.js, dentro de theme.extend:
       *
       * keyframes: {
       *   fadeSlideUp: {
       *     from: { opacity: '0', transform: 'translateY(18px)' },
       *     to:   { opacity: '1', transform: 'translateY(0)' },
       *   },
       *   blink: {
       *     '0%, 100%': { opacity: '1' },
       *     '50%': { opacity: '0' },
       *   },
       * },
       * animation: {
       *   'fade-slide-up': 'fadeSlideUp 0.6s ease both',
       *   'blink': 'blink 1s step-end infinite',
       * },
       */}
    </section>
  );
}