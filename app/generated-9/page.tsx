"use client"

/**
 * Document Vault Page
 *
 * @description
 * A comprehensive React document management interface featuring AI-powered ingestion,
 * broker synchronization, file categorization, and real-time processing status.
 * Built with TypeScript and Tailwind CSS following HAUS project patterns.
 *
 * @features
 * - Document completeness tracking with progress visualization
 * - AI-powered ingestion engine with OCR and classification
 * - Broker sync status and collaboration features
 * - File categorization (Financials, Legal & Contracts, Property Info)
 * - Real-time document processing timeline
 * - Action-based workflow (upload required, pending signatures)
 * - Smart folder navigation and filtering
 * - Drag-and-drop file upload interface
 *
 * @example
 * ```tsx
 * // Access at /generated-9 route
 * <DocumentVaultPage />
 * ```
 */

import { useState } from "react"
import Link from "next/link"
import {
  UploadCloud,
  Folder,
  FolderOpen,
  DollarSign,
  UserCheck,
  Home,
  Bell,
  History,
  PenTool,
  Cpu,
  ScanLine,
  BrainCircuit,
  Database,
  HardDrive,
  ChevronDown,
  FolderPlus,
  List,
  LayoutGrid,
  FileCheck,
  FileText,
  FileSignature,
  Plus,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Document folder types
interface DocumentFolder {
  id: string
  name: string
  icon: string
  color: string
  size?: string
  fileCount?: number
}

// Document file types
interface DocumentFile {
  id: string
  name: string
  type: string
  category: string
  modified: string
  icon: string
  iconColor: string
  subtitle: string
}

// Action card types
interface ActionCard {
  id: string
  title: string
  description: string
  badge: string
  badgeColor: string
  buttonText: string
  icon: string
  color: string
}

// Mock data
const DOCUMENT_FOLDERS: DocumentFolder[] = [
  { id: "1", name: "Financials", icon: "folder", color: "yellow", size: "1.2GB" },
  { id: "2", name: "Legal & Contracts", icon: "folder", color: "blue", fileCount: 4 },
  { id: "3", name: "Property Info", icon: "folder", color: "purple", fileCount: 8 },
]

const DOCUMENT_FILES: DocumentFile[] = [
  {
    id: "1",
    name: "Conditional_Approval_Letter.pdf",
    type: "Finance",
    category: "file-check",
    modified: "Jan 12, 2024",
    icon: "file-check",
    iconColor: "emerald",
    subtitle: "Macquarie Bank • Ref #99283",
  },
  {
    id: "2",
    name: "Payslip_Nov15.pdf",
    type: "Income",
    category: "file-text",
    modified: "Nov 15, 2023",
    icon: "file-text",
    iconColor: "neutral",
    subtitle: "TechCorp Pty Ltd",
  },
  {
    id: "3",
    name: "Payslip_Oct30.pdf",
    type: "Income",
    category: "file-text",
    modified: "Oct 30, 2023",
    icon: "file-text",
    iconColor: "neutral",
    subtitle: "TechCorp Pty Ltd",
  },
  {
    id: "4",
    name: "Contract_Review_88_Campbell.pdf",
    type: "Property",
    category: "file-signature",
    modified: "2 days ago",
    icon: "file-signature",
    iconColor: "indigo",
    subtitle: "Legal Team • 14 pages",
  },
]

const ACTION_CARDS: ActionCard[] = [
  {
    id: "1",
    title: "Update Required",
    description: "CBA Savings ending *4492. Please upload current month statement.",
    badge: "URGENT",
    badgeColor: "amber",
    buttonText: "Upload Statement",
    icon: "history",
    color: "amber",
  },
  {
    id: "2",
    title: "Pending Signature",
    description: "Loan Offer Documents from Macquarie Bank ready for review.",
    badge: "ACTION",
    badgeColor: "blue",
    buttonText: "Review & Sign",
    icon: "pen-tool",
    color: "blue",
  },
]

const FILTER_BUTTONS = [
  { label: "All Files", count: 12, icon: "folder-open", active: true },
  { label: "Income & Savings", count: 5, icon: "dollar-sign", active: false },
  { label: "ID & Personal", count: 3, icon: "user-check", active: false },
  { label: "Property Reports", count: 4, icon: "home", active: false },
]

export default function DocumentVaultPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState("All Files")
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")

  // Simulate loading
  useState(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  })

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-40"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')`,
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Wrapper */}
      <div className="relative z-10 pt-28 pb-12 px-6 md:px-8 max-w-[1600px] mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium text-white font-display tracking-tight mb-2">
              Document Vault
            </h1>
            <p className="text-sm text-neutral-400 max-w-lg">
              Securely manage your financial, legal, and property documents.
              <span className="text-emerald-500"> Synced with Broker (Mike)</span>.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold rounded transition-colors">
              <UploadCloud className="w-4 h-4" />
              Upload New
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-2 space-y-6">
            <CompletenessCard />
            <FolderGrid folders={DOCUMENT_FOLDERS} />
            <FilterButtons
              buttons={FILTER_BUTTONS}
              selected={selectedFilter}
              onSelect={setSelectedFilter}
            />
            <DragDropZone />
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-10 space-y-6">
            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ACTION_CARDS.map((card) => (
                <ActionCard key={card.id} card={card} />
              ))}
            </div>

            {/* Ingestion Engine */}
            <IngestionEngine />

            {/* File List */}
            <FileExplorer
              files={DOCUMENT_FILES}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Preloader Component
function Preloader() {
  return (
    <div className="fixed inset-0 bg-[#050505] z-[10000] flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
          Personalising Dashboard...
        </span>
        <div className="w-[200px] h-[1px] bg-neutral-800 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full bg-white animate-progress" />
        </div>
      </div>
    </div>
  )
}

// Navigation Component
function Navigation() {
  return (
    <nav className="fixed top-0 w-full px-6 py-4 md:px-8 h-16 flex justify-between items-center z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
      <Link href="/" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group">
        <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter rounded-sm group-hover:scale-95 transition-transform duration-300">
          HA
        </div>
        <span className="text-white">
          HAUS
          <span className="text-neutral-500">.FHB</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
        <button className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors">
          Dashboard
        </button>
        <button className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors">
          Watchlist
          <span className="ml-1 bg-white/10 px-1.5 py-0.5 rounded-full text-[9px]">
            4
          </span>
        </button>
        <button className="px-4 py-1.5 text-xs font-medium text-white bg-white/10 shadow-sm rounded border border-white/5">
          Documents
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-3 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5">
          <div className="flex -space-x-2">
            <div className="w-5 h-5 rounded-full bg-neutral-700 border border-[#050505] flex items-center justify-center text-[8px] text-white">
              MK
            </div>
            <div className="w-5 h-5 rounded-full bg-emerald-600 border border-[#050505] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>
          <span className="text-[10px] font-mono font-medium text-blue-400">
            Broker: Online
          </span>
        </div>
        <button className="relative w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#050505]" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 border border-white/20 flex items-center justify-center text-[10px] text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          S
        </div>
      </div>
    </nav>
  )
}

// Completeness Card Component
function CompletenessCard() {
  return (
    <div className="rounded-xl p-5 border border-white/10 bg-[rgba(10,10,10,0.6)] backdrop-blur-md">
      <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest mb-4">
        Completeness
      </h3>
      <div className="relative w-full h-2 bg-neutral-800 rounded-full overflow-hidden mb-2">
        <div className="absolute left-0 top-0 h-full bg-emerald-500 w-[85%]" />
      </div>
      <div className="flex justify-between text-[10px]">
        <span className="text-white">85% Ready</span>
        <span className="text-neutral-500">2 Actions</span>
      </div>
    </div>
  )
}

// Folder Grid Component
function FolderGrid({ folders }: { folders: DocumentFolder[] }) {
  const getIconColor = (color: string) => {
    const colors = {
      yellow: "text-yellow-500/80 fill-yellow-500/20",
      blue: "text-blue-500/80 fill-blue-500/20",
      purple: "text-purple-500/80 fill-purple-500/20",
    }
    return colors[color as keyof typeof colors] || colors.yellow
  }

  const getHoverColor = (color: string) => {
    const colors = {
      yellow: "hover:border-yellow-500/20 hover:bg-yellow-500/5",
      blue: "hover:border-blue-500/20 hover:bg-blue-500/5",
      purple: "hover:border-purple-500/20 hover:bg-purple-500/5",
    }
    return colors[color as keyof typeof colors] || colors.yellow
  }

  return (
    <div className="grid grid-cols-1 gap-2">
      {folders.map((folder) => (
        <div
          key={folder.id}
          className={cn(
            "group p-3 bg-[#0A0A0A] border border-white/5 rounded-xl transition-all cursor-pointer",
            getHoverColor(folder.color)
          )}
        >
          <div className="flex justify-between items-start mb-2">
            <Folder className={cn("w-6 h-6 group-hover:scale-110 transition-transform duration-300", getIconColor(folder.color))} />
            <span className="text-[9px] text-neutral-500">
              {folder.size || `${folder.fileCount} Files`}
            </span>
          </div>
          <div className="text-[10px] font-medium text-neutral-300 group-hover:text-white">
            {folder.name}
          </div>
        </div>
      ))}
      <div className="border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-neutral-500 hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all cursor-pointer gap-2 p-2">
        <Plus className="w-5 h-5" />
        <span className="text-[9px] font-medium">New</span>
      </div>
    </div>
  )
}

// Filter Buttons Component
function FilterButtons({
  buttons,
  selected,
  onSelect,
}: {
  buttons: typeof FILTER_BUTTONS
  selected: string
  onSelect: (label: string) => void
}) {
  const getIcon = (iconName: string) => {
    const icons = {
      "folder-open": FolderOpen,
      "dollar-sign": DollarSign,
      "user-check": UserCheck,
      home: Home,
    }
    return icons[iconName as keyof typeof icons] || FolderOpen
  }

  return (
    <div className="space-y-1">
      {buttons.map((button) => {
        const Icon = getIcon(button.icon)
        return (
          <button
            key={button.label}
            onClick={() => onSelect(button.label)}
            className={cn(
              "w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors",
              button.active || selected === button.label
                ? "bg-white/5 text-white border border-white/5"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            )}
          >
            <span className="flex items-center gap-2">
              <Icon className={cn(
                "w-4 h-4",
                button.active || selected === button.label ? "text-emerald-500" : ""
              )} />
              {button.label}
            </span>
            <span className={cn(
              "text-[10px] px-1.5 py-0.5 rounded",
              button.active || selected === button.label
                ? "bg-white/10"
                : "text-neutral-600"
            )}>
              {button.count}
            </span>
          </button>
        )
      })}
    </div>
  )
}

// Drag Drop Zone Component
function DragDropZone() {
  return (
    <div className="p-4 rounded-xl border border-dashed border-white/10 bg-white/5 text-center">
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-2 text-neutral-400">
        <Plus className="w-4 h-4" />
      </div>
      <p className="text-[10px] text-neutral-400">
        Drag & drop files to upload instantly
      </p>
    </div>
  )
}

// Action Card Component
function ActionCard({ card }: { card: ActionCard }) {
  const getIcon = (iconName: string) => {
    const icons = {
      history: History,
      "pen-tool": PenTool,
    }
    return icons[iconName as keyof typeof icons] || History
  }

  const Icon = getIcon(card.icon)

  return (
    <div
      className={cn(
        `bg-${card.color}-500/5 border border-${card.color}-500/20 rounded-xl p-4 flex items-start gap-4`
      )}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
          `bg-${card.color}-500/10 text-${card.color}-500`
        )}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h4 className="text-xs font-bold uppercase tracking-wide text-white truncate mt-0.5">
            {card.title}
          </h4>
          <span
            className={cn(
              "text-[9px] font-mono border px-1.5 py-0.5 rounded",
              `text-${card.badgeColor === "amber" ? "amber-500" : "blue-400"} border-${card.badgeColor === "amber" ? "amber-500" : "blue-500"}/20`
            )}
          >
            {card.badge}
          </span>
        </div>
        <p className="text-[11px] text-neutral-400 mt-1 mb-3">
          {card.description}
        </p>
        <button
          className={cn(
            "w-full py-1.5 text-[10px] font-medium rounded transition-colors border",
            `bg-${card.color}-500/10 hover:bg-${card.color}-500/20 text-${card.color === "amber" ? "amber-500" : "blue-400"} border-${card.color}-500/10`
          )}
        >
          {card.buttonText}
        </button>
      </div>
    </div>
  )
}

// Ingestion Engine Component
function IngestionEngine() {
  const steps = [
    { label: "Upload", icon: UploadCloud, status: "complete" },
    { label: "OCR Scan", icon: ScanLine, status: "complete" },
    { label: "Classify", icon: BrainCircuit, status: "active" },
    { label: "Store", icon: Database, status: "pending" },
  ]

  return (
    <div className="rounded-xl border border-white/5 bg-[#080808] overflow-hidden">
      <div className="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
        <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-emerald-500" />
          Ingestion Engine
        </h3>
        <div className="flex items-center gap-2 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-[9px] text-emerald-500 font-mono font-bold">
            LIVE STREAM
          </span>
        </div>
      </div>
      <div className="p-5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-50" />
        <div className="relative z-10 flex justify-between items-center mb-6 px-4">
          <div className="absolute top-4 left-4 right-4 h-[1px] bg-neutral-800 -z-10" />
          <div className="absolute top-4 left-4 w-1/2 h-[1px] bg-gradient-to-r from-emerald-500 via-emerald-500/50 to-transparent -z-10" />
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 group cursor-default"
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full bg-[#0A0A0A] border flex items-center justify-center",
                  step.status === "complete" && "border-emerald-500 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]",
                  step.status === "active" && "border-emerald-500/50 text-emerald-500 animate-pulse",
                  step.status === "pending" && "border-neutral-800 text-neutral-600"
                )}
              >
                <step.icon className="w-3.5 h-3.5" />
              </div>
              <span
                className={cn(
                  "text-[9px] font-mono uppercase mt-1",
                  step.status === "complete" && "text-emerald-500",
                  step.status === "active" && "text-emerald-500/80",
                  step.status === "pending" && "text-neutral-600"
                )}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-black/50 rounded-lg border border-white/5 p-3 font-mono text-[10px] leading-relaxed relative overflow-hidden">
          <div className="absolute top-0 left-0 w-0.5 h-full bg-emerald-500/50" />
          <div className="flex justify-between text-neutral-500 border-b border-white/5 pb-2 mb-2">
            <span>
              JOB: <span className="text-white">anz_statement_nov.pdf</span>
            </span>
            <span>PID: 8829</span>
          </div>
          <div className="space-y-1">
            <div className="flex gap-2">
              <span className="text-emerald-500/50">10:42:01</span>
              <span className="text-neutral-300">File uploaded (2.4MB)</span>
            </div>
            <div className="flex gap-2">
              <span className="text-emerald-500/50">10:42:02</span>
              <span className="text-neutral-300">
                Virus scan: <span className="text-emerald-500">CLEAN</span>
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-500/50">10:42:05</span>
              <span className="text-blue-400 animate-pulse">
                Extracting financial entities...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// File Explorer Component
function FileExplorer({
  files,
  viewMode,
  onViewModeChange,
}: {
  files: DocumentFile[]
  viewMode: "list" | "grid"
  onViewModeChange: (mode: "list" | "grid") => void
}) {
  const getIcon = (iconName: string) => {
    const icons = {
      "file-check": FileCheck,
      "file-text": FileText,
      "file-signature": FileSignature,
    }
    return icons[iconName as keyof typeof icons] || FileText
  }

  const getIconColor = (color: string) => {
    const colors = {
      emerald: "text-emerald-500",
      neutral: "text-neutral-400 group-hover:text-white",
      indigo: "text-indigo-400",
    }
    return colors[color as keyof typeof colors] || colors.neutral
  }

  return (
    <div className="space-y-4">
      {/* Explorer Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-end sm:items-center">
        <div>
          <h3 className="text-xs font-mono uppercase text-neutral-500 tracking-widest mb-1">
            Document Vault
          </h3>
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <HardDrive className="w-3.5 h-3.5" />
            <span>/</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Root
            </span>
            <span>/</span>
            <span className="text-white font-medium">All Files</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2 bg-[#0A0A0A] p-1 rounded-lg border border-white/5">
          <button className="p-1.5 hover:bg-white/10 rounded text-neutral-400 hover:text-white transition-colors">
            <FolderPlus className="w-4 h-4" />
          </button>
          <div className="h-4 w-[1px] bg-white/10" />
          <button
            onClick={() => onViewModeChange("list")}
            className={cn(
              "p-1.5 rounded transition-colors",
              viewMode === "list"
                ? "bg-white/10 text-white shadow-sm"
                : "text-neutral-400 hover:text-white"
            )}
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewModeChange("grid")}
            className={cn(
              "p-1.5 rounded transition-colors",
              viewMode === "grid"
                ? "bg-white/10 text-white shadow-sm"
                : "text-neutral-400 hover:text-white"
            )}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* File Table */}
      <div className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-white/5 border-b border-white/5 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
          <div className="col-span-5 md:col-span-6 flex items-center gap-2">
            <span>Name</span>
            <ChevronDown className="w-3 h-3" />
          </div>
          <div className="col-span-3 hidden md:block">Type</div>
          <div className="col-span-4 md:col-span-3 text-right">Modified</div>
        </div>

        {files.map((file) => {
          const Icon = getIcon(file.icon)
          return (
            <div
              key={file.id}
              className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/5 hover:bg-white/5 transition-colors items-center group cursor-pointer last:border-b-0"
            >
              <div className="col-span-5 md:col-span-6 flex items-center gap-3">
                <Icon className={cn("w-4 h-4 transition-colors", getIconColor(file.iconColor))} />
                <div>
                  <div className="text-xs text-white font-medium group-hover:text-emerald-400 transition-colors">
                    {file.name}
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    {file.subtitle}
                  </div>
                </div>
              </div>
              <div className="col-span-3 hidden md:block">
                <span className="text-[10px] text-neutral-400 bg-white/5 px-2 py-1 rounded">
                  {file.type}
                </span>
              </div>
              <div className="col-span-4 md:col-span-3 text-right text-[11px] text-neutral-400">
                {file.modified}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
