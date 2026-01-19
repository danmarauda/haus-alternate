import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Home, MapPin, Calendar, ArrowRight, Bed, Bath, Car, Heart, Star, Award } from "lucide-react";
import { gsap } from "gsap";
import Lenis from "lenis";

const ListingWolseleyPrestige = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#050505]/95" />
      </div>

      <nav className="fixed top-0 w-full px-6 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <Link to="/" className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-amber-400 to-amber-600 text-white flex items-center justify-center font-bold tracking-tighter rounded-sm">HA</div>
          HAUS<span className="text-neutral-600 font-normal">.PRESTIGE</span>
        </Link>
        <Link to="/search" className="bg-white text-black px-4 py-1.5 rounded text-xs font-semibold hover:bg-neutral-200 transition-colors">Back to Search</Link>
      </nav>

      <main className="relative z-10 pt-28 pb-12 px-6 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 animate-in">
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/20">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200" alt="Wolseley Prestige" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="aspect-square rounded-xl overflow-hidden border border-white/10"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400" alt="Gallery 1" className="w-full h-full object-cover" /></div>
              <div className="aspect-square rounded-xl overflow-hidden border border-white/10"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" alt="Gallery 2" className="w-full h-full object-cover" /></div>
              <div className="aspect-square rounded-xl overflow-hidden border border-white/10"><img src="https://images.unsplash.com/photo-1600047509807-2584886ef899?w=400" alt="Gallery 3" className="w-full h-full object-cover" /></div>
              <div className="aspect-square rounded-xl overflow-hidden border border-white/10"><img src="https://images.unsplash.com/photo-1600566753194-2904b2629982?w=400" alt="Gallery 4" className="w-full h-full object-cover" /></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-500 text-[10px] font-mono">
              <Award className="w-3 h-3" /><span>PRESTIGE LISTING</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-5xl font-medium text-white mb-4">The Wolseley</h1>
            <div className="flex items-center gap-2 text-neutral-400 mb-4">
              <MapPin className="w-4 h-4" /><span>Wolseley, Western Australia</span>
              <span className="text-amber-400">★★★★★</span>
            </div>
            <div className="text-4xl font-['Space_Grotesk'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mb-6">$3,200,000</div>

            <div className="flex gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-1"><Bed className="w-4 h-4" /><span>4 Bedrooms</span></div>
              <div className="flex items-center gap-1"><Bath className="w-4 h-4" /><span>3 Bathrooms</span></div>
              <div className="flex items-center gap-1"><Car className="w-4 h-4" /><span>2 Car Spaces</span></div>
              <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>c. 1920</span></div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-[#0A0A0A]">
              <h3 className="font-medium text-white mb-4">Prestige Features</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400" /><span>Original heritage features preserved</span></li>
                <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400" /><span>Chef's kitchen with premium appliances</span></li>
                <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400" /><span>North-facing entertainer's backyard</span></li>
                <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400" /><span>Double garage with workshop</span></li>
                <li className="flex items-center gap-2"><Star className="w-4 h-4 text-amber-400" /><span>Walk to cafes and restaurants</span></li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center text-neutral-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <Link to="/deal-team" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black rounded-lg font-medium hover:from-amber-300 hover:to-amber-400 transition-all">
                Book Private Viewing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-8 px-6">
        <div className="max-w-[1400px] mx-auto text-center text-xs text-neutral-600">© 2025 HAUS. All rights reserved.</div>
      </footer>

      <style>{`::selection{background:rgba(245,158,11,0.3);color:#fffbeb;}`}</style>
    </div>
  );
};
export default ListingWolseleyPrestige;
