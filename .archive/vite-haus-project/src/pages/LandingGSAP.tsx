import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Home, Search, Shield, TrendingUp, Users, ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const LandingGSAP = () => {
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
      // Fade in body
      gsap.to("body", { opacity: 1, duration: 0.5 });

      // Hero animations
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      // Card stack scroll animations
      const cards = document.querySelectorAll(".stack-card");
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 0.3,
          scale: 0.95,
          y: 50,
        });
      });

      // Stats counter animation
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <Link to="/" className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm">
            HA
          </div>
          HAUS
          <span className="text-neutral-600 font-normal">.GSAP</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/search"
            className="px-4 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 transition text-xs font-medium text-white"
          >
            Search
          </Link>
          <Link
            to="/deal-team"
            className="bg-white text-black px-4 py-1.5 rounded text-xs font-semibold hover:bg-neutral-200 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-28 pb-20 px-6 max-w-[1400px] mx-auto">
        <section className="mb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-500 text-[10px] font-mono mb-6 hero-title">
              <Sparkles className="w-3 h-3" />
              <span>SCROLL ANIMATIONS</span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 hero-title">
              Experience
              <br />
              <span className="text-gradient">Real Estate</span>
              <br />
              Reimagined
            </h1>
            <p className="text-xl text-neutral-400 mb-8 max-w-xl hero-subtitle">
              AI-native property search with beautiful scroll animations and seamless interactions.
            </p>
            <div className="flex flex-wrap gap-4 hero-subtitle">
              <Link
                to="/deal-team"
                className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                Start Exploring
              </Link>
            </div>
          </div>
        </section>

        {/* Card Stack Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-['Space_Grotesk'] text-3xl font-medium text-white mb-4">
              Platform Features
            </h2>
            <p className="text-neutral-500">Scroll to discover each feature</p>
          </div>

          <div className="space-y-8">
            {/* Card 1 */}
            <div className="stack-card sticky top-24 h-[50vh] flex items-center justify-center">
              <div className="w-full max-w-4xl p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Search className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-2xl font-medium text-white mb-3">
                      AI-Powered Search
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Natural language processing that understands your preferences. Speak naturally and find your
                      perfect property without complex filters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="stack-card sticky top-24 h-[50vh] flex items-center justify-center">
              <div className="w-full max-w-4xl p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-2xl font-medium text-white mb-3">
                      Fair Play Protocol
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Our ethical AI detects and protects you from dodgy agent practices. 95% detection rate
                      with real-time monitoring and full fee transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="stack-card sticky top-24 h-[50vh] flex items-center justify-center">
              <div className="w-full max-w-4xl p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-2xl font-medium text-white mb-3">
                      Investment Intelligence
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Institutional-grade analytics with 15+ valuation methodologies. Predictive modeling
                      with 85% accuracy for 12-month forecasts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="stack-card sticky top-24 h-[50vh] flex items-center justify-center">
              <div className="w-full max-w-4xl p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Users className="w-8 h-8 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-2xl font-medium text-white mb-3">
                      Deal Team Management
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Coordinate your entire property journey in one place. Brokers, solicitors, conveyancers,
                      and service providers - all connected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Properties Listed", value: "50K+", icon: Home },
              { label: "Active Users", value: "12K+", icon: Users },
              { label: "Search Accuracy", value: "98%", icon: Search },
              { label: "Detection Rate", value: "95%", icon: Shield },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card p-6 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors text-center"
              >
                <stat.icon className="w-8 h-8 text-neutral-400 mx-auto mb-4" />
                <div className="text-4xl font-['Space_Grotesk'] font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
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
        ::selection {
          background: rgba(99, 102, 241, 0.3);
          color: #e0e7ff;
        }
      `}</style>
    </div>
  );
};

export default LandingGSAP;
