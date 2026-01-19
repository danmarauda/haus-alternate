"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  Play,
  Wand2,
  Users,
  Palette,
  LayoutTemplate,
  Library,
  Settings,
  Heart,
  Mountain,
  GraduationCap,
  Home,
  Eye,
  Download,
  Share2,
  Brain,
  CheckCircle,
  Zap,
  Globe,
  FileText,
  Tablet,
  Volume2,
  Rocket,
  Waves,
  Flower,
  Star,
  Crown,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AliasEnterpriseAIPage() {
  const [character, setCharacter] = useState("")
  const [selectedTheme, setSelectedTheme] = useState("friendship")
  const [selectedAge, setSelectedAge] = useState("3-5")
  const [isGenerating, setIsGenerating] = useState(false)

  const themes = [
    { id: "friendship", label: "Friendship", icon: Heart },
    { id: "adventure", label: "Adventure", icon: Mountain },
    { id: "learning", label: "Learning", icon: GraduationCap },
    { id: "family", label: "Family", icon: Home },
  ]

  const ageRanges = [
    { id: "3-5", label: "3-5 years" },
    { id: "6-8", label: "6-8 years" },
    { id: "9-12", label: "9-12 years" },
  ]

  const storyFeatures = [
    {
      icon: CheckCircle,
      title: "Personalized Characters:",
      description: "Create unique protagonists based on your child's interests and personality",
    },
    {
      icon: CheckCircle,
      title: "Educational Themes:",
      description: "Stories that teach friendship, courage, kindness, and problem-solving",
    },
    {
      icon: CheckCircle,
      title: "Multiple Lengths:",
      description: "Short bedtime tales to longer chapter books for different attention spans",
    },
  ]

  const storyStats = [
    { value: "500+", label: "Story Templates" },
    { value: "50+", label: "Character Types" },
    { value: "15", label: "Languages" },
  ]

  const featureTags = [
    { icon: Zap, label: "Fast Generation" },
    { icon: Heart, label: "Age-Appropriate" },
    { icon: Globe, label: "Multi-Language" },
  ]

  const publishingOptions = [
    {
      icon: FileText,
      title: "PDF Download",
      description: "Print-ready format",
    },
    {
      icon: Tablet,
      title: "Interactive eBook",
      description: "With animations",
    },
    {
      icon: Volume2,
      title: "Audio Narration",
      description: "AI voice reading",
    },
  ]

  const featuredStories = [
    {
      id: 1,
      title: "Luna's Forest Friends",
      description: "A brave little fox discovers the magic of friendship in an enchanted forest.",
      category: "Friendship",
      icon: Heart,
      image: "https://cdn.midjourney.com/9dc53dde-37ba-4a1b-91b2-2bbb1f4430fc/0_0.png?w=800&q=80",
      aspect: "aspect-[16/9]",
    },
    {
      id: 2,
      title: "Captain Zoe's Space Mission",
      description: "Join young astronaut Zoe as she explores distant planets and meets alien friends.",
      category: "Adventure",
      icon: Rocket,
      image: "https://cdn.midjourney.com/bccb5642-c67a-494a-bf73-17cc27590ea6/0_0.png?w=800&q=80",
      aspect: "aspect-[4/3]",
    },
    {
      id: 3,
      title: "Maya's Underwater Kingdom",
      description: "Dive deep with Maya to discover a magical underwater world full of wonders.",
      category: "Ocean",
      icon: Waves,
      image: "https://cdn.midjourney.com/18bb744b-79de-4f63-8c1f-adde2520c35a/0_0.png?w=800&q=80",
      aspect: "aspect-[4/3]",
    },
    {
      id: 4,
      title: "The Secret Garden",
      description: "Little Emma discovers a magical garden where flowers sing and butterflies paint rainbows.",
      category: "Nature",
      icon: Flower,
      image: "https://cdn.midjourney.com/c02e6b8c-9a86-4014-b14a-0a8d3c5ef376/0_0.png?w=800&q=80",
      aspect: "aspect-[16/9]",
    },
    {
      id: 5,
      title: "Danny and the Gentle Dragon",
      description: "A shy boy befriends a kind dragon and learns that being different makes you special.",
      category: "Magic",
      icon: Star,
      image: "https://cdn.midjourney.com/8d5826f6-3580-4003-8474-d9bf2491c351/0_0.png?w=800&q=80",
      aspect: "aspect-[16/9]",
    },
    {
      id: 6,
      title: "Princess Sophia's Quest",
      description: "A brave princess embarks on a quest to save her kingdom with courage and kindness.",
      category: "Fairy Tale",
      icon: Crown,
      image: "https://cdn.midjourney.com/700bc4c1-f376-4d9b-ad95-c9e7f6a51ec3/0_0.png?w=800&q=80",
      aspect: "aspect-[4/3]",
    },
  ]

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(251,146,60,0.55),rgba(18,18,27,0))]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(236,72,153,0.45),rgba(18,18,27,0))]" />
      </div>

      {/* Navigation */}
      <header className="relative z-50 sticky top-0 backdrop-blur-xl bg-[#0a0a12]/80 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset]">
                <BookOpen className="h-4 w-4 text-white" strokeWidth={1.5} />
              </span>
              <span className="text-lg font-semibold tracking-tight">ALIAS</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/5 px-4">
              <a href="#services" className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition">
                Services
              </a>
              <a href="#method" className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition">
                Method
              </a>
              <a href="#toolbox" className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition">
                Toolbox
              </a>
              <a href="#labs" className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition">
                Labs
              </a>
            </nav>

            <Button
              asChild
              className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(251,146,60,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(251,146,60,0.28)] transition-all duration-300 ease-out transform-gpu hover:-translate-y-0.5 rounded-md border-0 p-0"
              style={{
                backgroundImage: "linear-gradient(144deg,#FB923C, #EC4899 50%, #8B5CF6)",
              }}
            >
              <a href="#contact" className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-md px-4 py-2">
                <Sparkles className="h-4 w-4" strokeWidth={1.5} />
                <span>Talk to an Architect</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-0 sm:pt-16 pb-0 opacity-80 relative">
          <div className="flex flex-col relative z-10 text-center mx-auto space-y-6 items-center pb-[60px]">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                <Wand2 className="h-3.5 w-3.5 text-orange-300" strokeWidth={1.5} />
                New: MOSAIC × UCE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight">
              High Impact AI. Zero Hyped BS.
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-zinc-300">
              We build modular, auditable agent systems powered by MOSAIC orchestration and UCE context.
              Australian data residency, real governance, measurable lift.
            </p>

            <div className="flex gap-3 mt-8 items-center justify-center">
              <Button
                asChild
                className="inline-flex items-center gap-2 shadow-orange-900/25 transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(251,146,60,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75 text-sm font-semibold text-white bg-gradient-to-br from-orange-400 to-pink-500 rounded-full px-5 py-2.5 shadow-lg border-0"
              >
                <a href="#contact">
                  Talk to an Architect
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="inline-flex items-center gap-2 hover:bg-white/5 text-sm font-medium text-zinc-200 border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-lg bg-transparent"
              >
                <a href="#toolbox">
                  <Play className="h-4 w-4" strokeWidth={1.5} />
                  See the Toolbox
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Story Creation Preview */}
        <div className="relative mt-12 sm:mt-16 z-10">
          <div className="absolute inset-0 -top-8 mx-auto h-56 max-w-5xl rounded-[28px] bg-gradient-to-r from-orange-400/30 via-pink-500/20 to-purple-500/30 blur-2xl" />

          <Card className="relative ring-1 ring-white/10 bg-white/5 border-white/10 rounded-2xl backdrop-blur-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Story Creation */}
                <div className="p-5 sm:p-8 lg:p-10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                        Create Your Story
                      </h2>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Wand2 className="h-4 w-4" strokeWidth={1.5} />
                        <span className="text-xs sm:text-sm font-medium">AI Powered</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Character Input */}
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-slate-300">Main Character</label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="e.g., Luna the brave little fox"
                            value={character}
                            onChange={(e) => setCharacter(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent"
                          />
                          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg bg-orange-400/10 hover:bg-orange-400/20 transition">
                            <Sparkles className="h-4 w-4 text-slate-300" strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>

                      {/* Theme Selection */}
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-slate-300">Story Theme</label>
                        <div className="grid grid-cols-2 gap-2">
                          {themes.map((theme) => {
                            const Icon = theme.icon
                            return (
                              <button
                                key={theme.id}
                                onClick={() => setSelectedTheme(theme.id)}
                                className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium transition ${
                                  selectedTheme === theme.id
                                    ? "bg-orange-400/10 border border-orange-400/20 text-orange-300"
                                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                                }`}
                              >
                                <Icon className="h-4 w-4" strokeWidth={1.5} />
                                {theme.label}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Age Range */}
                      <div className="space-y-3">
                        <label className="text-sm font-medium text-slate-300">Age Range</label>
                        <div className="flex gap-2 flex-wrap">
                          {ageRanges.map((range) => (
                            <button
                              key={range.id}
                              onClick={() => setSelectedAge(range.id)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                                selectedAge === range.id
                                  ? "bg-pink-400/10 border border-pink-400/20 text-pink-300"
                                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                              }`}
                            >
                              {range.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Generate Button */}
                      <Button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="w-full inline-flex items-center justify-center gap-2 shadow-orange-900/25 text-sm font-semibold text-white bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl px-4 py-3 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(251,146,60,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75 mt-6 border-0"
                      >
                        <Wand2 className="h-4 w-4" strokeWidth={1.5} />
                        {isGenerating ? "Generating..." : "Generate Story"}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right: Preview */}
                <div className="lg:border-l border-t lg:border-t-0 border-white/10">
                  <div className="p-5 sm:p-8 lg:p-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold tracking-tight text-white">Story Preview</h3>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Eye className="h-4 w-4" strokeWidth={1.5} />
                        <span className="text-xs sm:text-sm font-medium">Live Preview</span>
                      </div>
                    </div>

                    {/* Book Preview */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 shadow-xl">
                        <div className="aspect-[3/4] bg-gradient-to-br from-orange-200 to-pink-200 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-pink-500/20 bg-cover" style={{
                            backgroundImage: "url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/db8c872b-e8f6-4093-ab2d-495a3b779638_800w.jpg)"
                          }} />
                          <div className="relative text-center">
                            <div className="w-16 h-16 flex bg-white/50 rounded-full mx-auto mb-3 items-center justify-center">
                              <Heart className="h-8 w-8 text-slate-950" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-lg font-bold text-slate-50">Luna's Big Adventure</h4>
                            <p className="text-sm text-slate-50 mt-1">A tale of friendship</p>
                          </div>
                        </div>

                        <div className="space-y-3 text-sm">
                          <p className="text-slate-300 leading-relaxed">
                            &quot;Once upon a time, in a magical forest filled with twinkling stars, lived Luna the brave little fox...&quot;
                          </p>
                          <div className="flex items-center gap-2 text-slate-400 text-xs">
                            <BookOpen className="h-3 w-3" strokeWidth={1.5} />
                            <span>Chapter 1 of 5</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-lg py-2.5 hover:bg-white/15"
                      >
                        <Download className="h-4 w-4" strokeWidth={1.5} />
                        Download PDF
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-lg py-2.5 hover:bg-white/15"
                      >
                        <Share2 className="h-4 w-4" strokeWidth={1.5} />
                        Share Story
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              Everything you need to create amazing stories
            </h2>
            <p className="mt-4 text-zinc-300 max-w-2xl mx-auto">
              From AI-generated plots to custom illustrations, bring your children's stories to life with
              professional-quality results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* AI Storytelling */}
            <Card className="relative h-full ring-1 ring-white/10 max-w-xl flex flex-col bg-neutral-900/30 rounded-3xl backdrop-blur border-0">
              <CardContent className="p-6 sm:p-8 flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 flex ring-1 ring-white/20 bg-gradient-to-t from-slate-900/20 to-slate-700/30 rounded-xl items-center justify-center">
                    <Brain className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-slate-400">AI Storytelling</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">Smart Story Generation</h3>
                <p className="text-sm leading-relaxed text-neutral-300">
                  Our advanced AI creates engaging, age-appropriate stories with compelling characters,
                  meaningful lessons, and educational values that children love.
                </p>

                <div className="space-y-3">
                  {storyFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <Icon className="h-4 w-4 text-blue-300 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        <div className="text-xs text-neutral-300">
                          <span className="font-medium text-white">{feature.title}</span> {feature.description}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {featureTags.map((tag, index) => {
                    const Icon = tag.icon
                    return (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 ring-1 ring-stone-400/20 text-xs text-slate-50 bg-slate-400/10 rounded-md px-2 py-1"
                      >
                        <Icon className="h-3 w-3" strokeWidth={1.5} />
                        {tag.label}
                      </span>
                    )
                  })}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {storyStats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-lg font-semibold text-white">{stat.value}</div>
                        <div className="text-xs text-neutral-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Illustrations */}
            <Card className="relative ring-1 ring-white/5 max-w-xl h-full flex flex-col bg-neutral-900/40 border-neutral-800/70 rounded-3xl shadow-2xl backdrop-blur border-0">
              <CardContent className="p-5 sm:p-6 lg:p-8 flex-1 flex flex-col space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 flex ring-1 ring-white/20 bg-gradient-to-t from-slate-900/20 to-slate-700/30 rounded-xl items-center justify-center">
                    <Palette className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-slate-400">Custom Artwork</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Beautiful Illustrations</h3>
                <p className="text-sm leading-relaxed text-neutral-300 mb-6">
                  Every story comes with unique, colorful illustrations that match your narrative perfectly.
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    "https://cdn.midjourney.com/1486a48c-9a3e-45a2-907b-95cc2b1c5f6d/0_0.png?w=800&q=80",
                    "https://cdn.midjourney.com/988c48a8-3d68-40b7-8b55-026340f2d195/0_0.png?w=800&q=80",
                    "https://cdn.midjourney.com/0e29691d-e0cf-4acc-9544-d6013e7223dd/0_0.png?w=800&q=80",
                    "https://cdn.midjourney.com/f163e230-a688-4d0b-9455-a8704cc6b17a/0_0.png?w=800&q=80",
                  ].map((img, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gradient-to-br from-pink-200 to-orange-200 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  ))}
                </div>

                <Button className="flex-1 inline-flex items-center justify-center gap-2 hover:bg-neutral-100 active:bg-neutral-200 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-lg border-0 py-2.5">
                  <Wand2 className="h-4 w-4 mr-2" strokeWidth={1.5} />
                  Customize Style
                </Button>
              </CardContent>
            </Card>

            {/* Publishing Options */}
            <Card className="relative ring-1 ring-white/5 bg-neutral-900/40 border-neutral-800/70 rounded-3xl shadow-2xl backdrop-blur max-w-xl h-full flex flex-col border-0">
              <CardContent className="p-5 sm:p-6 flex-1 border-b border-white/10 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 flex ring-1 ring-white/20 bg-gradient-to-t from-slate-900/20 to-slate-700/30 rounded-xl items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-slate-400">Publishing</span>
                </div>

                <h3 className="text-xl sm:text-[22px] font-semibold tracking-tight text-white mb-4">
                  Multiple Formats
                </h3>

                <div className="space-y-3 mb-6">
                  {publishingOptions.map((option, index) => {
                    const Icon = option.icon
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3"
                      >
                        <Icon className="h-4 w-4 text-blue-300" strokeWidth={1.5} />
                        <div className="flex-1">
                          <p className="text-sm text-white/90 font-medium">{option.title}</p>
                          <p className="text-xs text-white/60">{option.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Button className="flex-1 inline-flex items-center justify-center gap-2 hover:bg-neutral-100 active:bg-neutral-200 transition text-sm font-medium text-neutral-900 tracking-tight bg-white rounded-lg border-0 py-2.5">
                  <Download className="h-4 w-4" strokeWidth={1.5} />
                  Export Options
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-20 border-t border-white/10 pt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl tracking-tight">Featured Stories</h2>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 text-sm tracking-tight text-white/70 hover:text-white transition"
          >
            <span>View gallery</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>

        <div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {featuredStories.map((story) => {
            const Icon = story.icon
            return (
              <article
                key={story.id}
                className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className={`relative ${story.aspect}`}>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="border-t border-white/10 p-4">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                    <span>{story.category}</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold tracking-tight">{story.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{story.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 mt-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
          <Card className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-900/40 p-8 text-center backdrop-blur">
            <CardContent className="p-0 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Start creating magical stories today
              </h2>
              <p className="text-zinc-300">Free to try. Create unlimited stories for your little ones.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button className="inline-flex items-center gap-2 shadow-orange-900/25 text-sm font-semibold text-white bg-gradient-to-br from-orange-400 to-pink-500 rounded-full px-5 py-2.5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(251,146,60,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75 border-0">
                  <a href="#create">Create Your First Story</a>
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5 bg-transparent"
                >
                  <BookOpen className="h-4 w-4" strokeWidth={1.5} />
                  View Examples
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-pink-500">
                <BookOpen className="h-4 w-4 text-white" strokeWidth={1.5} />
              </span>
              <span className="text-sm font-medium text-zinc-300">© 2025 StoryMaker AI</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <a href="#privacy" className="hover:text-zinc-200 transition">Privacy</a>
              <a href="#terms" className="hover:text-zinc-200 transition">Terms</a>
              <a href="#support" className="hover:text-zinc-200 transition">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
