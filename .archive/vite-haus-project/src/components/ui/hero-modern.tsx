import React, { useEffect, useMemo, useRef, useState, Dispatch, SetStateAction } from "react";

const STYLE_ID = "hero3-animations";

const getRootTheme = (): "dark" | "light" => {
  if (typeof document === "undefined") {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  }

  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  if (root.getAttribute("data-theme") === "dark" || root.dataset?.theme === "dark") return "dark";
  if (root.classList.contains("light")) return "light";

  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return "light";
};

const useThemeSync = (): ["dark" | "light", Dispatch<SetStateAction<"dark" | "light">>] => {
  const [theme, setTheme] = useState<"dark" | "light">(() => getRootTheme());

  useEffect(() => {
    if (typeof document === "undefined") return;

    const sync = () => {
      const next = getRootTheme();
      setTheme((prev) => (prev === next ? prev : next));
    };

    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const media =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    const onMedia = () => sync();
    media?.addEventListener("change", onMedia);

    const onStorage = (event: StorageEvent) => {
      if (event.key === "hero-theme" || event.key === "bento-theme") sync();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("storage", onStorage);
    }

    return () => {
      observer.disconnect();
      media?.removeEventListener("change", onMedia);
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", onStorage);
      }
    };
  }, []);

  return [theme, setTheme];
};

const DeckGlyph = ({ theme = "dark" }: { theme?: "dark" | "light" }) => {
  const stroke = theme === "dark" ? "#f5f5f5" : "#111111";
  const fill = theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(17,17,17,0.08)";

  return (
    <svg viewBox="0 0 120 120" className="h-16 w-16" aria-hidden>
      <circle
        cx="60"
        cy="60"
        r="46"
        fill="none"
        stroke={stroke}
        strokeWidth="1.4"
        className="motion-safe:animate-[hero3-orbit_8.5s_linear_infinite] motion-reduce:animate-none"
        style={{ strokeDasharray: "18 14" }}
      />
      <rect
        x="34"
        y="34"
        width="52"
        height="52"
        rx="14"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.2"
        className="motion-safe:animate-[hero3-grid_5.4s_ease-in-out_infinite] motion-reduce:animate-none"
      />
      <circle cx="60" cy="60" r="7" fill={stroke} />
      <path
        d="M60 30v10M60 80v10M30 60h10M80 60h10"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
        className="motion-safe:animate-[hero3-pulse_6s_ease-in-out_infinite] motion-reduce:animate-none"
      />
    </svg>
  );
};

function HeroOrbitDeck() {
  const [theme, setTheme] = useThemeSync();
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<"strategy" | "execution">("strategy");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes hero3-intro {
        0% { opacity: 0; transform: translate3d(0, 64px, 0) scale(0.98); filter: blur(12px); }
        60% { filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      @keyframes hero3-card {
        0% { opacity: 0; transform: translate3d(0, 32px, 0) scale(0.95); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
      }
      @keyframes hero3-orbit {
        0% { stroke-dashoffset: 0; transform: rotate(0deg); }
        100% { stroke-dashoffset: -64; transform: rotate(360deg); }
      }
      @keyframes hero3-grid {
        0%, 100% { transform: rotate(-2deg); opacity: 0.7; }
        50% { transform: rotate(2deg); opacity: 1; }
      }
      @keyframes hero3-pulse {
        0%, 100% { stroke-dasharray: 0 200; opacity: 0.2; }
        45%, 60% { stroke-dasharray: 200 0; opacity: 1; }
      }
      @keyframes hero3-glow {
        0%, 100% { opacity: 0.45; transform: translate3d(0,0,0); }
        50% { opacity: 0.9; transform: translate3d(0,-8px,0); }
      }
      @keyframes hero3-drift {
        0%, 100% { transform: translate3d(0,0,0) rotate(-3deg); }
        50% { transform: translate3d(0,-12px,0) rotate(3deg); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") {
      setVisible(true);
      return;
    }

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

  const toggleTheme = () => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const current = getRootTheme();
    const next = current === "dark" ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    root.classList.toggle("light", next === "light");
    root.setAttribute("data-theme", next);
    if (typeof window !== "undefined") {
      try {
        window.localStorage?.setItem("hero-theme", next);
      } catch (_err) {
        /* ignore */
      }
    }
    setTheme(next);
  };

  // HAUS Platform palette using design system tokens
  const palette = useMemo(
    () =>
      theme === "dark"
        ? {
            surface: "bg-background text-foreground",
            subtle: "text-muted-foreground",
            border: "border-border",
            card: "bg-card",
            accent: "bg-secondary",
            glow: "hsla(189, 94%, 43%, 0.12)", // brand-cyan glow
            glowSecondary: "hsla(221, 83%, 53%, 0.08)", // brand-blue subtle
            background: {
              color: "hsl(0, 0%, 2%)", // --background
              layers: [
                "radial-gradient(ellipse 80% 60% at 10% -10%, hsla(189, 94%, 43%, 0.12), transparent 60%)", // brand-cyan
                "radial-gradient(ellipse 90% 70% at 90% -20%, hsla(221, 83%, 53%, 0.08), transparent 70%)", // brand-blue
              ],
              dots:
                "radial-gradient(circle at 25% 25%, hsla(0, 0%, 98%, 0.06) 0.7px, transparent 1px), radial-gradient(circle at 75% 75%, hsla(0, 0%, 98%, 0.06) 0.7px, transparent 1px)",
            },
          }
        : {
            surface: "bg-white text-foreground",
            subtle: "text-muted-foreground",
            border: "border-border",
            card: "bg-card",
            accent: "bg-secondary",
            glow: "hsla(189, 94%, 43%, 0.08)", // brand-cyan glow light
            glowSecondary: "hsla(221, 83%, 53%, 0.06)",
            background: {
              color: "hsl(0, 0%, 98%)", // light background
              layers: [
                "radial-gradient(ellipse 80% 60% at 10% -10%, hsla(189, 94%, 43%, 0.08), transparent 60%)",
                "radial-gradient(ellipse 90% 70% at 90% -20%, hsla(221, 83%, 53%, 0.06), transparent 70%)",
              ],
              dots:
                "radial-gradient(circle at 25% 25%, hsla(0, 0%, 9%, 0.08) 0.7px, transparent 1px), radial-gradient(circle at 75% 75%, hsla(0, 0%, 9%, 0.06) 0.7px, transparent 1px)",
            },
          },
    [theme]
  );

  const metrics = [
    { label: "Average ramp", value: "11d" },
    { label: "Cycles synced", value: "08" },
    { label: "Satisfaction", value: "96%" },
  ];

  const modes = useMemo(
    () => ({
      strategy: {
        title: "Strategy signal",
        description:
          "Frame the launch protocol with clarity, align stakeholders in monochrome calm, and freeze decisive signals in under two screens.",
        items: [
          "Narrative arcs mapped to delivery windows",
          "Artifacts pre-styled in b/w for speed",
          "Decision rails surfaced inline",
        ],
      },
      execution: {
        title: "Execution loop",
        description:
          "Deploy orchestration cues, sync distributed crews, and keep response telemetry visible without disrupting minimal aesthetics.",
        items: [
          "Runtime monitors threaded into hero",
          "Edge deployment slots enumerated",
          "Escalation ladder surfaced in-line",
        ],
      },
    }),
    []
  );

  const activeMode = modes[mode];

  const protocols = [
    {
      name: "Signal intake",
      detail: "Audit the surface, define pulse cadence, ingest context in 24h.",
      status: "Ready",
    },
    {
      name: "Orbit sync",
      detail: "Cross-discipline huddle, assign vectors, prime release toggles.",
      status: "Armed",
    },
    {
      name: "Launch window",
      detail: "Go/no-go checks, activate uplink, monitor stability in realtime.",
      status: "Live",
    },
  ];

  const setSpotlight = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--hero3-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--hero3-y", `${event.clientY - rect.top}px`);
  };

  const clearSpotlight = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    target.style.removeProperty("--hero3-x");
    target.style.removeProperty("--hero3-y");
  };

  const showcaseImage = {
    src: "https://assets.awwwards.com/awards/submissions/2025/04/67efc5b712cba086181804.png",
    alt: "Monochrome interface collage with layered futurist typography",
  };

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen w-full overflow-hidden px-4 py-16 sm:px-6 lg:px-10 ${palette.surface}`}
      style={{
        backgroundColor: palette.background.color,
        backgroundImage: [...palette.background.layers, palette.background.dots].join(", "),
        backgroundSize: "100% 100%, 100% 100%, 28px 28px, 28px 28px",
      }}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme === "dark" ? "hsla(0, 0%, 98%, 0.03)" : "hsla(0, 0%, 9%, 0.03)"} 1px, transparent 1px), linear-gradient(to bottom, ${theme === "dark" ? "hsla(0, 0%, 98%, 0.03)" : "hsla(0, 0%, 9%, 0.03)"} 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
        aria-hidden
      />

      {/* Ambient glow - using brand-purple */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-[180px] motion-safe:animate-[hero3-glow_14s_ease-in-out_infinite] motion-reduce:animate-none"
        style={{ background: palette.glow }}
        aria-hidden
      />

      {/* Drift accent - using brand-blue */}
      <div
        className="pointer-events-none absolute right-[8%] top-[12%] -z-10 h-48 w-48 rounded-full opacity-30 blur-[80px] motion-safe:animate-[hero3-drift_22s_ease-in-out_infinite] motion-reduce:animate-none"
        style={{ background: palette.glowSecondary }}
        aria-hidden
      />

      {/* Main grid */}
      <div
        className={`relative mx-auto grid max-w-7xl gap-6 transition-opacity duration-700 lg:grid-cols-12 lg:gap-8 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Left column */}
        <div className="flex flex-col gap-6 lg:col-span-7 lg:gap-8">
          {/* Header card */}
          <div
            className={`group relative overflow-hidden rounded-3xl border p-8 ${palette.card} ${palette.border} motion-safe:animate-[hero3-intro_1.1s_cubic-bezier(0.22,1,0.36,1)_forwards] motion-reduce:animate-none`}
            style={{ animationDelay: "0.05s", animationFillMode: "backwards" }}
            onMouseMove={setSpotlight}
            onMouseLeave={clearSpotlight}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle 280px at var(--hero3-x, 50%) var(--hero3-y, 50%), ${palette.glow}, transparent)`,
              }}
              aria-hidden
            />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <DeckGlyph theme={theme} />
                <div className="flex items-center gap-3">
                  <span className={`text-xs uppercase tracking-[0.3em] ${palette.subtle}`}>
                    Monochrome Hero Deck
                  </span>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.25em] transition hover:bg-white/10 dark:hover:bg-white/10 ${palette.border}`}
                  >
                    {theme === "dark" ? "Light" : "Dark"} mode
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="max-w-xl text-balance text-4xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                  HERO3: command deck for launches that demand monochrome precision.
                </h1>

                <p className={`max-w-md text-base leading-relaxed ${palette.subtle}`}>
                  A hero built to stage design systems, telemetry, and imagery in perfect grayscale. The deck combines live toggles, orbital overlays, and adaptive motion for a distinct library entry.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className={`flex items-center gap-2 text-xs tracking-wide ${palette.subtle}`}>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                    Launch ready
                  </span>
                  <span>∙</span>
                  <span>Monochrome enforced</span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <span className={`text-[10px] uppercase tracking-[0.2em] ${palette.subtle}`}>{metric.label}</span>
                      <span className="font-mono text-lg font-medium tracking-tight">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mode switcher card */}
          <div
            className={`group relative overflow-hidden rounded-3xl border p-6 ${palette.card} ${palette.border} motion-safe:animate-[hero3-card_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards] motion-reduce:animate-none`}
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
            onMouseMove={setSpotlight}
            onMouseLeave={clearSpotlight}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle 200px at var(--hero3-x, 50%) var(--hero3-y, 50%), ${palette.glow}, transparent)`,
              }}
              aria-hidden
            />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className={`text-[10px] uppercase tracking-[0.25em] ${palette.subtle}`}>Mode</p>
                  <p className="text-lg font-semibold">{activeMode.title}</p>
                </div>
                <span className={`font-mono text-xs ${palette.subtle}`}>02</span>
              </div>

              <p className={`text-sm leading-relaxed ${palette.subtle}`}>{activeMode.description}</p>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setMode("strategy")}
                  className={`flex-1 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                    mode === "strategy" ? "bg-white text-black dark:bg-white/90 dark:text-black" : `${palette.border} ${palette.accent}`
                  }`}
                >
                  Strategy
                </button>
                <button
                  type="button"
                  onClick={() => setMode("execution")}
                  className={`flex-1 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition ${
                    mode === "execution" ? "bg-white text-black dark:bg-white/90 dark:text-black" : `${palette.border} ${palette.accent}`
                  }`}
                >
                  Execution
                </button>
              </div>

              <ul className="mt-2 space-y-2 text-sm">
                {activeMode.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${theme === "dark" ? "bg-white/60" : "bg-neutral-500"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 lg:col-span-5 lg:gap-8">
          {/* Control stack card */}
          <div
            className={`group relative overflow-hidden rounded-3xl border p-6 ${palette.card} ${palette.border} motion-safe:animate-[hero3-card_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards] motion-reduce:animate-none`}
            style={{ animationDelay: "0.15s", animationFillMode: "backwards" }}
            onMouseMove={setSpotlight}
            onMouseLeave={clearSpotlight}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle 200px at var(--hero3-x, 50%) var(--hero3-y, 50%), ${palette.glow}, transparent)`,
              }}
              aria-hidden
            />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className={`text-[10px] uppercase tracking-[0.25em] ${palette.subtle}`}>Control stack</p>
                <span className={`rounded-full border px-2 py-0.5 text-[10px] tracking-wide ${palette.border}`}>v3.0</span>
              </div>

              <p className={`text-sm leading-relaxed ${palette.subtle}`}>
                Designed for monochrome libraries where clarity outruns color. Craft a hero that introduces the system, shows live state, and frames imagery without losing contrast discipline.
              </p>

              <ul className="space-y-2">
                {["Interface parity guaranteed", "Cross-theme neutral hues", "Motion tuned for calm focus"].map((item) => (
                  <li key={item} className="flex items-center justify-between rounded-lg border border-transparent bg-white/5 px-3 py-2 text-sm transition hover:border-white/10 dark:bg-white/5 dark:hover:border-white/10">
                    <span>{item}</span>
                    <span className={`text-xs ${palette.subtle}`}>✓</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image showcase card */}
          <div
            className={`group relative overflow-hidden rounded-3xl border ${palette.border} motion-safe:animate-[hero3-card_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards] motion-reduce:animate-none`}
            style={{ animationDelay: "0.25s", animationFillMode: "backwards" }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 to-transparent" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden />
              <img
                src={showcaseImage.src}
                alt={showcaseImage.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-medium text-white">Archive composite</p>
              <p className="mt-0.5 text-xs text-white/60">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60" /> Layered monochrome
              </p>
            </div>
          </div>

          {/* Protocols card */}
          <div
            className={`group relative overflow-hidden rounded-3xl border p-6 ${palette.card} ${palette.border} motion-safe:animate-[hero3-card_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards] motion-reduce:animate-none`}
            style={{ animationDelay: "0.35s", animationFillMode: "backwards" }}
            onMouseMove={setSpotlight}
            onMouseLeave={clearSpotlight}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle 200px at var(--hero3-x, 50%) var(--hero3-y, 50%), ${palette.glow}, transparent)`,
              }}
              aria-hidden
            />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className={`text-[10px] uppercase tracking-[0.25em] ${palette.subtle}`}>Launch protocols</p>
                <span className={`text-[10px] uppercase tracking-[0.2em] ${palette.subtle}`}>Indexed</span>
              </div>

              <div className="space-y-3">
                {protocols.map((protocol, index) => (
                  <div
                    key={protocol.name}
                    className="group/item flex items-start gap-3 rounded-xl border border-transparent p-3 transition hover:border-white/10 hover:bg-white/5 dark:hover:border-white/10 dark:hover:bg-white/5"
                  >
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-mono ${palette.border}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-1 flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{protocol.name}</p>
                        <span className={`text-[10px] uppercase tracking-[0.15em] ${palette.subtle}`}>{protocol.status}</span>
                      </div>
                      <p className={`text-xs leading-relaxed ${palette.subtle}`}>{protocol.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroOrbitDeck;
export { HeroOrbitDeck };
