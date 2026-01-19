"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  Search,
  Users,
  DollarSign,
  FileText,
  Bell,
  Plus,
  Briefcase,
  Phone,
  MessageSquare,
  FileCheck,
  Mail,
  Calendar,
  MoreHorizontal,
  Shield,
  SearchCheck,
  Truck,
} from "lucide-react"

interface Contact {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  status?: "active" | "pending" | "inactive"
  email?: string
  phone?: string
  lastContact?: string
  online?: boolean
}

interface Communication {
  id: string
  contact: string
  initials: string
  subject: string
  time: string
}

const mockPrimaryContact: Contact = {
  id: "1",
  name: "Mike Ross",
  role: "Senior Mortgage Broker",
  company: "Spectra Finance",
  avatar: "https://i.pravatar.cc/150?u=mike",
  status: "active",
  email: "mike@spectrafinance.com.au",
  phone: "0400 123 456",
  lastContact: "Today, 9:41 AM",
  online: true,
}

const mockContacts: Contact[] = [
  {
    id: "2",
    name: "Jessica Pearson",
    role: "Principal Solicitor",
    company: "Pearson Law",
    avatar: "https://i.pravatar.cc/150?u=jessica",
    status: "active",
  },
  {
    id: "3",
    name: "Darren Davis",
    role: "Lead Agent",
    company: "BresicWhitney",
    avatar: "https://i.pravatar.cc/150?u=agent1",
  },
  {
    id: "4",
    name: "Sarah Miller",
    role: "Associate",
    company: "BresicWhitney",
    avatar: "https://i.pravatar.cc/150?u=agent2",
  },
]

const mockCommunications: Communication[] = [
  {
    id: "1",
    contact: "Mike Ross",
    initials: "MR",
    subject: "Re: Updated borrowing capacity calculation",
    time: "10:42 AM",
  },
  {
    id: "2",
    contact: "Jessica Pearson",
    initials: "JP",
    subject: "Contract review completed - 128 Crown St",
    time: "Yesterday",
  },
  {
    id: "3",
    contact: "Darren Davis",
    initials: "DD",
    subject: "Auction registration details",
    time: "Oct 24",
  },
]

const services = [
  {
    id: "1",
    title: "Building & Pest",
    description: "Inspection required before auction.",
    icon: SearchCheck,
    color: "orange",
    status: "neutral",
  },
  {
    id: "2",
    title: "Home Insurance",
    description: "Cover note issued by NRMA.",
    icon: Shield,
    color: "blue",
    status: "active",
  },
  {
    id: "3",
    title: "Removalist",
    description: "Not yet booked.",
    icon: Truck,
    color: "purple",
    status: "neutral",
  },
]

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "#" },
  { icon: Search, label: "Property Search", href: "#" },
  { icon: Users, label: "My Team", href: "#", active: true },
  { icon: DollarSign, label: "Finance", href: "#" },
  { icon: FileText, label: "Documents", href: "#" },
]

export default function MyTeamPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans antialiased">
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center">
          <div className="text-white font-display text-2xl font-light">HAUS.CONTACTS</div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-display text-lg font-bold tracking-tight text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm">
              HA
            </div>
            HAUS
            <span className="text-neutral-600 font-normal">.CONTACTS</span>
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="hover:text-white cursor-pointer transition-colors">Dashboard</span>
            <span className="text-neutral-700">/</span>
            <span className="text-white">Team Directory</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-white/5 px-2 py-1 rounded-md border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-mono text-emerald-500 uppercase">System Online</span>
          </div>
          <button className="w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors border border-transparent hover:border-white/10 rounded-md">
            <Bell className="w-4 h-4" />
          </button>
          <button className="bg-white text-black px-4 py-1.5 rounded text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Contact</span>
          </button>
        </div>
      </nav>

      <div className="pt-20 pb-12 px-6 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative items-start">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:flex flex-col sticky top-24 h-[calc(100vh-8rem)] shrink-0 w-[60px] hover:w-[240px] transition-[width] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] bg-[#050505] z-40 group border-r border-white/5 overflow-hidden rounded-r-xl shadow-2xl shadow-black/50">
            <nav className="flex flex-col gap-2 h-full p-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center px-2 py-2.5 rounded-lg transition-colors whitespace-nowrap group/link ${
                    item.active
                      ? "text-white bg-white/5 border border-white/5"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon className={`w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110 ${item.active ? "text-white" : ""}`} />
                  <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.label}
                  </span>
                </Link>
              ))}

              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 px-1 py-2 overflow-hidden whitespace-nowrap">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] font-medium text-white border border-white/10">
                    ME
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="text-xs text-white">First Home Buyer</div>
                    <div className="text-[10px] text-neutral-500">Personal Account</div>
                  </div>
                </div>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 space-y-6 animate-in">
            {/* Hero Section */}
            <section className="relative rounded-2xl overflow-hidden border border-white/10 h-[280px] group">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                  alt="Office"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/20" />
              </div>

              <div className="absolute bottom-0 w-full p-8 z-10 flex flex-col md:flex-row items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      Professional Network
                    </span>
                  </div>
                  <h1 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
                    My Deal Team
                  </h1>
                  <p className="text-sm text-neutral-300 font-light max-w-lg">
                    The professionals currently helping you secure <span className="text-white font-medium">128 Crown Street</span>.
                  </p>
                </div>

                <div className="p-4 rounded-xl min-w-[240px] flex items-center justify-between gap-4 bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/5">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                      Active Parties
                    </div>
                    <div className="text-2xl font-medium text-white tracking-tight">5 Pro&apos;s</div>
                  </div>
                  <div className="flex -space-x-2">
                    <img src="https://i.pravatar.cc/150?u=a" className="w-8 h-8 rounded-full border border-black" alt="Pro" />
                    <img src="https://i.pravatar.cc/150?u=b" className="w-8 h-8 rounded-full border border-black" alt="Pro" />
                    <div className="w-8 h-8 rounded-full bg-neutral-800 border border-black flex items-center justify-center text-[10px] text-white font-medium">
                      +3
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1: Primary Broker */}
              <div className="space-y-6">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-mono">Primary Contact</h3>
                  <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active
                  </span>
                </div>

                {/* Broker Card */}
                <div className="p-0 rounded-xl border border-white/5 bg-[#0A0A0A] overflow-hidden group hover:border-white/10 transition-colors">
                  <div className="relative h-24 bg-gradient-to-r from-neutral-800 to-neutral-900">
                    <div className="absolute inset-0 grid-bg opacity-20" />
                  </div>
                  <div className="px-5 pb-5">
                    <div className="relative -mt-10 mb-3 flex justify-between items-end">
                      <div className="relative">
                        <img
                          src={mockPrimaryContact.avatar}
                          className="w-20 h-20 rounded-xl border-4 border-[#0A0A0A] shadow-lg"
                          alt="Broker"
                        />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full border-4 border-[#0A0A0A]" />
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-white/5 hover:bg-white text-white hover:text-black rounded-lg transition-colors border border-white/10">
                          <Phone className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white/5 hover:bg-white text-white hover:text-black rounded-lg transition-colors border border-white/10">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <h2 className="text-lg font-medium text-white">{mockPrimaryContact.name}</h2>
                    <p className="text-xs text-neutral-400 mb-4">
                      {mockPrimaryContact.role} • {mockPrimaryContact.company}
                    </p>

                    <div className="space-y-3 bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-500">Email</span>
                        <span className="text-white select-all">{mockPrimaryContact.email}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-500">Mobile</span>
                        <span className="text-white select-all">{mockPrimaryContact.phone}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-500">Last Contact</span>
                        <span className="text-emerald-400">{mockPrimaryContact.lastContact}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <FileCheck className="w-4 h-4 text-blue-400" />
                      <div className="flex-1">
                        <div className="text-[10px] font-bold text-blue-400 uppercase">Latest Action</div>
                        <div className="text-xs text-blue-100">Pre-approval updated for 128 Crown St.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl border border-white/5 bg-[#0A0A0A] hover:bg-white/5 transition-colors cursor-pointer group">
                    <Mail className="w-4 h-4 text-neutral-500 mb-2 group-hover:text-white transition-colors" />
                    <div className="text-xs font-medium text-white">Emails</div>
                    <div className="text-[10px] text-neutral-500">12 Threads</div>
                  </div>
                  <div className="p-3 rounded-xl border border-white/5 bg-[#0A0A0A] hover:bg-white/5 transition-colors cursor-pointer group">
                    <Calendar className="w-4 h-4 text-neutral-500 mb-2 group-hover:text-white transition-colors" />
                    <div className="text-xs font-medium text-white">Meetings</div>
                    <div className="text-[10px] text-neutral-500">2 Scheduled</div>
                  </div>
                </div>
              </div>

              {/* Column 2 & 3: Other Contacts */}
              <div className="col-span-1 md:col-span-2 space-y-6">
                {/* Legal & Conveyancing */}
                <div>
                  <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-mono mb-4 px-1">
                    Legal &amp; Conveyancing
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Solicitor */}
                    <div className="group p-4 rounded-xl border border-white/5 bg-[#0A0A0A] hover:border-white/20 transition-all">
                      <div className="flex items-start gap-4">
                        <img
                          src={mockContacts[0].avatar}
                          className="w-12 h-12 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all"
                          alt="Solicitor"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-white">{mockContacts[0].name}</h4>
                          <div className="text-xs text-neutral-500 truncate">
                            {mockContacts[0].role} • {mockContacts[0].company}
                          </div>
                          <div className="mt-2 flex items-center gap-2">
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/10 text-neutral-300">
                              Reviewing Contract
                            </span>
                          </div>
                        </div>
                        <button className="text-neutral-500 hover:text-white transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
                        <div className="flex gap-3">
                          <button className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors">
                            <Mail className="w-3 h-3" /> Email
                          </button>
                          <button className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors">
                            <Phone className="w-3 h-3" /> Call
                          </button>
                        </div>
                        <span className="text-[10px] text-neutral-600">Response time: ~2hrs</span>
                      </div>
                    </div>

                    {/* Add New Placeholder */}
                    <div className="group p-4 rounded-xl border border-dashed border-white/10 bg-transparent hover:bg-white/5 transition-all flex flex-col items-center justify-center text-center cursor-pointer h-full min-h-[140px]">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:scale-110 transition-transform mb-3">
                        <Plus className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-medium text-neutral-300">Add Legal Support</div>
                      <div className="text-[10px] text-neutral-500 mt-1">Connect another solicitor</div>
                    </div>
                  </div>
                </div>

                {/* Property & Agents */}
                <div>
                  <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-mono mb-4 px-1">
                    Property (128 Crown St)
                  </h3>
                  <div className="p-4 rounded-xl border border-white/5 bg-[#0A0A0A]">
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-b border-white/5 pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-xs border border-indigo-500/20">
                          BW
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white">BresicWhitney</h4>
                          <div className="text-xs text-neutral-500">Selling Agency</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <a
                          href="#"
                          className="px-3 py-1.5 rounded-md bg-white/5 text-[11px] font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors border border-white/5"
                        >
                          View Listing
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {mockContacts.slice(1).map((contact) => (
                        <div
                          key={contact.id}
                          className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                        >
                          <img src={contact.avatar} className="w-10 h-10 rounded-full object-cover" alt={contact.name} />
                          <div className="flex-1">
                            <div className="text-sm text-white font-medium">{contact.name}</div>
                            <div className="text-[10px] text-neutral-400">{contact.role}</div>
                          </div>
                          <div className="flex gap-2">
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-neutral-800 hover:bg-white hover:text-black transition-colors">
                              <Phone className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Directory */}
                <div>
                  <div className="flex items-center justify-between mb-4 px-1">
                    <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-mono">Service Directory</h3>
                    <button className="text-[10px] text-neutral-500 hover:text-white transition-colors">Find Professionals</button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {services.map((service) => {
                      const Icon = service.icon
                      const colorClasses = {
                        orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
                        blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                        purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
                      }
                      const statusColors = {
                        neutral: "bg-neutral-800",
                        active: "bg-green-500",
                      }

                      return (
                        <div
                          key={service.id}
                          className="p-3 rounded-xl border border-white/5 bg-[#0A0A0A] group hover:border-white/20 transition-all cursor-pointer"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div className={`p-2 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-lg border`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className={`h-2 w-2 rounded-full ${statusColors[service.status]}`} />
                          </div>
                          <h4 className="text-xs font-medium text-white mb-1">{service.title}</h4>
                          <p className="text-[10px] text-neutral-500 mb-3">{service.description}</p>
                          <button className="w-full py-1.5 rounded bg-white/5 text-[10px] text-neutral-300 hover:bg-white/10 hover:text-white transition-colors">
                            {service.status === "active" ? "View Policy" : service.title === "Building & Pest" ? "Find Inspector" : "Get Quotes"}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity Log */}
            <section className="mt-8 pt-8 border-t border-white/5">
              <h3 className="text-sm font-medium text-white mb-4">Recent Communications</h3>
              <div className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden">
                <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-white/5 border-b border-white/5 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  <div className="col-span-6 md:col-span-5">Contact</div>
                  <div className="col-span-4 md:col-span-5">Subject</div>
                  <div className="col-span-2 text-right">Time</div>
                </div>

                {mockCommunications.map((comm, index) => (
                  <div
                    key={comm.id}
                    className={`grid grid-cols-12 gap-4 px-4 py-3 hover:bg-white/5 transition-colors items-center group cursor-pointer ${
                      index !== mockCommunications.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    <div className="col-span-6 md:col-span-5 flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-white">
                        {comm.initials}
                      </div>
                      <span className="text-xs text-white">{comm.contact}</span>
                    </div>
                    <div className="col-span-4 md:col-span-5 text-xs text-neutral-400 group-hover:text-white transition-colors">
                      {comm.subject}
                    </div>
                    <div className="col-span-2 text-right text-[11px] text-neutral-500">{comm.time}</div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx global>{`
        .font-display {
          font-family: var(--font-space-grotesk), sans-serif;
        }
        .font-mono {
          font-family: var(--font-space-mono), monospace;
        }
        .grid-bg {
          background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  )
}
