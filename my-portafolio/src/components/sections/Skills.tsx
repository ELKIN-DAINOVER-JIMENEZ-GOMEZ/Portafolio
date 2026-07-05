import { SKILL_CATEGORIES, SKILL_STATS } from "../../data/skills";
import type { SkillCategory, Skill, SkillLevel } from "../../data/skills";
import { useLanguage } from "../../i18n/useLanguage";

// ── Props ─────────────────────────────────────────────────────────────────────
interface SkillsProps {
  isDark: boolean;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function levelStyles(level: SkillLevel, isDark: boolean): string {
  const map: Record<SkillLevel, { dark: string; light: string }> = {
    principal:  {
      dark:  "bg-[#58A6FF]/10 text-[#58A6FF]",
      light: "bg-[#1D6FA8]/10 text-[#1D6FA8]",
    },
    intermedio: {
      dark:  "bg-[#3FB950]/10 text-[#3FB950]",
      light: "bg-[#1A7F37]/10 text-[#1A7F37]",
    },
    "básico":   {
      dark:  "bg-[#8B949E]/10 text-[#8B949E]",
      light: "bg-[#57606A]/10 text-[#57606A]",
    },
  };
  return isDark ? map[level].dark : map[level].light;
}

// Función para traducir niveles
function getLevelTranslation(level: SkillLevel, t: (key: string) => string): string {
  const map: Record<SkillLevel, string> = {
    principal: t("skills.principal"),
    intermedio: t("skills.intermedio"),
    "básico": t("skills.basico"),
  };
  return map[level];
}

// ── Sub-componente: fila de una skill ─────────────────────────────────────────
function SkillRow({
  skill,
  accent,
  index,
  isDark,
  t,
}: {
  skill: Skill;
  accent: string;
  index: number;
  isDark: boolean;
  t: (key: string) => string;
}) {
  const nameColor  = isDark ? "text-[#C9D1D9]" : "text-[#1F2328]";
  const trackColor = isDark ? "bg-[#30363D]/80" : "bg-[#D0D7DE]/80";

  return (
    <div className="flex flex-col gap-[5px]">
      {/* Nombre + badge de nivel */}
      <div className="flex items-center justify-between">
        <span className={`text-[13px] font-medium ${nameColor}`}>
          {skill.name}
        </span>
        <span
          className={`
            font-mono text-[10.5px] font-medium
            px-[7px] py-[2px] rounded
            ${levelStyles(skill.level, isDark)}
          `}
        >
          {getLevelTranslation(skill.level, t)}
        </span>
      </div>

      {/* Barra de progreso */}
      <div className={`h-[4px] rounded-full overflow-hidden ${trackColor}`}>
        <div
          className="h-full rounded-full origin-left"
          style={{
            width: `${skill.pct}%`,
            background: accent,
            animation: `growBar 0.7s ease ${index * 0.06}s both`,
          }}
        />
      </div>
    </div>
  );
}

// ── Sub-componente: card de categoría ─────────────────────────────────────────
function SkillCard({
  category,
  isDark,
  t,
}: {
  category: SkillCategory;
  isDark: boolean;
  t: (key: string) => string;
}) {
  const cardBg     = isDark
    ? "bg-[#161B22]/50 border-[#30363D]/80 hover:border-[#58A6FF]/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
    : "bg-white/70 border-[#D0D7DE]/80 hover:border-[#1D6FA8]/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]";

  const catTitle   = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";
  const countColor = isDark ? "text-[#8B949E]" : "text-[#57606A]";

  return (
    <div
      className={`
        relative rounded-2xl border p-6 overflow-hidden
        transition-all duration-250 hover:-translate-y-[2px] group
        ${cardBg}
      `}
    >
      {/* Línea de acento izquierda */}
      <div
        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full opacity-70"
        style={{ background: category.accent }}
      />

      {/* Brillo hover sutil */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${category.accent}08 0%, transparent 60%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-2.5 mb-5 relative">
        <div
          className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center text-base flex-shrink-0"
          style={{ background: category.iconBg }}
        >
          {category.icon}
        </div>
        <span className={`text-[14px] font-semibold tracking-[-0.01em] ${catTitle}`}>
          {category.category}
        </span>
        <span className={`font-mono text-[11px] ml-auto ${countColor}`}>
          {category.skills.length}
        </span>
      </div>

      {/* Lista de skills */}
      <div className="flex flex-col gap-3 relative">
        {category.skills.map((skill, i) => (
          <SkillRow
            key={skill.name}
            skill={skill}
            accent={category.accent}
            index={i}
            isDark={isDark}
            t={t}
          />
        ))}
      </div>
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function Skills({ isDark }: SkillsProps) {
  const { t } = useLanguage();
  const bg       = isDark ? "bg-[#0D1117]"   : "bg-[#F6F8FA]";
  const eyebrow  = isDark ? "text-[#58A6FF]" : "text-[#1D6FA8]";
  const title    = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";
  const sub      = isDark ? "text-[#8B949E]" : "text-[#57606A]";
  const divider  = isDark ? "border-[#30363D]/50" : "border-[#D0D7DE]/60";
  const statNum  = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";
  const statSuf  = isDark ? "text-[#58A6FF]" : "text-[#1D6FA8]";
  const statLab  = isDark ? "text-[#8B949E]" : "text-[#57606A]";

  return (
    <section
      id="skills"
      className={`px-5 py-24 transition-colors duration-500 ${bg}`}
    >
      {/*
       * Animación de barras — agregar en index.css junto a los @keyframes existentes:
       *
       * @keyframes growBar {
       *   from { transform: scaleX(0); }
       *   to   { transform: scaleX(1); }
       * }
       */}

      <div className="max-w-[900px] mx-auto">

        {/* Header */}
        <p className={`font-mono text-[11px] font-medium tracking-[0.1em] uppercase mb-3 ${eyebrow}`}>
          // {t("skills.titulo").toLowerCase()}
        </p>
        <h2 className={`text-[36px] font-bold tracking-[-0.03em] mb-2.5 ${title}`}>
          {t("skills.titulo")}
        </h2>
        <p className={`text-[15.5px] leading-[1.65] max-w-[480px] mb-12 ${sub}`}>
          {t("skills.subtitulo")}
        </p>

        {/* Grid de categorías */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
        >
          {SKILL_CATEGORIES.map((cat) => (
            <SkillCard key={cat.category} category={cat} isDark={isDark} t={t} />
          ))}
        </div>

        {/* Stats */}
        <div className={`flex gap-8 flex-wrap mt-12 pt-8 border-t ${divider}`}>
          {SKILL_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className={`text-[28px] font-bold tracking-[-0.04em] ${statNum}`}>
                {stat.num}
                <span className={statSuf}>{stat.suffix}</span>
              </span>
              <span className={`text-[12.5px] ${statLab}`}>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}