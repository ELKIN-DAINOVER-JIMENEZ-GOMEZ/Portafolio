import { useState, type FormEvent } from "react";

// ── Props ─────────────────────────────────────────────────────────────────────
interface ContactProps {
  isDark: boolean;
}

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

const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const AlertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// ── Datos estáticos ───────────────────────────────────────────────────────────
const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    sub: "elkin-jiménez",
    href: "https://linkedin.com/in/elkin-jiménez-a97842300",
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: "GitHub",
    sub: "ELKIN-DAINOVER-JIMENEZ-GOMEZ",
    href: "https://github.com/ELKIN-DAINOVER-JIMENEZ-GOMEZ",
    icon: <GithubIcon />,
    external: true,
  },
  {
    label: "WhatsApp",
    sub: "+57 314 855 1823",
    href: "https://wa.me/573148551823",
    icon: <WhatsAppIcon />,
    external: true,
  },
  {
    label: "Email",
    sub: "jimenezelkin02@gmail.com",
    href: "mailto:jimenezelkin02@gmail.com",
    icon: <EmailIcon />,
    external: false,
  },
];

type Status = "idle" | "sending" | "sent" | "error";

// ── Componente ────────────────────────────────────────────────────────────────
export default function Contact({ isDark }: ContactProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // ── Paletas ────────────────────────────────────────────────────────────────
  const bg        = isDark ? "bg-[#0D1117]"   : "bg-[#F6F8FA]";
  const eyebrow   = isDark ? "text-[#58A6FF]" : "text-[#1D6FA8]";
  const titleC    = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";
  const sub       = isDark ? "text-[#8B949E]" : "text-[#57606A]";
  const muted     = isDark ? "text-[#8B949E]" : "text-[#57606A]";

  const cardBg    = isDark
    ? "bg-[#161B22]/60 border-[#30363D]/80"
    : "bg-white/70 border-[#D0D7DE]/80";

  const linkCardBg = isDark
    ? "bg-[#161B22]/50 border-[#30363D]/80 hover:border-[#58A6FF]/30 hover:bg-[#58A6FF]/5"
    : "bg-white/60 border-[#D0D7DE]/80 hover:border-[#1D6FA8]/30 hover:bg-[#1D6FA8]/5";
  const linkIconWrap = isDark
    ? "bg-[#58A6FF]/8 text-[#58A6FF] border-[#58A6FF]/15"
    : "bg-[#1D6FA8]/8 text-[#1D6FA8] border-[#1D6FA8]/15";
  const linkLabel  = isDark ? "text-[#E6EDF3]" : "text-[#1F2328]";
  const linkSub    = isDark ? "text-[#8B949E]" : "text-[#57606A]";

  const availWrap  = isDark
    ? "bg-[#3FB950]/8 border-[#3FB950]/20"
    : "bg-[#1A7F37]/8 border-[#1A7F37]/20";
  const availText  = isDark ? "text-[#3FB950]" : "text-[#1A7F37]";
  const availDot   = isDark ? "bg-[#3FB950]"   : "bg-[#1A7F37]";
  const availMuted = isDark ? "text-[#8B949E]" : "text-[#57606A]";

  const labelC     = isDark ? "text-[#C9D1D9]" : "text-[#1F2328]";
  const inputBase  = isDark
    ? "bg-[#0D1117]/60 border-[#30363D]/90 text-[#E6EDF3] placeholder:text-[#8B949E]/60 focus:border-[#58A6FF]/50 focus:bg-[#0D1117]"
    : "bg-white/80 border-[#D0D7DE]/90 text-[#1F2328] placeholder:text-[#57606A]/50 focus:border-[#1D6FA8]/50 focus:bg-white";

  const btnPrimary = isDark
    ? "bg-[#58A6FF] text-[#0D1117] hover:bg-[#79BFFF] hover:shadow-[0_8px_20px_rgba(88,166,255,0.25)] disabled:opacity-60 disabled:hover:translate-y-0"
    : "bg-[#1D6FA8] text-white hover:bg-[#1A5F91] hover:shadow-[0_8px_20px_rgba(29,111,168,0.2)] disabled:opacity-60 disabled:hover:translate-y-0";

  const sentWrap    = isDark
    ? "bg-[#3FB950]/8 border-[#3FB950]/25 text-[#3FB950]"
    : "bg-[#1A7F37]/8 border-[#1A7F37]/25 text-[#1A7F37]";
  const errorWrap   = isDark
    ? "bg-[#F85149]/8 border-[#F85149]/25 text-[#F85149]"
    : "bg-[#CF222E]/8 border-[#CF222E]/25 text-[#CF222E]";

  // ── Envío del formulario ─────────────────────────────────────────────────────
  // Conecta aquí tu servicio (EmailJS, Formspree, backend propio, etc.)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    try {
      // Ejemplo con EmailJS — reemplaza por tus IDs reales:
      // await emailjs.send("SERVICE_ID", "TEMPLATE_ID", form, "PUBLIC_KEY");
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className={`px-5 py-24 transition-colors duration-500 ${bg}`}
    >
      <div className="max-w-[900px] mx-auto">

        {/* Header */}
        <p className={`font-mono text-[11px] font-medium tracking-[0.1em] uppercase mb-3 ${eyebrow}`}>
          // contacto
        </p>
        <h2 className={`text-[36px] font-bold tracking-[-0.03em] mb-2.5 ${titleC}`}>
          Hablemos de tu próximo proyecto
        </h2>
        <p className={`text-[15.5px] leading-[1.65] max-w-[480px] mb-12 ${sub}`}>
          ¿Tienes una idea, una vacante o un problema técnico interesante?
          Escríbeme y te respondo lo antes posible.
        </p>

        {/* Grid dos columnas */}
        <div className="grid grid-cols-1 min-[720px]:grid-cols-[0.9fr_1.1fr] gap-5 items-start">

          {/* ── Columna izquierda: links + disponibilidad ── */}
          <div className="flex flex-col gap-3">

            {/* Disponibilidad */}
            <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 ${availWrap}`}>
              <span className="relative flex w-2 h-2 flex-shrink-0">
                <span className={`absolute inset-0 rounded-full animate-ping opacity-40 ${availDot}`} />
                <span className={`relative block w-2 h-2 rounded-full ${availDot}`} />
              </span>
              <div className="flex flex-col">
                <span className={`text-[13.5px] font-semibold ${availText}`}>
                  Disponible para nuevas oportunidades
                </span>
                <span className={`text-[12px] ${availMuted}`}>
                  Remoto · Híbrido · Presencial en Colombia
                </span>
              </div>
            </div>

            {/* Links de contacto */}
            {CONTACT_LINKS.map(({ label, sub: subLabel, href, icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`
                  flex items-center gap-3 rounded-2xl border px-4 py-3.5
                  no-underline transition-all duration-200
                  ${linkCardBg}
                `}
              >
                <span className={`flex items-center justify-center w-9 h-9 rounded-lg border flex-shrink-0 ${linkIconWrap}`}>
                  {icon}
                </span>
                <div className="flex flex-col min-w-0">
                  <span className={`text-[13.5px] font-semibold ${linkLabel}`}>
                    {label}
                  </span>
                  <span className={`text-[12px] truncate ${linkSub}`}>
                    {subLabel}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* ── Columna derecha: formulario ── */}
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 rounded-2xl border p-6 ${cardBg}`}
          >
            {/* Nombre */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className={`text-[13px] font-medium ${labelC}`}>
                Nombre
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre"
                className={`
                  rounded-[10px] border px-3.5 py-2.5 text-[14px]
                  outline-none transition-all duration-200
                  ${inputBase}
                `}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className={`text-[13px] font-medium ${labelC}`}>
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@email.com"
                className={`
                  rounded-[10px] border px-3.5 py-2.5 text-[14px]
                  outline-none transition-all duration-200
                  ${inputBase}
                `}
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className={`text-[13px] font-medium ${labelC}`}>
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Cuéntame sobre tu proyecto o vacante..."
                className={`
                  rounded-[10px] border px-3.5 py-2.5 text-[14px]
                  outline-none transition-all duration-200 resize-none
                  ${inputBase}
                `}
              />
            </div>

            {/* Botón enviar */}
            <button
              type="submit"
              disabled={status === "sending"}
              className={`
                flex items-center justify-center gap-2
                px-5 py-3 rounded-[10px] mt-1
                text-[14px] font-semibold
                border-none cursor-pointer
                transition-all duration-200 hover:-translate-y-px
                disabled:cursor-not-allowed
                ${btnPrimary}
              `}
            >
              {status === "sending" ? (
                "Enviando..."
              ) : (
                <>
                  <SendIcon />
                  Enviar mensaje
                </>
              )}
            </button>

            {/* Estado: enviado */}
            {status === "sent" && (
              <div className={`flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-[13px] font-medium ${sentWrap}`}>
                <CheckIcon />
                Mensaje enviado. Te responderé pronto.
              </div>
            )}

            {/* Estado: error */}
            {status === "error" && (
              <div className={`flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-[13px] font-medium ${errorWrap}`}>
                <AlertIcon />
                Algo salió mal. Intenta de nuevo o escríbeme por WhatsApp.
              </div>
            )}

            {/* Nota */}
            <p className={`text-[11.5px] leading-[1.5] ${muted}`}>
              Al enviar este formulario aceptas que use tus datos únicamente
              para responder tu mensaje.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}