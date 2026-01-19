"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  LayoutGrid,
  Users,
  FileText,
  FileSignature,
  CreditCard,
  ChevronRight,
  ArrowDownRight,
  Menu,
} from "lucide-react"

// Animated reveal wrapper component
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function InvoicePage() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 overflow-x-hidden selection:bg-white/20 selection:text-white pb-20">
      {/* Grid overlay */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none bg-grid" />

      {/* SIDEBAR */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-[#050505] border-r border-white/5 hidden md:flex flex-col z-[60]">
        <div className="px-6 py-6 border-b border-white/5 flex items-center gap-2 text-white font-medium tracking-tight text-lg">
          <div className="w-3 h-3 bg-white/10 border border-white/20" />
          Unduit Platform
        </div>
        <div className="flex-1 py-8 px-4 space-y-6 overflow-y-auto">
          <div className="space-y-1">
            <div className="px-4 pb-2 text-[10px] uppercase tracking-widest text-zinc-600 font-medium">
              Menu
            </div>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-md transition-all text-sm group">
              <LayoutGrid className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-md transition-all text-sm group">
              <Users className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
              Clients
            </a>
          </div>
          <div className="space-y-1">
            <div className="px-4 pb-2 text-[10px] uppercase tracking-widest text-zinc-600 font-medium">
              Documents
            </div>
            <a href="#" className="flex items-center gap-3 px-4 py-2 bg-white/5 text-white rounded-md border border-white/5 text-sm">
              <FileText className="w-4 h-4 text-white" />
              Invoices
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-md transition-all text-sm group">
              <FileSignature className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
              Quotes
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded-md transition-all text-sm group">
              <CreditCard className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
              Receipts
            </a>
          </div>
        </div>
        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-white/5 rounded-md transition-colors group">
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs text-white font-medium">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">John Doe</p>
              <p className="text-xs text-zinc-500 truncate">john@unduit.com</p>
            </div>
          </button>
        </div>
      </aside>

      {/* TOP NAVIGATION */}
      <nav className="w-full px-6 py-6 md:px-12 flex justify-between items-center border-b border-white/5 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="md:hidden flex items-center gap-2 text-white font-medium tracking-tight text-lg">
            <div className="w-3 h-3 bg-white/10 border border-white/20" />
            Unduit Platform
          </div>
          <div className="hidden md:flex items-center gap-2 text-zinc-500 text-sm">
            <span className="hover:text-zinc-300 transition-colors cursor-pointer">
              Documents
            </span>
            <ChevronRight className="w-3 h-3 opacity-50" />
            <span className="text-white font-medium">Invoices</span>
          </div>
        </div>
        <div>
          <button className="group flex items-center gap-3 px-4 py-1.5 border border-white/10 text-xs text-white hover:bg-white/5 transition-all duration-300">
            <span className="tracking-widest uppercase text-[10px] text-zinc-500 group-hover:text-zinc-300">
              Action
            </span>
            DOWNLOAD PDF
            <div className="w-4 h-4 flex items-center justify-center border-l border-white/10 pl-2 ml-1 text-red-500">
              <ArrowDownRight className="w-3 h-3" />
            </div>
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24 relative z-10">
        {/* HERO / HEADER */}
        <header className="mb-20">
          <div className="max-w-4xl">
            <Reveal>
              <p className="text-zinc-500 text-xs md:text-sm mb-6 tracking-wide max-w-sm">
                Explore the financial details of your engagement with the Unduit
                Platform.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-normal text-white tracking-tighter leading-[1.1] mb-2">
                Invoice
                <span className="text-zinc-600">#2023-001</span>
              </h1>
            </Reveal>
            <div className="flex items-center gap-4 mt-4">
              <span className="inline-flex items-center gap-2 px-2 py-1 bg-red-500/10 text-red-500 text-[10px] uppercase tracking-widest border border-red-500/20">
                <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                Payment Pending
              </span>
              <span className="text-zinc-600 text-sm font-light">
                Issued Oct 24, 2023
              </span>
            </div>
          </div>
        </header>

        {/* THREE CARDS LAYOUT */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* CARD 1: FROM */}
          <Reveal delay={0.1}>
            <div className="group relative bg-[#080808] border border-white/10 p-8 min-h-[320px] flex flex-col justify-between hover:border-white/20 transition-colors duration-500">
              {/* Abstract Line Decoration */}
              <div className="absolute top-8 left-8 right-8 space-y-3 opacity-30">
                <div className="h-px w-full bg-gradient-to-r from-white/40 to-transparent" />
                <div className="h-px w-3/4 bg-gradient-to-r from-white/20 to-transparent" />
                <div className="h-px w-1/2 bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="mt-20">
                <h3 className="text-white text-xl tracking-tight mb-4">Origin</h3>
                <div className="text-sm font-light text-zinc-400 leading-relaxed space-y-1">
                  <p className="text-white font-normal">Unduit Technologies Inc.</p>
                  <p>100 Innovation Blvd, Suite 400</p>
                  <p>San Francisco, CA 94103</p>
                  <p className="text-zinc-600 mt-2">billing@unduit.example.com</p>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-white/5 pt-6 mt-6">
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">
                  From Details
                </span>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-red-500 transition-colors">
                  <span className="text-[10px]">01</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 2: TO */}
          <Reveal delay={0.2}>
            <div className="group relative bg-[#080808] border border-white/10 p-8 min-h-[320px] flex flex-col justify-between hover:border-white/20 transition-colors duration-500">
              {/* Abstract Box Decoration */}
              <div className="absolute top-8 left-8 flex gap-2 opacity-30">
                <div className="w-4 h-8 border border-white/40 rounded-[1px]" />
                <div className="w-4 h-8 border border-white/30 rounded-[1px]" />
                <div className="w-4 h-8 border border-white/20 rounded-[1px]" />
                <div className="w-4 h-8 border border-white/10 rounded-[1px]" />
              </div>

              <div className="mt-20">
                <h3 className="text-white text-xl tracking-tight mb-4">Destination</h3>
                <div className="text-sm font-light text-zinc-400 leading-relaxed space-y-1">
                  <p className="text-white font-normal">Acme Corp Global</p>
                  <p>Attn: IT Procurement</p>
                  <p>5500 Enterprise Way</p>
                  <p>Austin, TX 78701</p>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-white/5 pt-6 mt-6">
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">
                  Bill To
                </span>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-red-500 transition-colors">
                  <span className="text-[10px]">02</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* CARD 3: AMOUNT/META */}
          <Reveal delay={0.3}>
            <div className="group relative bg-[#080808] border border-white/10 p-8 min-h-[320px] flex flex-col justify-between hover:border-white/20 transition-colors duration-500">
              {/* Abstract Chart Decoration */}
              <svg className="absolute top-8 left-8 w-32 h-12 stroke-white/20 fill-none" viewBox="0 0 100 40">
                <path
                  d="M0,40 L20,20 L40,30 L60,10 L80,25 L100,5"
                  vectorEffect="non-scaling-stroke"
                  strokeWidth="1"
                />
              </svg>

              <div className="mt-20">
                <h3 className="text-white text-xl tracking-tight mb-4">Summary</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1">
                      Total Amount Due
                    </p>
                    <p className="text-3xl font-light text-white tracking-tighter">
                      $4,250.00
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1">
                      Due Date
                    </p>
                    <p className="text-sm text-zinc-300">November 07, 2023</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-white/5 pt-6 mt-6">
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">
                  Balance
                </span>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-red-500 transition-colors">
                  <span className="text-[10px]">03</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PROJECT META BAR */}
        <div className="border-t border-b border-white/10 py-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">
                  PO Number
                </label>
                <input
                  type="text"
                  value="PO-99283-AC"
                  readOnly
                  className="w-full bg-transparent text-sm text-white focus:outline-none border-b border-transparent focus:border-red-900/50 transition-colors pb-1"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">
                  Payment Terms
                </label>
                <input
                  type="text"
                  value="Net 15 Days"
                  readOnly
                  className="w-full bg-transparent text-sm text-white focus:outline-none border-b border-transparent focus:border-red-900/50 transition-colors pb-1"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">
                  Project Reference
                </label>
                <input
                  type="text"
                  value="Q4 Onboarding Sprint"
                  readOnly
                  className="w-full bg-transparent text-sm text-white focus:outline-none border-b border-transparent focus:border-red-900/50 transition-colors pb-1"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* LINE ITEMS TABLE */}
        <section className="mb-20">
          <div className="flex items-end justify-between mb-8">
            <Reveal>
              <h2 className="text-2xl text-white font-light tracking-tight">
                Services &amp; Hardware
              </h2>
            </Reveal>
            <div className="text-xs text-zinc-500 font-mono">03 ITEMS</div>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 text-[10px] uppercase tracking-widest text-zinc-500 font-normal w-1/2">
                      Description
                    </th>
                    <th className="py-4 text-[10px] uppercase tracking-widest text-zinc-500 font-normal text-right">
                      Qty
                    </th>
                    <th className="py-4 text-[10px] uppercase tracking-widest text-zinc-500 font-normal text-right">
                      Rate
                    </th>
                    <th className="py-4 text-[10px] uppercase tracking-widest text-zinc-500 font-normal text-right">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light">
                  {/* Item 1 */}
                  <tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 pr-4">
                      <p className="text-white text-base mb-1">
                        MacBook Pro 16" M2 Max
                      </p>
                      <p className="text-zinc-500 text-xs">
                        32GB RAM, 1TB SSD, Space Gray. Includes AppleCare+.
                      </p>
                    </td>
                    <td className="py-6 text-right text-zinc-400">1</td>
                    <td className="py-6 text-right text-zinc-400">$3,499.00</td>
                    <td className="py-6 text-right text-white font-medium">
                      $3,499.00
                    </td>
                  </tr>
                  {/* Item 2 */}
                  <tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 pr-4">
                      <p className="text-white text-base mb-1">
                        IT Onboarding Setup Fee
                      </p>
                      <p className="text-zinc-500 text-xs">
                        Device provisioning, MDM enrollment, and software
                        deployment.
                      </p>
                    </td>
                    <td className="py-6 text-right text-zinc-400">1</td>
                    <td className="py-6 text-right text-zinc-400">$250.00</td>
                    <td className="py-6 text-right text-white font-medium">$250.00</td>
                  </tr>
                  {/* Item 3 */}
                  <tr className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 pr-4">
                      <p className="text-white text-base mb-1">Logitech MX Master 3S</p>
                      <p className="text-zinc-500 text-xs">
                        Performance Wireless Mouse.
                      </p>
                    </td>
                    <td className="py-6 text-right text-zinc-400">2</td>
                    <td className="py-6 text-right text-zinc-400">$99.00</td>
                    <td className="py-6 text-right text-white font-medium">$198.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* TOTALS */}
          <Reveal delay={0.2}>
            <div className="flex flex-col md:flex-row justify-end mt-12">
              <div className="w-full md:w-1/3 space-y-4">
                <div className="flex justify-between items-center text-sm text-zinc-500">
                  <span>Subtotal</span>
                  <span className="text-zinc-300">$3,947.00</span>
                </div>
                <div className="flex justify-between items-center text-sm text-zinc-500">
                  <span>Shipping</span>
                  <span className="text-zinc-300">$25.00</span>
                </div>
                <div className="flex justify-between items-center text-sm text-zinc-500 pb-4 border-b border-white/10">
                  <span>Tax (7.0%)</span>
                  <span className="text-zinc-300">$278.00</span>
                </div>
                <div className="flex justify-between items-end pt-2">
                  <span className="text-xs uppercase tracking-widest text-white">
                    Total Due
                  </span>
                  <span className="text-2xl font-normal text-white tracking-tighter">
                    $4,250.00
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FOOTER / BANK DETAILS */}
        <footer className="border-t border-white/10 pt-12 pb-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal delay={0.1}>
            <div>
              <h4 className="text-white text-sm font-medium mb-6">
                Payment Instructions
              </h4>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs font-light">
                <div className="space-y-1">
                  <span className="block text-zinc-600 uppercase tracking-wider text-[10px]">
                    Bank
                  </span>
                  <span className="text-zinc-300">Silicon Valley Bank</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-zinc-600 uppercase tracking-wider text-[10px]">
                    Account Name
                  </span>
                  <span className="text-zinc-300">Unduit Tech Inc.</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-zinc-600 uppercase tracking-wider text-[10px]">
                    Routing
                  </span>
                  <span className="text-zinc-300">021000021</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-zinc-600 uppercase tracking-wider text-[10px]">
                    Account
                  </span>
                  <span className="text-zinc-300">**** 8829 1022</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-white text-sm font-medium mb-4">
                  Terms &amp; Notes
                </h4>
                <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-md">
                  Thank you for your business. Please include the invoice number on
                  your check or wire transfer. Late payments may be subject to a
                  1.5% monthly late fee.
                </p>
              </div>
              <div className="mt-8 text-[10px] text-zinc-700 uppercase tracking-widest">
                © {currentYear} Unduit Platform. All rights reserved.
              </div>
            </div>
          </Reveal>
        </footer>
      </main>

      {/* BACKGROUND ELEMENTS FOR MOOD */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-white/[0.02] blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-red-900/[0.03] blur-[120px] rounded-full" />
      </div>

      <style jsx>{`
        .bg-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, #ffffff05 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff05 1px, transparent 1px);
        }
      `}</style>
    </div>
  )
}
