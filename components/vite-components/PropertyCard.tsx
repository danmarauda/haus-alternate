import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Eye, Heart, Share2, GitCompare, ChevronLeft, ChevronRight,
  Sparkles, TrendingUp, DollarSign, Star, Flame, BadgeCheck, Tag
} from "lucide-react";

interface PropertyCardProps {
  images: string[];
  title: string;
  location: string;
  price: string;
  pricePerSqft?: number;
  beds: number;
  baths: number;
  sqft: number;
  badges?: Array<{
    text: string;
    variant: "new" | "premium" | "open-house" | "hot" | "price-drop" | "ai-verified";
  }>;
  alt: string;
  agent?: {
    name: string;
    avatar?: string;
  };
  aiInsights?: {
    investmentScore: number;
    growthPotential: string;
    rentalYield: string;
  };
  openHouse?: string;
}

export const PropertyCard = ({ 
  images, 
  title, 
  location, 
  price, 
  pricePerSqft,
  beds, 
  baths, 
  sqft, 
  badges = [], 
  alt,
  agent,
  aiInsights,
  openHouse
}: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  const getBadgeClasses = (variant: string) => {
    switch (variant) {
      case "new":
        return "text-[10px] font-medium text-white bg-brand-cyan/90 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/20";
      case "premium":
        return "text-[10px] font-medium text-white bg-brand-blue/90 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/20";
      case "open-house":
        return "text-[10px] font-medium text-background bg-foreground/90 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/20";
      case "hot":
        return "text-[10px] font-medium text-white bg-gradient-to-r from-orange-500 to-red-500 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/20";
      case "price-drop":
        return "text-[10px] font-medium text-white bg-emerald-500/90 backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/20";
      case "ai-verified":
        return "text-[10px] font-medium text-white bg-gradient-to-r from-brand-cyan to-brand-blue backdrop-blur-sm rounded-full px-2 py-0.5 border border-white/20";
      default:
        return "";
    }
  };

  const getBadgeIcon = (variant: string) => {
    switch (variant) {
      case "hot":
        return <Flame className="w-3 h-3" />;
      case "price-drop":
        return <Tag className="w-3 h-3" />;
      case "ai-verified":
        return <BadgeCheck className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <article 
      className="group overflow-hidden bg-secondary/90 border border-glass-border rounded-xl transition-all duration-300 hover:shadow-glow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Images */}
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`${alt} - Image ${idx + 1}`} 
              className="min-w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-overlay pointer-events-none"></div>
        
        {/* Navigation Arrows */}
        {images.length > 1 && isHovered && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
        
        {/* Carousel Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button 
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentImageIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {badges.map((badge, idx) => (
            <div 
              key={idx} 
              className={`${getBadgeClasses(badge.variant)} flex items-center gap-1 font-geist`}
            >
              {getBadgeIcon(badge.variant)}
              {badge.text}
            </div>
          ))}
        </div>
        
        {/* Quick Actions Overlay */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`}>
          <button 
            onClick={(e) => { e.stopPropagation(); setIsSaved(!isSaved); }}
            className={`w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-all ${
              isSaved 
                ? 'bg-red-500 text-white' 
                : 'bg-background/80 text-foreground hover:bg-background'
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          <button 
            className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all"
          >
            <Share2 className="w-4 h-4" />
          </button>
          <button 
            className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-all"
          >
            <GitCompare className="w-4 h-4" />
          </button>
        </div>
        
        {/* Open House Banner */}
        {openHouse && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent py-2 px-3">
            <div className="flex items-center gap-2 text-xs text-foreground font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open House: {openHouse}
            </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold tracking-tight text-foreground font-geist truncate">{title}</h3>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1 font-geist">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{location}</span>
            </p>
          </div>
          <div className="text-right flex-shrink-0 ml-2">
            <div className="text-lg font-semibold text-foreground font-geist">{price}</div>
            <div className="text-[11px] text-muted-foreground font-geist">
              {beds} bd • {baths} ba • {sqft.toLocaleString()} sqft
            </div>
            {pricePerSqft && (
              <div className="text-[10px] text-muted-foreground/70 font-geist">
                ${pricePerSqft}/sqft
              </div>
            )}
          </div>
        </div>
        
        {/* Agent Info */}
        {agent && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-glass-border">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue flex items-center justify-center text-white text-[10px] font-medium">
              {agent.avatar ? (
                <img src={agent.avatar} alt={agent.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                agent.name.charAt(0)
              )}
            </div>
            <span className="text-xs text-muted-foreground font-geist">{agent.name}</span>
          </div>
        )}
        
        {/* AI Insights Teaser */}
        {aiInsights && (
          <div 
            className="mt-3 cursor-pointer"
            onClick={() => setShowInsights(!showInsights)}
          >
            <div className="flex items-center gap-2 text-xs text-brand-cyan">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-medium font-geist">AI Insights</span>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-brand-cyan text-brand-cyan" />
                <span className="font-semibold">{aiInsights.investmentScore}/10</span>
              </div>
            </div>
            
            {showInsights && (
              <div className="mt-2 p-2.5 rounded-lg bg-glass-light border border-glass-border space-y-1.5 animate-fade-in">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-geist flex items-center gap-1.5">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    Growth Potential
                  </span>
                  <span className="font-medium text-emerald-400 font-geist">{aiInsights.growthPotential}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-geist flex items-center gap-1.5">
                    <DollarSign className="w-3 h-3 text-brand-cyan" />
                    Est. Rental Yield
                  </span>
                  <span className="font-medium text-brand-cyan font-geist">{aiInsights.rentalYield}</span>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="mt-4 flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-medium tracking-tight text-foreground bg-glass-light hover:bg-glass-border rounded-full px-3 py-1.5 border border-glass-border font-geist"
          >
            <Eye className="w-3.5 h-3.5" />
            Virtual Tour
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-medium tracking-tight bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan/20 rounded-full px-3 py-1.5 border border-brand-cyan/30 font-geist"
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Analysis
          </Button>
        </div>
      </div>
    </article>
  );
};
