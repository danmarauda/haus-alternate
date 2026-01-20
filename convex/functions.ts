/**
 * Convex Function Examples for HAUS Platform
 *
 * Example server functions for:
 * - Property queries & mutations
 * - User management
 * - Market intelligence
 * - AI insights
 */

import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

// ==================== PROPERTIES ====================

/**
 * List properties with filters
 */
export const listProperties = query({
  args: {
    status: v.optional(v.string()),
    suburb: v.optional(v.string()),
    agentId: v.optional(v.id("agents")),
    isPrestige: v.optional(v.boolean()),
    limit: v.optional(v.number()),
    cursor: v.optional(v.string()),
  },
  handler: async (ctx: any, args: any) => {
    const { status, suburb, agentId, isPrestige, limit = 20, cursor } = args

    let query = ctx.db.query("properties")

    if (status) query = query.filter((q: any) => q.eq("status", status))
    if (suburb) query = query.filter((q: any) => q.eq("suburb", suburb))
    if (agentId) query = query.filter((q: any) => q.eq("agentId", agentId))
    if (isPrestige !== undefined) query = query.filter((q: any) => q.eq("isPrestige", isPrestige))

    query = query.order("desc", "createdAt")

    if (cursor) {
      const cursorDoc = await ctx.db.get(cursor as any)
      if (!cursorDoc) throw new Error("Cursor not found")
      query = query.filter((q: any) => q.lt("createdAt", cursorDoc.createdAt))
    }

    const properties = await query.take(limit).collect()
    const lastProperty = properties[properties.length - 1]
    const nextCursor = lastProperty ? lastProperty._id : null

    return {
      properties,
      nextCursor,
      hasMore: properties.length === limit,
    }
  },
})

/**
 * Get property by slug
 */
export const getPropertyBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx: any, args: any) => {
    const property = await ctx.db
      .query("properties")
      .filter((q: any) => q.eq("slug", args.slug))
      .first()

    if (!property) return null

    // Fetch agent details
    const agent = await ctx.db.get(property.agentId)
    const agency = agent?.agencyId ? await ctx.db.get(agent.agencyId) : null

    return {
      ...property,
      agent: {
        ...agent,
        agency,
      },
    }
  },
})

/**
 * Create new property
 */
export const createProperty = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    type: v.string(),
    address: v.string(),
    suburb: v.string(),
    state: v.string(),
    postcode: v.string(),
    price: v.optional(v.number()),
    bedrooms: v.optional(v.number()),
    bathrooms: v.optional(v.number()),
    parkingSpaces: v.optional(v.number()),
    images: v.array(v.string()),
    agentId: v.id("agents"),
    slug: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    const now = Date.now()

    const propertyId = await ctx.db.insert("properties", {
      ...args,
      status: "draft",
      country: "Australia",
      createdAt: now,
      updatedAt: now,
      listedAt: now,
      mainImage: args.images[0] || "",
    })

    return propertyId
  },
})

/**
 * Save/unsave property
 */
export const toggleSaveProperty = mutation({
  args: {
    propertyId: v.id("properties"),
    userId: v.id("users"),
    save: v.boolean(), // true to save, false to unsave
  },
  handler: async (ctx: any, args: any) => {
    const user = await ctx.db.get(args.userId)
    if (!user) throw new Error("User not found")

    const currentSaved = user.savedProperties || []
    const isSaved = currentSaved.includes(args.propertyId)

    if (args.save && !isSaved) {
      await ctx.db.patch(args.userId, {
        savedProperties: [...currentSaved, args.propertyId],
      })
    } else if (!args.save && isSaved) {
      await ctx.db.patch(args.userId, {
        savedProperties: currentSaved.filter((id: any) => id !== args.propertyId),
      })
    }

    return { success: true }
  },
})

// ==================== USERS ====================

/**
 * Get user by email
 */
export const getUserByEmail = query({
  args: { email: v.string() },
  handler: async (ctx: any, args: any) => {
    const user = await ctx.db
      .query("users")
      .filter((q: any) => q.eq("email", args.email))
      .first()

    return user
  },
})

/**
 * Create or update user
 */
export const upsertUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    emailVerified: v.optional(v.boolean()),
    image: v.optional(v.string()),
    role: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    const existing = await ctx.db
      .query("users")
      .filter((q: any) => q.eq("email", args.email))
      .first()

    const now = Date.now()

    if (existing) {
      await ctx.db.patch(existing._id, {
        ...args,
        updatedAt: now,
      })
      return existing._id
    } else {
      const userId = await ctx.db.insert("users", {
        ...args,
        subscriptionTier: "free",
        notifications: {
          email: true,
          push: true,
          priceAlerts: true,
          newListings: true,
        },
        createdAt: now,
        updatedAt: now,
      })
      return userId
    }
  },
})

// ==================== MARKET INTELLIGENCE ====================

/**
 * Get market data for suburb
 */
export const getMarketData = query({
  args: {
    suburb: v.string(),
    month: v.optional(v.string()),
    year: v.optional(v.number()),
  },
  handler: async (ctx: any, args: any) => {
    const now = new Date()
    const month = args.month || `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
    const year = args.year || now.getFullYear()

    const marketData = await ctx.db
      .query("marketData")
      .filter((q: any) =>
        q.eq("suburb", args.suburb)
          .eq("month", month)
          .eq("year", year)
      )
      .first()

    return marketData
  },
})

/**
 * Get top performing suburbs
 */
export const getTopSuburbs = query({
  args: {
    state: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx: any, args: any) => {
    let query = ctx.db.query("marketData")
      .order("desc", "yearlyGrowth")

    if (args.limit) query = query.take(args.limit)

    return await query.collect()
  },
})

// ==================== SEARCH ====================

/**
 * Search properties
 */
export const searchProperties = query({
  args: {
    query: v.string(),
    filters: v.optional(v.object({
      priceMin: v.optional(v.number()),
      priceMax: v.optional(v.number()),
      bedrooms: v.optional(v.number()),
      bathrooms: v.optional(v.number()),
      suburb: v.optional(v.array(v.string())),
      propertyType: v.optional(v.array(v.string())),
    })),
    limit: v.optional(v.number()),
  },
  handler: async (ctx: any, args: any) => {
    const limit = args.limit || 20
    const { query: searchQuery, filters } = args

    // Full-text search would be implemented here
    // For now, we'll filter by basic criteria
    let dbQuery = ctx.db.query("properties").filter((q: any) => q.eq("status", "active"))

    if (filters?.suburb && filters.suburb.length > 0) {
      // Would use a more sophisticated search in production
      dbQuery = dbQuery.filter((q: any) => q.eq("suburb", filters.suburb[0]))
    }

    const properties = await dbQuery.take(limit).collect()

    return properties
  },
})

// ==================== INSIGHTS ====================

/**
 * Get user insights
 */
export const getInsights = query({
  args: {
    userId: v.id("users"),
    limit: v.optional(v.number()),
  },
  handler: async (ctx: any, args: any) => {
    const limit = args.limit || 10

    const insights = await ctx.db
      .query("insights")
      .filter((q: any) => q.eq("userId", args.userId))
      .order("desc", "createdAt")
      .take(limit)
      .collect()

    return insights
  },
})

/**
 * Mark insight as read
 */
export const markInsightRead = mutation({
  args: {
    insightId: v.id("insights"),
  },
  handler: async (ctx: any, args: any) => {
    await ctx.db.patch(args.insightId, {
      read: true,
    })
    return { success: true }
  },
})

// ==================== LEADS ====================

/**
 * Submit enquiry/lead
 */
export const submitEnquiry = mutation({
  args: {
    propertyId: v.id("properties"),
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.optional(v.string()),
    userId: v.optional(v.id("users")),
  },
  handler: async (ctx: any, args: any) => {
    const property = await ctx.db.get(args.propertyId)
    if (!property) throw new Error("Property not found")

    // Assign to property's agent
    const leadId = await ctx.db.insert("leads", {
      ...args,
      type: "enquiry",
      status: "new",
      assignedAgentId: property.agentId,
      source: "web",
      createdAt: Date.now(),
    })

    // Create notification for agent
    const agent = await ctx.db.get(property.agentId)
    if (agent) {
      await ctx.db.insert("notifications", {
        userId: agent._id,
        type: "new_enquiry",
        title: "New enquiry received",
        message: `${args.name} is interested in ${property.title}`,
        link: `/properties/${property.slug}`,
        read: false,
        channels: ["email", "in_app"],
        createdAt: Date.now(),
      })
    }

    return leadId
  },
})

// ==================== ANALYTICS ====================

/**
 * Track analytics event
 */
export const trackEvent = mutation({
  args: {
    sessionId: v.string(),
    userId: v.optional(v.id("users")),
    event: v.string(),
    category: v.optional(v.string()),
    properties: v.optional(v.any()),
    page: v.string(),
    referrer: v.optional(v.string()),
  },
  handler: async (ctx: any, args: any) => {
    await ctx.db.insert("analytics", {
      ...args,
      createdAt: Date.now(),
    })
    return { success: true }
  },
})
