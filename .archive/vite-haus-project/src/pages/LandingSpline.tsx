import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Home, Search, ArrowRight, Boxes } from "lucide-react";
import { gsap } from "gsap";
import Lenis from "lenis";

const LandingSpline = () => {
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
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0 bg-[#050505]/90" />
      </div>

      <nav className="fixed top-0 w-full px-6 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <Link to="/" className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm">HA</div>
          HAUS<span className="text-neutral-600 font-normal">.3D</span>
        </Link>
        <Link to="/deal-team" className="bg-white text-black px-4 py-1.5 rounded text-xs font-semibold hover:bg-neutral-200 transition-colors">Get Started</Link>
      </nav>

      <main className="relative z-10 pt-28 pb-12 px-6 max-w-[1400px] mx-auto">
        <section className="mb-20 animate-in">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-500 text-[10px] font-mono mb-6">
              <Boxes className="w-3 h-3" /><span>SPLINE 3D PARTICLES</span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-medium text-white tracking-tight mb-6">
              Immersive <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-xl text-neutral-400 mb-8">Interactive 3D elements that bring properties to life.</p>
            <Link to="/search" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors">
              Explore <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-8 px-6">
        <div className="max-w-[1400px] mx-auto text-center text-xs text-neutral-600">© 2025 HAUS. All rights reserved.</div>
      </footer>

      <style>{`.text-gradient{background:linear-gradient(to right,#fff,#a3a3a3);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}::selection{background:rgba(99,102,241,0.3);color:#e0e7ff;}`}</style>
    </div>
  );
};
export default LandingSpline;
