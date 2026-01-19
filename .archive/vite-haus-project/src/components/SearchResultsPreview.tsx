import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Ruler, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

interface SearchResultsPreviewProps {
  isVisible: boolean;
  searchQuery: string;
}

const previewProperties = [
  {
    id: 1,
    title: "Modern Harbour View",
    location: "Bondi Beach, NSW",
    price: "$2,450,000",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    image: property1,
    badge: "AI Verified",
    score: 9.2,
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "Sydney CBD, NSW",
    price: "$4,200,000",
    beds: 4,
    baths: 3,
    sqft: "3,400",
    image: property2,
    badge: "Hot",
    score: 8.8,
  },
  {
    id: 3,
    title: "Contemporary Villa",
    location: "Paddington, QLD",
    price: "$1,850,000",
    beds: 4,
    baths: 2,
    sqft: "2,800",
    image: property3,
    badge: "New",
    score: 8.5,
  },
];

const getBadgeStyle = (badge: string) => {
  switch (badge) {
    case "AI Verified":
      return "bg-status-success/20 text-status-success border-status-success/30";
    case "Hot":
      return "bg-status-warning/20 text-status-warning border-status-warning/30";
    case "New":
      return "bg-brand-cyan/20 text-brand-cyan border-brand-cyan/30";
    default:
      return "bg-secondary text-muted-foreground";
  }
};

export const SearchResultsPreview = ({ isVisible, searchQuery }: SearchResultsPreviewProps) => {
  if (!isVisible || !searchQuery) return null;

  return (
    <div className="animate-fade-up mt-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white/70 font-geist">
            Showing top matches for "<span className="text-white">{searchQuery}</span>"
          </span>
          <Badge className="bg-brand-purple/20 text-brand-purple border-brand-purple/30 text-xs">
            <Sparkles className="w-3 h-3 mr-1" />
            AI Ranked
          </Badge>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white/70 hover:text-white hover:bg-white/10 font-geist"
        >
          View all results
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {previewProperties.map((property, idx) => (
          <div
            key={property.id}
            className={cn(
              "group relative rounded-xl overflow-hidden bg-black/20 border border-white/10",
              "hover:border-white/20 transition-all duration-300 hover:scale-[1.02]",
              "backdrop-blur-sm cursor-pointer animate-fade-up"
            )}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Image */}
            <div className="relative h-32 overflow-hidden">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Badge */}
              <Badge 
                className={cn(
                  "absolute top-2 left-2 text-[10px] font-medium",
                  getBadgeStyle(property.badge)
                )}
              >
                {property.badge}
              </Badge>

              {/* AI Score */}
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-md bg-black/40 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-brand-amber" />
                <span className="text-[10px] font-semibold text-white">{property.score}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-medium text-white truncate font-geist">
                    {property.title}
                  </h4>
                  <p className="text-xs text-white/60 font-geist">{property.location}</p>
                </div>
                <span className="text-sm font-semibold text-white font-geist whitespace-nowrap">
                  {property.price}
                </span>
              </div>

              <div className="flex items-center gap-3 mt-2 text-[11px] text-white/50">
                <span className="flex items-center gap-1">
                  <Bed className="w-3 h-3" />
                  {property.beds}
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="w-3 h-3" />
                  {property.baths}
                </span>
                <span className="flex items-center gap-1">
                  <Ruler className="w-3 h-3" />
                  {property.sqft} sqft
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
