import { useState, useEffect } from "react";
import cvPdf from "../../assets/cv/Hoja de vida Elkin B.pdf";

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 1v9M4 7l4 4 4-4M2 13h12" />
  </svg>
);

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="3" y1="5" x2="15" y2="5" />
    <line x1="3" y1="9" x2="15" y2="9" />
    <line x1="3" y1="13" x2="15" y2="13" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="3" y1="3" x2="15" y2="15" />
    <line x1="15" y1="3" x2="3" y2="15" />
  </svg>
);

const navItems = [
  { label: "Inicio",     section: "inicio"    },
  { label: "Proyectos",  section: "proyectos" },
  { label: "Skills",     section: "skills"    },
  { label: "Sobre mí",   section: "sobre-mi"  },
  { label: "Contacto",   section: "contacto"  },
];

interface NavbarProps {
  activeSection?: string;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ activeSection = "inicio", isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  // ── Detectar scroll ──────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Aplicar clase dark/light en <html> ───────────────────────────────────────
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  // ── Cerrar menú móvil al hacer resize ────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 660) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // ── Clases dinámicas según tema ───────────────────────────────────────────────
  const navBase = `
    fixed top-5 left-1/2 -translate-x-1/2 z-50
    w-[calc(100%-24px)] max-w-[1120px]
    transition-all duration-300
  `;

  const innerBase = `
    flex items-center justify-between
    px-7 h-[68px] rounded-[20px]
    border backdrop-blur-xl
    transition-all duration-300
  `;

  const innerTheme = isDark
    ? scrolled
      ? "bg-[#161B22]/95 border-[#58A6FF]/20 shadow-[0_0_0_1px_rgba(88,166,255,0.1),0_8px_32px_rgba(0,0,0,0.5)]"
      : "bg-[#161B22]/75 border-[#30363D]/80 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    : scrolled
      ? "bg-white/95 border-[#1D6FA8]/20 shadow-[0_0_0_1px_rgba(29,111,168,0.1),0_8px_32px_rgba(0,0,0,0.1)]"
      : "bg-white/80 border-[#D0D7DE]/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)]";

  const linkBase = "px-4 py-2 text-[14.5px] rounded-lg transition-all duration-200 relative tracking-wide";

  const linkActive = isDark
    ? "text-[#58A6FF] bg-[#58A6FF]/10 after:content-[''] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-[#58A6FF] after:rounded-full after:opacity-70"
    : "text-[#1D6FA8] bg-[#1D6FA8]/10 after:content-[''] after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-[#1D6FA8] after:rounded-full after:opacity-70";

  const linkInactive = isDark
    ? "text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#58A6FF]/7"
    : "text-[#57606A] hover:text-[#1F2328] hover:bg-[#1D6FA8]/7";

  const mobileMenuTheme = isDark
    ? "bg-[#161B22]/95 border-[#30363D]/80"
    : "bg-white/95 border-[#D0D7DE]/80";

  const mobileLinkActive = isDark ? "text-[#58A6FF] bg-[#58A6FF]/10" : "text-[#1D6FA8] bg-[#1D6FA8]/10";
  const mobileLinkInactive = isDark ? "text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#58A6FF]/8" : "text-[#57606A] hover:text-[#1F2328] hover:bg-[#1D6FA8]/8";

  const badgeTheme = isDark
    ? "text-[#3FB950] bg-[#3FB950]/10 border border-[#3FB950]/20"
    : "text-[#1A7F37] bg-[#1A7F37]/10 border border-[#1A7F37]/20";

  const cvBtnTheme = isDark
    ? "text-[#58A6FF] bg-[#58A6FF]/8 border border-[#58A6FF]/30 hover:bg-[#58A6FF]/15 hover:border-[#58A6FF]/50 hover:text-[#79BFFF]"
    : "text-[#1D6FA8] bg-[#1D6FA8]/8 border border-[#1D6FA8]/30 hover:bg-[#1D6FA8]/15 hover:border-[#1D6FA8]/50";

  const themeBtnTheme = isDark
    ? "text-[#F0B429] bg-[#F0B429]/8 border border-[#F0B429]/25 hover:bg-[#F0B429]/15 hover:border-[#F0B429]/40"
    : "text-[#6B7280] bg-[#6B7280]/8 border border-[#6B7280]/25 hover:bg-[#6B7280]/15 hover:border-[#6B7280]/40";

  const menuBtnTheme = isDark
    ? "border-[#30363D]/90 text-[#8B949E] hover:border-[#58A6FF]/30 hover:text-[#58A6FF] hover:bg-[#58A6FF]/5"
    : "border-[#D0D7DE]/90 text-[#57606A] hover:border-[#1D6FA8]/30 hover:text-[#1D6FA8] hover:bg-[#1D6FA8]/5";

  const mobileFooterTheme = isDark ? "border-[#30363D]/60" : "border-[#D0D7DE]/60";

  return (
    <>
      {/* ── Navbar principal ── */}
      <nav className={navBase}>
        <div className={`${innerBase} ${innerTheme}`}>

          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); scrollTo("inicio"); }}
            className="flex items-center gap-1 no-underline select-none group"
          >
            <span className={`font-mono font-semibold text-[18px] tracking-tight ${isDark ? "text-[#E6EDF3]" : "text-[#1F2328]"}`}>
              <span className={isDark ? "text-[#58A6FF]" : "text-[#1D6FA8]"}>{`{`}</span>
              EJ
              <span className={isDark ? "text-[#58A6FF]" : "text-[#1D6FA8]"}>{`}`}</span>
            </span>
            <span className={`font-mono text-[14px] font-normal ${isDark ? "text-[#8B949E]" : "text-[#57606A]"}`}>.dev</span>
            {/* Punto disponibilidad en logo */}
            <span className="relative inline-block w-2 h-2 ml-1 -top-px">
              <span className={`absolute inset-0 rounded-full animate-ping opacity-40 ${isDark ? "bg-[#3FB950]" : "bg-[#1A7F37]"}`} />
              <span className={`relative block w-2 h-2 rounded-full ${isDark ? "bg-[#3FB950]" : "bg-[#1A7F37]"}`} />
            </span>
          </a>

          {/* Links — ocultos en mobile */}
          <ul className="hidden min-[660px]:flex items-center gap-1.5 list-none m-0 p-0">
            {navItems.map(({ label, section }) => (
              <li key={section}>
                <button
                  onClick={() => scrollTo(section)}
                  className={`${linkBase} ${activeSection === section ? linkActive : linkInactive}`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Derecha: badge + theme toggle + CV + hamburguesa */}
          <div className="flex items-center gap-3">

            {/* Badge disponible — solo desktop */}
            <div className={`hidden min-[820px]:flex items-center gap-1.5 text-[13px] font-medium rounded-full px-3 py-1.5 whitespace-nowrap ${badgeTheme}`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? "bg-[#3FB950]" : "bg-[#1A7F37]"}`} />
              Disponible
            </div>

            {/* Theme toggle */}
            <button
              onClick={onToggleTheme}
              title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className={`
                flex items-center justify-center w-10 h-10
                rounded-[10px] border text-sm
                transition-all duration-200 cursor-pointer
                ${themeBtnTheme}
              `}
            >
              <span
                className="transition-transform duration-300"
                style={{ transform: isDark ? "rotate(0deg)" : "rotate(180deg)" }}
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </span>
            </button>

            {/* CV button — solo desktop */}
            <a
              href={cvPdf}
              download
              className={`
                hidden min-[660px]:flex items-center gap-1.5
                px-4 py-2 text-[14px] font-medium
                rounded-[10px] border no-underline
                transition-all duration-200 hover:-translate-y-px
                ${cvBtnTheme}
              `}
            >
              <DownloadIcon />
              Descargar CV
            </a>

            {/* Hamburguesa — solo mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
              className={`
                min-[660px]:hidden flex items-center justify-center
                w-10 h-10 rounded-[10px] border
                transition-all duration-200 cursor-pointer
                ${menuBtnTheme}
              `}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Menú móvil ── */}
      {menuOpen && (
        <div
          className={`
            fixed top-[97px] left-1/2 -translate-x-1/2 z-40
            w-[calc(100%-24px)] max-w-[1120px]
            border rounded-[20px] backdrop-blur-xl
            shadow-[0_8px_32px_rgba(0,0,0,0.4)]
            animate-[slideDown_0.2s_ease]
            min-[660px]:hidden
            ${mobileMenuTheme}
          `}
          style={{ animation: "slideDown 0.2s ease" }}
        >
          <style>{`
            @keyframes slideDown {
              from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
              to   { opacity: 1; transform: translateX(-50%) translateY(0); }
            }
          `}</style>

          <ul className="list-none m-0 p-2">
            {navItems.map(({ label, section }) => (
              <li key={section}>
                <button
                  onClick={() => scrollTo(section)}
                  className={`
                    w-full text-left flex items-center gap-2.5
                    px-4 py-3 text-[15px] rounded-lg
                    transition-all duration-150 cursor-pointer
                    ${activeSection === section ? mobileLinkActive : mobileLinkInactive}
                  `}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className={`border-t px-4 py-3 flex items-center justify-between ${mobileFooterTheme}`}>
            <div className={`flex items-center gap-1.5 text-[12px] font-medium rounded-full px-2.5 py-1 ${badgeTheme}`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? "bg-[#3FB950]" : "bg-[#1A7F37]"}`} />
              Disponible para proyectos
            </div>
            <a
              href={cvPdf}
              download
              className={`flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-lg border no-underline transition-all duration-200 ${cvBtnTheme}`}
            >
              <DownloadIcon />
              CV
            </a>
          </div>
        </div>
      )}
    </>
  );
}