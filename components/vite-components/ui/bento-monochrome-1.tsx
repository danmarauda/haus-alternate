import React, { useEffect, useMemo, useRef, useState } from "react";

const STYLE_ID = "bento3-animations";

const flows = [
  {
    id: "01",
    variant: "orbit",
    meta: "Discovery",
    title: "Signal Mapping Sprints",
    description:
      "Frame the opportunity space in under three working sessions. Signals are stacked against feasibility bands so investment is directed where impact is provable.",
    statLabel: "Scope commit",
    statValue: "48 hrs",
  },
  {
    id: "02",
    variant: "relay",
    meta: "Design",
    title: "Systemised Exploration",
    description:
      "Designers and engineers co-draft the base tokens, layouts, and flows concurrently. Every pattern lands straight into the codebase as audited primitives.",
    statLabel: "Artifacts shipped",
    statValue: "11 kits",
  },
  {
    id: "03",
    variant: "wave",
    meta: "Build",
    title: "Parallel Implementation Lanes",
    description:
      "Stories are streamed into dual delivery lanes — experiential and foundational. Automated previews review performance, accessibility, and regression deltas in real time.",
    statLabel: "Runtime delta",
    statValue: "-28%",
  },
  {
    id: "04",
    variant: "spark",
    meta: "Validation",
    title: "Predictable Release Gates",
    description:
      "Edge smoke suites, contract validation, and synthetic journeys run on each merge. Failures annotate the originating story so fixes stay localised.",
    statLabel: "Checks run",
    statValue: "87",
  },
  {
    id: "05",
    variant: "loop",
    meta: "Evolution",
    title: "Continuous Signal Loop",
    description:
      "Post-release metrics write back into the roadmap. Velocity dashboards surface orphan work, adoption, and regressions so the system compounds value.",
    statLabel: "Insights captured",
    statValue: "32/wk",
  },
];

const metrics = [
  { label: "Mean delivery", value: "19 days" },
  { label: "Release confidence", value: "99.5%" },
  { label: "Audited rollouts", value: "120+" },
];

// HAUS-adapted palettes using design system tokens
const palettes = {
  dark: {
    surface: "bg-background text-foreground",
    heading: "text-foreground",
    muted: "text-muted-foreground",
    capsule: "bg-secondary border-border text-muted-foreground",
    card: "bg-card",
    cardBorder: "border-border",
    metric: "bg-secondary border-border text-muted-foreground",
    headingAccent: "bg-secondary",
    toggleSurface: "bg-secondary",
    toggle: "border-border text-foreground",
    button: "border-border text-foreground hover:border-primary hover:bg-secondary",
    gridColor: "hsla(0, 0%, 98%, 0.06)",
    overlay:
      "linear-gradient(180deg, hsla(0, 0%, 2%, 0.92) 0%, hsla(0, 0%, 2%, 0.7) 45%, hsla(0, 0%, 2%, 0.92) 100%)",
    focusGlow: "hsla(189, 94%, 43%, 0.14)", // brand-cyan glow
    iconStroke: "hsl(0, 0%, 98%)",
    iconTrail: "hsla(189, 94%, 43%, 0.35)", // brand-cyan trail
  },
  light: {
    surface: "bg-background text-foreground",
    heading: "text-foreground",
    muted: "text-muted-foreground",
    capsule: "bg-card border-border text-muted-foreground",
    card: "bg-card",
    cardBorder: "border-border",
    metric: "bg-card border-border text-muted-foreground",
    headingAccent: "bg-secondary",
    toggleSurface: "bg-card",
    toggle: "border-border text-foreground",
    button: "border-border text-foreground hover:border-primary hover:bg-secondary",
    gridColor: "hsla(0, 0%, 9%, 0.08)",
    overlay:
      "linear-gradient(180deg, hsla(0, 0%, 98%, 0.96) 0%, hsla(0, 0%, 96%, 0.68) 45%, hsla(0, 0%, 98%, 0.96) 100%)",
    focusGlow: "hsla(189, 94%, 43%, 0.12)", // brand-cyan glow light
    iconStroke: "hsl(0, 0%, 9%)",
    iconTrail: "hsla(221, 83%, 53%, 0.3)", // brand-blue trail
  },
};

const getRootTheme = (): "dark" | "light" => {
  if (typeof document === "undefined") {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }

  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  if (root.dataset?.theme === "dark" || root.getAttribute("data-theme") === "dark") return "dark";
  if (root.classList.contains("light")) return "light";
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
};

interface FlowCardProps {
  flow: {
    id: string;
    variant: string;
    meta: string;
    title: string;
    description: string;
    statLabel: string;
    statValue: string;
  };
  palette: typeof palettes.dark;
  index: number;
  visible: boolean;
}

interface AnimatedIconProps {
  variant: string;
}

function Bento3Section() {
  const [theme, setTheme] = useState<"dark" | "light">(() => getRootTheme());
  const [introReady, setIntroReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes bento3-card-in {
        0% { opacity: 0; transform: translate3d(0, 28px, 0) scale(0.97); filter: blur(12px); }
        60% { filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      @keyframes bento3-flare {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes bento3-dash {
        0% { transform: translateX(-25%); opacity: 0; }
        30% { opacity: 1; }
        70% { opacity: 1; }
        100% { transform: translateX(25%); opacity: 0; }
      }
      @keyframes bento3-wave {
        0% { transform: translateX(-45%); }
        100% { transform: translateX(45%); }
      }
      @keyframes bento3-pulse {
        0% { transform: scale(0.8); opacity: 0.6; }
        70% { opacity: 0.05; }
        100% { transform: scale(1.35); opacity: 0; }
      }
      .bento3-root {
        padding-inline: 0;
        min-height: min(100vh, 960px);
      }
      .bento3-section {
        gap: clamp(3rem, 6vw, 5rem);
        padding-inline: clamp(1.25rem, 5vw, 3.75rem);
        width: min(100%, 72rem);
      }
      .bento3-grid {
        gap: clamp(1.25rem, 4vw, 2.5rem);
      }
      .bento3-metrics {
        gap: clamp(1rem, 3vw, 1.5rem);
        padding: clamp(1.25rem, 4vw, 2.5rem);
      }
      .bento3-footer {
        gap: clamp(1.15rem, 3.5vw, 2.4rem);
      }
      .bento3-hero-pill {
        flex-wrap: wrap;
      }
      .bento3-hero-pill span:last-child {
        flex-shrink: 0;
      }
      .bento3-card {
        opacity: 0;
        transform: translate3d(0, 32px, 0);
        filter: blur(14px);
        transition: border-color 400ms ease, background 400ms ease, padding 300ms ease;
        padding: clamp(1.2rem, 3vw, 2.4rem);
        border-radius: clamp(1.5rem, 4vw, 28px);
      }
      .bento3-card[data-visible="true"] {
        animation: bento3-card-in 760ms cubic-bezier(0.22, 0.68, 0, 1) forwards;
        animation-delay: var(--bento3-delay, 0ms);
      }
      .bento3-icon {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: clamp(2.75rem, 6vw, 3.25rem);
        width: clamp(2.75rem, 6vw, 3.25rem);
        border-radius: 9999px;
        overflow: hidden;
        isolation: isolate;
      }
      .bento3-icon::before,
      .bento3-icon::after {
        content: "";
        position: absolute;
        inset: 4px;
        border-radius: inherit;
        border: 1px solid var(--bento3-icon-trail);
        opacity: 0.45;
      }
      .bento3-icon::after {
        inset: 10px;
        opacity: 0.2;
      }
      .bento3-icon[data-variant="orbit"] span {
        position: absolute;
        height: 140%;
        width: 3px;
        background: linear-gradient(180deg, transparent, var(--bento3-icon-stroke) 55%, transparent);
        transform-origin: center;
        animation: bento3-flare 8s linear infinite;
      }
      .bento3-icon[data-variant="relay"] span {
        position: absolute;
        inset: 18px;
        border-top: 1px solid var(--bento3-icon-stroke);
        border-bottom: 1px solid var(--bento3-icon-stroke);
        transform: skewX(-15deg);
      }
      .bento3-icon[data-variant="relay"] span::before,
      .bento3-icon[data-variant="relay"] span::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 120%;
        left: -10%;
        background: linear-gradient(90deg, transparent, var(--bento3-icon-stroke), transparent);
        animation: bento3-dash 2.6s ease-in-out infinite;
      }
      .bento3-icon[data-variant="relay"] span::after {
        top: 70%;
        animation-delay: 0.9s;
      }
      .bento3-icon[data-variant="wave"] span {
        position: absolute;
        inset: 12px;
        border-radius: 999px;
        overflow: hidden;
      }
      .bento3-icon[data-variant="wave"] span::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent 5%, var(--bento3-icon-stroke) 50%, transparent 95%);
        transform: translateX(-45%);
        animation: bento3-wave 2.8s ease-in-out infinite alternate;
      }
      .bento3-icon[data-variant="spark"] span {
        position: absolute;
        inset: 0;
      }
      .bento3-icon[data-variant="spark"] span::before,
      .bento3-icon[data-variant="spark"] span::after {
        content: "";
        position: absolute;
        inset: 12px;
        border-radius: 9999px;
        border: 1px solid var(--bento3-icon-stroke);
        opacity: 0.28;
        animation: bento3-pulse 2.8s ease-out infinite;
      }
      .bento3-icon[data-variant="spark"] span::after {
        animation-delay: 0.9s;
      }
      .bento3-icon[data-variant="loop"] span {
        position: absolute;
        inset: 12px;
      }
      .bento3-icon[data-variant="loop"] span::before,
      .bento3-icon[data-variant="loop"] span::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        top: 50%;
        left: 0;
        background: linear-gradient(90deg, transparent, var(--bento3-icon-stroke), transparent);
      }
      .bento3-icon[data-variant="loop"] span::before {
        transform: rotate(90deg);
      }
      .bento3-icon[data-variant="loop"] span::after {
        opacity: 0.4;
        transform: rotate(0deg);
      }
      @media (max-width: 1024px) {
        .bento3-section {
          gap: clamp(2.5rem, 6vw, 4rem);
          padding-inline: clamp(1.1rem, 6vw, 3rem);
        }
        .bento3-metrics {
          border-radius: 24px;
        }
      }
      @media (max-width: 768px) {
        .bento3-root {
          min-height: auto;
        }
        .bento3-section {
          gap: clamp(2rem, 7vw, 3.5rem);
          padding-inline: clamp(1rem, 8vw, 2.25rem);
          padding-block: clamp(3rem, 10vw, 4rem);
        }
        .bento3-card {
          padding: clamp(1rem, 5vw, 1.6rem);
          border-radius: 22px;
        }
        .bento3-grid {
          gap: clamp(1rem, 6vw, 2rem);
        }
        .bento3-metrics {
          padding: clamp(1rem, 6vw, 1.8rem);
          gap: clamp(0.75rem, 4vw, 1.25rem);
        }
        .bento3-footer {
          gap: clamp(1rem, 6vw, 1.75rem);
        }
      }
      @media (max-width: 640px) {
        .bento3-section {
          gap: clamp(1.75rem, 8vw, 3rem);
        }
        .bento3-hero-pill {
          justify-content: center;
          text-align: center;
        }
        .bento3-hero-pill span:last-child {
          width: 100%;
          text-align: center;
        }
        .bento3-card {
          padding: clamp(0.85rem, 6vw, 1.4rem);
        }
        .bento3-icon {
          height: clamp(2.25rem, 8vw, 2.75rem);
          width: clamp(2.25rem, 8vw, 2.75rem);
        }
        .bento3-metrics div {
          padding-block: clamp(1rem, 6vw, 1.5rem);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) style.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIntroReady(true);
      setVisible(true);
      return;
    }
    const frame = window.requestAnimationFrame(() => setIntroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    const syncTheme = () => {
      const next = getRootTheme();
      setTheme((prev) => (prev === next ? prev : next));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class", "data-theme"] });

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "bento-theme") syncTheme();
    };

    const media =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    const handleMedia = () => syncTheme();

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorage);
    }
    media?.addEventListener("change", handleMedia);

    return () => {
      observer.disconnect();
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorage);
      }
      media?.removeEventListener("change", handleMedia);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const palette = useMemo(() => palettes[theme], [theme]);

  const containerStyle = useMemo(
    () => ({
      "--bento3-grid-color": palette.gridColor,
      "--bento3-focus-glow": palette.focusGlow,
      "--bento3-icon-stroke": palette.iconStroke,
      "--bento3-icon-trail": palette.iconTrail,
    } as React.CSSProperties),
    [palette.gridColor, palette.focusGlow, palette.iconStroke, palette.iconTrail]
  );

  const toggleTheme = () => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      window.localStorage?.setItem("bento-theme", next);
    } catch (_err) {
      /* ignore */
    }
    setTheme(next);
  };

  return (
    <section
      ref={sectionRef}
      className={`bento3-root relative flex items-center justify-center overflow-hidden py-20 ${palette.surface}`}
      style={containerStyle}
    >
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(var(--bento3-grid-color) 1px, transparent 1px),
                            linear-gradient(90deg, var(--bento3-grid-color) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      {/* Overlay gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: palette.overlay }}
        aria-hidden
      />

      <div className="bento3-section relative z-10 mx-auto flex flex-col items-center py-12">
        {/* Header */}
        <div className="bento3-hero-pill mb-8 flex items-center gap-3">
          <span
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] ${palette.capsule}`}
          >
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-brand-purple" />
            New system route
          </span>
          <span className={`text-sm ${palette.muted}`}>Bento Edition 03</span>
        </div>

        {/* Hero Section */}
        <div className="mb-14 grid w-full gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* Left - Headline */}
          <div className="flex flex-col gap-6">
            <span
              className={`w-fit rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] ${palette.headingAccent} ${palette.muted}`}
            >
              <span className="mr-2">◆</span>Press-ready systems
            </span>

            <h2
              className={`text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl ${palette.heading}`}
            >
              Monochrome workflow blocks that stay aligned with your product rhythm.
            </h2>

            <p className={`max-w-lg text-base leading-relaxed ${palette.muted}`}>
              Drag this sequence into your library to instantly represent discovery, design, build, quality, and growth without leaving the black & white language.
            </p>
          </div>

          {/* Right - Toggle & Note */}
          <div className="flex flex-col justify-between gap-6 rounded-3xl border bg-card/50 p-6 border-border">
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${palette.muted}`}>Toggle theme</span>
              <button
                onClick={toggleTheme}
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${palette.toggle} hover:bg-secondary`}
              >
                <span className="flex h-4 w-7 items-center rounded-full bg-secondary p-0.5">
                  <span
                    className={`h-3 w-3 rounded-full bg-foreground transition ${theme === "dark" ? "translate-x-3" : ""}`}
                  />
                </span>
                {theme === "dark" ? "Night" : "Day"} mode
              </button>
            </div>

            <p className={`text-sm leading-relaxed ${palette.muted}`}>
              Uses your site theme tokens — no inline overrides.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento3-grid grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {flows.map((flow, index) => (
            <FlowCard key={flow.id} flow={flow} palette={palette} index={index} visible={visible && introReady} />
          ))}
        </div>

        {/* Metrics */}
        <div
          className={`bento3-metrics mt-10 flex w-full flex-wrap items-center justify-center rounded-3xl border ${palette.card} ${palette.cardBorder}`}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className={`flex flex-1 flex-col items-center gap-1 border-r px-6 py-5 last:border-r-0 ${palette.cardBorder}`}
            >
              <span className={`text-xs font-medium uppercase tracking-[0.25em] ${palette.muted}`}>{metric.label}</span>
              <span className={`text-2xl font-bold tracking-tight ${palette.heading}`}>
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="bento3-footer mt-14 flex w-full flex-col items-center gap-4 text-center">
          <div className="max-w-md">
            <span className={`block text-lg font-semibold ${palette.heading}`}>Ready to drop in</span>
            <span className={`text-sm ${palette.muted}`}>
              Plug each stage into your component gallery or use the full journey grid.
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              className={`rounded-full border px-6 py-2.5 text-sm font-semibold tracking-wide transition ${palette.button}`}
            >
              Copy layout tokens
            </button>
            <button
              className={`rounded-full border px-6 py-2.5 text-sm font-semibold tracking-wide transition ${palette.button}`}
            >
              View live demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowCard({ flow, palette, index, visible }: FlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const setGlow = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = cardRef.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--bento3-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--bento3-y", `${event.clientY - rect.top}px`);
  };

  const clearGlow = () => {
    const target = cardRef.current;
    if (!target) return;
    target.style.removeProperty("--bento3-x");
    target.style.removeProperty("--bento3-y");
  };

  return (
    <div
      ref={cardRef}
      className={`bento3-card group relative flex flex-col border backdrop-blur-sm ${palette.card} ${palette.cardBorder}`}
      data-visible={visible}
      style={{ "--bento3-delay": `${index * 80}ms` } as React.CSSProperties}
      onMouseMove={setGlow}
      onMouseLeave={clearGlow}
    >
      {/* Card content */}
      <div className="flex flex-1 flex-col gap-4">
        {/* ID badge */}
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold ${palette.metric}`}
        >
          {flow.id}
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.35em] ${palette.muted}`}
          >
            {flow.meta}
          </span>
          <h3 className={`text-lg font-bold leading-tight ${palette.heading}`}>{flow.title}</h3>
          <p className={`text-sm leading-relaxed ${palette.muted}`}>{flow.description}</p>
        </div>

        {/* Animated icon */}
        <div className="mt-auto flex items-center gap-3">
          <AnimatedIcon variant={flow.variant} />
        </div>
      </div>

      {/* Stat footer */}
      <div
        className={`mt-6 flex items-center justify-between border-t pt-4 ${palette.cardBorder}`}
      >
        <span className={`text-xs uppercase tracking-[0.2em] ${palette.muted}`}>{flow.statLabel}</span>
        <span className={`text-sm font-bold ${palette.heading}`}>{flow.statValue}</span>
      </div>

      {/* Spotlight glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--bento3-x, 50%) var(--bento3-y, 50%), var(--bento3-focus-glow), transparent 60%)`,
          borderRadius: "inherit",
        }}
        aria-hidden
      />
    </div>
  );
}

function AnimatedIcon({ variant }: AnimatedIconProps) {
  return (
    <div className="bento3-icon" data-variant={variant}>
      <span />
    </div>
  );
}

export default Bento3Section;
export { Bento3Section };
