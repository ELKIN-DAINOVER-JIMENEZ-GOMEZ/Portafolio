// ── Props ─────────────────────────────────────────────────────────────────────
interface FooterProps {
  isDark: boolean;
}

import { useLanguage } from "../../i18n/useLanguage";

// ── Iconos ────────────────────────────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

// ── Datos estáticos ───────────────────────────────────────────────────────────
const NAV_ITEMS_KEYS = [
  { key: "nav.inicio",     section: "inicio"    },
  { key: "nav.proyectos",  section: "proyectos" },
  { key: "nav.skills",     section: "skills"    },
  { key: "nav.sobre_mi",   section: "sobre-mi"  },
  { key: "nav.contacto",   section: "contacto"  },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/elkin-jiménez-a97842300", icon: <LinkedInIcon /> },
  { label: "GitHub",   href: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ", icon: <GithubIcon />   },
  { label: "WhatsApp", href: "https://wa.me/573148551823",                       icon: <WhatsAppIcon /> },
  { label: "Email",    href: "mailto:jimenezelkin02@gmail.com",                  icon: <EmailIcon />    },
];

// ── Componente ────────────────────────────────────────────────────────────────
export default function Footer({ isDark }: FooterProps) {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  // ── Paletas ────────────────────────────────────────────────────────────────
  const bg          = isDark ? "bg-[#0D1117]"        : "bg-[#F6F8FA]";
  const borderTop    = isDark ? "border-[#30363D]/60" : "border-[#D0D7DE]/70";
  const nameC        = isDark ? "text-[#E6EDF3]"      : "text-[#1F2328]";
  const bracket      = isDark ? "text-[#58A6FF]"      : "text-[#1D6FA8]";
  const tagline      = isDark ? "text-[#8B949E]"      : "text-[#57606A]";
  const availText    = isDark ? "text-[#3FB950]"      : "text-[#1A7F37]";
  const availDot     = isDark ? "bg-[#3FB950]"        : "bg-[#1A7F37]";

  const navLabel     = isDark ? "text-[#8B949E]"      : "text-[#57606A]";
  const navLink      = isDark
    ? "text-[#8B949E] hover:text-[#58A6FF]"
    : "text-[#57606A] hover:text-[#1D6FA8]";

  const socialWrap   = isDark
    ? "text-[#8B949E] border-[#30363D]/80 hover:text-[#58A6FF] hover:border-[#58A6FF]/30 hover:bg-[#58A6FF]/5"
    : "text-[#57606A] border-[#D0D7DE]/80 hover:text-[#1D6FA8] hover:border-[#1D6FA8]/30 hover:bg-[#1D6FA8]/5";

  const divider       = isDark ? "border-[#30363D]/50" : "border-[#D0D7DE]/60";
  const copyText      = isDark ? "text-[#8B949E]"      : "text-[#57606A]";
  const madeWithC      = isDark ? "text-[#8B949E]"      : "text-[#57606A]";
  const heart          = isDark ? "text-[#F85149]"      : "text-[#CF222E]";

  const topBtn        = isDark
    ? "border-[#30363D]/90 text-[#8B949E] hover:border-[#58A6FF]/30 hover:text-[#58A6FF] hover:bg-[#58A6FF]/5"
    : "border-[#D0D7DE]/90 text-[#57606A] hover:border-[#1D6FA8]/30 hover:text-[#1D6FA8] hover:bg-[#1D6FA8]/5";

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className={`px-5 pt-16 pb-8 border-t transition-colors duration-500 ${bg} ${borderTop}`}>
      <div className="max-w-[900px] mx-auto">

        {/* Bloque superior */}
        <div className="grid grid-cols-1 min-[640px]:grid-cols-[1.3fr_1fr_1fr] gap-10 mb-12">

          {/* Marca */}
          <div className="flex flex-col gap-3">
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollTo("inicio"); }}
              className="flex items-center gap-1 no-underline select-none w-fit"
            >
              <span className={`font-mono font-semibold text-[16px] tracking-tight ${nameC}`}>
                <span className={bracket}>{`{`}</span>
                EJ
                <span className={bracket}>{`}`}</span>
              </span>
              <span className={`font-mono text-[13px] font-normal ${tagline}`}>.dev</span>
            </a>
            <p className={`text-[13.5px] leading-[1.65] max-w-[280px] ${tagline}`}>
              {t("footer.tagline")}
            </p>
            <div className={`flex items-center gap-1.5 text-[12.5px] font-medium ${availText}`}>
              <span className={`w-[6px] h-[6px] rounded-full flex-shrink-0 animate-pulse ${availDot}`} />
              {t("contact.disponibilidad")}
            </div>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3">
            <p className={`font-mono text-[11px] font-medium tracking-[0.08em] uppercase ${navLabel}`}>
              {t("footer.navegacion")}
            </p>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {NAV_ITEMS_KEYS.map(({ key, section }) => (
                <li key={section}>
                  <button
                    onClick={() => scrollTo(section)}
                    className={`text-[13.5px] bg-transparent border-none p-0 cursor-pointer transition-colors duration-200 ${navLink}`}
                  >
                    {t(key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto / social */}
          <div className="flex flex-col gap-3">
            <p className={`font-mono text-[11px] font-medium tracking-[0.08em] uppercase ${navLabel}`}>
              {t("footer.conecta")}
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  title={label}
                  aria-label={label}
                  className={`
                    flex items-center justify-center w-9 h-9
                    rounded-lg border transition-all duration-200
                    ${socialWrap}
                  `}
                >
                  {icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:jimenezelkin02@gmail.com"
              className={`text-[13.5px] no-underline transition-colors duration-200 ${navLink}`}
            >
              jimenezelkin02@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className={`border-t ${divider}`} />

        {/* Bloque inferior */}
        <div className="flex flex-col-reverse min-[640px]:flex-row items-center justify-between gap-4 pt-6">
          <p className={`text-[12.5px] ${copyText}`}>
            © {year} Elkin Jiménez. {t("footer.copyright")}
          </p>

          <div className="flex items-center gap-4">
            <p className={`text-[12.5px] flex items-center gap-1 ${madeWithC}`}>
              {t("footer.desarrollado")}
              <span className={`${heart} text-[13px]`}>♥</span>
              {t("footer.stack_suffix")}
            </p>

            <button
              onClick={() => scrollTo("inicio")}
              aria-label="Volver arriba"
              title="Volver arriba"
              className={`
                flex items-center justify-center w-8 h-8
                rounded-lg border transition-all duration-200 cursor-pointer
                ${topBtn}
              `}
            >
              <ArrowUpIcon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}