'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Play,
  Star,
  Check,
  ChevronDown,
  ChevronUp,
  X,
  Twitter,
  Instagram,
  Dribbble,
  Linkedin,
  Users,
  Briefcase,
  Award,
  TrendingUp,
  Clock,
  Shield,
  Target,
  Zap,
  Heart,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function FabricaHomePage() {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null)
  const [billingMode, setBillingMode] = React.useState<'monthly' | 'project'>('project')

  const faqs = [
    {
      id: 1,
      question: 'How does the monthly subscription model work?',
      answer: 'The timeline for building a website depends on its complexity and specific requirements. On average, we\'ll provide a detailed timeline during the initial consultation to ensure clear expectations.'
    },
    {
      id: 2,
      question: 'How long does it take to build a website?',
      answer: 'The timeline varies based on project scope, but most websites are completed within 3-4 weeks for standard projects and 6-8 weeks for more complex solutions.'
    },
    {
      id: 3,
      question: 'Can you redesign my existing website?',
      answer: 'Yes! We specialize in website redesigns that improve user experience, modernize aesthetics, and enhance performance while preserving your brand identity.'
    },
    {
      id: 4,
      question: 'Do you offer custom websites or use templates?',
      answer: 'We create fully custom websites tailored to your unique brand and business needs. While we don\'t use pre-made templates, we leverage proven design patterns for efficiency.'
    },
    {
      id: 5,
      question: 'What\'s included in your SEO services?',
      answer: 'Our SEO services include keyword research, on-page optimization, technical SEO audits, content strategy, link building, and performance tracking with regular reports.'
    },
    {
      id: 6,
      question: 'How do I get started?',
      answer: 'Simply reach out through our contact form or email us at hello@fabrica.com. We\'ll schedule a free consultation to discuss your project and provide a detailed proposal.'
    },
  ]

  const projects = [
    {
      id: 1,
      title: 'Boltshift',
      category: '/2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      description: 'Next-gen logistics platform'
    },
    {
      id: 2,
      title: 'CloudWatch',
      category: '/2025',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
      description: 'Cloud infrastructure monitoring'
    },
    {
      id: 3,
      title: 'Warpspeed',
      category: '/2025',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      description: 'High-performance computing'
    },
    {
      id: 4,
      title: 'Euphoria',
      category: '/2025',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      description: 'Wellness & fitness app'
    },
    {
      id: 5,
      title: 'Mastermail',
      category: '/2025',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      description: 'Email marketing automation'
    },
    {
      id: 6,
      title: 'Powersurge',
      category: '/2025',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      description: 'Energy management system'
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'James Carter',
      company: 'Wilson & Co',
      content: 'Incredible team! They delivered exactly what we needed, on time and beyond expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Emily Davis',
      company: 'StartUp Hub',
      content: 'A smooth process from start to finish. Highly professional team!',
      rating: 5
    },
    {
      id: 3,
      name: 'Anna Martinez',
      company: 'Marketing Director',
      content: 'Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry.',
      rating: 5
    },
  ]

  const team = [
    {
      id: 1,
      name: 'Lauren Thompson',
      role: 'Team Lead',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      available: true
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      available: true
    },
    {
      id: 3,
      name: 'Michael Wilson',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      available: true
    },
    {
      id: 4,
      name: 'Christopher Miller',
      role: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      available: true
    },
  ]

  const whyChoosePoints = [
    {
      id: 1,
      title: 'The team that communicates every step',
      description: 'Stay informed throughout your entire project journey with transparent communication.'
    },
    {
      id: 2,
      title: 'Customized solutions for your unique needs',
      description: 'Tailored strategies that align perfectly with your business goals.'
    },
    {
      id: 3,
      title: 'Transparent pricing with no hidden fees',
      description: 'Clear, upfront pricing with no surprises. What you see is what you pay.'
    },
    {
      id: 4,
      title: 'Proven track record with measurable results',
      description: 'Consistent delivery of exceptional results for clients across industries.'
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Behind the scenes',
      date: 'Jan 26, 2025',
      description: 'A sneak peek at how we helped the company revamp their online presence.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80'
    },
    {
      id: 2,
      title: '5 website trends to watch in 2025',
      date: 'Feb 2, 2025',
      description: 'Discover the latest design trends shaping the digital world and how they impact business.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5?w=400&q=80'
    },
  ]

  const stats = [
    { value: '27+', label: 'Successful projects launched' },
    { value: '3m+', label: 'Ad impressions managed' },
    { value: '98%', label: 'Client satisfaction rate' },
    { value: '50k+', label: 'Monthly visitors driven through SEO' },
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <span className="text-xl font-semibold text-white">fabrica®</span>
              <span className="hidden sm:inline text-base font-medium text-white/60">Studio</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#projects" className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition">
                Projects
                <span className="text-xs text-white/40">27</span>
              </Link>
              <Link href="#blog" className="text-sm font-medium text-white/80 hover:text-white transition">
                Blog
              </Link>
              <Link href="#contact" className="text-sm font-medium text-white/80 hover:text-white transition">
                Contact
              </Link>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Hero background"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-semibold leading-none tracking-tight text-white">
                fabrica
                <br />
                <span className="text-5xl sm:text-6xl md:text-7xl">Studio</span>
              </h1>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="gap-2 bg-white text-black hover:bg-zinc-200 rounded-full"
                >
                  <a href="#contact">Get Started</a>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="gap-2 border-white/20 text-white hover:bg-white/10 rounded-full"
                >
                  <a href="#projects">View Projects</a>
                  <Play className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                  alt="Team member"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <div>
                  <p className="text-sm font-medium text-white">George Stern</p>
                  <p className="text-xs text-white/60">Client Success Manager</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <Card className="border-0 bg-white/10 backdrop-blur-xl p-6">
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-xs text-white/60 mb-2 block">E-mail</label>
                    <p className="text-white/40 text-sm">hello@fabrica.com</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <label className="text-xs text-white/60 mb-2 block">Phone</label>
                    <p className="text-white">(312) 555-2468</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="space-y-2">
                    <p className="text-sm text-white/80">Twitter</p>
                    <p className="text-sm text-white/80">Instagram</p>
                    <p className="text-sm text-white/80">Dribbble</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="border-b border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-medium text-white/80">Our clients</h2>
              <p className="text-sm text-white/40 mt-1">(2016-25©)</p>
            </div>
            <p className="text-sm text-white/40 hidden sm:block">Trusted by leading brands worldwide</p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {[
              'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&q=80',
              'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80',
              'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&q=80',
              'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&q=80',
              'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=200&q=80',
              'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=200&q=80',
            ].map((logo, index) => (
              <Card key={index} className="border-0 bg-white/5 hover:bg-white/10 transition">
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <img src={logo} alt={`Client ${index + 1}`} className="h-8 w-auto opacity-60" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-12">
            <p className="text-sm text-white/60 mb-2">(27)</p>
            <h2 className="text-6xl sm:text-7xl font-semibold tracking-tight text-white">
              Projects.
            </h2>
            <p className="mt-4 max-w-md text-base text-white/60">
              We've helped businesses across industries achieve their goals. Here are some of our recent projects.
            </p>
          </div>

          <div className="mb-8 text-white text-4xl font-light">©2025</div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 bg-white rounded-2xl">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                      <span className="text-sm text-neutral-500">{project.category}</span>
                    </div>
                    <p className="text-sm text-neutral-600">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-4 w-4 text-white/60" />
              <h2 className="text-lg font-medium text-white/80">Why choose us</h2>
            </div>
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
              Proven results for every project, with a focus on design and functionality.
            </h3>
            <p className="text-base text-white/60 max-w-2xl">
              No fluff, just results. Thoughtful design and tools that make your work easier. We focus on smart design and useful features, project after project.
            </p>
          </div>

          <div className="mb-16">
            <Card className="border-0 bg-white/5 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                  alt="Featured project"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-0 bg-white rounded-2xl p-8">
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-black">50+</span>
                  <span className="text-neutral-500">/01</span>
                </div>
                <h4 className="text-xl font-semibold text-black">Successful projects completed</h4>
                <p className="text-sm text-neutral-600">
                  We've delivered 50+ projects that help companies generate real results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white rounded-2xl p-8">
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-black">95%</span>
                  <span className="text-neutral-500">/02</span>
                </div>
                <h4 className="text-xl font-semibold text-black">Customer satisfaction rate</h4>
                <div className="flex justify-center">
                  {['logo8.svg', 'logo9.svg', 'logo10.svg'].map((logo, i) => (
                    <div key={i} className="flex items-center gap-2 text-neutral-400 text-sm">
                      <Check className="h-4 w-4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 bg-white/5">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-2 mb-8">
            <Users className="h-4 w-4 text-white/60" />
            <h2 className="text-lg font-medium text-white/80">About us</h2>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
              How we launch websites and marketing campaigns.
            </h2>
            <p className="text-base text-white/60 max-w-2xl">
              See how our team combines creativity, technology, and strategy to build powerful digital solutions.
            </p>
            <p className="text-sm text-white/40 mt-2">fabrica®</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyChoosePoints.map((point) => (
              <Card key={point.id} className="border-0 bg-white/5">
                <CardContent className="p-6">
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + point.id}?w=100&q=80`}
                    alt={point.title}
                    className="h-12 w-12 rounded-full mb-4"
                  />
                  <h4 className="text-sm font-medium text-white/60 mb-2">0{point.id}</h4>
                  <p className="text-base font-semibold text-white mb-2">{point.title}</p>
                  <p className="text-sm text-white/60">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1920&q=80"
              alt="Team collaboration"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <Button
                asChild
                className="gap-2 bg-white text-black hover:bg-zinc-200 rounded-full"
              >
                <Play className="h-4 w-4" />
                Watch showreel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="h-4 w-4 text-white/60" />
            <h2 className="text-lg font-medium text-white/80">What we do</h2>
          </div>

          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-6xl font-semibold tracking-tight text-white">Services.</h2>
            <span className="text-2xl text-white/20">(4)</span>
          </div>

          <div className="space-y-4">
            {[
              {
                id: 1,
                title: 'Web design and development',
                description: 'Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.',
                category: 'Branding'
              },
              {
                id: 2,
                title: 'Social media marketing',
                description: 'Strategic campaigns that amplify your brand presence across all social platforms.',
                category: 'Marketing'
              },
              {
                id: 3,
                title: 'SEO and content marketing',
                description: 'Data-driven SEO strategies combined with compelling content to boost your visibility.',
                category: 'Growth'
              },
              {
                id: 4,
                title: 'Branding and identity',
                description: 'Complete brand identity systems that tell your story and resonate with your audience.',
                category: 'Design'
              },
            ].map((service) => (
              <Card key={service.id} className="group border-0 bg-white/5 hover:bg-white/10 transition">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <span className="text-sm text-white/40 mb-2 block">(00{service.id})</span>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-base text-white/60 max-w-2xl">{service.description}</p>
                    </div>
                    <div className="hidden sm:block">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs text-white/60">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              asChild
              className="gap-2 bg-white text-black hover:bg-zinc-200 rounded-full"
            >
              <a href="#contact">Get started</a>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-2 mb-8">
            <Award className="h-4 w-4 text-white/60" />
            <h2 className="text-lg font-medium text-white/80">Simple pricing</h2>
          </div>

          <div className="mb-8">
            <h2 className="text-6xl font-semibold tracking-tight text-white">Pricing.</h2>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
              <button
                onClick={() => setBillingMode('monthly')}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  billingMode === 'monthly' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingMode('project')}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  billingMode === 'project' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                )}
              >
                Per project
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border-0 bg-white/5 lg:col-span-1">
              <CardContent className="p-6">
                <h4 className="text-white/60 text-sm mb-4">Add-on</h4>
                <h3 className="text-xl font-semibold text-white mb-2">Want more traffic and leads?</h3>
                <p className="text-sm text-white/60 mb-4">
                  Get marketing and SEO that starts with your goals.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-white">+$1,490</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 lg:col-span-2">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-white">$2,490</span>
                      <span className="text-white/60">/project</span>
                    </div>
                    <p className="text-sm text-white/60 mb-4">Delivery time: 3-4 weeks</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <Check className="h-4 w-4 text-green-400" />
                        Homepage + up to 4 inner pages
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <Check className="h-4 w-4 text-green-400" />
                        Design and Development
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <Check className="h-4 w-4 text-green-400" />
                        Mobile-Optimized Design
                      </li>
                    </ul>
                    <Button
                      asChild
                      className="w-full gap-2 bg-white text-black hover:bg-zinc-200 rounded-full"
                    >
                      <a href="#contact">Get in touch</a>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div>
                    <p className="text-white/60 mb-4">Looking for more?</p>
                    <p className="text-white text-lg mb-6">
                      Add marketing, SEO, or content creation—flexible tools to strengthen your project. We'll shape a solution that fits your business, not ours.
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                        alt="George Stern"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-white">George Stern</p>
                        <p className="text-xs text-white/60">Client Success Manager at fabrica®</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center gap-2 mb-8">
            <Star className="h-4 w-4 text-white/60" />
            <h2 className="text-lg font-medium text-white/80">Testimonials</h2>
          </div>

          <div className="mb-4">
            <h2 className="text-6xl font-semibold tracking-tight text-white">Experiences.</h2>
            <p className="text-4xl text-white/20 mt-2">©2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Review */}
            <Card className="border-0 bg-white rounded-2xl p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-bold text-black">4.9</span>
                    <span className="text-neutral-500">/5</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-neutral-600">We've delivered 56+ projects that help companies generate real results.</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center text-xs font-medium text-neutral-600"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-neutral-500">56+ reviews</span>
                </div>
                <p className="text-sm text-neutral-400">Trusted by clients worldwide</p>
                <Button variant="outline" className="w-full rounded-full border-black text-black hover:bg-neutral-100">
                  Leave a review
                </Button>
              </CardContent>
            </Card>

            {/* Testimonials */}
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-neutral-100">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-neutral-200" />
                      <div>
                        <p className="text-sm font-semibold text-black">{testimonial.name}</p>
                        <p className="text-xs text-neutral-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-base text-neutral-700">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
              The faces behind the projects.
            </h2>
            <p className="text-base text-white/60 max-w-2xl mb-6">
              We believe great work comes from collaboration. That's why we work closely with each other to ensure every project meets your goals and exceeds expectations.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/60">Be part of our mission</p>
                <p className="text-sm text-white/40 max-w-xs">
                  If you're ready to create and collaborate, we'd love to hear from you.
                </p>
              </div>
              <Button
                asChild
                className="gap-2 bg-white text-black hover:bg-zinc-200 rounded-full"
              >
                <a href="#contact">Apply now</a>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.id} className="group border-0 overflow-hidden bg-white/5 hover:bg-white/10 transition">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover"
                    />
                    {member.available && (
                      <div className="absolute left-3 top-3">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-white/60 mb-1">at fabrica®</p>
                    <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-white/80">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="mb-12">
            <h2 className="text-6xl font-semibold tracking-tight text-white">FAQ.</h2>
            <p className="mt-4 text-base text-white/60 max-w-md">
              Got questions? We've got answers. Here's everything you need to know about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              {faqs.slice(0, 3).map((faq) => (
                <Card
                  key={faq.id}
                  className="border-0 bg-white/5 overflow-hidden"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <CardContent className="p-0">
                    <button className="flex w-full items-center justify-between p-6 text-left">
                      <span className="text-lg font-medium text-white">{faq.question}</span>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="h-5 w-5 text-white/60" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-white/60" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-6">
                        <p className="text-base text-white/60">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-3">
              {faqs.slice(3, 6).map((faq) => (
                <Card
                  key={faq.id}
                  className="border-0 bg-white/5 overflow-hidden"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <CardContent className="p-0">
                    <button className="flex w-full items-center justify-between p-6 text-left">
                      <span className="text-lg font-medium text-white">{faq.question}</span>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="h-5 w-5 text-white/60" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-white/60" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-6">
                        <p className="text-base text-white/60">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-6xl font-semibold tracking-tight text-white">
                Newest trends and insights from our team.
              </h2>
              <p className="mt-4 text-base text-white/60 max-w-md">
                Stay informed about our latest projects, trends, and industry insights.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="gap-2 border-white/20 text-white hover:bg-white/10 rounded-full"
            >
              <a href="#blog">See all</a>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 overflow-hidden bg-white/5">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9]">
                  <img
                    src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80"
                    alt="Featured post"
                    className="h-full w-full object-cover"
                  />
                  <button className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                    <X className="h-4 w-4 text-white" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-4xl font-semibold text-white mb-2">What's new in digital?</h3>
                  <p className="text-base text-white/60">fabrica®</p>
                </div>
              </CardContent>
            </Card>

            {blogPosts.map((post) => (
              <Card key={post.id} className="border-0 bg-white rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/9]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-neutral-500 mb-2">{post.date}</p>
                    <h3 className="text-lg font-semibold text-black mb-2">{post.title}</h3>
                    <p className="text-sm text-neutral-600">{post.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-semibold tracking-tight text-white mb-6">
                Let's talk.
              </h2>
              <p className="text-lg text-white/60 mb-8">
                Tell us about your project—whether it's a website, SEO, or marketing.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Quick response.</h4>
                    <p className="text-sm text-white/60">
                      If you're ready to create and collaborate, we'd love to hear from you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Clear next steps.</h4>
                    <p className="text-sm text-white/60">
                      After the consultation, we'll provide you with a detailed plan and timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 bg-white rounded-2xl p-8">
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-black mb-2 block">Your name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-black mb-2 block">E-mail *</label>
                  <input
                    type="email"
                    placeholder="hello@site.com"
                    className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-black mb-2 block">Message</label>
                  <textarea
                    placeholder="Your message"
                    rows={3}
                    className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-black placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <Shield className="h-3 w-3" />
                  <p>By submitting, you agree to our Terms and Privacy Policy.</p>
                </div>

                <Button
                  className="w-full gap-2 bg-black text-white hover:bg-neutral-800 rounded-full"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl bg-black p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-semibold text-white mb-4">Newsletter</h2>
                <p className="text-base text-white/60">
                  Join our newsletter and stay updated on the latest trends in digital design.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white/40 mb-2 block">E-mail *</label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 mb-2 block">Your name *</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>
                <Button
                  className="w-full gap-2 bg-white text-black hover:bg-zinc-200 rounded-full"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">fabrica®</h3>
              <p className="text-sm text-white/60">Studio</p>
              <p className="text-sm text-white/40 mt-4">
                Every project we take on is designed for long-term success.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white/60 mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="#home" className="text-sm text-white/60 hover:text-white transition">Home</Link></li>
                <li><Link href="#studio" className="text-sm text-white/60 hover:text-white transition">Studio</Link></li>
                <li><Link href="#projects" className="text-sm text-white/60 hover:text-white transition">Projects</Link></li>
                <li><Link href="#blog" className="text-sm text-white/60 hover:text-white transition">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white/60 mb-4">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition">Dribbble</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-white/60 mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="text-sm text-white/60">(312) 555-2468</p>
                <p className="text-sm text-white/60">hello@fabrica.com</p>
                <div className="flex items-center gap-2 mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                    alt="Creator"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm text-white/40">Created by Anatolii Dmitrienko</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">© 2025 fabrica® Studio. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition">Terms of Service</a>
              <span className="text-white/40">Built in Framer</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
