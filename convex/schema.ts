import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

/**
 * HAUS Platform - Convex Schema
 *
 * Complete data model for luxury real estate platform with:
 * - Property listings (prestige, residential, commercial)
 * - User management (agents, buyers, sellers)
 * - Market intelligence & analytics
 * - AI-powered insights
 * - Document vault management
 */

export default defineSchema({
  // ==================== PROPERTIES ====================
  properties: defineTable({
    // Basic Info
    title: v.string(),
    description: v.optional(v.string()),
    type: v.string(), // house, apartment, townhouse, land, commercial
    status: v.string(), // active, pending, sold, withdrawn, draft

    // Location
    address: v.string(),
    suburb: v.string(),
    state: v.string(),
    postcode: v.string(),
    country: v.string(),

    // Pricing
    price: v.optional(v.number()),
    priceGuide: v.optional(v.string()), // "$35M - $38.5M"
    auctionDate: v.optional(v.string()),
    councilRates: v.optional(v.string()),

    // Property Details
    bedrooms: v.optional(v.number()),
    bathrooms: v.optional(v.number()),
    parkingSpaces: v.optional(v.number()),
    landSize: v.optional(v.string()), // "1,107m²"
    buildingSize: v.optional(v.string()), // "892m²"
    yearBuilt: v.optional(v.number()),
    aspect: v.optional(v.string()), // "North-East"
    zoning: v.optional(v.string()), // "R2 Low Density"

    // Features & Amenities
    amenities: v.optional(v.array(v.string())), // ["Deep Water Jetty", "2000 Bottle Cellar"]
    features: v.optional(v.array(v.string())),

    // Images & Media
    images: v.array(v.string()), // URLs
    mainImage: v.string(),
    floorplanUrl: v.optional(v.string()),
    virtualTourUrl: v.optional(v.string()),

    // Agent & Contact
    agentId: v.id("agents"),
    agency: v.optional(v.string()),
    contactEmail: v.optional(v.string()),
    contactPhone: v.optional(v.string()),

    // Inspection Times
    inspections: v.optional(v.array(v.object({
      date: v.string(),
      month: v.string(),
      day: v.string(),
      time: v.string(),
    }))),

    // AI Insights
    aiInsights: v.optional(v.object({
      valueRange: v.optional(v.string()),
      targetPrice: v.optional(v.string()),
      yield: v.optional(v.string()),
      growth: v.optional(v.string()),
      demandLevel: v.optional(v.string()),
      performance: v.optional(v.string()),
    })),

    // Neighbourhood Data
    neighbourhood: v.optional(v.object({
      name: v.string(),
      description: v.string(),
      medianPrice: v.string(),
      growth: v.string(),
    })),

    // Luxury/Prestige Specific
    isPrestige: v.optional(v.boolean()),
    prestigeCollection: v.optional(v.boolean()),
    featured: v.optional(v.boolean()),
    verified: v.optional(v.boolean()),

    // SEO & Meta
    slug: v.string(),
    metaTitle: v.optional(v.string()),
    metaDescription: v.optional(v.string()),

    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
    listedAt: v.optional(v.number()),
    soldAt: v.optional(v.number()),
  })
    .index("by_status", ["status"])
    .index("by_suburb", ["suburb"])
    .index("by_agent", ["agentId"])
    .index("by_price", ["price"])
    .index("by_prestige", ["isPrestige", "status"])
    .index("by_slug", ["slug"]),

  // ==================== USERS ====================
  users: defineTable({
    // Auth
    name: v.string(),
    email: v.string(),
    emailVerified: v.optional(v.boolean()),
    image: v.optional(v.string()), // avatar URL
    phone: v.optional(v.string()),

    // Role & Type
    role: v.string(), // admin, agent, buyer, seller
    accountType: v.string(), // individual, agency, enterprise

    // Agent Specific
    licenseNumber: v.optional(v.string()),
    agency: v.optional(v.string()),
    agencyId: v.optional(v.id("agencies")),
    specializations: v.optional(v.array(v.string())),
    languages: v.optional(v.array(v.string())),
    rating: v.optional(v.number()),
    reviewCount: v.optional(v.number()),

    // Preferences
    savedSearches: v.optional(v.array(v.id("savedSearches"))),
    savedProperties: v.optional(v.array(v.id("properties"))),
    notifications: v.optional(v.object({
      email: v.boolean(),
      push: v.boolean(),
      priceAlerts: v.boolean(),
      newListings: v.boolean(),
    })),

    // Fair Play Protocol
    fairPlayScore: v.optional(v.number()), // 0-10
    verificationLevel: v.optional(v.string()), // none, verified, certified

    // Subscription
    subscriptionTier: v.optional(v.string()), // free, professional, enterprise
    subscriptionExpiresAt: v.optional(v.number()),

    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
    lastActiveAt: v.optional(v.number()),
  })
    .index("by_email", ["email"])
    .index("by_role", ["role"])
    .index("by_agency", ["agencyId"]),

  // ==================== AGENCIES ====================
  agencies: defineTable({
    name: v.string(),
    slug: v.string(),
    logo: v.optional(v.string()),
    description: v.optional(v.string()),

    // Contact
    email: v.string(),
    phone: v.string(),
    website: v.optional(v.string()),

    // Location
    address: v.string(),
    suburb: v.string(),
    state: v.string(),
    postcode: v.string(),

    // Social
    instagram: v.optional(v.string()),
    linkedin: v.optional(v.string()),
    facebook: v.optional(v.string()),

    // Stats
    activeListings: v.optional(v.number()),
    totalSold: v.optional(v.number()),
    totalVolume: v.optional(v.number()),

    // Verification
    verified: v.optional(v.boolean()),
    licenseNumber: v.optional(v.string()),

    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_slug", ["slug"]),

  // ==================== MARKET INTELLIGENCE ====================
  marketData: defineTable({
    // Location
    suburb: v.string(),
    postcode: v.string(),
    state: v.string(),

    // Market Stats
    medianPrice: v.number(),
    medianPriceChange: v.number(), // percentage
    clearanceRate: v.number(),
    daysOnMarket: v.number(),
    auctionClearanceRate: v.optional(v.number()),

    // Supply & Demand
    totalListings: v.number(),
    newListingsThisMonth: v.number(),
    soldThisMonth: v.number(),

    // Growth
    quarterlyGrowth: v.number(),
    yearlyGrowth: v.number(),

    // Demographics
    averageAge: v.optional(v.number()),
    averageIncome: v.optional(v.number()),
    familyFriendly: v.optional(v.boolean()),

    // Amenities Score
    amenitiesScore: v.optional(v.number()), // 0-100
    transportScore: v.optional(v.number()),
    educationScore: v.optional(v.number()),
    shoppingScore: v.optional(v.number()),

    // AI Predictions
    predictedGrowth: v.optional(v.number()), // 12 month prediction
    confidence: v.optional(v.number()), // prediction confidence

    // Timestamp
    month: v.string(), // "2024-01"
    year: v.number(),
    createdAt: v.number(),
  })
    .index("by_suburb", ["suburb"])
    .index("by_month", ["month", "year"]),

  // ==================== SAVED SEARCHES ====================
  savedSearches: defineTable({
    userId: v.id("users"),
    name: v.optional(v.string()),

    // Search Criteria
    criteria: v.object({
      suburb: v.optional(v.array(v.string())),
      priceMin: v.optional(v.number()),
      priceMax: v.optional(v.number()),
      bedrooms: v.optional(v.object({ min: v.optional(v.number()), max: v.optional(v.number()) })),
      bathrooms: v.optional(v.object({ min: v.optional(v.number()), max: v.optional(v.number()) })),
      propertyType: v.optional(v.array(v.string())),
      status: v.optional(v.string()),
      keywords: v.optional(v.array(v.string())),
    }),

    // Notifications
    notifyOnMatch: v.boolean(),
    notifyFrequency: v.string(), // instant, daily, weekly
    lastNotifiedAt: v.optional(v.number()),

    // Stats
    matchCount: v.optional(v.number()),
    lastMatchAt: v.optional(v.number()),

    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"]),

  // ==================== DOCUMENT VAULT ====================
  documents: defineTable({
    userId: v.id("users"),
    propertyId: v.optional(v.id("properties")),

    // Document Info
    name: v.string(),
    type: v.string(), // contract, appraisal, inspection, floorplan, title
    category: v.string(),

    // File
    url: v.string(),
    size: v.number(), // bytes
    mimeType: v.string(),

    // Metadata
    description: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    expiresAt: v.optional(v.number()),

    // Access
    isPrivate: v.boolean(),
    sharedWith: v.optional(v.array(v.id("users"))),

    // AI Processing
    processed: v.optional(v.boolean()),
    extractedData: v.optional(v.any()), // structured data from AI

    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_property", ["propertyId"])
    .index("by_type", ["type"]),

  // ==================== AI INSIGHTS ====================
  insights: defineTable({
    userId: v.optional(v.id("users")),
    propertyId: v.optional(v.id("properties")),
    suburb: v.optional(v.string()),

    // Insight
    type: v.string(), // market_alert, valuation_update, opportunity, trend
    title: v.string(),
    content: v.string(),

    // AI Generated
    confidence: v.number(), // 0-1
    model: v.string(), // which AI model generated this
    reasoning: v.optional(v.string()), // AI reasoning

    // Priority
    priority: v.string(), // low, medium, high, urgent

    // Status
    read: v.boolean(),
    dismissed: v.optional(v.boolean()),
    actioned: v.optional(v.boolean()),

    // Related Data
    relatedProperties: v.optional(v.array(v.id("properties"))),
    tags: v.optional(v.array(v.string())),

    // Timestamps
    createdAt: v.number(),
    expiresAt: v.optional(v.number()),
  })
    .index("by_user", ["userId", "read"])
    .index("by_property", ["propertyId"])
    .index("by_suburb", ["suburb"]),

  // ==================== ACTIVITY LOG ====================
  activityLog: defineTable({
    userId: v.optional(v.id("users")),
    action: v.string(), // view, save, enquiry, share, search
    entityType: v.string(), // property, search, document
    entityId: v.optional(v.string()),

    // Metadata
    metadata: v.optional(v.any()),
    ipAddress: v.optional(v.string()),
    userAgent: v.optional(v.string()),

    // Timestamp
    createdAt: v.number(),
  })
    .index("by_user", ["userId", "createdAt"])
    .index("by_entity", ["entityType", "entityId"]),

  // ==================== NOTIFICATIONS ====================
  notifications: defineTable({
    userId: v.id("users"),
    type: v.string(), // new_listing, price_change, inspection_reminder, insight

    // Content
    title: v.string(),
    message: v.string(),
    link: v.optional(v.string()),

    // Status
    read: v.boolean(),
    readAt: v.optional(v.number()),

    // Delivery
    channels: v.array(v.string()), // email, push, in_app

    // Timestamps
    createdAt: v.number(),
    expiresAt: v.optional(v.number()),
  })
    .index("by_user", ["userId", "read"])
    .index("by_created", ["createdAt"]),

  // ==================== LEAD CAPTURE ====================
  leads: defineTable({
    propertyId: v.id("properties"),
    userId: v.optional(v.id("users")), // null if not logged in

    // Contact
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),

    // Lead Type
    type: v.string(), // enquiry, inspection, offer, valuation
    message: v.optional(v.string()),

    // Status
    status: v.string(), // new, contacted, qualified, converted, lost
    source: v.string(), // web, mobile, referrer

    // Agent Assignment
    assignedAgentId: v.id("agents"),
    assignedAt: v.optional(v.number()),

    // Follow-up
    notes: v.optional(v.array(v.object({
      content: v.string(),
      createdBy: v.id("users"),
      createdAt: v.number(),
    }))),

    // Timestamps
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_property", ["propertyId", "status"])
    .index("by_agent", ["assignedAgentId", "status"])
    .index("by_user", ["userId"]),

  // ==================== ANALYTICS EVENTS ====================
  analytics: defineTable({
    // Session
    sessionId: v.string(),
    userId: v.optional(v.id("users")),

    // Event
    event: v.string(), // page_view, property_view, search, filter, click
    category: v.optional(v.string()),

    // Properties
    properties: v.optional(v.any()), // event properties

    // Page
    page: v.string(),
    referrer: v.optional(v.string()),

    // Performance
    duration: v.optional(v.number()), // time on page

    // Timestamp
    createdAt: v.number(),
  })
    .index("by_session", ["sessionId", "createdAt"])
    .index("by_user", ["userId", "createdAt"]),
})
