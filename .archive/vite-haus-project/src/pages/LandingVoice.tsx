import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Home, Search, ArrowRight, Mic } from "lucide-react";
import { gsap } from "gsap";
import Lenis from "lenis";

const LandingVoice = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({ duration: 1.2, smooth: true });
    function raf(time: number) { lenisRef.current?.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    const ctx = gsap.context(() => {
      gsap.to("body", { opacity: 1, duration: 0.5 });
      gsap.from(".animate-in", { opacity: 0, y: 20, stagger: 0.1, duration: 0.8 });
    }, mainRef);
    return () => { ctx.revert(); lenisRef.current?.destroy(); };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#050505] text-neutral-300 font-['Inter']">
      <nav className="fixed top-0 w-full px-6 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <Link to="/" className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm">HA</div>
          HAUS<span className="text-neutral-600 font-normal">.VOICE</span>
        </Link>
        <Link to="/deal-team" className="bg-white text-black px-4 py-1.5 rounded text-xs font-semibold hover:bg-neutral-200 transition-colors">Get Started</Link>
      </nav>

      <main className="relative z-10 pt-28 pb-12 px-6 max-w-[1400px] mx-auto">
        <section className="mb-20 animate-in text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-[10px] font-mono mb-6">
              <Mic className="w-3 h-3" /><span>VOICE-FIRST DESIGN</span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-medium text-white tracking-tight mb-6">
              Just <span className="text-gradient">Speak</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-8">Find your perfect property using only your voice. 98% accuracy AI processing.</p>
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0A0A0A] max-w-md mx-auto mb-8">
              <div className="flex items-center gap-3 text-neutral-500 mb-2">
                <Mic className="w-5 h-5 animate-pulse text-cyan-400" />
                <span className="text-sm">Try saying:</span>
              </div>
              <p className="text-white text-lg">"3 bedroom house near parks in Melbourne"</p>
            </div>
            <Link to="/search" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors">
              Try Voice Search <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-8 px-6">
        <div className="max-w-[1400px] mx-auto text-center text-xs text-neutral-600">© 2025 HAUS. All rights reserved.</div>
      </footer>

      <style>{`.text-gradient{background:linear-gradient(to right,#fff,#a3a3a3);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}`}</style>
    </div>
  );
};
export default LandingVoice;
