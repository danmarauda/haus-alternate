import { useState, useEffect } from "react";
import { 
  Sparkles, Camera, TrendingUp, Key, MapPin, LayoutPanelTop, 
  Check, X, ChevronLeft, ChevronRight, Star, Quote,
  Calculator, DollarSign, Percent, Clock, Home, PiggyBank
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

// Comparison Table Data
const comparisonData = [
  { feature: "AI-Powered Search", haus: true, traditional: false, competitors: "partial" },
  { feature: "Voice Commands", haus: true, traditional: false, competitors: false },
  { feature: "3D Virtual Tours", haus: true, traditional: false, competitors: true },
  { feature: "Investment Analytics", haus: true, traditional: false, competitors: "partial" },
  { feature: "Fraud Detection", haus: true, traditional: false, competitors: false },
  { feature: "Real-time Pricing", haus: true, traditional: false, competitors: true },
  { feature: "Off-Market Access", haus: true, traditional: "partial", competitors: false },
  { feature: "Blockchain Receipts", haus: true, traditional: false, competitors: false },
];

// Testimonial Data
const testimonials = [
  {
    quote: "HAUS's AI found me a property that wasn't even listed yet. The investment score was spot-on—I've seen 15% appreciation in just 8 months.",
    author: "Sarah Chen",
    role: "Real Estate Investor",
    company: "Chen Capital",
    rating: 5,
    avatar: "SC"
  },
  {
    quote: "The ROI calculator and predictive analytics helped me make a data-driven decision. No more guesswork in property investment.",
    author: "Michael Ross",
    role: "Portfolio Manager",
    company: "Apex Investments",
    rating: 5,
    avatar: "MR"
  },
  {
    quote: "Voice search is a game-changer. I found my dream home while commuting. The 3D tours sealed the deal before I even visited.",
    author: "Emma Wilson",
    role: "First-time Buyer",
    company: "Tech Startup",
    rating: 5,
    avatar: "EW"
  },
  {
    quote: "As an agent, HAUS gives me an edge. The transparency receipts build trust, and the AI matching saves me hours of work.",
    author: "David Park",
    role: "Real Estate Agent",
    company: "Luxury Realty",
    rating: 5,
    avatar: "DP"
  }
];

export const AdvantageSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [visibleRows, setVisibleRows] = useState<number[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // ROI Calculator State
  const [purchasePrice, setPurchasePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(20);
  const [appreciationRate, setAppreciationRate] = useState(5);
  const [holdingPeriod, setHoldingPeriod] = useState(5);
  const [rentalIncome, setRentalIncome] = useState(2500);

  // Animate table rows sequentially
  useEffect(() => {
    if (isVisible) {
      comparisonData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleRows(prev => [...prev, index]);
        }, index * 100);
      });
    }
  }, [isVisible]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ROI Calculations
  const downPaymentAmount = (purchasePrice * downPayment) / 100;
  const loanAmount = purchasePrice - downPaymentAmount;
  const futureValue = purchasePrice * Math.pow(1 + appreciationRate / 100, holdingPeriod);
  const totalAppreciation = futureValue - purchasePrice;
  const totalRentalIncome = rentalIncome * 12 * holdingPeriod;
  const totalReturn = totalAppreciation + totalRentalIncome;
  const roi = ((totalReturn / downPaymentAmount) * 100).toFixed(1);
  const annualizedRoi = (Math.pow(1 + totalReturn / downPaymentAmount, 1 / holdingPeriod) - 1) * 100;

  const renderCheckmark = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-emerald-400" />
        </div>
      );
    } else if (value === "partial") {
      return (
        <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <span className="text-yellow-400 text-xs font-bold">~</span>
        </div>
      );
    }
    return (
      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
        <X className="w-4 h-4 text-red-400" />
      </div>
    );
  };

  return (
    <section 
      ref={ref}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
    >
      {/* Section Header */}
      <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground font-geist">
          The HAUS Advantage
        </h2>
        <p className="text-muted-foreground mt-2 font-geist">
          See how intelligent real estate transforms your experience
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Animated Comparison Table */}
        <div 
          className={`rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur shadow-2xl p-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <LayoutPanelTop className="w-5 h-5 text-brand-cyan" />
            <h3 className="text-foreground text-xl font-semibold tracking-tight font-geist">Platform Comparison</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="text-left py-3 px-2 text-xs font-medium text-muted-foreground font-geist">Feature</th>
                  <th className="text-center py-3 px-2 text-xs font-medium text-brand-cyan font-geist">HAUS</th>
                  <th className="text-center py-3 px-2 text-xs font-medium text-muted-foreground font-geist">Traditional</th>
                  <th className="text-center py-3 px-2 text-xs font-medium text-muted-foreground font-geist">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-glass-border/50 transition-all duration-500 ${
                      visibleRows.includes(index) 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <td className="py-3 px-2 text-sm text-foreground font-geist">{row.feature}</td>
                    <td className="py-3 px-2 text-center">
                      <div className="flex justify-center">{renderCheckmark(row.haus)}</div>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <div className="flex justify-center">{renderCheckmark(row.traditional)}</div>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <div className="flex justify-center">{renderCheckmark(row.competitors)}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20">
            <p className="text-xs text-brand-cyan font-geist flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              HAUS leads with 8/8 features • Traditional platforms: 1/8 • Competitors: 3/8
            </p>
          </div>
        </div>

        {/* Interactive ROI Calculator */}
        <div 
          className={`rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur shadow-2xl p-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-brand-cyan" />
            <h3 className="text-foreground text-xl font-semibold tracking-tight font-geist">ROI Calculator</h3>
          </div>
          
          <div className="space-y-4">
            {/* Purchase Price */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground font-geist flex items-center gap-1">
                  <Home className="w-3 h-3" /> Purchase Price
                </span>
                <span className="text-foreground font-medium font-geist">${purchasePrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={100000}
                max={2000000}
                step={50000}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full h-2 bg-glass-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-cyan [&::-webkit-slider-thumb]:shadow-glow-cyan"
              />
            </div>
            
            {/* Down Payment */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground font-geist flex items-center gap-1">
                  <PiggyBank className="w-3 h-3" /> Down Payment
                </span>
                <span className="text-foreground font-medium font-geist">{downPayment}% (${downPaymentAmount.toLocaleString()})</span>
              </div>
              <input
                type="range"
                min={5}
                max={50}
                step={5}
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-glass-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-cyan [&::-webkit-slider-thumb]:shadow-glow-cyan"
              />
            </div>
            
            {/* Appreciation Rate */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground font-geist flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> Annual Appreciation
                </span>
                <span className="text-foreground font-medium font-geist">{appreciationRate}%</span>
              </div>
              <input
                type="range"
                min={1}
                max={15}
                step={0.5}
                value={appreciationRate}
                onChange={(e) => setAppreciationRate(Number(e.target.value))}
                className="w-full h-2 bg-glass-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-cyan [&::-webkit-slider-thumb]:shadow-glow-cyan"
              />
            </div>
            
            {/* Holding Period */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground font-geist flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Holding Period
                </span>
                <span className="text-foreground font-medium font-geist">{holdingPeriod} years</span>
              </div>
              <input
                type="range"
                min={1}
                max={15}
                step={1}
                value={holdingPeriod}
                onChange={(e) => setHoldingPeriod(Number(e.target.value))}
                className="w-full h-2 bg-glass-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-cyan [&::-webkit-slider-thumb]:shadow-glow-cyan"
              />
            </div>
            
            {/* Monthly Rental */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground font-geist flex items-center gap-1">
                  <DollarSign className="w-3 h-3" /> Monthly Rental Income
                </span>
                <span className="text-foreground font-medium font-geist">${rentalIncome.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={0}
                max={10000}
                step={250}
                value={rentalIncome}
                onChange={(e) => setRentalIncome(Number(e.target.value))}
                className="w-full h-2 bg-glass-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-cyan [&::-webkit-slider-thumb]:shadow-glow-cyan"
              />
            </div>
          </div>
          
          {/* Results */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-brand-cyan/10 to-brand-indigo/10 border border-brand-cyan/20">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground font-geist">Total ROI</p>
                <p className="text-2xl font-bold text-brand-cyan font-geist">{roi}%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-geist">Annualized</p>
                <p className="text-2xl font-bold text-emerald-400 font-geist">{annualizedRoi.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-geist">Property Value</p>
                <p className="text-sm font-semibold text-foreground font-geist">${futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-geist">Total Return</p>
                <p className="text-sm font-semibold text-foreground font-geist">${totalReturn.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div 
        className={`mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {[
          { icon: Sparkles, title: "AI-Powered Matching", desc: "Learns your preferences for personalized recommendations." },
          { icon: Camera, title: "Immersive Visualization", desc: "Photorealistic 3D tours with AI insights." },
          { icon: TrendingUp, title: "Predictive Analytics", desc: "Price forecasts, investment potential, trend detection." },
          { icon: Key, title: "Exclusive Inventory", desc: "Off-market and pre-market access." },
          { icon: MapPin, title: "Neighborhood Insights", desc: "Schools, amenities, safety, development plans." },
          { icon: LayoutPanelTop, title: "Smart Comparisons", desc: "Highlights differences based on your priorities." },
        ].map((item, index) => (
          <div 
            key={index}
            className="p-4 rounded-xl bg-card/60 ring-1 ring-border/60 backdrop-blur hover:ring-brand-cyan/30 hover:bg-card/80 transition-all duration-300 group"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center group-hover:bg-brand-cyan/20 transition-colors">
                <item.icon className="w-4 h-4 text-brand-cyan" />
              </div>
              <p className="text-foreground text-sm font-medium font-geist">{item.title}</p>
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-geist">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonial Carousel */}
      <div 
        className={`mt-8 rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur shadow-2xl p-6 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Quote className="w-5 h-5 text-brand-cyan" />
            <h3 className="text-foreground text-xl font-semibold tracking-tight font-geist">What Our Users Say</h3>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-8 h-8 rounded-full bg-glass-light border border-glass-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-glass-border transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
              className="w-8 h-8 rounded-full bg-glass-light border border-glass-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-glass-border transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-1">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                      ))}
                    </div>
                    <p className="text-foreground text-lg font-geist leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center text-white font-medium font-geist">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground font-geist">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground font-geist">{testimonial.role} • {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentTestimonial 
                  ? 'bg-brand-cyan w-6' 
                  : 'bg-glass-border hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
