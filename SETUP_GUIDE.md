# HAUS Platform - Convex Integration Setup Guide

This guide walks you through setting up Convex backend integration for the HAUS luxury real estate platform.

## Prerequisites

- Node.js 18+ installed
- Convex account (free tier available at https://convex.dev)
- Git repository initialized

## Quick Setup (5 Minutes)

### 1. Install Dependencies

```bash
npm install convex
```

### 2. Create Convex Project

```bash
npx convex dev
```

This will:
- Create a new Convex project
- Generate `convex/` directory with configuration
- Provide you with a deployment URL

### 3. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
NEXT_PUBLIC_CONVEX_URL=your-convex-deployment-url
```

Copy the URL from the `npx convex dev` output.

### 4. Verify Installation

```bash
npm run dev
```

Visit http://localhost:3000 and check the browser console for any Convex errors.

## Project Structure

After setup, your project will have:

```
haus-alternate/
├── convex/
│   ├── schema.ts           # Database schema (11 tables)
│   ├── functions.ts        # Queries & mutations
│   ├── client.ts           # Client configuration
│   └── _generated/         # Auto-generated types
├── app/
│   ├── properties/
│   │   ├── page.tsx        # Property listings
│   │   └── [slug]/
│   │       └── page.tsx    # Property details
│   └── layout.tsx          # Root layout with Convex provider
├── components/
│   ├── properties/
│   │   ├── PropertyCard.tsx
│   │   └── EnquiryForm.tsx
│   └── providers/
│       └── ConvexProvider.tsx
├── hooks/
│   └── useConvex.ts        # Custom Convex hooks
└── lib/
    └── convex.ts           # Type utilities
```

## Schema Overview

The Convex schema includes 11 tables:

### Core Tables
- **properties** - Real estate listings with AI insights
- **users** - Buyers, sellers, agents
- **agencies** - Real estate agencies

### Market Data
- **marketData** - Suburb statistics and trends

### User Features
- **savedSearches** - Custom search alerts
- **documents** - Document vault

### AI & Analytics
- **insights** - AI-generated market alerts
- **analytics** - User behavior tracking

### Engagement
- **notifications** - User notifications
- **leads** - Enquiry management
- **activityLog** - User activity history

## Available Functions

### Queries (Read Operations)

#### Properties
```typescript
// List properties with filters
const { properties, hasMore } = useProperties({
  status: "active",
  suburb: "Bondi",
  isPrestige: true,
  limit: 20
})

// Get single property by slug
const property = useProperty("123-bondi-beach")

// Search properties
const { results } = usePropertySearch("luxury beachfront", {
  priceMin: 5000000,
  bedrooms: 4
})
```

#### Market Data
```typescript
// Get market data for suburb
const marketData = useMarketData("Bondi")

// Get top performing suburbs
const topSuburbs = useTopSuburbs("NSW", 10)
```

#### Users
```typescript
// Get user by email
const user = useUserByEmail("user@example.com")

// Get user insights
const insights = useInsights(userId)
```

### Mutations (Write Operations)

#### Properties
```typescript
// Save/unsave property
const { toggleSave, isSaving } = useSaveProperty()
await toggleSave(propertyId, userId, true)
```

#### Users
```typescript
// Create or update user
const { upsertUser, isUpserting } = useUpsertUser()
const result = await upsertUser({
  name: "John Doe",
  email: "john@example.com",
  role: "buyer"
})
```

#### Leads
```typescript
// Submit property enquiry
const { submitEnquiry, isSubmitting } = useSubmitEnquiry()
const result = await submitEnquiry({
  propertyId,
  name: "John Doe",
  email: "john@example.com",
  phone: "0412 345 678",
  message: "I'm interested in this property"
})
```

## Component Usage

### PropertyCard

```tsx
import { PropertyCard } from "@/components/properties/PropertyCard"

<PropertyCard
  property={property}
  variant="grid"
  onSave={(id) => console.log("Saved:", id)}
  onShare={(property) => console.log("Shared:", property)}
  onEnquire={(id) => console.log("Enquire:", id)}
  isSaved={false}
  showAgent={true}
/>
```

**Variants:**
- `grid` - Default card layout
- `list` - Horizontal layout
- `compact` - Small sidebar version

### EnquiryForm

```tsx
import { EnquiryForm } from "@/components/properties/EnquiryForm"

<EnquiryForm
  propertyId={property._id}
  propertyTitle={property.title}
  userId={userId}
  onSuccess={() => console.log("Enquiry sent!")}
/>
```

## Custom Hooks

### useProperties
Fetch properties with filters and pagination.

### useProperty
Get single property by slug.

### useSaveProperty
Toggle saved properties.

### useSubmitEnquiry
Submit property enquiries.

### useTrackEvent
Track analytics events.

## Real-time Updates

Convex provides real-time subscriptions automatically:

```typescript
// This component will re-render when data changes
function PropertyList() {
  const { properties } = useProperties({ status: "active" })
  // Automatically updates when properties change
  return <div>{properties.map(p => <PropertyCard key={p._id} property={p} />)}</div>
}
```

## Development Workflow

### Local Development

```bash
# Terminal 1: Start Convex dev server
npx convex dev

# Terminal 2: Start Next.js
npm run dev
```

### Adding New Functions

1. Add function to `convex/functions.ts`:

```typescript
export const myNewQuery = query({
  args: { param: v.string() },
  handler: async (ctx, args) => {
    const result = await ctx.db.query("properties").collect()
    return result
  }
})
```

2. Use in components:

```typescript
const data = useQuery(api.functions.myNewQuery, { param: "value" })
```

### Schema Changes

1. Update `convex/schema.ts`
2. Run `npx convex dev` to regenerate types
3. Update components to use new fields

## Deployment

### Deploy Convex Backend

```bash
npx convex deploy
```

### Deploy Next.js Frontend

```bash
# Vercel (recommended)
vercel

# Or build for other platforms
npm run build
npm start
```

Set `NEXT_PUBLIC_CONVEX_URL` environment variable in your hosting platform.

## Environment Variables

```bash
# Required
NEXT_PUBLIC_CONVEX_URL=your-convex-url

# Optional (for development)
NODE_ENV=development
```

## Troubleshooting

### "NEXT_PUBLIC_CONVEX_URL is not configured"
- Ensure `.env.local` file exists
- Check variable name matches exactly
- Restart dev server after adding env var

### Types not found
- Run `npx convex dev` to regenerate types
- Check `convex/_generated/` directory exists
- Ensure TypeScript is running

### Queries returning null
- Check Convex functions are deployed
- Verify function names match
- Check browser console for errors

### Real-time updates not working
- Ensure Convex dev server is running
- Check WebSocket connection in browser
- Verify component using `useQuery` hook

## Next Steps

1. **Seed Initial Data**: Add sample properties to test
2. **Implement Auth**: Add authentication (Clerk, Auth0, etc.)
3. **Build Agent Pages**: Create agent profile pages
4. **Add Search**: Implement advanced search functionality
5. **User Dashboard**: Build saved properties and searches
6. **Analytics**: Track user behavior and conversions

## Additional Resources

- [Convex Documentation](https://docs.convex.dev)
- [Convex React Guide](https://docs.convex.dev/react)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Hook Form](https://react-hook-form.com)
- [Zod Validation](https://zod.dev)

## Support

For issues or questions:
- Check existing Convex docs
- Review `DEVELOPMENT_PLAN.md` for architecture
- Inspect browser console for errors
- Verify Convex dashboard for deployment status

---

**Last Updated**: 2025-01-20
**Status**: Ready for Development
