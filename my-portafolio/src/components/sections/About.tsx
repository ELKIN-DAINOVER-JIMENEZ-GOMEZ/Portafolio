import profileImg from "../../assets/images/perfil.png";
import cvPdf from "../../assets/cv/Hoja de vida Elkin B.pdf";

// ── Props ─────────────────────────────────────────────────────────────────────
interface AboutProps {
  isDark: boolean;
}

// ── Iconos ────────────────────────────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v13M6 10l6 7 6-7M4 20h16" />
  </svg>
);

// ── Datos estáticos ───────────────────────────────────────────────────────────
const INFO_CARDS = [
  { label: "Ubicación",   value: "📍 Colombia"  },
  { label: "Experiencia", value: "1.5+ años"    },
  { label: "Modalidad",   value: "Presencial / Híbrido / Remoto" },
  { label: "Enfoque",     value: "Full Stack"   },
];

const VALUES = [
  { icon: "*", text: "Prefiero arquitecturas bien pensadas sobre código rápido que hay que reescribir." },
  { icon: "*", text: "Me interesa entender el negocio antes de escribir la primera línea." },
  { icon: "*", text: "Aprendo construyendo — cada proyecto es una oportunidad de subir el nivel." },
  { icon: "*", text: "Comunicación clara: prefiero hacer la pregunta incómoda ahora que entregar algo mal." },
];

const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/elkin-jiménez-a97842300",
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ",
    icon: <GithubIcon />,
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/573148551823",
    icon: <WhatsAppIcon />,
    external: true,
  },
  {
    label: "Email",
    href: "jimenezelkin02@gmail.com", 
    icon: <EmailIcon />,
    external: false,
  },
];

// ── Componente ────────────────────────────────────────────────────────────────
export default function About({ isDark }: AboutProps) {
  // ── Paletas ────────────────────────────────────────────────────────────────
  const bg        = isDark ? "bg-[#0D1117]"    : "bg-[#F6F8FA]";
  const eyebrow   = isDark ? "text-[#58A6FF]"  : "text-[#1D6FA8]";
  const titleC    = isDark ? "text-[#E6EDF3]"  : "text-[#1F2328]";
  const muted     = isDark ? "text-[#8B949E]"  : "text-[#57606A]";
  const strong    = isDark ? "text-[#C9D1D9]"  : "text-[#1F2328]";
  const highlight = isDark
    ? "text-[#58A6FF] bg-[#58A6FF]/8 font-mono text-[14px] px-1.5 py-px rounded"
    : "text-[#1D6FA8] bg-[#1D6FA8]/8 font-mono text-[14px] px-1.5 py-px rounded";

  const photoBorder  = isDark ? "border-[#30363D]/80 bg-[#161B22]/80" : "border-[#D0D7DE]/80 bg-[#EAEEF2]/50";
  const photoBadge   = isDark
    ? "bg-[#0D1117]/85 border-[#30363D]/90"
    : "bg-white/85 border-[#D0D7DE]/90";
  const badgeAvail   = isDark ? "text-[#3FB950]" : "text-[#1A7F37]";
  const badgeDot     = isDark ? "bg-[#3FB950]"   : "bg-[#1A7F37]";

  const infoCardBg   = isDark
    ? "bg-[#161B22]/50 border-[#30363D]/80"
    : "bg-white/70 border-[#D0D7DE]/80";
  const infoLabel    = isDark ? "text-[#8B949E]" : "text-[#57606A]";
  const infoValue    = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";

  const divider      = isDark ? "border-[#30363D]/50" : "border-[#D0D7DE]/60";
  const valuesTitle  = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";

  const linkBase     = isDark
    ? "text-[#8B949E] border-[#30363D]/80 hover:text-[#58A6FF] hover:border-[#58A6FF]/30 hover:bg-[#58A6FF]/5"
    : "text-[#57606A] border-[#D0D7DE]/80 hover:text-[#1D6FA8] hover:border-[#1D6FA8]/30 hover:bg-[#1D6FA8]/5";

  const btnOutline   = isDark
    ? "text-[#E6EDF3] border-[#30363D]/90 hover:border-[#58A6FF]/40 hover:text-[#58A6FF] hover:bg-[#58A6FF]/5"
    : "text-[#1F2328] border-[#D0D7DE]/90 hover:border-[#1D6FA8]/40 hover:text-[#1D6FA8] hover:bg-[#1D6FA8]/5";

  return (
    <section
      id="sobre-mi"
      className={`px-5 py-24 transition-colors duration-500 ${bg}`}
    >
      <div className="max-w-[900px] mx-auto">

        {/* Header */}
        <p className={`font-mono text-[11px] font-medium tracking-[0.1em] uppercase mb-3 ${eyebrow}`}>
          // sobre mí
        </p>
        <h2 className={`text-[36px] font-bold tracking-[-0.03em] mb-12 ${titleC}`}>
          ¿Quién está detrás del código?
        </h2>

        {/* Grid dos columnas */}
        <div className="grid grid-cols-1 min-[640px]:grid-cols-[1fr_1.4fr] gap-10 items-start">

          {/* ── Columna izquierda ── */}
          <div className="flex flex-col gap-4">

            {/* Foto */}
            <div
              className={`
                relative rounded-[18px] overflow-hidden border
                aspect-[4/5]
                ${photoBorder}
              `}
            >
              <img
                src={profileImg}
                alt="Foto de perfil de Elkin Jiménez"
                className="w-full h-full object-cover"
              />

              {/* Badge disponible flotante */}
              <div
                className={`
                  absolute bottom-3.5 left-3.5
                  flex items-center gap-2
                  border rounded-xl px-3 py-2
                  backdrop-blur-xl
                  ${photoBadge}
                `}
              >
                <span className={`w-[7px] h-[7px] rounded-full flex-shrink-0 animate-pulse ${badgeDot}`} />
                <div className="flex flex-col">
                  <span className={`text-[12px] font-semibold leading-tight ${badgeAvail}`}>
                    Disponible
                  </span>
                  <span className={`text-[11px] leading-tight ${muted}`}>
                    Presencial / Hibrido / Remoto
                  </span>
                </div>
              </div>
            </div>

            {/* Info rápida */}
            <div className="grid grid-cols-2 gap-2">
              {INFO_CARDS.map(({ label, value }) => (
                <div
                  key={label}
                  className={`rounded-[10px] border px-3.5 py-3 flex flex-col gap-0.5 ${infoCardBg}`}
                >
                  <span className={`font-mono text-[10px] uppercase tracking-[0.05em] ${infoLabel}`}>
                    {label}
                  </span>
                  <span className={`text-[13px] font-semibold ${infoValue}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha ── */}
          <div className="flex flex-col gap-7">

            {/* Bio */}
            <div className="flex flex-col gap-4">
              <p className={`text-[15.5px] leading-[1.8] ${muted}`}>
                Soy{" "}
                <strong className={`font-medium ${strong}`}>Elkin Jiménez</strong>,
                desarrollador Full Stack con más de 1.5 años construyendo software para
                sectores exigentes. Me especializo en convertir reglas de negocio complejas
                en soluciones técnicas limpias y listas para producción.
              </p>
              <p className={`text-[15.5px] leading-[1.8] ${muted}`}>
                He implementado sistemas bajo el estándar{" "}
                <span className={highlight}>ISO 20022</span> para procesamiento de pagos
                distribuidos, y plataformas integradas con la API de la{" "}
                <span className={highlight}>DIAN</span> para facturación electrónica en
                Colombia. Eso no es común en perfiles junior.
              </p>
              <p className={`text-[15.5px] leading-[1.8] ${muted}`}>
                Trabajo principalmente con{" "}
                <strong className={`font-medium ${strong}`}>React + TypeScript</strong>{" "}
                en frontend y{" "}
                <strong className={`font-medium ${strong}`}>Java + Spring Boot</strong>{" "}
                en backend. Me interesa construir soluciones que resuelvan problemas reales
                de negocio, no solo prototipos.
              </p>
            </div>

            {/* Divider */}
            <hr className={`border-t ${divider}`} />

            {/* Valores */}
            <div>
              <p className={`text-[13px] font-semibold mb-3 tracking-[-0.01em] ${valuesTitle}`}>
                Lo que me define como desarrollador
              </p>
              <ul className="flex flex-col gap-2.5">
                {VALUES.map(({ icon, text }) => (
                  <li key={text} className={`flex items-start gap-2.5 text-[14px] leading-[1.55] ${muted}`}>
                    <span className="text-[15px] flex-shrink-0 mt-px">{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <hr className={`border-t ${divider}`} />

            {/* Links rápidos */}
            <div className="flex flex-wrap gap-2">
              {CONTACT_LINKS.map(({ label, href, icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`
                    flex items-center gap-[7px]
                    text-[13px] font-medium
                    border rounded-lg px-3.5 py-[7px]
                    no-underline transition-all duration-200
                    ${linkBase}
                  `}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-2.5 flex-wrap">
              
              <a
                href={cvPdf}
                download
                className={`
                  flex items-center gap-[7px]
                  px-5 py-[11px] rounded-[9px]
                  text-[14px] font-medium
                  border no-underline
                  transition-all duration-200 hover:-translate-y-px
                  ${btnOutline}
                `}
              >
                <DownloadIcon />
                Descargar CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}