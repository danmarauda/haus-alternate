"use client"

import React, { useState, useEffect } from "react"
import { Menu, User, BarChart3, ArrowBigRight, ArrowRight, Zap, Phone, CheckSquare, CalendarCheck2, Clock, Quote, ArrowLeft, Twitter, Instagram, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Testimonial {
  quote: string
  author: string
  avatar: string
  nextName: string
  nextAvatar: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Lumi transformed our brand from ordinary to extraordinary. Their creative vision and attention to detail delivered results beyond our wildest dreams.",
    author: "Sarah Johnson, Marketing Director at TechFlow",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=60",
    nextName: "Michael R.",
    nextAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=640&q=60"
  },
  {
    quote: "Working with Lumi was a game-changer for our startup. They didn't just design our brand - they helped us discover our identity.",
    author: "Michael Rodriguez, CEO at InnovateTech",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=640&q=60",
    nextName: "Emily C.",
    nextAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=640&q=60"
  },
  {
    quote: "The level of creativity and professionalism from the Lumi team is unmatched. They brought our vision to life in ways we never imagined.",
    author: "Emily Chen, Creative Director at FutureForward",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=640&q=60",
    nextName: "Sarah J.",
    nextAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=60"
  }
]

export default function AliasFixedNavPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonial = testimonials[currentTestimonial]

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  const goToPrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg ring-1 ring-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-900 tracking-tight">Lumi</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#ff6b47] transition-colors">
                Analytics
              </a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#ff6b47] transition-colors">
                Platform
              </a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#ff6b47] transition-colors">
                Solutions
              </a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#ff6b47] transition-colors">
                Enterprise
              </a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-[#ff6b47] transition-colors">
                Pricing
              </a>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <button className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <User className="w-4 h-4" />
              </button>
              <button className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                <BarChart3 className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff6b47] text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-sm font-medium text-gray-600 hover:text-[#ff6b47] transition-colors">
                Analytics
              </a>
              <a href="#" className="block text-sm font-medium text-gray-600 hover:text-[#ff6b47] transition-colors">
                Platform
              </a>
              <a href="#" className="block text-sm font-medium text-gray-600 hover:text-[#ff6b47] transition-colors">
                Solutions
              </a>
              <a href="#" className="block text-sm font-medium text-gray-600 hover:text-[#ff6b47] transition-colors">
                Enterprise
              </a>
              <a href="#" className="block text-sm font-medium text-gray-600 hover:text-[#ff6b47] transition-colors">
                Pricing
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="lg:pt-32 lg:pb-20 pt-24 pb-16">
        <div className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-4">
          {/* Main Headlines */}
          <div className={cn(
            "text-center space-y-4 mb-16 transition-all duration-800",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tighter leading-none">
              <span className="flex items-center justify-center gap-4">
                CREATIVE
                <span className="inline-flex bg-[#fef2f2] rounded-full p-2">
                  <ArrowBigRight className="w-6 h-6 text-[#ff6b47]" />
                </span>
                DESIGN
              </span>
            </h1>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tighter leading-none">
              <span className="flex items-center justify-center gap-4">
                VISUAL
                <span className="inline-flex bg-[#fef2f2] rounded-full p-2">
                  <ArrowBigRight className="w-6 h-6 text-[#ff6b47]" />
                </span>
                <span className="flex items-center justify-center gap-4">STUDIO</span>
              </span>
            </h1>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 space-x-8">
            {/* Left Card */}
            <div className={cn(
              "lg:col-span-1 transition-all duration-800 delay-100",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}>
              <div className="lg:min-h-[520px] flex flex-col ring-1 ring-gray-200 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6">
                <div className="flex items-baseline gap-2">
                  <span className="sm:text-6xl text-5xl font-light text-gray-900 tracking-tighter">200+</span>
                  <span className="text-gray-600">projects</span>
                </div>
                <p className="text-gray-700 mt-3">We craft visual experiences that inspire, engage, and leave lasting impressions.</p>
                <p className="mt-4 italic text-gray-500">Design. Create. Inspire.</p>

                <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-gray-300">
                  <div className="relative w-full h-44 sm:h-56 bg-gradient-to-br from-white to-gray-100">
                    <div className="absolute inset-0 pointer-events-none" style={{
                      background: "radial-gradient(1200px 300px at -10% -10%, rgba(0,0,0,0.08), transparent 60%), radial-gradient(600px 200px at 110% 0%, rgba(0,0,0,0.04), transparent 55%)"
                    }}></div>

                    <div className="relative h-full w-full sm:p-5 flex flex-col p-4">
                      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-medium ring-1 ring-gray-300 shadow-sm">
                            BG
                          </div>
                          <div className="flex flex-col">
                            <span className="text-gray-900 text-sm sm:text-base font-medium">Bryan Gill</span>
                            <span className="text-[11px] text-gray-500">Active</span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600">UI Designers</span>
                      </div>

                      <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-3.5">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-gray-200 ring-1 ring-gray-300 flex items-center justify-center text-gray-700">
                            <CheckSquare className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1">
                            <div className="h-2.5 rounded-full bg-gray-300"></div>
                            <div className="mt-2 h-2.5 w-2/5 rounded-full bg-gray-200"></div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-gray-200 ring-1 ring-gray-300 flex items-center justify-center text-gray-700">
                            <CalendarCheck2 className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1">
                            <div className="h-2.5 rounded-full bg-gray-300"></div>
                            <div className="mt-2 h-2.5 w-3/5 rounded-full bg-gray-200"></div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-gray-200 ring-1 ring-gray-300 flex items-center justify-center text-gray-700">
                            <Clock className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1">
                            <div className="h-2.5 rounded-full bg-gray-300"></div>
                            <div className="mt-2 h-2.5 w-1/2 rounded-full bg-gray-200"></div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="mt-4 h-8 w-full rounded-xl bg-gray-300 ring-1 ring-gray-400"></div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gray-300"></div>
                  </div>
                </div>

                <div className="mt-5">
                  <button className="inline-flex gap-2 hover:bg-black transition-colors ring-1 ring-gray-300 text-sm font-medium text-white bg-gray-900 rounded-full px-4 py-2.5 shadow-sm items-center">
                    Start Project
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className={cn(
              "lg:col-span-1 lg:min-h-[520px] flex flex-col transition-all duration-800",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <div className="text-center space-y-6 mb-8">
                <p className="text-lg sm:text-xl text-gray-700">
                  Where creativity meets strategy. We transform brands through compelling visual storytelling and innovative design solutions.
                </p>

                <div className="flex flex-wrap gap-3 items-center justify-center">
                  <button className="inline-flex gap-2 hover:bg-gray-800 transition-colors text-sm font-medium text-white bg-black rounded-full px-4 py-2.5 items-center">
                    <Zap className="w-4 h-4" />
                    Get Started
                  </button>
                  <button className="inline-flex gap-2 ring-1 ring-black text-black hover:bg-gray-100 transition-colors text-sm font-medium bg-white rounded-full px-4 py-2.5 items-center">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </button>
                </div>
              </div>

              <div className="ring text-white bg-gray-900 rounded-3xl mt-auto p-6 space-y-4">
                <div className="mb-4 space-y-6">
                  <div className="relative h-40 sm:h-48">
                    <div className="absolute -left-2 top-2 sm:-left-1 sm:top-0 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-gray-200 bg-white rounded-2xl p-1 shadow-xl -rotate-[12deg]">
                      <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fc935cb1-ef8c-4e13-8bce-c3fd8e402f63_320w.jpg" alt="Team portrait" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="absolute -right-1 top-4 sm:right-0 sm:top-2 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-gray-200 bg-white rounded-2xl p-1 shadow-xl rotate-[12deg]">
                      <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/202914e3-8b47-46de-95d5-7de1f0a0aa79_320w.jpg" alt="Team portrait" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="absolute left-2 bottom-0 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-gray-200 bg-white rounded-2xl p-1 shadow-xl rotate-[10deg]">
                      <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/80aff1f9-dccb-4b5d-8dc6-89e37c211930_320w.jpg" alt="Team portrait" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="absolute right-1 bottom-1 w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-gray-200 bg-white rounded-2xl p-1 shadow-xl -rotate-[8deg]">
                      <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0e60f1bd-bde0-4ec4-8c23-24383a8b650a_320w.jpg" alt="Team portrait" className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div className="absolute inset-0 w-40 h-32 sm:w-48 sm:h-36 ring-1 ring-gray-200 z-10 bg-white rounded-2xl mx-auto my-auto p-1 shadow-xl">
                      <img src="https://cdn.midjourney.com/57ea9136-4c5d-4313-8748-67d826cbe22d/0_3.png?w=800&q=80" alt="Lead creative" className="w-full h-full object-cover rounded-xl" />
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4">
                    <span className="sm:text-6xl text-5xl font-light text-gray-50 tracking-tighter">25+</span> creatives
                  </p>
                </div>

                <p className="text-sm text-gray-400">Our passionate team pushes creative boundaries to deliver exceptional results that exceed expectations.</p>
              </div>
            </div>

            {/* Right Card */}
            <div className={cn(
              "lg:col-span-1 transition-all duration-800 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}>
              <div className="lg:min-h-[520px] flex flex-col ring-1 ring-gray-200 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Creative Services</h3>
                <p className="text-gray-700 mt-3 mb-8">From concept to completion, we deliver creative solutions that make an impact.</p>

                <div className="flex-1 relative">
                  <div className="relative overflow-hidden rounded-2xl ring-1 ring-gray-200 bg-gradient-to-br from-white to-gray-50 h-full">
                    <div className="absolute inset-0 pointer-events-none" style={{
                      background: "radial-gradient(800px 400px at 50% 0%, rgba(17,24,39,0.03), transparent 70%)"
                    }}></div>

                    <div className="relative h-full flex flex-col p-4">
                      <div className="mb-0">
                        <div className="inline-flex items-center gap-3 mb-4">
                          <h4 className="text-2xl font-light tracking-tight text-gray-900">We Create</h4>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 p-4 ring-1 ring-gray-200 hover:ring-gray-300 transition-all hover:scale-[1.02]">
                          <div className="flex gap-2 mb-2 items-center">
                            <span className="text-sm font-medium text-gray-900">Brand Identity</span>
                          </div>
                          <div className="space-y-1">
                            <div className="h-1.5 rounded-full bg-gray-300 w-full"></div>
                            <div className="h-1.5 rounded-full bg-gray-200 w-2/3"></div>
                          </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 p-4 ring-1 ring-gray-200 hover:ring-gray-300 transition-all hover:scale-[1.02]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-gray-900">UI/UX Design</span>
                          </div>
                          <div className="space-y-1">
                            <div className="h-1.5 rounded-full bg-gray-300 w-4/5"></div>
                            <div className="h-1.5 rounded-full bg-gray-200 w-full"></div>
                          </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 p-4 ring-1 ring-gray-200 hover:ring-gray-300 transition-all hover:scale-[1.02]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-gray-900">Animation</span>
                          </div>
                          <div className="space-y-1">
                            <div className="h-1.5 rounded-full bg-gray-300 w-3/4"></div>
                            <div className="h-1.5 rounded-full bg-gray-200 w-1/2"></div>
                          </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 p-4 ring-1 ring-gray-200 hover:ring-gray-300 transition-all hover:scale-[1.02]">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium text-gray-900">Art Direction</span>
                          </div>
                          <div className="space-y-1">
                            <div className="h-1.5 rounded-full bg-gray-300 w-5/6"></div>
                            <div className="h-1.5 rounded-full bg-gray-200 w-3/4"></div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Creative Process</span>
                          <span className="text-xs text-gray-500">75% Complete</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1">
                            <p className="text-xs text-gray-600">Brand identity development in progress</p>
                          </div>
                          <button className="h-8 w-8 hover:bg-gray-700 flex transition-colors bg-gray-900 rounded-full items-center justify-center">
                            <ArrowRight className="w-3.5 h-3.5 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="sm:py-20 pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-gray-200 bg-gradient-to-br from-gray-50 to-white sm:px-10 lg:px-14 lg:py-14 p-6 sm:pb-10">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[11px] sm:text-xs tracking-widest text-gray-500 font-light uppercase mb-3">(05) Portfolio</p>
                <h2 className="text-3xl sm:text-5xl font-light tracking-tighter text-gray-900">Featured Work</h2>
                <p className="mt-4 text-xl text-gray-600">Exploring the intersection of creativity and innovation</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200 rounded-3xl overflow-hidden group hover:ring-[#fca5a5] transition-colors">
                <div className="aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop" alt="Brand Identity Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900">Brand Identity</h3>
                  <p className="text-gray-600 text-sm">Complete visual identity for tech startup</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-[#ff6b47] text-sm">Visual Identity</span>
                    <button className="h-8 w-8 hover:bg-gray-700 flex transition-colors bg-gray-900 rounded-full items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200 rounded-3xl overflow-hidden group hover:ring-[#fca5a5] transition-colors">
                <div className="aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop" alt="UI/UX Design Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900">Mobile App Design</h3>
                  <p className="text-gray-600 text-sm">User experience design for fintech platform</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-[#ff6b47] text-sm">UI/UX Design</span>
                    <button className="h-8 w-8 hover:bg-gray-700 flex transition-colors bg-gray-900 rounded-full items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200 rounded-3xl overflow-hidden group hover:ring-[#fca5a5] transition-colors">
                <div className="aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop" alt="Animation Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-900">Motion Graphics</h3>
                  <p className="text-gray-600 text-sm">Animated explainer video series</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-[#ff6b47] text-sm">Animation</span>
                    <button className="h-8 w-8 hover:bg-gray-700 flex transition-colors bg-gray-900 rounded-full items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="inline-flex gap-2 hover:bg-black transition-colors ring-1 ring-gray-300 text-sm font-medium text-white bg-gray-900 rounded-full px-4 py-2.5 shadow-sm items-center">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-gray-200 bg-gradient-to-br from-gray-50 to-white sm:px-10 lg:px-14 lg:py-14 p-6 sm:pb-10">
            <div className="relative">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-[11px] sm:text-xs tracking-widest text-gray-500 font-light uppercase">(04) Testimonials</p>
                  <h3 className="mt-2 text-3xl sm:text-4xl tracking-tight font-light">Creative partnerships that inspire.</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4">
                  <div className="w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white">
                    <img src={testimonial.avatar} alt="Client portrait" className="w-full h-full object-cover" />
                  </div>
                  <p className="mt-4 text-[11px] tracking-widest text-gray-500 uppercase font-light">Client Story</p>
                  <div className="mt-6 flex items-center gap-3">
                    <button
                      onClick={goToPrev}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-gray-200 shadow-sm hover:bg-gray-50 transition"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft className="h-4 w-4 text-gray-900" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="inline-flex h-10 w-10 ring-1 ring-black/10 hover:bg-black transition text-white bg-gray-900 rounded-full shadow-sm items-center justify-center"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-8 relative">
                  <div className="text-gray-900">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-200">
                      <Quote className="h-4 w-4 text-gray-700" />
                    </span>
                    <p className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.25] tracking-tight">
                      {testimonial.quote}
                    </p>
                    <p className="mt-6 text-sm text-gray-600">— {testimonial.author}</p>
                  </div>
                  <div className="absolute right-0 -bottom-2 sm:bottom-0">
                    <div className="flex items-center gap-3 p-2 rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm">
                      <img src={testimonial.nextAvatar} alt="Next client" className="h-14 w-20 object-cover rounded-xl" />
                      <div className="pr-2">
                        <p className="text-[11px] tracking-widest text-gray-500 uppercase font-light">Next Story →</p>
                        <p className="mt-1 text-xs text-gray-700">{testimonial.nextName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={cn(
                      "rounded-full transition-all",
                      currentTestimonial === index
                        ? "h-1.5 w-6 bg-gray-900"
                        : "h-1.5 w-1.5 bg-gray-300 hover:bg-gray-400"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="sm:py-20 pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200 rounded-3xl sm:px-10 lg:px-14 lg:py-14 p-6 sm:pb-10 text-center">
            <h3 className="text-3xl sm:text-5xl font-light tracking-tighter text-gray-900 mb-4">Ready to Create Something Amazing?</h3>
            <p className="text-xl text-gray-600 mb-8">Let's collaborate and bring your creative vision to life.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-[#ff6b47] hover:bg-[#e55a3b] text-white rounded-full px-6 py-3 text-sm font-medium transition-colors">
                <Zap className="w-4 h-4" />
                Start Your Project
              </button>
              <button className="inline-flex items-center gap-2 ring-1 ring-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6 py-3 text-sm font-medium transition-colors">
                <Phone className="w-4 h-4" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-50 to-white ring-t ring-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-semibold tracking-tight text-gray-900">Lumi</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#fef2f2]">
                  <Zap className="w-3.5 h-3.5 text-[#ff6b47]" />
                </span>
              </div>
              <p className="text-gray-600 mb-4">Creative studio bringing ideas to life through innovative design and strategic thinking.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-[#ff6b47] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#ff6b47] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#ff6b47] transition-colors">
                  <Dribbble className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#ff6b47] transition-colors">Brand Identity</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#ff6b47] transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#ff6b47] transition-colors">Art Direction</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-[#ff6b47] transition-colors">Motion Graphics</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:hello@lumi.studio" className="text-sm text-gray-600 hover:text-[#ff6b47] transition-colors">hello@lumi.studio</a></li>
                <li><a href="tel:+1-555-123-4567" className="text-sm text-gray-600 hover:text-[#ff6b47] transition-colors">+1 (555) 123-4567</a></li>
                <li><span className="text-sm text-gray-600">San Francisco, CA</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2024 Lumi Creative Studio. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-[#ff6b47] transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#ff6b47] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
