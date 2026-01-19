import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Home, Search, ArrowRight, Sun, Moon } from "lucide-react";
import { gsap } from "gsap";
import Lenis from "lenis";

const LandingLight = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({ duration: 1.2, smooth: true });
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const ctx = gsap.context(() => {
      gsap.to("body", { opacity: 1, duration: 0.5 });
      gsap.from(".animate-in", { opacity: 0, y: 20, stagger: 0.1, duration: 0.8, ease: "power2.out" });
    }, mainRef);
    return () => { ctx.revert(); lenisRef.current?.destroy(); };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-white text-neutral-700 font-['Inter']">
      <nav className="fixed top-0 w-full px-6 h-16 flex justify-between items-center z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200">
        <Link to="/" className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-neutral-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-neutral-900 text-white flex items-center justify-center font-bold tracking-tighter rounded-sm">HA</div>
          HAUS<span className="text-neutral-400 font-normal">.LIGHT</span>
        </Link>
        <Link to="/deal-team" className="bg-neutral-900 text-white px-4 py-1.5 rounded text-xs font-semibold hover:bg-neutral-700 transition-colors">Get Started</Link>
      </nav>

      <main className="relative z-10 pt-28 pb-12 px-6 max-w-[1400px] mx-auto">
        <section className="mb-20 animate-in">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 text-[10px] font-mono mb-6">
              <Sun className="w-3 h-3" /><span>LIGHT THEME</span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-medium text-neutral-900 tracking-tight mb-6">
              Beautiful Simplicity
            </h1>
            <p className="text-xl text-neutral-600 mb-8">A clean, light approach to real estate.</p>
            <Link to="/search" className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-700 transition-colors">
              Explore <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-neutral-200 py-8 px-6">
        <div className="max-w-[1400px] mx-auto text-center text-xs text-neutral-400">© 2025 HAUS. All rights reserved.</div>
      </footer>
    </div>
  );
};
export default LandingLight;
