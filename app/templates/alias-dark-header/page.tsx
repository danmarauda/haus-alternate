"use client";

import React, { useState, useEffect } from "react";
import { Orbit, Menu, Star, ChevronDown, FileText, Send, ChevronLeft, ChevronRight, Plus, Check, ArrowUpRight, Calendar, MessageCircle, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

// Types
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CMO",
    company: "TechFlow Solutions",
    avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0f3907b-87b7-4671-99d8-ab70af2fa691_320w.jpg",
    content: "FluxScale increased our ROAS by 340% in just 3 months. Their data-driven approach and creative testing methodology transformed our acquisition strategy.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Growth Lead",
    company: "Velocity Commerce",
    avatar: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7f6feef-fd3e-4901-bce6-7271aa74dc87_320w.jpg",
    content: "The team reduced our CAC by 65% while scaling spend 4x. Their transparent reporting and rapid iteration cycle keeps us ahead of the competition.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Park",
    role: "Founder",
    company: "Peak Performance Co",
    avatar: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2201bb49-ba9d-4655-9360-c0350107a9fd_320w.jpg",
    content: "From launch to scale in 6 weeks. FluxScale's systematic approach to creative testing and performance optimization delivered results beyond our expectations.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "VP Marketing",
    company: "Nexus Digital",
    avatar: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1bfea42-f5c9-4b52-974e-36fe36212b17_320w.jpg",
    content: "FluxScale transformed our entire funnel optimization approach. We saw a 280% improvement in conversion rates within the first quarter of working together.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "CEO",
    company: "Apex Ventures",
    avatar: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg",
    content: "Working with FluxScale has been game-changing. Their strategic approach to creative testing helped us break through our growth plateau and achieve sustainable scale.",
    rating: 5,
  },
  {
    id: 6,
    name: "Ryan Mitchell",
    role: "Co-Founder",
    company: "Scale Dynamics",
    avatar: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5bf79840-b7ed-4d8d-acd3-c5f5835a065e_320w.jpg",
    content: "The ROI improvements speak for themselves - 450% increase in 8 weeks. FluxScale's data-driven methodology and execution speed are unmatched in the industry.",
    rating: 5,
  },
];

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How quickly can you start running campaigns for us?",
    answer: "We can typically have your first campaigns live within 5-7 business days. This includes account setup, creative development, tracking implementation, and initial campaign configuration. Our streamlined onboarding process ensures you start seeing results as quickly as possible.",
  },
  {
    id: 2,
    question: "What platforms do you run ads on?",
    answer: "We specialize in Facebook/Instagram, Google Ads, TikTok, YouTube, and emerging platforms like Snapchat and Pinterest. Our platform selection is based on where your target audience is most active and where we can achieve the best ROI for your specific business model.",
  },
  {
    id: 3,
    question: "Do you provide creative assets or do we need to create them?",
    answer: "We handle all creative development in-house. Our team includes designers, copywriters, and video editors who create high-converting ads tailored to your brand and audience. You'll receive unlimited creative requests and revisions as part of your plan.",
  },
  {
    id: 4,
    question: "What's your minimum ad spend requirement?",
    answer: "Our Basic plan requires a minimum monthly ad spend of $5,000, while our Premium plan is designed for businesses spending $15,000+ monthly. This ensures we have sufficient budget to run meaningful tests and optimize for the best results.",
  },
  {
    id: 5,
    question: "How do you measure and report on performance?",
    answer: "We provide detailed weekly reports covering all key metrics: ROAS, CAC, conversion rates, and more. You'll have access to a real-time dashboard plus regular strategy calls to review performance and plan next steps. Complete transparency is core to our approach.",
  },
  {
    id: 6,
    question: "Can I pause or cancel my plan anytime?",
    answer: "Yes, you can pause or cancel your plan at any time with 30 days notice. We believe in earning your business every month, not locking you into long-term contracts. If you're not seeing results, we'll work with you to improve or help you transition smoothly.",
  },
];

// Components
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-white text-white" : "text-white/30"}`} />
    ))}
  </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl">
    <div className="flex items-center gap-3">
      <Image
        src={testimonial.avatar}
        alt={`${testimonial.name} avatar`}
        width={36}
        height={36}
        className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover"
      />
    </div>
    <div className="mt-3">
      <StarRating rating={testimonial.rating} />
    </div>
    <p className="mt-3 text-sm sm:text-base text-white/80 font-geist">{testimonial.content}</p>
    <div className="mt-5 pt-3 border-t border-white/10">
      <p className="text-sm font-semibold tracking-tight font-geist">
        {testimonial.name} • {testimonial.role}
      </p>
      <p className="text-xs text-white/60 font-geist mt-1">{testimonial.company}</p>
    </div>
  </div>
);

const FAQItemComponent: React.FC<{ faq: FAQItem; isOpen: boolean; onToggle: () => void }> = ({ faq, isOpen, onToggle }) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
    <button
      onClick={onToggle}
      className="w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
    >
      <h3 className="text-lg font-medium tracking-tight font-geist pr-4">{faq.question}</h3>
      <span className={`flex-shrink-0 w-5 h-5 text-white/60 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
        <Plus className="w-5 h-5" />
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
        <p className="text-sm text-white/70 font-geist">{faq.answer}</p>
      </div>
    </div>
  </div>
);

// Main Component
export default function AliasDarkHeaderPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());

    // Auto-slide testimonials
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
  ];

  return (
    <div className="min-h-screen bg-zinc-950 antialiased text-white font-geist">
      {/* Hero Section */}
      <header className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <nav className="mt-6 flex items-center justify-between">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center bg-emerald-500 rounded-full">
                <Orbit className="h-4 w-4 text-black" />
              </span>
              <span className="text-base font-medium tracking-tighter font-geist">FluxScale</span>
            </a>

            <div className="hidden gap-1 md:flex bg-white/5 border border-white/10 rounded-xl p-1 backdrop-blur items-center">
              <a href="#about" className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist transition-colors">About</a>
              <a href="#blog" className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist transition-colors">Blog</a>
              <a href="#solutions" className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist transition-colors">Solutions</a>
              <button className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist">
                Process
                <ChevronDown className="h-4 w-4" />
              </button>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-black font-geist bg-emerald-500 rounded-lg px-3 py-2 ml-2 hover:bg-emerald-400 transition-colors"
              >
                Book a call
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium backdrop-blur font-geist"
            >
              <Menu className="h-5 w-5" />
              Menu
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="flex flex-col gap-2">
                <a href="#about" className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist">About</a>
                <a href="#blog" className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist">Blog</a>
                <a href="#solutions" className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist">Solutions</a>
                <a href="#process" className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist">Process</a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-black font-geist bg-emerald-500 rounded-lg px-3 py-2 mt-2 justify-center"
                >
                  Book a call
                </a>
              </div>
            </div>
          )}

          {/* Hero Content */}
          <section className="relative z-10 max-w-4xl pt-14 sm:pt-20 md:pt-28 text-center mx-auto pb-12">
            {/* Social proof */}
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-9 w-9 rounded-full ring-2 ring-black/60 bg-gradient-to-br from-white/20 to-white/5" />
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <StarRating rating={5} />
                </div>
                <p className="mt-1 text-xs font-medium text-white/70 font-geist">140+ happy partners</p>
              </div>
            </div>

            <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-7xl tracking-tighter font-geist mx-auto">
              Ready to{" "}
              <span className="italic text-white tracking-tight font-instrument-serif">boost</span>{" "}
              your growth with performance ads?
            </h1>

            <p className="max-w-2xl mt-6 text-base sm:text-lg font-normal text-white/70 font-geist mx-auto">
              We engineer profitable acquisition systems for digital brands. If efficient, scalable growth is your goal, you're in the right place.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 items-center justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] text-base font-medium text-black font-geist bg-emerald-500 rounded-xl px-6 py-3 hover:bg-emerald-400 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist transition-colors"
              >
                Learn more
              </a>
            </div>
          </section>
        </div>
      </header>

      {/* Trusted by */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 mt-32">
        <p className="mb-6 text-center text-sm font-medium text-white/50 font-geist">You're in good hands</p>
        <div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
          {["AURIC", "LOFTCO", "NIMBLE", "ECHO", "POLAR", "CIRCUIT"].map((brand, i) => (
            <div key={brand} className="flex items-center gap-2">
              <span className={`h-5 w-5 bg-white/10 ${i === 0 ? "rounded-full" : i === 1 ? "rounded-md" : i === 2 ? "rounded-sm rotate-45" : i === 3 ? "rounded-full border border-white/20" : i === 4 ? "rounded-full bg-gradient-to-br from-white/20 to-transparent" : "rounded-sm"}`} />
              <span className="text-lg font-semibold tracking-tight text-white/80 font-geist">{brand}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer teaser with imagery */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter font-geist">Creative that converts, data that guides.</h2>
              <p className="mt-4 text-base text-white/70 font-geist">Our experiments compound over time. Transparent reporting, rapid iteration, and creative rigor — all focused on profitable outcomes.</p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/10 font-geist transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  See case studies
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-black font-geist bg-emerald-500 rounded-lg px-4 py-2 hover:bg-emerald-400 transition-colors"
                >
                  Schedule intro
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/10" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-medium text-white/50 font-geist">What you get</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tighter font-geist">Features built for efficient growth</h2>
            <p className="mt-3 text-base text-white/70 font-geist">From unlimited creative requests to transparent pricing, our operating system helps you scale acquisition with confidence.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Big feature */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2">
            <div className="relative">
              <div className="aspect-video w-full bg-gradient-to-br from-emerald-500/20 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
                <span className="text-xs text-white/60 font-geist">Unlimited pipeline</span>
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-medium tracking-tight font-geist">Launch experiments, not guesses</h3>
              <p className="mt-2 text-sm sm:text-base text-white/70 font-geist">Submit unlimited test ideas and creative requests. We prioritize by impact, ship fast, and report clearly so learnings stack every week.</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  See case studies
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-black font-geist bg-emerald-500 rounded-lg px-4 py-2 hover:bg-emerald-400 transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Start a request
                </a>
              </div>
            </div>
          </div>

          {/* Right column cards */}
          {[
            { title: "Requests & revisions", desc: "Iterate quickly with async requests and structured feedback. Every round ends with clear rationale and next steps." },
            { title: "Worry‑free pricing", desc: "Simple plans, no surprises. Pause anytime. Scale up when you're ready." },
          ].map((feature, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium tracking-tight font-geist">{feature.title}</h3>
                  <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-300 font-geist">NEW</span>
                </div>
                <p className="mt-2 text-sm text-white/70 font-geist">{feature.desc}</p>
                <div className="mt-4 rounded-lg overflow-hidden border border-white/10 aspect-video bg-gradient-to-br from-white/5 to-transparent" />
              </div>
            </div>
          ))}

          {/* Bottom cards */}
          {[
            { title: "Quick turnaround", desc: "Most tasks ship in 48–72 hours without sacrificing quality." },
            { title: "Go live in days", desc: "From first brief to live campaigns in a week, with tracking and QA handled." },
            { title: "Rapid scaling", desc: "Scale your campaigns efficiently as you see results." },
          ].map((feature, i) => (
            <div key={i} className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl">
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-medium tracking-tight font-geist">{feature.title}</h3>
                <p className="mt-2 text-sm text-white/70 font-geist">{feature.desc}</p>
                <div className="mt-4 rounded-lg overflow-hidden border border-white/10 aspect-video bg-gradient-to-br from-white/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Client Success</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter font-geist mt-4">What our partners say about driving growth.</h2>
            <p className="mt-4 text-base text-white/70 font-geist">Real results from real brands. See how we've helped companies scale their acquisition and maximize ROI.</p>

            {/* Logos row */}
            <div className="mt-6 flex items-center justify-center gap-8 text-white/50">
              {["NEXUS", "APEX", "SCALE", "ORBIT"].map((brand) => (
                <div key={brand} className="flex items-center gap-2">
                  <span className="h-5 w-5 bg-white/10 rounded-full" />
                  <span className="text-sm font-medium tracking-tight font-geist">{brand}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist transition-colors"
              >
                View all success stories
              </a>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="mt-10 relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid gap-6 md:grid-cols-3">
                      {slide.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + 2) % 2)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {[0, 1].map((slideIndex) => (
                  <button
                    key={slideIndex}
                    onClick={() => setCurrentSlide(slideIndex)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === slideIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % 2)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative overflow-hidden mt-16">
        <div className="mx-8 sm:mx-8 mt-10 p-6 sm:p-8">
          <div className="relative">
            {/* Header */}
            <div className="relative max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur font-geist">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-xs font-normal">Pricing</span>
              </div>
              <h2 className="text-[40px] sm:text-6xl lg:text-6xl leading-[0.95] font-normal text-white tracking-tighter font-geist mt-4">Plans for all businesses</h2>
              <p className="mt-3 text-sm sm:text-base text-white/70 font-geist max-w-2xl mx-auto">
                Our pricing plans are designed to make getting started as effortless as possible. With flexible options tailored to a variety of needs and budgets.
              </p>
            </div>

            {/* Plans */}
            <div className="relative max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Plan */}
              <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6">
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(80% 120% at 10% 0%, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 55%)" }} />
                <div className="relative flex items-center justify-between">
                  <div className="inline-flex items-center gap-2" />
                  <span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Most Pick</span>
                </div>

                <div className="relative mt-5 text-center">
                  <h3 className="text-xl text-white font-geist font-medium tracking-tight">Basic</h3>
                  <div className="mt-3 flex items-end justify-center gap-3">
                    <p className="text-4xl sm:text-5xl text-white font-geist font-medium tracking-tight">$99</p>
                    <span className="text-white/70 text-sm font-geist mb-1">/ Month</span>
                    <span className="text-2xl text-white/30 line-through font-geist">$450</span>
                  </div>
                  <p className="mt-3 text-sm text-white/70 font-geist">
                    Our basic pricing plan is designed to offer great value while providing the essential features you need to get started.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">100+ Projects</span>
                    <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">75+ Revisions</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {[
                    "All templates unlocked",
                    "Unlimited Licenses",
                    "Lifetime Updates",
                    "Email support",
                    "30‑Days Money‑back Guarantee",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </span>
                      <span className={`text-sm font-geist ${i === 4 ? "text-white/70" : "text-white/90"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-emerald-500 text-black text-sm font-medium hover:bg-emerald-400 transition font-geist">
                  Book an Appointment
                  <ArrowUpRight className="w-4.5 h-4.5" />
                </button>
              </article>

              {/* Premium Plan */}
              <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6">
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(80% 120% at 90% -10%, rgba(99,102,241,0.16) 0%, rgba(0,0,0,0) 55%)" }} />
                <div className="relative flex items-center justify-between">
                  <div className="inline-flex items-center gap-2" />
                  <span className="relative z-10 inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-white/80 bg-white/5 border border-white/10 font-geist">Recommended</span>
                </div>

                <div className="relative mt-5 text-center">
                  <h3 className="text-xl text-white font-geist font-medium tracking-tight">Premium</h3>
                  <div className="mt-3 flex items-end justify-center gap-2">
                    <p className="text-4xl sm:text-5xl text-white font-geist font-medium tracking-tight">$2,599</p>
                    <span className="text-white/70 text-sm font-geist mb-1">/ Month</span>
                  </div>
                  <p className="mt-3 text-sm text-white/70 font-geist">
                    Our pro pricing plan is designed for businesses looking for advanced features and premium support.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">650+ Projects</span>
                    <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 font-geist">250+ Revisions</span>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {[
                    "All templates unlocked",
                    "Unlimited Licenses",
                    "Lifetime Updates",
                    "Priority email support",
                    "30‑Days Money‑back Guarantee",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="h-5 w-5 flex items-center justify-center rounded-full bg-white/5 border border-white/10">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </span>
                      <span className="text-sm text-white/90 font-geist">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 inline-flex items-center justify-center gap-2 h-11 w-full rounded-xl bg-emerald-500 text-black text-sm font-medium hover:bg-emerald-400 transition font-geist">
                  Book an Appointment
                  <Calendar className="w-4.5 h-4.5" />
                </button>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 backdrop-blur font-geist">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="text-xs font-normal">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tighter font-geist mt-4">Frequently asked questions</h2>
            <p className="mt-4 text-base text-white/70 font-geist">Everything you need to know about our services and how we work with growing businesses.</p>
          </div>

          {/* FAQ Grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {faqs.map((faq) => (
                <FAQItemComponent
                  key={faq.id}
                  faq={faq}
                  isOpen={openFaqId === faq.id}
                  onToggle={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-base text-white/70 font-geist mb-6">Still have questions? We'd love to chat about your specific needs.</p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Start a conversation
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-base font-medium text-black font-geist bg-emerald-500 rounded-xl px-6 py-3 hover:bg-emerald-400 transition"
              >
                <Calendar className="w-5 h-5" />
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-white/50 font-geist">© {year} FluxScale. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
