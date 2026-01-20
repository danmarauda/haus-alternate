"use client"

/**
 * Account Settings Page
 *
 * @description
 * Comprehensive account management page with profile editing, security settings,
 * notification preferences, privacy controls, and billing management.
 * Features React Hook Form with Zod validation for all forms.
 *
 * @features
 * - Profile information management with validation
 * - Security settings (password, 2FA, sessions)
 * - Notification preferences by channel and type
 * - Privacy and visibility controls
 * - Connected accounts management
 * - Billing information and invoice history
 * - API key management
 * - Real-time form validation
 *
 * @example
 * ```tsx
 * // Access at /account-settings route
 * <AccountSettingsPage />
 * ```
 */

import { useState, useCallback } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  User,
  Shield,
  Bell,
  Eye,
  CreditCard,
  Key,
  Smartphone,
  Mail,
  Globe,
  Lock,
  Check,
  ChevronRight,
  AlertTriangle,
  Download,
  Trash2,
  Plus,
  History,
  Monitor,
  Building2
} from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import type {
  UserProfile,
  SecuritySettings,
  PrivacySettings,
  DisplayPreferences,
  ConnectedAccount,
  APIKey,
  Invoice,
  NotificationChannel,
  NotificationFrequency
} from "@/types/settings"


// Zod schema for profile update
const profileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  displayName: z.string().min(3, "Display name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().regex(/^\+?[\d\s\-()]+$/, "Invalid phone number").optional().or(z.literal("")),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  website: z.string().url("Invalid website URL").optional().or(z.literal("")),
  linkedIn: z.string().url("Invalid LinkedIn URL").optional().or(z.literal(""))
})

type ProfileFormData = z.infer<typeof profileSchema>

// Zod schema for password change
const passwordSchema = z.object({
  currentPassword: z.string().min(8, "Password must be at least 8 characters"),
  newPassword: z.string()
    .min(12, "Password must be at least 12 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
  confirmPassword: z.string()
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
})

type PasswordFormData = z.infer<typeof passwordSchema>

// Mock user data
const MOCK_USER: UserProfile = {
  id: "usr-2024-001",
  email: "james.mitchell@haus.group",
  firstName: "James",
  lastName: "Mitchell",
  displayName: "James Mitchell",
  avatar: undefined,
  role: "agent",
  organization: "HAUS Group",
  title: "Senior Buyer's Agent",
  bio: "Specializing in luxury residential properties across Sydney's Eastern Suburbs. 15+ years experience in premium real estate.",
  location: {
    country: "Australia",
    state: "NSW",
    city: "Sydney"
  },
  website: "https://jamesmitchell.haus.group",
  linkedIn: "https://linkedin.com/in/jamesmitchell",
  languages: ["English", "Mandarin"],
  timezone: "Australia/Sydney",
  createdAt: new Date("2021-03-15"),
  updatedAt: new Date("2024-11-10"),
  lastLogin: new Date("2024-11-14T09:32:00"),
  isEmailVerified: true,
  isPhoneVerified: true,
  isActive: true
} as const

const MOCK_SECURITY: SecuritySettings = {
  twoFactorEnabled: true,
  twoFactorMethod: "authenticator",
  twoFactorBackupCodes: ["ABC123", "DEF456", "GHI789"],
  loginNotifications: true,
  sessionTimeout: 480,
  deviceHistory: [
    {
      id: "dev-001",
      deviceName: "MacBook Pro",
      deviceType: "Desktop",
      browser: "Chrome",
      os: "macOS 14.2",
      ipAddress: "203.45.67.89",
      location: "Sydney, AU",
      lastActive: new Date(),
      isCurrent: true
    },
    {
      id: "dev-002",
      deviceName: "iPhone 15 Pro",
      deviceType: "Mobile",
      browser: "Safari",
      os: "iOS 17.1",
      ipAddress: "203.45.67.90",
      location: "Sydney, AU",
      lastActive: new Date(Date.now() - 3600000),
      isCurrent: false
    }
  ],
  apiKeys: [],
  lastPasswordChange: new Date("2024-10-15"),
  passwordMinLength: 12,
  requireSpecialChar: true,
  requireNumber: true,
  requireUppercase: true
} as const

const MOCK_PRIVACY: PrivacySettings = {
  profileVisibility: "registered-only",
  showEmail: false,
  showPhone: false,
  showLocation: true,
  showActivity: true,
  allowMessages: true,
  dataSharing: {
    analytics: true,
    marketing: false,
    thirdParty: false
  },
  gdprAccepted: true,
  gdprAcceptedAt: new Date("2021-03-15")
} as const

const MOCK_DISPLAY: DisplayPreferences = {
  theme: "dark",
  language: "en",
  currency: "AUD",
  dateFormat: "dmy",
  timeFormat: "24h",
  timeZone: "Australia/Sydney",
  startOfWeek: "monday",
  units: "metric",
  defaultView: "grid",
  itemsPerPage: 24,
  compactMode: false,
  reducedMotion: false,
  highContrast: false
} as const

const MOCK_CONNECTIONS: ConnectedAccount[] = [
  {
    id: "conn-001",
    provider: "google",
    email: "james.mitchell@gmail.com",
    connectedAt: new Date("2023-06-20"),
    lastSync: new Date(),
    isActive: true,
    scopes: ["profile", "email", "calendar"]
  },
  {
    id: "conn-002",
    provider: "linkedin",
    email: "james.mitchell@haus.group",
    connectedAt: new Date("2023-08-10"),
    isActive: true,
    scopes: ["profile", "email"]
  }
] as const

const MOCK_INVOICES: Invoice[] = [
  {
    id: "inv-2024-11",
    number: "INV-2024-11-001",
    amount: 299,
    currency: "AUD",
    status: "paid",
    dueDate: new Date("2024-11-30"),
    paidAt: new Date("2024-11-15"),
    createdAt: new Date("2024-11-01"),
    items: [
      { description: "Professional Plan - Monthly", quantity: 1, unitPrice: 299, amount: 299 }
    ],
    pdfUrl: "/invoices/inv-2024-11.pdf"
  },
  {
    id: "inv-2024-10",
    number: "INV-2024-10-001",
    amount: 299,
    currency: "AUD",
    status: "paid",
    dueDate: new Date("2024-10-31"),
    paidAt: new Date("2024-10-15"),
    createdAt: new Date("2024-10-01"),
    items: [
      { description: "Professional Plan - Monthly", quantity: 1, unitPrice: 299, amount: 299 }
    ],
    pdfUrl: "/invoices/inv-2024-10.pdf"
  }
] as const

type TabValue = "profile" | "security" | "notifications" | "privacy" | "billing" | "connections" | "api"

function AccountSettingsPageContent() {
  const [activeTab, setActiveTab] = useState<TabValue>("profile")
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleTabChange = useCallback((tab: TabValue) => {
    setActiveTab(tab)
  }, [])

  // Profile form
  const profileForm = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: MOCK_USER.firstName,
      lastName: MOCK_USER.lastName,
      displayName: MOCK_USER.displayName,
      email: MOCK_USER.email,
      phoneNumber: "",
      bio: MOCK_USER.bio,
      website: MOCK_USER.website,
      linkedIn: MOCK_USER.linkedIn
    }
  })

  // Password form
  const passwordForm = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    }
  })

  const handleProfileSubmit = useCallback(async (data: ProfileFormData) => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }, [])

  const handlePasswordSubmit = useCallback(async (data: PasswordFormData) => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
    passwordForm.reset()
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }, [passwordForm])

  return (
    <div className="landing-page min-h-screen">
      {/* Noise Overlay */}
      <div
        className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
        }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b border-white/10" role="navigation" aria-label="Settings navigation">
        <Link href="/dashboard" className="font-display text-lg font-medium tracking-tight flex items-center gap-2 group" aria-label="HAUS dashboard">
          <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold tracking-tighter group-hover:scale-90 transition-transform duration-300">
            H
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8" role="list" aria-label="Page navigation">
          <Link href="/dashboard" className="text-xs font-mono text-white/60 hover:text-white transition-colors">DASHBOARD</Link>
          <span className="text-xs font-mono text-white border-b border-white transition-colors" aria-current="page">SETTINGS</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20" aria-label="User profile" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-24" role="main" aria-labelledby="settings-heading">
        <h1 id="settings-heading" className="sr-only">Account Settings</h1>
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto">

          {/* Header */}
          <header className="mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">
              Account Settings
            </h2>
            <p className="text-neutral-400 text-sm">
              Manage your profile, security, and preferences
            </p>
          </header>

          <div className="grid grid-cols-12 gap-8">
            {/* Sidebar Navigation */}
            <aside className="col-span-12 md:col-span-3">
              <nav className="bg-[#0A0A0A] border border-white/10 rounded-xl p-2 sticky top-32" role="navigation" aria-label="Settings categories">
                <button
                  onClick={() => handleTabChange("profile")}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1",
                    activeTab === "profile" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white hover:bg-white/5"
                  )}
                  aria-pressed={activeTab === "profile"}
                >
                  <User className="w-4 h-4" aria-hidden="true" />
                  Profile
                </button>
                <button
                  onClick={() => handleTabChange("security")}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1",
                    activeTab === "security" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white hover:bg-white/5"
                  )}
                  aria-pressed={activeTab === "security"}
                >
                  <Shield className="w-4 h-4" aria-hidden="true" />
                  Security
                </button>
                <button
                  onClick={() => handleTabChange("notifications")}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1",
                    activeTab === "notifications" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white hover:bg-white/5"
                  )}
                  aria-pressed={activeTab === "notifications"}
                >
                  <Bell className="w-4 h-4" aria-hidden="true" />
                  Notifications
                </button>
                <button
                  onClick={() => handleTabChange("privacy")}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1",
                    activeTab === "privacy" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white hover:bg-white/5"
                  )}
                  aria-pressed={activeTab === "privacy"}
                >
                  <Eye className="w-4 h-4" aria-hidden="true" />
                  Privacy
                </button>
                <button
                  onClick={() => handleTabChange("billing")}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1",
                    activeTab === "billing" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white hover:bg-white/5"
                  )}
                  aria-pressed={activeTab === "billing"}
                >
                  <CreditCard className="w-4 h-4" aria-hidden="true" />
                  Billing
                </button>
                <button
                  onClick={() => handleTabChange("connections")}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-1",
                    activeTab === "connections" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white hover:bg-white/5"
                  )}
                  aria-pressed={activeTab === "connections"}
                >
                  <Building2 className="w-4 h-4" aria-hidden="true" />
                  Connections
                </button>
                <button
                  onClick={() => handleTabChange("api")}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    activeTab === "api" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white hover:bg-white/5"
                  )}
                  aria-pressed={activeTab === "api"}
                >
                  <Key className="w-4 h-4" aria-hidden="true" />
                  API Keys
                </button>
              </nav>
            </aside>

            {/* Content Area */}
            <main className="col-span-12 md:col-span-9">
              {saveSuccess && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-3" role="alert" aria-live="polite">
                  <Check className="w-5 h-5 text-emerald-500" aria-hidden="true" />
                  <span className="text-sm text-emerald-400">Settings saved successfully</span>
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 md:p-8">
                  <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-indigo-400" aria-hidden="true" />
                    Profile Information
                  </h2>

                  <form onSubmit={profileForm.handleSubmit(handleProfileSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          {...profileForm.register("firstName")}
                          className="bg-black/50 border-white/10"
                          aria-describedby="firstName-error"
                        />
                        {profileForm.formState.errors.firstName && (
                          <p id="firstName-error" className="text-xs text-red-500" role="alert">{profileForm.formState.errors.firstName.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          {...profileForm.register("lastName")}
                          className="bg-black/50 border-white/10"
                          aria-describedby="lastName-error"
                        />
                        {profileForm.formState.errors.lastName && (
                          <p id="lastName-error" className="text-xs text-red-500" role="alert">{profileForm.formState.errors.lastName.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="displayName">Display Name</Label>
                        <Input
                          id="displayName"
                          {...profileForm.register("displayName")}
                          className="bg-black/50 border-white/10"
                          aria-describedby="displayName-error"
                        />
                        {profileForm.formState.errors.displayName && (
                          <p id="displayName-error" className="text-xs text-red-500" role="alert">{profileForm.formState.errors.displayName.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...profileForm.register("email")}
                          className="bg-black/50 border-white/10"
                          aria-describedby="email-error"
                        />
                        {profileForm.formState.errors.email && (
                          <p id="email-error" className="text-xs text-red-500" role="alert">{profileForm.formState.errors.email.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          {...profileForm.register("phoneNumber")}
                          className="bg-black/50 border-white/10"
                          placeholder="+61 2 1234 5678"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          type="url"
                          {...profileForm.register("website")}
                          className="bg-black/50 border-white/10"
                          placeholder="https://"
                          aria-describedby="website-error"
                        />
                        {profileForm.formState.errors.website && (
                          <p id="website-error" className="text-xs text-red-500" role="alert">{profileForm.formState.errors.website.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea
                        id="bio"
                        {...profileForm.register("bio")}
                        rows={3}
                        className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 resize-none"
                        placeholder="Tell us about yourself..."
                        aria-describedby="bio-error"
                      />
                      {profileForm.formState.errors.bio && (
                        <p id="bio-error" className="text-xs text-red-500" role="alert">{profileForm.formState.errors.bio.message}</p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex justify-end">
                      <Button
                        type="submit"
                        disabled={isSaving}
                        className="bg-indigo-600 hover:bg-indigo-500"
                        aria-busy={isSaving}
                      >
                        {isSaving ? "Saving..." : "Save Changes"}
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-indigo-400" aria-hidden="true" />
                      Change Password
                    </h2>

                    <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input
                          id="currentPassword"
                          type="password"
                          {...passwordForm.register("currentPassword")}
                          className="bg-black/50 border-white/10"
                          aria-describedby="currentPassword-error"
                        />
                        {passwordForm.formState.errors.currentPassword && (
                          <p id="currentPassword-error" className="text-xs text-red-500" role="alert">{passwordForm.formState.errors.currentPassword.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          {...passwordForm.register("newPassword")}
                          className="bg-black/50 border-white/10"
                          aria-describedby="newPassword-error"
                        />
                        {passwordForm.formState.errors.newPassword && (
                          <p id="newPassword-error" className="text-xs text-red-500" role="alert">{passwordForm.formState.errors.newPassword.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          {...passwordForm.register("confirmPassword")}
                          className="bg-black/50 border-white/10"
                          aria-describedby="confirmPassword-error"
                        />
                        {passwordForm.formState.errors.confirmPassword && (
                          <p id="confirmPassword-error" className="text-xs text-red-500" role="alert">{passwordForm.formState.errors.confirmPassword.message}</p>
                        )}
                      </div>

                      <div className="pt-4 border-t border-white/10 flex justify-end">
                        <Button
                          type="submit"
                          disabled={isSaving}
                          className="bg-indigo-600 hover:bg-indigo-500"
                          aria-busy={isSaving}
                        >
                          {isSaving ? "Updating..." : "Update Password"}
                        </Button>
                      </div>
                    </form>
                  </div>

                  {/* 2FA Status */}
                  <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-emerald-500" aria-hidden="true" />
                        <div>
                          <h3 className="text-sm font-medium text-white">Two-Factor Authentication</h3>
                          <p className="text-xs text-neutral-500">Authenticator app enabled</p>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                        <Check className="w-3 h-3" aria-hidden="true" />
                        <span className="sr-only">Status:</span> Enabled
                      </span>
                    </div>
                  </div>

                  {/* Active Sessions */}
                  <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                    <h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                      <Monitor className="w-4 h-4" aria-hidden="true" />
                      Active Sessions
                    </h3>
                    <div className="space-y-3" role="list" aria-label="Active sessions">
                      {MOCK_SECURITY.deviceHistory.map((device) => (
                        <div key={device.id} className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-white/5" role="listitem">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
                              <Monitor className="w-4 h-4 text-neutral-400" aria-hidden="true" />
                            </div>
                            <div>
                              <div className="text-sm text-white">{device.deviceName}</div>
                              <div className="text-xs text-neutral-500">{device.browser} • {device.os}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-neutral-500">{device.location}</div>
                            <div className="text-xs text-neutral-600">{device.ipAddress}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 md:p-8">
                  <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-indigo-400" aria-hidden="true" />
                    Notification Preferences
                  </h2>

                  <div className="space-y-6" role="list" aria-label="Notification preferences">
                    {[
                      { title: "New Listings", desc: "Get notified when new properties match your criteria" },
                      { title: "Price Changes", desc: "Alerts when saved properties have price changes" },
                      { title: "Market Reports", desc: "Weekly market analysis and insights" },
                      { title: "System Updates", desc: "Important announcements about platform changes" },
                      { title: "Account Activity", desc: "Security alerts for your account" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-white/5" role="listitem">
                        <div>
                          <h4 className="text-sm font-medium text-white mb-1">{item.title}</h4>
                          <p className="text-xs text-neutral-500">{item.desc}</p>
                        </div>
                        <Select defaultValue="email" aria-label={`Frequency for ${item.title}`}>
                          <SelectTrigger className="w-40 bg-black/50 border-white/10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="never">Never</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                    <Button className="bg-indigo-600 hover:bg-indigo-500">
                      Save Preferences
                    </Button>
                  </div>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === "privacy" && (
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 md:p-8">
                  <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-indigo-400" aria-hidden="true" />
                    Privacy Settings
                  </h2>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-white">Profile Visibility</h3>
                      <div className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-white/5">
                        <div>
                          <div className="text-sm text-white">Who can see your profile</div>
                          <div className="text-xs text-neutral-500">Control who can view your profile information</div>
                        </div>
                        <Select defaultValue="registered-only" aria-label="Profile visibility">
                          <SelectTrigger className="w-48 bg-black/50 border-white/10">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="registered-only">Registered Users</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-white">Information Display</h3>
                      {[
                        { label: "Show email address", defaultChecked: false },
                        { label: "Show phone number", defaultChecked: false },
                        { label: "Show location", defaultChecked: true },
                        { label: "Show activity status", defaultChecked: true }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-neutral-300">{item.label}</span>
                          <Checkbox id={`privacy-${idx}`} defaultChecked={item.defaultChecked} />
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <h3 className="text-sm font-medium text-white">Data Sharing</h3>
                      {[
                        { label: "Analytics tracking", defaultChecked: true },
                        { label: "Marketing communications", defaultChecked: false },
                        { label: "Third-party services", defaultChecked: false }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-neutral-300">{item.label}</span>
                          <Checkbox id={`data-${idx}`} defaultChecked={item.defaultChecked} />
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/10 flex justify-end">
                      <Button className="bg-indigo-600 hover:bg-indigo-500">
                        Save Privacy Settings
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === "billing" && (
                <div className="space-y-6">
                  <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-medium text-white flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-indigo-400" aria-hidden="true" />
                        Billing & Subscription
                      </h2>
                      <span className="px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                        Active
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div>
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Current Plan</div>
                        <div className="text-sm text-white font-medium">Professional</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Monthly Cost</div>
                        <div className="text-sm text-white font-medium">$299 AUD</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Next Billing</div>
                        <div className="text-sm text-white font-medium">Dec 1, 2024</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Payment Method</div>
                        <div className="text-sm text-white font-medium">•••• 4242</div>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="border-white/20">
                      Update Payment Method
                    </Button>
                  </div>

                  {/* Invoice History */}
                  <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6">
                    <h3 className="text-sm font-medium text-white mb-4">Invoice History</h3>
                    <div className="space-y-3" role="list" aria-label="Invoice history">
                      {MOCK_INVOICES.map((invoice) => (
                        <div key={invoice.id} className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-white/5" role="listitem">
                          <div>
                            <div className="text-sm text-white">{invoice.number}</div>
                            <div className="text-xs text-neutral-500">{invoice.createdAt.toLocaleDateString()}</div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-white font-mono">${invoice.amount} AUD</div>
                            <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs">
                              {invoice.status}
                            </span>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" aria-label={`Download invoice ${invoice.number}`}>
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Connections Tab */}
              {activeTab === "connections" && (
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 md:p-8">
                  <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-indigo-400" aria-hidden="true" />
                    Connected Accounts
                  </h2>

                  <div className="space-y-4" role="list" aria-label="Connected accounts">
                    {MOCK_CONNECTIONS.map((conn) => (
                      <div key={conn.id} className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-white/5" role="listitem">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-neutral-400" aria-hidden="true" />
                          </div>
                          <div>
                            <div className="text-sm text-white capitalize">{conn.provider}</div>
                            <div className="text-xs text-neutral-500">{conn.email}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-xs text-emerald-500">
                            <Check className="w-3 h-3" aria-hidden="true" />
                            <span className="sr-only">Status:</span> Connected
                          </span>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400 hover:bg-red-500/10">
                            Disconnect
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <Button variant="outline" className="border-white/20">
                      <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
                      Connect Account
                    </Button>
                  </div>
                </div>
              )}

              {/* API Keys Tab */}
              {activeTab === "api" && (
                <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 md:p-8">
                  <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
                    <Key className="w-5 h-5 text-indigo-400" aria-hidden="true" />
                    API Keys
                  </h2>

                  <div className="text-center py-12">
                    <Key className="w-12 h-12 text-neutral-600 mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-sm font-medium text-white mb-2">No API keys yet</h3>
                    <p className="text-xs text-neutral-500 mb-6 max-w-sm mx-auto">
                      Create API keys to integrate HAUS data with your applications
                    </p>
                    <Button className="bg-indigo-600 hover:bg-indigo-500">
                      <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
                      Generate API Key
                    </Button>
                  </div>
                </div>
              )}

            </main>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function AccountSettingsPage() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader text="Loading settings..." />}>
          <AccountSettingsPageContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
