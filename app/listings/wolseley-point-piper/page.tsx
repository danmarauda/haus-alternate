import Link from "next/link";
import { MapPin, ArrowRight, Bed, Bath, Car, Heart } from "lucide-react";

export const metadata = {
  title: "The Wolseley | Wolseley, WA - HAUS",
  description: "Premium Wolseley residence featuring original character, modern amenities, and north-facing backyard.",
};

export default function ListingWolseleyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-['Inter']">
      <div
        className="fixed inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
        }}
      />

      <nav className="fixed top-0 w-full px-6 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm">
            HA
          </div>
          HAUS
        </Link>
        <Link href="/search" className="bg-white text-black px-4 py-1.5 rounded text-xs font-semibold hover:bg-neutral-200 transition-colors">
          Back to Search
        </Link>
      </nav>

      <main className="relative z-10 pt-28 pb-12 px-6 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 animate-in">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200"
              alt="Wolseley Residence"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="font-['Space_Grotesk'] text-4xl font-medium text-white mb-4">The Wolseley</h1>
              <div className="flex items-center gap-2 text-neutral-400 mb-4">
                <MapPin className="w-4 h-4" />
                <span>Wolseley, WA</span>
              </div>
              <div className="text-3xl font-['Space_Grotesk'] font-bold text-white mb-6">$3,200,000</div>
              <div className="flex gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>4</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1">
                  <Car className="w-4 h-4" />
                  <span>2</span>
                </div>
              </div>
            </div>
            <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <div className="p-6 rounded-xl border border-white/10 bg-[#0A0A0A]">
              <h3 className="font-medium text-white mb-4">Description</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Premium Wolseley residence featuring original character, modern amenities, and
                north-facing backyard. Walking distance to cafes, restaurants, and local attractions.
              </p>
            </div>
            <Link
              href="/deal-team"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors"
            >
              Book Inspection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <style>{`::selection{background:rgba(99,102,241,0.3);color:#e0e7ff;}`}</style>
    </div>
  );
}
