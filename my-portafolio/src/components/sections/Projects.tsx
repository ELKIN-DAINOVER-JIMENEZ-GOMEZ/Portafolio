import { PROJECTS, type Project } from "../../data/projects";
import { useLanguage } from "../../i18n/useLanguage";

// ── Props ─────────────────────────────────────────────────────────────────────
interface ProjectsProps {
  isDark: boolean;
}

// ── Iconos ────────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

// ── Componente ProjectCard ────────────────────────────────────────────────────
function ProjectCard({
  project,
  isDark,
  t,
  language,
}: {
  project: Project;
  isDark: boolean;
  t: (key: string) => string;
  language: "es" | "en";
}) {
  const iconRing: Record<Project["iconColor"], string> = {
    blue:   isDark ? "ring-[#58A6FF]/15"  : "ring-[#1D6FA8]/15",
    green:  isDark ? "ring-[#3FB950]/15"  : "ring-[#1A7F37]/15",
    purple: isDark ? "ring-[#A371F7]/15"  : "ring-[#8250DF]/15",
    amber:  isDark ? "ring-[#F0B429]/15"  : "ring-[#B45309]/15",
  };

  const accent     = isDark ? "#58A6FF" : "#1D6FA8";
  const accentBg   = isDark
    ? "bg-[#58A6FF]/10 border-[#58A6FF]/20 text-[#58A6FF]"
    : "bg-[#1D6FA8]/10 border-[#1D6FA8]/20 text-[#1D6FA8]";
  const greenBadge = isDark
    ? "bg-[#3FB950]/10 border-[#3FB950]/20 text-[#3FB950]"
    : "bg-[#1A7F37]/10 border-[#1A7F37]/20 text-[#1A7F37]";
  const dotColor   = isDark ? "bg-[#3FB950]" : "bg-[#1A7F37]";

  const cardBase = `
    relative flex flex-col gap-4 rounded-2xl border p-6
    transition-all duration-250 overflow-hidden group
    ${
      isDark
        ? "bg-[#161B22]/60 border-[#30363D]/80 hover:border-[#58A6FF]/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(88,166,255,0.08)]"
        : "bg-white/70 border-[#D0D7DE]/80 hover:border-[#1D6FA8]/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08),0_0_0_1px_rgba(29,111,168,0.06)]"
    }
    hover:-translate-y-[3px]
  `;

  const titleColor = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";
  const mutedColor = isDark ? "text-[#8B949E]" : "text-[#57606A]";
  const pillBorder = isDark
    ? "border-[#30363D]/80 text-[#8B949E] group-hover:border-[#58A6FF]/20 group-hover:text-[#C9D1D9]"
    : "border-[#D0D7DE]/80 text-[#57606A] group-hover:border-[#1D6FA8]/20 group-hover:text-[#1F2328]";
  const btnPrimary = isDark
    ? "text-[#58A6FF] border-[#58A6FF]/30 bg-[#58A6FF]/6 hover:bg-[#58A6FF]/12"
    : "text-[#1D6FA8] border-[#1D6FA8]/30 bg-[#1D6FA8]/6 hover:bg-[#1D6FA8]/12";
  const btnGhost   = isDark
    ? "text-[#8B949E] border-[#30363D]/80 hover:text-[#E6EDF3] hover:border-[#58A6FF]/30 hover:bg-[#58A6FF]/5"
    : "text-[#57606A] border-[#D0D7DE]/80 hover:text-[#1F2328] hover:border-[#1D6FA8]/30 hover:bg-[#1D6FA8]/5";

  return (
    <div className={cardBase}>
      {/* Línea superior en cards destacadas */}
      {project.featured && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
          style={{
            background: `linear-gradient(90deg, ${accent}, ${isDark ? "#3FB950" : "#1A7F37"})`,
          }}
        />
      )}

      {/* Brillo hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ background: "linear-gradient(135deg, rgba(88,166,255,0.04) 0%, transparent 60%)" }}
      />

      {/* Imagen del proyecto */}
      <div
        className={`
          relative -mx-6 -mt-6 mb-1 h-80 overflow-hidden rounded-t-2xl
          ring-1 ${iconRing[project.iconColor]}
          ${isDark ? "bg-[#0D1117]" : "bg-[#EAEEF2]"}
        `}
      >
        <img
          src={project.image}
          alt={`Captura de pantalla de ${project.title[language]}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
        {/* Degradado inferior */}
        <div
          className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
          style={{
            background: isDark
              ? "linear-gradient(to top, rgba(22,27,34,0.9), transparent)"
              : "linear-gradient(to top, rgba(255,255,255,0.9), transparent)",
          }}
        />
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
          {project.featured && (
            <span className={`font-mono text-[10px] font-semibold tracking-[0.06em] uppercase px-2 py-1 rounded border backdrop-blur-sm ${accentBg}`}>
              {t("projects.destacado")}
            </span>
          )}
          {project.live && (
            <span className={`text-[10.5px] font-medium px-2 py-1 rounded border backdrop-blur-sm flex items-center gap-1 ${greenBadge}`}>
              <span className={`w-[5px] h-[5px] rounded-full animate-pulse ${dotColor}`} />
              {t("projects.en_produccion")}
            </span>
          )}
        </div>
      </div>

      {/* Título */}
      <h3 className={`text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] relative ${titleColor}`}>
        {project.title[language]}
      </h3>

      {/* Tagline */}
      <p className={`text-[13.5px] leading-[1.6] relative ${mutedColor}`}>
        {project.tagline[language]}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-1.5 relative">
        {project.highlights[language].map((h, i) => (
          <li key={i} className={`flex items-start gap-2 text-[12.5px] leading-[1.5] ${mutedColor}`}>
            <span
              className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[5px] opacity-60"
              style={{ background: accent }}
            />
            {h}
          </li>
        ))}
      </ul>

      {/* Stack pills */}
      <div className="flex flex-wrap gap-1.5 mt-auto relative">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className={`font-mono text-[11px] font-medium px-2 py-1 rounded-md border bg-transparent transition-all duration-200 ${pillBorder}`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer: botones */}
      <div className="flex gap-2.5 flex-wrap relative">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-[12.5px] font-medium px-3 py-1.5 rounded-lg border no-underline transition-all duration-200 ${btnPrimary}`}
          >
            <GithubIcon />
            {project.githubLabel ?? "GitHub"}
          </a>
        )}
        {project.githubAlt && (
          <a
            href={project.githubAlt}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-[12.5px] font-medium px-3 py-1.5 rounded-lg border no-underline transition-all duration-200 ${btnGhost}`}
          >
            <GithubIcon />
            {project.githubAltLabel ?? "GitHub"}
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-[12.5px] font-medium px-3 py-1.5 rounded-lg border no-underline transition-all duration-200 ${btnGhost}`}
          >
            {project.live ? <ExternalIcon /> : <GlobeIcon />}
            {t("projects.sitio_web")}
          </a>
        )}
      </div>
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function Projects({ isDark }: ProjectsProps) {
  const { t, language } = useLanguage();
  const eyebrow = isDark ? "text-[#58A6FF]" : "text-[#1D6FA8]";
  const title   = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";
  const sub     = isDark ? "text-[#8B949E]" : "text-[#57606A]";

  return (
    <section
      id="proyectos"
      className={`px-5 py-24 transition-colors duration-500 ${isDark ? "bg-[#0D1117]" : "bg-[#F6F8FA]"}`}
    >
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <p className={`font-mono text-[11px] font-medium tracking-[0.1em] uppercase mb-3 ${eyebrow}`}>
          // {t("projects.titulo").toLowerCase()}
        </p>
        <h2 className={`text-[36px] font-bold tracking-[-0.03em] mb-2.5 ${title}`}>
          {t("projects.heading")}
        </h2>
        <p className={`text-[15.5px] leading-[1.65] max-w-[480px] mb-12 ${sub}`}>
          {t("projects.subtitulo")}
        </p>

        {/* Grid */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} t={t} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}