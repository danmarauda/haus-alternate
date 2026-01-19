import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Mic, ShieldCheck, Search, Bot, MessageSquare, CheckCircle2,
  Activity, TrendingUp, Home, Sparkles, ArrowRight
} from "lucide-react";
import { gsap } from "gsap";
import Lenis from "lenis";

const LandingGeist = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.to("body", { opacity: 1, duration: 0.5 });
      gsap.from(".animate-in", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });
    }, mainRef);

    return () => {
      ctx.revert();
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-[#050505] text-neutral-300 font-['Inter']">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
        }}
      />

      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_400px_at_20%_10%,rgba(168,85,247,0.12),transparent),radial-gradient(900px_500px_at_50%_120%,rgba(16,185,129,0.1),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <Link to="/" className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm">
            HA
          </div>
          HAUS
          <span className="text-neutral-600 font-normal">.AI</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/search"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 transition text-xs font-medium text-white"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search</span>
          </Link>
          <Link
            to="/deal-team"
            className="bg-white text-black px-4 py-1.5 rounded text-xs font-semibold hover:bg-neutral-200 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-28 pb-12 px-6 max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <section className="mb-20 animate-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 text-[10px] font-mono mb-6">
                <Sparkles className="w-3 h-3" />
                <span>AI-NATIVE REAL ESTATE</span>
              </div>
              <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-medium text-white tracking-tight mb-6">
                A Revolution in
                <br />
                <span className="text-gradient">Real Estate</span>
              </h1>
              <p className="text-lg text-neutral-400 mb-8 max-w-xl">
                Search, invest, buy, and manage in one AI‑native platform. Voice‑first.
                Compliance‑ready. Built for Australians.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/deal-team"
                  className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Get Early Access
                </Link>
                <Link
                  to="/search"
                  className="px-8 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-colors flex items-center gap-2"
                >
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-lg font-medium text-white">Voice‑First Search</h3>
                </div>
                <p className="text-sm text-neutral-500">Ask naturally. No more checkbox hell. 98% accuracy AI voice processing.</p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-lg font-medium text-white">Fair Play Protocol</h3>
                </div>
                <p className="text-sm text-neutral-500">No underquoting or dodgy tactics. 95% detection rate of unethical practices.</p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-lg font-medium text-white">Transparency by Design</h3>
                </div>
                <p className="text-sm text-neutral-500">Every fee disclosed. Plain English. AUSTRAC compliant.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Search Section */}
        <section className="mb-20 animate-in">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-['Space_Grotesk'] text-3xl font-medium text-white mb-4">
                Voice‑First Property Search
              </h2>
              <p className="text-neutral-400 mb-8">
                Speak naturally to find your perfect property. Powered by 98% accuracy AI voice
                processing.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
                  "Family home with courtyard near parks"
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
                  "Investment property with high yield in Brisbane"
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
                  "Waterfront apartment with city views"
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-[#0A0A0A]">
                <p className="text-sm font-medium text-white mb-3">Real‑Time Feedback</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-neutral-400">Recognized:</span>
                    <span>"3 bedroom house in Melbourne with good transport"</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <Search className="w-4 h-4" />
                    <span>Processing:</span>
                    <span>Searching 50,000+ listings</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Results:</span>
                    <span>127 properties found in 89ms</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-medium text-white mb-4">
                AI Property Assistant
              </h3>
              <p className="text-neutral-400 mb-6">
                Chat with our AI assistant to get personalized property recommendations.
              </p>

              <div className="p-6 rounded-2xl border border-white/10 bg-[#0A0A0A]">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-neutral-400" />
                    </div>
                    <div className="rounded-2xl rounded-tl-md bg-white/5 border border-white/10 p-3">
                      <p className="text-sm text-neutral-300">
                        Hi! Tell me about your ideal property and I'll shortlist options you'll love.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="rounded-2xl rounded-tr-md bg-emerald-500/10 border border-emerald-500/20 p-3 max-w-[80%]">
                      <p className="text-sm text-neutral-300">
                        3‑bed family home, quiet street, near good schools, budget $1.2M.
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                      <Home className="w-4 h-4 text-neutral-400" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-neutral-400" />
                    </div>
                    <div className="rounded-2xl rounded-tl-md bg-white/5 border border-white/10 p-3">
                      <p className="text-sm text-neutral-300">
                        Got it. I found 18 properties. Two standout picks are in Balwyn North and Glen Iris with top‑rated schools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="animate-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Forecast Accuracy", value: "85%", desc: "12-month predictions" },
              { label: "Valuation Methods", value: "15+", desc: "Hedonic, DCF, ML" },
              { label: "Investment Score", value: "8.7/10", desc: "Composite metric" },
              { label: "Detection Rate", value: "95%", desc: "Dodgy practices" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors text-center"
              >
                <TrendingUp className="w-6 h-6 text-neutral-400 mx-auto mb-3" />
                <div className="text-3xl font-['Space_Grotesk'] font-semibold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-500 mb-1">{stat.label}</div>
                <div className="text-[10px] text-neutral-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <p>© 2025 HAUS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/deal-team" className="hover:text-white transition-colors">
              My Team
            </Link>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #fff, #a3a3a3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #262626;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default LandingGeist;
