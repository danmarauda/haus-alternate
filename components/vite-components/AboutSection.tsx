import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

export const AboutSection = () => {
  return (
    <section className="max-w-7xl sm:px-6 mt-10 mx-auto mb-8 px-4">
      <div className="relative sm:mt-12 overflow-hidden shadow-premium bg-glass-bg border border-glass-border rounded-[40px] backdrop-blur">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-glass"></div>
        </div>

        <div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Media + Story copy */}
            <div className="lg:col-span-2 space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-glass-border">
                <img src={aboutImage.src} alt="Professional real estate agent consulting with clients" className="w-full h-[260px] sm:h-[360px] object-cover" />
                <div className="absolute inset-0 bg-gradient-overlay"></div>
              </div>

              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-glass-border"></span>
                  <span className="text-sm text-muted-foreground font-geist">About HAUS</span>
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl text-foreground font-geist tracking-tight font-medium">Our Story</h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-geist">
                  HAUS began with a simple idea: make finding an extraordinary home feel effortless. What started as a small collective of agents and designers has grown into a nationwide network known for precision, transparency, and taste. 
                  From beachfront villas to skyline penthouses, we curate every listing, verify every document, and guide you from first tour to final signature.
                </p>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-geist">
                  Today, our platform blends expert local insight with real‑time data, immersive media, and concierge‑level service—so you can move with confidence.
                </p>

                <Button variant="ghost" className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground bg-glass-light hover:bg-glass-border rounded-full px-3 py-1.5 border border-glass-border">
                  <span className="font-geist">See details</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right: Key stats + secondary card */}
            <div className="lg:col-span-1">
              <ul className="space-y-6 sm:space-y-8">
                <li>
                  <div className="text-4xl sm:text-5xl text-foreground font-geist tracking-tight font-medium">12,000+</div>
                  <p className="text-[11px] tracking-wider uppercase text-muted-foreground mt-1 font-geist">Active Listings</p>
                </li>
                <li>
                  <div className="text-4xl sm:text-5xl text-foreground font-geist tracking-tight font-medium">28</div>
                  <p className="text-[11px] tracking-wider uppercase text-muted-foreground mt-1 font-geist">Markets Served</p>
                </li>
                <li>
                  <div className="text-4xl sm:text-5xl text-foreground font-geist tracking-tight font-medium">4.9</div>
                  <p className="text-[11px] tracking-wider uppercase text-muted-foreground mt-1 font-geist">Average Rating</p>
                </li>
                <li>
                  <div className="text-4xl sm:text-5xl text-foreground font-geist tracking-tight font-medium">$2.1B</div>
                  <p className="text-[11px] tracking-wider uppercase text-muted-foreground mt-1 font-geist">Total Sales Volume</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};