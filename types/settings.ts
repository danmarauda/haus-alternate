/**
 * Account Settings Types
 *
 * @description
 * Type definitions for user account settings including profile,
 * notifications, security, privacy, and preferences.
 */

/**
 * User role within the system
 */
export type UserRole = 'admin' | 'agent' | 'buyer' | 'seller' | 'viewer' | 'analyst'

/**
 * Two-factor authentication method
 */
export type TwoFactorMethod = 'sms' | 'authenticator' | 'hardware-key' | 'email'

/**
 * Notification delivery channel
 */
export type NotificationChannel = 'email' | 'sms' | 'push' | 'in-app'

/**
 * Notification frequency preference
 */
export type NotificationFrequency = 'immediate' | 'hourly' | 'daily' | 'weekly' | 'never'

/**
 * User profile information
 */
export interface UserProfile {
  id: string
  email: string
  phoneNumber?: string
  firstName: string
  lastName: string
  displayName: string
  avatar?: string
  role: UserRole
  organization?: string
  title?: string
  bio?: string
  location?: {
    country: string
    state?: string
    city?: string
  }
  website?: string
  linkedIn?: string
  languages: string[]
  timezone: string
  createdAt: Date
  updatedAt: Date
  lastLogin?: Date
  isEmailVerified: boolean
  isPhoneVerified: boolean
  isActive: boolean
}

/**
 * Notification preference for a specific event type
 */
export interface NotificationPreference {
  eventType: string
  channels: NotificationChannel[]
  frequency: NotificationFrequency
  enabled: boolean
}

/**
 * Security settings and configurations
 */
export interface SecuritySettings {
  twoFactorEnabled: boolean
  twoFactorMethod?: TwoFactorMethod
  twoFactorBackupCodes: string[]
  loginNotifications: boolean
  sessionTimeout: number
  allowedIPs?: string[]
  deviceHistory: DeviceHistory[]
  apiKeys: APIKey[]
  lastPasswordChange?: Date
  passwordMinLength: number
  requireSpecialChar: boolean
  requireNumber: boolean
  requireUppercase: boolean
}

/**
 * Device login history
 */
export interface DeviceHistory {
  id: string
  deviceName: string
  deviceType: string
  browser: string
  os: string
  ipAddress: string
  location: string
  lastActive: Date
  isCurrent: boolean
}

/**
 * API key for external integrations
 */
export interface APIKey {
  id: string
  name: string
  key: string
  scopes: string[]
  createdAt: Date
  expiresAt?: Date
  lastUsed?: Date
  isActive: boolean
}

/**
 * Privacy and visibility settings
 */
export interface PrivacySettings {
  profileVisibility: 'public' | 'registered-only' | 'private'
  showEmail: boolean
  showPhone: boolean
  showLocation: boolean
  showActivity: boolean
  allowMessages: boolean
  dataSharing: {
    analytics: boolean
    marketing: boolean
    thirdParty: boolean
  }
  gdprAccepted: boolean
  gdprAcceptedAt?: Date
}

/**
 * User interface and display preferences
 */
export interface DisplayPreferences {
  theme: 'light' | 'dark' | 'system'
  language: string
  currency: string
  dateFormat: 'mdy' | 'dmy' | 'ymd'
  timeFormat: '12h' | '24h'
  timeZone: string
  startOfWeek: 'sunday' | 'monday'
  units: 'metric' | 'imperial'
  defaultView: 'grid' | 'list' | 'map'
  itemsPerPage: number
  compactMode: boolean
  reducedMotion: boolean
  highContrast: boolean
}

/**
 * Email notification settings
 */
export interface EmailNotificationSettings {
  newListings: NotificationPreference
  priceChanges: NotificationPreference
  marketReports: NotificationPreference
  systemUpdates: NotificationPreference
  accountAlerts: NotificationPreference
  newsletter: NotificationPreference
  promotional: NotificationPreference
}

/**
 * Connected external account
 */
export interface ConnectedAccount {
  id: string
  provider: 'google' | 'microsoft' | 'apple' | 'linkedin'
  email: string
  connectedAt: Date
  lastSync?: Date
  isActive: boolean
  scopes: string[]
}

/**
 * Billing and subscription information
 */
export interface BillingSettings {
  planId: string
  planName: string
  status: 'active' | 'trialing' | 'past_due' | 'canceled' | 'unpaid'
  currentPeriodStart: Date
  currentPeriodEnd: Date
  cancelAtPeriodEnd: boolean
  billingEmail: string
  paymentMethod: {
    type: 'card' | 'bank_account'
    last4: string
    brand?: string
    expiryMonth?: number
    expiryYear?: number
  }
  invoices: Invoice[]
  usage: {
    apiCalls: number
    storageUsed: number
    storageLimit: number
    teamMembers: number
    teamLimit: number
  }
}

/**
 * Invoice record
 */
export interface Invoice {
  id: string
  number: string
  amount: number
  currency: string
  status: 'draft' | 'open' | 'paid' | 'void' | 'uncollectible'
  dueDate?: Date
  paidAt?: Date
  createdAt: Date
  items: {
    description: string
    quantity: number
    unitPrice: number
    amount: number
  }[]
  pdfUrl?: string
}

/**
 * Complete account settings state
 */
export interface AccountSettings {
  profile: UserProfile
  security: SecuritySettings
  privacy: PrivacySettings
  display: DisplayPreferences
  notifications: {
    email: EmailNotificationSettings
    push: NotificationPreference[]
    sms: NotificationPreference[]
  }
  connections: ConnectedAccount[]
  billing?: BillingSettings
}

/**
 * Form state for updating profile
 */
export interface ProfileUpdateForm {
  firstName: string
  lastName: string
  displayName: string
  email: string
  phoneNumber?: string
  bio?: string
  location?: {
    country: string
    state?: string
    city?: string
  }
  website?: string
  linkedIn?: string
}

/**
 * Form state for password change
 */
export interface PasswordChangeForm {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

/**
 * Form state for notification preferences
 */
export interface NotificationForm {
  eventType: string
  channels: NotificationChannel[]
  frequency: NotificationFrequency
  enabled: boolean
}
