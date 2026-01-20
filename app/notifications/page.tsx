"use client"

/**
 * Notifications Page
 *
 * @description
 * Centralized notification center with filtering, read status,
 * and notification preferences management.
 *
 * @features
 * - Notification list with icons and images
 * - Filter by all/unread
 * - Mark as read/unread
 * - Delete notifications
 * - Notification preferences toggles
 * - Quick actions for each notification
 */

import { useState, useCallback } from "react"
import Link from "next/link"
import {
  Sparkles, Bell, ArrowLeft, Check, CheckCheck, Trash2, Settings,
  TrendingDown, TrendingUp, Home, MessageSquare, Calendar, DollarSign,
  AlertCircle, Star,
} from "lucide-react"
import { Suspense } from "react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"


type NotificationType = "price_drop" | "price_increase" | "new_listing" | "message" | "viewing" | "offer" | "alert" | "review" | "system"

type Notification = {
  id: string
  type: NotificationType
  title: string
  description: string
  time: string
  read: boolean
  actionUrl?: string
  image?: string
}

const initialNotifications: Notification[] = [
  {
    id: "1",
    type: "price_drop",
    title: "Price Drop Alert",
    description: "Oceanview Modern Villa in Malibu dropped by $50,000",
    time: "1 hour ago",
    read: false,
    actionUrl: "/listing/1",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=100",
  },
  {
    id: "2",
    type: "message",
    title: "New Message",
    description: "Mike Ross sent you a message about 128 Crown Street",
    time: "2 hours ago",
    read: false,
    actionUrl: "/messages",
  },
  {
    id: "3",
    type: "viewing",
    title: "Viewing Reminder",
    description: "Your viewing at 45 Pacific Highway is tomorrow at 10:00 AM",
    time: "3 hours ago",
    read: false,
    actionUrl: "/dashboard",
  },
  {
    id: "4",
    type: "new_listing",
    title: "New Listing Match",
    description: "A new property matching your criteria is available in Bondi Beach",
    time: "5 hours ago",
    read: true,
    actionUrl: "/listing/5",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=100",
  },
  {
    id: "5",
    type: "offer",
    title: "Offer Update",
    description: "Your offer on Skyline Penthouse is being reviewed",
    time: "Yesterday",
    read: true,
    actionUrl: "/dashboard",
  },
  {
    id: "6",
    type: "alert",
    title: "Market Alert",
    description: "Sydney median house price increased 2.1% this month",
    time: "Yesterday",
    read: true,
    actionUrl: "/analytics",
  },
  {
    id: "7",
    type: "review",
    title: "Review Request",
    description: "How was your experience with agent Sarah Chen?",
    time: "2 days ago",
    read: true,
  },
  {
    id: "8",
    type: "system",
    title: "Account Security",
    description: "We noticed a new login from Sydney, Australia",
    time: "3 days ago",
    read: true,
    actionUrl: "/settings",
  },
] as const

const getIcon = (type: NotificationType) => {
  switch (type) {
    case "price_drop": return <TrendingDown className="w-4 h-4" />
    case "price_increase": return <TrendingUp className="w-4 h-4" />
    case "new_listing": return <Home className="w-4 h-4" />
    case "message": return <MessageSquare className="w-4 h-4" />
    case "viewing": return <Calendar className="w-4 h-4" />
    case "offer": return <DollarSign className="w-4 h-4" />
    case "alert": return <AlertCircle className="w-4 h-4" />
    case "review": return <Star className="w-4 h-4" />
    case "system": return <Settings className="w-4 h-4" />
    default: return <Bell className="w-4 h-4" />
  }
}

const getIconColor = (type: NotificationType) => {
  switch (type) {
    case "price_drop": return "text-emerald-400 bg-emerald-500/20"
    case "price_increase": return "text-red-400 bg-red-500/20"
    case "new_listing": return "text-blue-400 bg-blue-500/20"
    case "message": return "text-purple-400 bg-purple-500/20"
    case "viewing": return "text-amber-400 bg-amber-500/20"
    case "offer": return "text-cyan-400 bg-cyan-500/20"
    case "alert": return "text-orange-400 bg-orange-500/20"
    case "review": return "text-yellow-400 bg-yellow-500/20"
    case "system": return "text-neutral-400 bg-neutral-500/20"
    default: return "text-neutral-400 bg-neutral-500/20"
  }
}

function NotificationsPageContent() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [filter, setFilter] = useState<"all" | "unread">("all")

  const unreadCount = notifications.filter((n) => !n.read).length
  const filteredNotifications = filter === "unread" ? notifications.filter((n) => !n.read) : notifications

  const markAsRead = useCallback((id: string) => {
    setNotifications(notifications.map((n) => n.id === id ? { ...n, read: true } : n))
  }, [])

  const markAllAsRead = useCallback(() => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }, [])

  const deleteNotification = useCallback((id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }, [])

  const clearAll = useCallback(() => {
    setNotifications([])
  }, [])

  const handleFilterChange = useCallback((newFilter: "all" | "unread") => {
    setFilter(newFilter)
  }, [])

  return (
    <div className="landing-page min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10" role="navigation" aria-label="Notifications navigation">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors" aria-label="Back to dashboard">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link href="/" className="inline-flex items-center gap-2" aria-label="HAUS home">
              <div className="h-6 w-6 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white/80" />
              </div>
              <span className="text-base font-semibold tracking-tight">HAUS</span>
            </Link>
          </div>
          <Link href="/settings" className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors" aria-label="Settings">
            <Settings className="w-5 h-5" />
          </Link>
        </div>
      </nav>

      <main className="py-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto" aria-labelledby="notifications-heading">
        <h1 id="notifications-heading" className="sr-only">Notifications</h1>

        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-display font-medium tracking-tight text-white flex items-center gap-3">
              Notifications
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-indigo-500 text-[10px] font-bold text-white" aria-label={`${unreadCount} unread notifications`}>
                  {unreadCount}
                </span>
              )}
            </h2>
            <p className="text-neutral-500 text-sm mt-1">Stay updated on your property activity</p>
          </div>
          <div className="flex items-center gap-2" role="group" aria-label="Bulk actions">
            {unreadCount > 0 && (
              <button onClick={markAllAsRead} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-indigo-400 hover:bg-indigo-500/10 transition-colors">
                <CheckCheck className="w-3 h-3" aria-hidden="true" />
                Mark all read
              </button>
            )}
            {notifications.length > 0 && (
              <button onClick={clearAll} className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-neutral-400 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                <Trash2 className="w-3 h-3" aria-hidden="true" />
                Clear all
              </button>
            )}
          </div>
        </header>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-6" role="group" aria-label="Filter notifications">
          <button
            onClick={() => handleFilterChange("all")}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
              filter === "all" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
            aria-pressed={filter === "all"}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange("unread")}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 ${
              filter === "unread" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
            aria-pressed={filter === "unread"}
          >
            Unread
            {unreadCount > 0 && <span className="w-5 h-5 rounded-full bg-indigo-500 text-[10px] flex items-center justify-center">{unreadCount}</span>}
          </button>
        </div>

        {/* Notifications List */}
        {filteredNotifications.length > 0 ? (
          <div className="space-y-2" role="list" aria-label="Notifications list">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`group p-4 rounded-xl border transition-colors ${
                  notification.read
                    ? "border-white/5 bg-white/[0.02] hover:bg-white/5"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
                role="listitem"
              >
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${getIconColor(notification.type)}`} aria-hidden="true">
                    {getIcon(notification.type)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className={`text-sm font-medium ${notification.read ? "text-neutral-300" : "text-white"}`}>
                          {notification.title}
                        </h3>
                        <p className="text-xs text-neutral-500 mt-0.5">{notification.description}</p>
                      </div>
                      {notification.image && (
                        <img src={notification.image} alt="" className="w-12 h-12 rounded-lg object-cover shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-[10px] text-neutral-600">{notification.time}</span>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="p-1.5 rounded-lg text-neutral-500 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label={`Mark ${notification.title} as read`}
                          >
                            <Check className="w-3 h-3" aria-hidden="true" />
                          </button>
                        )}
                        {notification.actionUrl && (
                          <Link
                            href={notification.actionUrl}
                            className="px-3 py-1 rounded-lg text-[10px] font-medium text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                          >
                            View
                          </Link>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-1.5 rounded-lg text-neutral-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                          aria-label={`Delete ${notification.title}`}
                        >
                          <Trash2 className="w-3 h-3" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-neutral-600" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-medium text-white mb-2">
              {filter === "unread" ? "All caught up!" : "No notifications"}
            </h2>
            <p className="text-neutral-500 text-sm">
              {filter === "unread"
                ? "You've read all your notifications."
                : "You'll see notifications here when there's activity on your properties."}
            </p>
          </div>
        )}

        {/* Notification Settings */}
        <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-white/5" aria-labelledby="preferences-heading">
          <h3 id="preferences-heading" className="font-medium text-white mb-4">Notification Preferences</h3>
          <div className="space-y-4" role="list" aria-label="Notification preferences">
            {[
              { label: "Price drop alerts", desc: "Get notified when saved properties reduce in price", enabled: true },
              { label: "New listing matches", desc: "Receive alerts for properties matching your criteria", enabled: true },
              { label: "Viewing reminders", desc: "Reminders for upcoming property viewings", enabled: true },
              { label: "Market updates", desc: "Weekly summary of market trends", enabled: false },
            ].map((pref) => (
              <div key={pref.label} className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-white">{pref.label}</div>
                  <div className="text-xs text-neutral-500">{pref.desc}</div>
                </div>
                <button className={`w-10 h-6 rounded-full transition-colors ${pref.enabled ? "bg-indigo-500" : "bg-white/10"}`} aria-pressed={pref.enabled} aria-label={`${pref.label} ${pref.enabled ? "enabled" : "disabled"}`}>
                  <div className={`w-4 h-4 rounded-full bg-white shadow transition-transform ${pref.enabled ? "translate-x-5" : "translate-x-1"}`} aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
          <Link href="/settings" className="inline-flex items-center gap-1 mt-6 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
            <Settings className="w-3 h-3" aria-hidden="true" />
            Manage all notification settings
          </Link>
        </div>
      </main>
    </div>
  )
}

export default function NotificationsPage() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader text="Loading notifications..." />}>
          <NotificationsPageContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
