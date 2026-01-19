import { useState, useEffect, useRef } from 'react';
import { Quote, Star, Play, ChevronLeft, ChevronRight, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  hasVideo: boolean;
  videoThumbnail?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "HAUS saved me 20 hours per week on property research and client matching. The AI recommendations are incredibly accurate and my closing rate has doubled.",
    author: "Sarah Mitchell",
    title: "Senior Real Estate Agent",
    company: "Ray White Sydney",
    avatar: "SM",
    rating: 5,
    hasVideo: true,
    videoThumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    quote: "The AI analysis paid for itself 10x in my first month. I identified a suburb about to boom and secured three properties before prices jumped 15%.",
    author: "Michael Chen",
    title: "Property Investor",
    company: "Chen Holdings",
    avatar: "MC",
    rating: 5,
    hasVideo: true,
    videoThumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    quote: "Our team productivity increased 40% after switching to HAUS. The collaboration features and automated compliance checks are game-changers.",
    author: "Jennifer Walsh",
    title: "Agency Owner",
    company: "Walsh & Partners",
    avatar: "JW",
    rating: 5,
    hasVideo: false
  },
  {
    id: 4,
    quote: "First-time buying was overwhelming until I found HAUS. The neighborhood insights and virtual tours helped me find my dream home in just 2 weeks.",
    author: "David Park",
    title: "First-time Buyer",
    company: "Software Engineer",
    avatar: "DP",
    rating: 5,
    hasVideo: true,
    videoThumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    quote: "Managing 200+ properties across three states used to be a nightmare. HAUS consolidated everything and our tenant satisfaction scores are at an all-time high.",
    author: "Lisa Thompson",
    title: "Property Manager",
    company: "Metro Property Group",
    avatar: "LT",
    rating: 5,
    hasVideo: false
  }
];

const metrics = [
  { value: 2400, suffix: '+', label: 'Agents using HAUS' },
  { value: 1.2, prefix: '$', suffix: 'B', label: 'Transaction volume' },
  { value: 98, suffix: '%', label: 'Customer satisfaction' },
  { value: 4.9, suffix: '', label: 'App Store rating' }
];

const partnerLogos = [
  'Ray White', 'LJ Hooker', 'McGrath', 'Belle Property', 'Raine & Horne',
  'Harcourts', 'Century 21', 'First National', 'PRD', 'Elders'
];

const pressLogos = [
  { name: 'AFR', color: 'from-orange-500 to-orange-600' },
  { name: 'Domain', color: 'from-emerald-500 to-emerald-600' },
  { name: 'REA', color: 'from-red-500 to-red-600' },
  { name: 'The Australian', color: 'from-blue-500 to-blue-600' },
  { name: 'Smart Company', color: 'from-purple-500 to-purple-600' }
];

const AnimatedCounter = ({ value, prefix = '', suffix = '', duration = 2000 }: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(value * easeOut);
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const displayValue = value < 10 ? count.toFixed(1) : Math.round(count).toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  );
};

const StarRating = ({ rating, animated = false }: { rating: number; animated?: boolean }) => {
  const [visibleStars, setVisibleStars] = useState(animated ? 0 : rating);

  useEffect(() => {
    if (animated) {
      const timer = setInterval(() => {
        setVisibleStars(prev => {
          if (prev >= rating) {
            clearInterval(timer);
            return rating;
          }
          return prev + 1;
        });
      }, 150);
      return () => clearInterval(timer);
    }
  }, [rating, animated]);

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 transition-all duration-300 ${
            star <= visibleStars
              ? 'text-amber-400 fill-amber-400 scale-100'
              : 'text-muted scale-75'
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={`relative h-full transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}>
      <div className="p-6 md:p-8 rounded-3xl bg-card/80 ring-1 ring-border/60 backdrop-blur-sm h-full flex flex-col">
        {/* Video Thumbnail or Quote */}
        {testimonial.hasVideo && testimonial.videoThumbnail && !showVideo ? (
          <div 
            className="relative rounded-2xl overflow-hidden mb-6 cursor-pointer group"
            onClick={() => setShowVideo(true)}
          >
            <img 
              src={testimonial.videoThumbnail} 
              alt="Video testimonial"
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-6 h-6 text-primary fill-primary ml-1" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 px-2 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
              Watch Story
            </div>
          </div>
        ) : showVideo ? (
          <div className="relative rounded-2xl overflow-hidden mb-6 bg-muted h-40 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Pause className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">Video playing...</p>
            </div>
          </div>
        ) : null}

        {/* Quote */}
        <div className="flex-1">
          <Quote className="w-10 h-10 text-primary/20 mb-4" />
          <p className="text-foreground text-base md:text-lg leading-relaxed">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Rating */}
        <div className="mt-6">
          <StarRating rating={testimonial.rating} animated={isActive} />
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-semibold text-sm">
            {testimonial.avatar}
          </div>
          <div>
            <p className="font-semibold text-foreground">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            <p className="text-xs text-muted-foreground">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfiniteLogoScroll = ({ logos, direction = 'left' }: { logos: string[]; direction?: 'left' | 'right' }) => {
  return (
    <div className="overflow-hidden">
      <div 
        className={`flex gap-12 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{ width: 'max-content' }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={index}
            className="flex items-center justify-center px-6 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors min-w-[140px]"
          >
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section 
      ref={ref}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Client Success Stories
        </span>
        <h2 className="text-foreground text-3xl md:text-4xl font-bold tracking-tight">
          Trusted by Thousands of Property Professionals
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          See how HAUS is transforming the way agents, investors, and buyers approach real estate.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard 
                  testimonial={testimonial} 
                  isActive={index === activeIndex}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 ring-1 ring-primary/20">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className="text-center py-4"
          >
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              <AnimatedCounter 
                value={metric.value} 
                prefix={metric.prefix} 
                suffix={metric.suffix}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Partner Logos */}
      <div className="mt-16">
        <p className="text-center text-sm text-muted-foreground mb-6">Trusted by teams at</p>
        <InfiniteLogoScroll logos={partnerLogos} direction="left" />
      </div>

      {/* Press/Awards Section */}
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground mb-6">As seen in</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {pressLogos.map((press, index) => (
            <div
              key={index}
              className={`px-6 py-3 rounded-xl bg-gradient-to-r ${press.color} text-white font-bold text-sm transition-transform hover:scale-105`}
            >
              {press.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
