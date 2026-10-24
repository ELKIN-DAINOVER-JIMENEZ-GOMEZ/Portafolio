import { SKILL_CATEGORIES, SKILL_STATS } from "../../data/skills";
import type { SkillCategory, Skill } from "../../data/skills";
import { useLanguage } from "../../i18n/useLanguage";

// ── Props ─────────────────────────────────────────────────────────────────────
interface SkillsProps {
  isDark: boolean;
}

type TFn = (key: string) => string;

// ── Chip de una skill ─────────────────────────────────────────────────────────
function SkillChip({
  skill,
  accent,
  isDark,
}: {
  skill: Skill;
  accent: string;
  isDark: boolean;
}) {
  const chip = isDark
    ? "bg-[#0D1117]/70 border-[#30363D] text-[#C9D1D9] hover:border-[#58A6FF]/40"
    : "bg-[#F6F8FA] border-[#D0D7DE] text-[#1F2328] hover:border-[#1D6FA8]/40";

  return (
    <span
      className={`
        inline-flex items-center gap-2 px-3 py-[6px] rounded-lg border
        text-[12.5px] font-medium transition-colors duration-200 cursor-default
        ${chip}
      `}
    >
      <span
        className="w-[7px] h-[7px] rounded-full flex-shrink-0"
        style={{ background: accent }}
      />
      {skill.name}
    </span>
  );
}

// ── Card de categoría ─────────────────────────────────────────────────────────
function SkillCard({
  category,
  isDark,
  t,
}: {
  category: SkillCategory;
  isDark: boolean;
  t: TFn;
}) {
  const cardBg = isDark
    ? "bg-[#161B22]/50 border-[#30363D]/80 hover:border-[#58A6FF]/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
    : "bg-white/70 border-[#D0D7DE]/80 hover:border-[#1D6FA8]/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]";

  const catTitle = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";

  return (
    <div
      className={`
        relative rounded-2xl border p-6 overflow-hidden
        transition-all duration-250 hover:-translate-y-[2px]
        ${cardBg}
      `}
    >
      {/* Línea de acento izquierda */}
      <div
        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full opacity-70"
        style={{ background: category.accent }}
      />

      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <div
          className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center text-base flex-shrink-0"
          style={{ background: category.iconBg }}
        >
          {category.icon}
        </div>
        <span className={`text-[14px] font-semibold tracking-[-0.01em] ${catTitle}`}>
          {t(`skills.${category.key}`)}
        </span>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillChip
            key={skill.name}
            skill={skill}
            accent={category.accent}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function Skills({ isDark }: SkillsProps) {
  const { t } = useLanguage();
  const bg      = isDark ? "bg-[#0D1117]"   : "bg-[#F6F8FA]";
  const eyebrow = isDark ? "text-[#58A6FF]" : "text-[#1D6FA8]";
  const title   = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";
  const sub     = isDark ? "text-[#8B949E]" : "text-[#57606A]";
  const divider = isDark ? "border-[#30363D]/50" : "border-[#D0D7DE]/60";
  const statNum = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";
  const statSuf = isDark ? "text-[#58A6FF]" : "text-[#1D6FA8]";
  const statLab = isDark ? "text-[#8B949E]" : "text-[#57606A]";

  return (
    <section
      id="skills"
      className={`px-5 py-24 transition-colors duration-500 ${bg}`}
    >
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
            <SkillCard key={cat.key} category={cat} isDark={isDark} t={t} />
          ))}
        </div>

        

      </div>
    </section>
  );
}