"use client"

import { useEffect, useRef } from "react"
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
  Truck,
} from "lucide-react"

type Contact = {
  id: string
  name: string
  role: string
  company?: string
  email?: string
  phone?: string
  avatar?: string
  initials: string
  status?: "active" | "pending" | "offline"
  lastContact?: string
  latestAction?: {
    title: string
    description: string
    icon?: React.ReactNode
  }
}

type Communication = {
  id: string
  contactId: string
  contactName: string
  contactInitials: string
  subject: string
  time: string
}

const primaryBroker: Contact = {
  id: "1",
  name: "Mike Ross",
  role: "Senior Mortgage Broker",
  company: "Spectra Finance",
  email: "mike@spectrafinance.com.au",
  phone: "0400 123 456",
  avatar: "https://i.pravatar.cc/150?u=mike",
  initials: "MR",
  status: "active",
  lastContact: "Today, 9:41 AM",
  latestAction: {
    title: "Latest Action",
    description: "Pre-approval updated for 128 Crown St.",
  },
}

const legalContacts: Contact[] = [
  {
    id: "2",
    name: "Jessica Pearson",
    role: "Principal Solicitor",
    company: "Pearson Law",
    initials: "JP",
    avatar: "https://i.pravatar.cc/150?u=jessica",
    status: "active",
  },
]

const propertyAgents: Contact[] = [
  {
    id: "3",
    name: "Darren Davis",
    role: "Lead Agent",
    initials: "DD",
    avatar: "https://i.pravatar.cc/150?u=agent1",
    status: "active",
  },
  {
    id: "4",
    name: "Sarah Miller",
    role: "Associate",
    initials: "SM",
    avatar: "https://i.pravatar.cc/150?u=agent2",
    status: "active",
  },
]

const communications: Communication[] = [
  {
    id: "1",
    contactId: "1",
    contactName: "Mike Ross",
    contactInitials: "MR",
    subject: "Re: Updated borrowing capacity calculation",
    time: "10:42 AM",
  },
  {
    id: "2",
    contactId: "2",
    contactName: "Jessica Pearson",
    contactInitials: "JP",
    subject: "Contract review completed - 128 Crown St",
    time: "Yesterday",
  },
  {
    id: "3",
    contactId: "3",
    contactName: "Darren Davis",
    contactInitials: "DD",
    subject: "Auction registration details",
    time: "Oct 24",
  },
]

const serviceDirectory = [
  {
    id: "1",
    title: "Building & Pest",
    description: "Inspection required before auction.",
    icon: Search,
    status: "pending",
    action: "Find Inspector",
    color: "orange",
  },
  {
    id: "2",
    title: "Home Insurance",
    description: "Cover note issued by NRMA.",
    icon: Shield,
    status: "active",
    action: "View Policy",
    color: "blue",
  },
  {
    id: "3",
    title: "Removalist",
    description: "Not yet booked.",
    icon: Truck,
    status: "pending",
    action: "Get Quotes",
    color: "purple",
  },
]

export default function DealTeamPage() {
  const mainRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={mainRef} className="min-h-screen bg-[#050505] text-neutral-300">
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
          <div className="h-4 w-px bg-white/10"></div>
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <Link href="/settings" className="hover:text-white cursor-pointer transition-colors">
              Dashboard
            </Link>
            <span className="text-neutral-700">/</span>
            <span className="text-white">Team Directory</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-white/5 px-2 py-1 rounded-md border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
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
          <aside className="hidden lg:flex flex-col sticky top-24 h-[calc(100vh-8rem)] shrink-0 w-[60px] hover:w-[240px] bg-[#050505] z-40 group border-r border-white/5 overflow-hidden rounded-r-xl shadow-2xl shadow-black/50" style={{ transitionProperty: 'width', transitionDuration: '500ms', transitionTimingFunction: 'cubic-bezier(0.23,1,0.32,1)' }}>
            <nav className="flex flex-col gap-2 h-full p-3">
              <Link href="/settings" className="flex items-center px-2 py-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap group/link">
                <LayoutDashboard className="w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110" />
                <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Dashboard
                </span>
              </Link>
              <Link href="/search" className="flex items-center px-2 py-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap group/link">
                <Search className="w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110" />
                <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Property Search
                </span>
              </Link>
              <Link href="/deal-team" className="flex items-center px-2 py-2.5 text-white bg-white/5 rounded-lg border border-white/5 relative overflow-hidden whitespace-nowrap group/link">
                <Users className="w-5 h-5 shrink-0 text-white transition-transform group-hover/link:scale-110" />
                <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  My Team
                </span>
              </Link>
              <Link href="/analytics" className="flex items-center px-2 py-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap group/link">
                <DollarSign className="w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110" />
                <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Finance
                </span>
              </Link>
              <Link href="#" className="flex items-center px-2 py-2.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap group/link">
                <FileText className="w-5 h-5 shrink-0 transition-transform group-hover/link:scale-110" />
                <span className="ml-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Documents
                </span>
              </Link>

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
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/20"></div>
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
                    The professionals currently helping you secure{" "}
                    <span className="text-white font-medium">128 Crown Street</span>.
                  </p>
                </div>

                <div className="glass-panel p-4 rounded-xl min-w-[240px] flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                      Active Parties
                    </div>
                    <div className="text-2xl font-medium text-white tracking-tight">5 Pro&apos;s</div>
                  </div>
                  <div className="flex -space-x-2">
                    <img
                      src="https://i.pravatar.cc/150?u=a"
                      className="w-8 h-8 rounded-full border border-black"
                      alt="Pro"
                    />
                    <img
                      src="https://i.pravatar.cc/150?u=b"
                      className="w-8 h-8 rounded-full border border-black"
                      alt="Pro"
                    />
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
                  <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-mono">
                    Primary Contact
                  </h3>
                  <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Active
                  </span>
                </div>

                {/* Broker Card */}
                <div className="p-0 rounded-xl border border-white/5 bg-[#0A0A0A] overflow-hidden group hover:border-white/10 transition-colors">
                  <div className="relative h-24 bg-gradient-to-r from-neutral-800 to-neutral-900">
                    <div className="absolute inset-0 grid-bg opacity-20"></div>
                  </div>
                  <div className="px-5 pb-5">
                    <div className="relative -mt-10 mb-3 flex justify-between items-end">
                      <div className="relative">
                        <img
                          src={primaryBroker.avatar}
                          className="w-20 h-20 rounded-xl border-4 border-[#0A0A0A] shadow-lg"
                          alt={primaryBroker.name}
                        />
                        <div className="absolute -bottom-1 -right-1 status-dot border-4 border-[#0A0A0A]"></div>
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

                    <h2 className="text-lg font-medium text-white">{primaryBroker.name}</h2>
                    <p className="text-xs text-neutral-400 mb-4">
                      {primaryBroker.role} • {primaryBroker.company}
                    </p>

                    <div className="space-y-3 bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-500">Email</span>
                        <span className="text-white select-all">{primaryBroker.email}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-500">Mobile</span>
                        <span className="text-white select-all">{primaryBroker.phone}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-500">Last Contact</span>
                        <span className="text-emerald-400">{primaryBroker.lastContact}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <FileCheck className="w-4 h-4 text-blue-400" />
                      <div className="flex-1">
                        <div className="text-[10px] font-bold text-blue-400 uppercase">
                          {primaryBroker.latestAction?.title}
                        </div>
                        <div className="text-xs text-blue-100">
                          {primaryBroker.latestAction?.description}
                        </div>
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
                    {legalContacts.map((contact) => (
                      <div
                        key={contact.id}
                        className="group p-4 rounded-xl border border-white/5 bg-[#0A0A0A] hover:border-white/20 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={contact.avatar}
                            className="w-12 h-12 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all"
                            alt={contact.name}
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-white">{contact.name}</h4>
                            <div className="text-xs text-neutral-500 truncate">
                              {contact.role} • {contact.company}
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
                          <span className="text-[10px] text-neutral-600">
                            Response time: ~2hrs
                          </span>
                        </div>
                      </div>
                    ))}

                    {/* Add New Placeholder */}
                    <div className="group p-4 rounded-xl border border-dashed border-white/10 bg-transparent hover:bg-white/5 transition-all flex flex-col items-center justify-center text-center cursor-pointer h-full min-h-[140px]">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:scale-110 transition-transform mb-3">
                        <Plus className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-medium text-neutral-300">
                        Add Legal Support
                      </div>
                      <div className="text-[10px] text-neutral-500 mt-1">
                        Connect another solicitor
                      </div>
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
                      {propertyAgents.map((agent) => (
                        <div
                          key={agent.id}
                          className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                        >
                          <img
                            src={agent.avatar}
                            className="w-10 h-10 rounded-full object-cover"
                            alt={agent.name}
                          />
                          <div className="flex-1">
                            <div className="text-sm text-white font-medium">{agent.name}</div>
                            <div className="text-[10px] text-neutral-400">{agent.role}</div>
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
                    <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-mono">
                      Service Directory
                    </h3>
                    <button className="text-[10px] text-neutral-500 hover:text-white transition-colors">
                      Find Professionals
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {serviceDirectory.map((service) => {
                      const Icon = service.icon
                      return (
                        <div
                          key={service.id}
                          className={`p-3 rounded-xl border border-white/5 bg-[#0A0A0A] group hover:border-white/20 transition-all cursor-pointer`}
                        >
                          <div className="flex justify-between items-start mb-3">
                            <div
                              className={`p-2 bg-${service.color}-500/10 text-${service.color}-400 rounded-lg border border-${service.color}-500/20`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div
                              className={`h-2 w-2 rounded-full ${
                                service.status === "active"
                                  ? "bg-green-500"
                                  : "bg-neutral-800"
                              }`}
                            ></div>
                          </div>
                          <h4 className="text-xs font-medium text-white mb-1">
                            {service.title}
                          </h4>
                          <p className="text-[10px] text-neutral-500 mb-3">
                            {service.description}
                          </p>
                          <button className="w-full py-1.5 rounded bg-white/5 text-[10px] text-neutral-300 hover:bg-white/10 hover:text-white transition-colors">
                            {service.action}
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
              <h3 className="text-sm font-medium text-white mb-4">
                Recent Communications
              </h3>
              <div className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden">
                <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-white/5 border-b border-white/5 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  <div className="col-span-6 md:col-span-5">Contact</div>
                  <div className="col-span-4 md:col-span-5">Subject</div>
                  <div className="col-span-2 text-right">Time</div>
                </div>

                {communications.map((comm) => (
                  <div
                    key={comm.id}
                    className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/5 hover:bg-white/5 transition-colors items-center group cursor-pointer last:border-b-0"
                  >
                    <div className="col-span-6 md:col-span-5 flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-white">
                        {comm.contactInitials}
                      </div>
                      <span className="text-xs text-white">{comm.contactName}</span>
                    </div>
                    <div className="col-span-4 md:col-span-5 text-xs text-neutral-400 group-hover:text-white transition-colors">
                      {comm.subject}
                    </div>
                    <div className="col-span-2 text-right text-[11px] text-neutral-500">
                      {comm.time}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      <style>{`
        .grid-bg {
          background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .status-dot {
          position: relative;
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
        }
        .status-dot::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid #10b981;
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
        .glass-panel {
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </div>
  )
}
