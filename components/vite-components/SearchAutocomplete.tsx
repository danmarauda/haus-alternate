import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, TrendingUp, Sparkles, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const recentSearches = [
  "Sydney CBD apartments",
  "Melbourne 3+ bedroom houses",
  "Brisbane waterfront",
];

const popularLocations = [
  { name: "Bondi Beach, NSW", count: "1,234 listings" },
  { name: "South Yarra, VIC", count: "892 listings" },
  { name: "Paddington, QLD", count: "567 listings" },
];

const aiSuggestions = [
  "Investment properties with high rental yield",
  "Family homes near top schools",
  "New developments under $800K",
];

export const SearchAutocomplete = ({ 
  value, 
  onChange, 
  placeholder = "City, neighborhood",
  className 
}: SearchAutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const allItems: Array<{ type: string; value: string; meta?: string }> = [
    ...recentSearches.map(s => ({ type: 'recent', value: s })),
    ...popularLocations.map(l => ({ type: 'popular', value: l.name, meta: l.count })),
    ...aiSuggestions.map(s => ({ type: 'ai', value: s })),
  ];

  const filteredItems = value
    ? allItems.filter(item => item.value.toLowerCase().includes(value.toLowerCase()))
    : allItems;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(prev => Math.min(prev + 1, filteredItems.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      e.preventDefault();
      onChange(filteredItems[focusedIndex].value);
      setIsOpen(false);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'recent':
        return <Clock className="w-3.5 h-3.5 text-white/40" />;
      case 'popular':
        return <TrendingUp className="w-3.5 h-3.5 text-brand-cyan" />;
      case 'ai':
        return <Sparkles className="w-3.5 h-3.5 text-brand-purple" />;
      default:
        return <MapPin className="w-3.5 h-3.5 text-white/40" />;
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 z-10">
        <MapPin className="w-4 h-4" />
      </div>
      <Input
        ref={inputRef}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={cn(
          "w-full pl-9 pr-3 py-3 rounded-xl text-sm bg-black/10 text-white placeholder-white/40",
          "border border-white/10 backdrop-blur-md font-geist",
          "focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan/50 focus:bg-black/20",
          "transition-all duration-200",
          className
        )}
      />
      
      {isOpen && filteredItems.length > 0 && (
        <div 
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 z-50 rounded-xl bg-secondary/95 border border-glass-border backdrop-blur-xl shadow-premium overflow-hidden animate-fade-in"
        >
          {/* Recent Searches */}
          {filteredItems.some(i => i.type === 'recent') && (
            <div className="p-2">
              <div className="flex items-center gap-2 px-2 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-geist">
                <Clock className="w-3 h-3" />
                Recent Searches
              </div>
              {filteredItems.filter(i => i.type === 'recent').map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onChange(item.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left",
                    "hover:bg-white/5 transition-colors font-geist text-foreground/80",
                    focusedIndex === idx && "bg-white/5"
                  )}
                >
                  {getIcon(item.type)}
                  {item.value}
                </button>
              ))}
            </div>
          )}

          {/* Popular Locations */}
          {filteredItems.some(i => i.type === 'popular') && (
            <div className="p-2 border-t border-glass-border">
              <div className="flex items-center gap-2 px-2 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-geist">
                <TrendingUp className="w-3 h-3" />
                Popular Locations
              </div>
              {filteredItems.filter(i => i.type === 'popular').map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onChange(item.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm",
                    "hover:bg-white/5 transition-colors font-geist"
                  )}
                >
                  <span className="flex items-center gap-3 text-foreground/80">
                    {getIcon(item.type)}
                    {item.value}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.meta}</span>
                </button>
              ))}
            </div>
          )}

          {/* AI Suggestions */}
          {filteredItems.some(i => i.type === 'ai') && (
            <div className="p-2 border-t border-glass-border bg-brand-purple/5">
              <div className="flex items-center gap-2 px-2 py-1.5 text-[10px] uppercase tracking-wider text-brand-purple font-geist">
                <Sparkles className="w-3 h-3" />
                AI-Powered Suggestions
              </div>
              {filteredItems.filter(i => i.type === 'ai').map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onChange(item.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left",
                    "hover:bg-brand-purple/10 transition-colors font-geist text-foreground/80"
                  )}
                >
                  {getIcon(item.type)}
                  {item.value}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
