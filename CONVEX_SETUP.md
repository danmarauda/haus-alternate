# Convex Backend Setup Guide

## Overview

Your HAUS platform now has a complete Convex backend with:

- **10 Database Tables**: properties, users, agencies, marketData, savedSearches, documents, insights, activityLog, notifications, leads, analytics
- **Empty State Components**: Reusable UI components for no-data scenarios
- **Type-Safe Functions**: Example queries and mutations
- **React Provider**: Ready to integrate into your app

## File Structure

```
convex/
├── schema.ts           # Complete database schema
├── functions.ts        # Example queries & mutations
├── client.ts           # Convex client factory
├── type_utils.ts       # TypeScript helpers
└── convex.config.json  # Convex CLI configuration

components/
├── providers/
│   └── ConvexProvider.tsx  # React context provider
└── ui/
    └── empty-states/
        └── index.tsx       # Empty state components

.env.convex.example       # Environment variables template
```

## Quick Start

### 1. Create a Convex Account

Go to https://dashboard.convex.dev and sign up for free.

### 2. Initialize Your Convex Project

```bash
# Create a new Convex project
npx convex dev

# Follow the prompts to:
# - Create or select a project
# - Get your deployment URL
```

This will:
- Generate `convex/_generated/` folder with types
- Create your Convex deployment
- Start the dev dashboard at http://localhost:6789

### 3. Configure Environment Variables

```bash
# Copy the example file
cp .env.convex.example .env.local

# Add your Convex URL from step 2
echo "NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud" >> .env.local
```

### 4. Integrate Provider in Your App

Add to your root layout (`app/layout.tsx`):

```tsx
import { ConvexContextProvider } from "@/components/providers/ConvexProvider"

export default function RootLayout({ children }) {
  return (
    <ConvexContextProvider>
      {children}
    </ConvexContextProvider>
  )
}
```

### 5. Start Using Convex in Your Components

```tsx
import { useQuery, useMutation } from "convex/react"
import { api } from "../../convex/_generated"

function PropertyList() {
  // Query properties
  const properties = useQuery(api.properties.list, {
    status: "active",
    limit: 10
  })

  // Mutation to save property
  const saveProperty = useMutation(api.properties.toggleSave)

  return (
    <div>
      {properties?.map(property => (
        <div key={property._id}>
          <h3>{property.title}</h3>
          <button onClick={() => saveProperty({ propertyId: property._id })}>
            Save
          </button>
        </div>
      ))}
    </div>
  )
}
```

## Database Schema

### Properties Table
- Basic info: title, type, status, address, suburb, pricing
- Details: bedrooms, bathrooms, land size, building size
- Images: main image, gallery, floorplan, virtual tour
- Agent: assigned agent, contact info
- AI insights: value range, target price, yield predictions
- Luxury features: prestige flags, verification status

### Users Table
- Authentication: email, phone, avatar
- Roles: admin, agent, buyer, seller
- Agent specific: license, agency, specializations, ratings
- Preferences: saved searches, saved properties, notifications
- Fair play: verification level, subscription tier

### Other Tables
- **Agencies**: Real estate agency profiles
- **MarketData**: Suburb statistics and predictions
- **SavedSearches**: User search criteria
- **Documents**: Contract and document vault
- **Insights**: AI-generated market alerts
- **ActivityLog**: User activity tracking
- **Notifications**: Email/push notifications
- **Leads**: Enquiry and lead management
- **Analytics**: Event tracking

## Example Functions Available

### Queries
- `listProperties` - List with filters (status, suburb, price range)
- `getPropertyBySlug` - Get single property with details
- `getMarketData` - Get suburb market statistics
- `getSavedSearches` - Get user's saved searches
- `getDocuments` - Get user documents

### Mutations
- `createProperty` - Add new property listing
- `toggleSaveProperty` - Save/unsave property
- `submitEnquiry` - Submit property enquiry
- `createSavedSearch` - Create search alert
- `trackEvent` - Analytics event tracking

## Empty State Components

```tsx
import {
  NoProperties,
  NoSavedProperties,
  NoSearchResults,
  NoDocuments,
  NoInsights,
  ErrorState
} from "@/components/ui/empty-states"

// Usage examples
<NoProperties onCreateListing={() => navigate('/create')} />
<NoSavedProperties onBrowse={() => navigate('/properties')} />
<NoSearchResults query="luxury waterfront" onClear={() => clearFilters()} />
<NoDocuments onUpload={() => openUploadModal()} />
<ErrorState title="Failed to load" description="Please try again" onRetry={() => refetch()} />
```

## Next Steps

1. **Run `npx convex dev`** to initialize your backend
2. **Configure `.env.local`** with your Convex URL
3. **Add `ConvexContextProvider`** to your root layout
4. **Update pages** to use Convex queries instead of static data
5. **Add authentication** using Convex Auth or Clerk
6. **Deploy** - Convex handles backend hosting automatically

## Deployment

Convex manages your backend deployment automatically:

```bash
# Deploy functions to production
npx convex deploy

# View dashboard
npx convex dashboard
```

Your backend URL remains the same across environments!

## Need Help?

- Convex Docs: https://docs.convex.dev
- Convex Discord: https://discord.gg/9Yaem4EwyG
- Example functions: See `convex/functions.ts`
