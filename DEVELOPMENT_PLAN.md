# HAUS Platform - Convex Integration Development Plan

## Executive Summary

This document outlines the comprehensive plan for integrating the HAUS luxury real estate frontend with the Convex backend. The platform includes 11+ pages covering property listings, agent profiles, user dashboards, market intelligence, and AI-powered insights.

## Current Status

### Completed
- ✅ Convex backend schema with 11 tables
- ✅ Basic Convex functions (queries & mutations)
- ✅ Convex client configuration
- ✅ Next.js 16 + React 19 frontend
- ✅ UI component library (shadcn/ui)

### In Progress
- 🔄 Convex context provider setup

## Architecture Overview

### Backend (Convex)
- **11 Tables**: properties, users, agencies, marketData, savedSearches, documents, insights, activityLog, notifications, leads, analytics
- **Indexes**: Optimized for common queries (status, suburb, agent, price, prestige)
- **Real-time**: Built-in WebSocket subscriptions

### Frontend (Next.js)
- **App Router**: 11+ page routes
- **Components**: Reusable UI library with shadcn/ui
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: React hooks + Convex subscriptions

## Implementation Plan

### Phase 1: Core Infrastructure (Days 1-2)
**Priority**: HIGH

1. **Convex Provider Setup**
   - Configure ConvexClientProvider wrapper
   - Set up authentication context
   - Configure environment variables

2. **Type Definitions**
   - Create TypeScript types from Convex schema
   - Build utility functions for type safety
   - Set up Zod validation schemas

3. **Core Hooks**
   - `useConvexQuery` wrapper
   - `useConvexMutation` wrapper
   - `useConvexSubscription` for real-time updates

### Phase 2: Property Components (Days 3-5)
**Priority**: HIGH

1. **Property Card Component**
   - Image gallery with lightbox
   - Key details (bed, bath, parking, price)
   - Agent info & contact
   - Save/favorite functionality
   - AI insights badge

2. **Property Details Page**
   - Full image gallery
   - Property specifications
   - Floor plan viewer
   - Virtual tour embed
   - Inspection times
   - Enquiry form
   - Similar properties
   - Market data widget

3. **Property Listings Grid**
   - Grid/list view toggle
   - Sort options (price, date, relevance)
   - Filter sidebar
   - Infinite scroll pagination
   - Loading skeletons

4. **Search & Filter**
   - Search input with autocomplete
   - Advanced filters (price range, bedrooms, etc.)
   - Location-based search
   - Saved search functionality
   - URL state management

### Phase 3: Agent Features (Days 6-7)
**Priority**: MEDIUM

1. **Agent Profile Card**
   - Profile photo & license
   - Rating & reviews
   - Active listings count
   - Contact info
   - Specializations

2. **Agent Profile Page**
   - Full bio & credentials
   - Active listings grid
   - Sold properties history
   - Reviews & testimonials
   - Contact form

3. **Agency Page**
   - Agency branding
   - Team members
   - Collective listings
   - Performance stats

### Phase 4: User Features (Days 8-9)
**Priority**: MEDIUM

1. **Authentication**
   - Sign up/in forms
   - Email verification
   - Password reset
   - OAuth integration (optional)

2. **User Dashboard**
   - Saved properties
   - Saved searches
   - Enquiry history
   - Notifications center
   - Profile settings

3. **Saved Properties**
   - Add/remove functionality
   - Collections/folders
   - Notes & comparisons
   - Price alerts

4. **Saved Searches**
   - Create saved search
   - Edit/delete searches
   - Notification preferences
   - Match count display

### Phase 5: Market Intelligence (Days 10-11)
**Priority**: MEDIUM

1. **Market Data Widget**
   - Suburb statistics
   - Median price trends
   - Growth charts
   - Clearance rates

2. **Suburb Insights Page**
   - Demographics
   - Amenities map
   - School zones
   - Transport links
   - Market predictions

3. **AI Insights Feed**
   - Personalized insights
   - Market alerts
   - Price predictions
   - Investment opportunities

### Phase 6: Lead Management (Day 12)
**Priority**: MEDIUM

1. **Enquiry Forms**
   - Property enquiry
   - Inspection booking
   - Valuation request
   - General contact

2. **Lead Capture**
   - Form validation
   - Spam protection
   - Agent assignment
   - Auto-responses

3. **Agent Dashboard**
   - Lead inbox
   - Response tracking
   - Conversion metrics
   - Follow-up reminders

### Phase 7: Real-time Features (Day 13)
**Priority**: LOW

1. **Live Updates**
   - New listing notifications
   - Price change alerts
   - Status updates (sold, pending)
   - Bid updates (auctions)

2. **Real-time Analytics**
   - Property views
   - Search analytics
   - User behavior tracking
   - Conversion metrics

### Phase 8: Testing & Optimization (Day 14)
**Priority**: HIGH

1. **Integration Testing**
   - Test all Convex queries
   - Test all mutations
   - Test subscriptions
   - Error handling

2. **Performance**
   - Image optimization
   - Lazy loading
   - Code splitting
   - Caching strategy

3. **SEO**
   - Meta tags
   - Structured data
   - Sitemap generation
   - Canonical URLs

## Component Specifications

### PropertyCard Component

```typescript
interface PropertyCardProps {
  property: Property;
  onSave?: (id: string) => void;
  onEnquire?: (id: string) => void;
  showAgent?: boolean;
  variant?: 'grid' | 'list' | 'compact';
}
```

**Features:**
- Responsive image gallery
- Quick stats overlay
- Agent mini-profile
- Action buttons (save, share, enquire)
- AI insights indicator
- Prestige badge for luxury listings

### PropertyDetails Page

```typescript
interface PropertyDetailsProps {
  slug: string;
}
```

**Sections:**
1. Hero image gallery
2. Key specifications
3. Description & features
4. Location & neighbourhood
5. Floor plans
6. Virtual tour
7. Inspection times
8. Agent details
9. Enquiry form
10. Similar properties
11. Market data widget

### SearchFilters Component

```typescript
interface SearchFiltersProps {
  onFilterChange: (filters: SearchFilters) => void;
  initialValues?: SearchFilters;
}
```

**Filters:**
- Location (suburb, postcode)
- Price range
- Property type
- Bedrooms/bathrooms
- Parking spaces
- Land size
- Status (active, sold)
- Keywords

## Data Flow

### Property Listing Flow

```
User Search → Convex Query (searchProperties)
→ Filter Results → Display Cards
→ User Clicks → Convex Query (getPropertyBySlug)
→ Display Details → User Saves → Convex Mutation (toggleSaveProperty)
```

### Real-time Updates

```
Convex Subscription → WebSocket Connection
→ Server Push → Client Update
→ Re-render Component → User Sees Update
```

## API Integration Points

### Queries (Read)
- `listProperties` - Paginated property list
- `getPropertyBySlug` - Single property details
- `searchProperties` - Filtered search
- `getMarketData` - Suburb statistics
- `getInsights` - User AI insights
- `getUserByEmail` - User lookup

### Mutations (Write)
- `createProperty` - Add new listing
- `toggleSaveProperty` - Save/unsave
- `submitEnquiry` - Lead capture
- `upsertUser` - User sync
- `markInsightRead` - Dismiss insight

## Performance Considerations

### Optimization Strategies
1. **Image Optimization**: Next.js Image + CDN
2. **Code Splitting**: Route-based chunks
3. **Data Caching**: Convex built-in cache
4. **Lazy Loading**: Component-level
5. **Debouncing**: Search input
6. **Pagination**: Cursor-based
7. **Index Usage**: Leverage Convex indexes

### Bundle Size Targets
- Initial load: <200KB
- Per route: <100KB
- Total app: <500KB

## Security & Validation

### Input Validation
- Zod schemas for all inputs
- Server-side validation in Convex
- XSS protection
- SQL injection prevention (Convex handles)

### Authentication
- User identity verification
- Role-based access control
- API rate limiting
- CSRF protection

## Testing Strategy

### Unit Tests
- Component rendering
- Hook behavior
- Utility functions
- Validation schemas

### Integration Tests
- Convex queries
- Mutation flows
- Subscriptions
- Error handling

### E2E Tests
- User journeys
- Form submissions
- Search flows
- Dashboard navigation

## Success Metrics

### Performance
- Lighthouse score: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Cumulative Layout Shift: <0.1

### User Experience
- Search response: <500ms
- Page transitions: <200ms
- Form submissions: <1s
- Real-time updates: <100ms

### Business
- Lead conversion: >5%
- Search-to-view: >20%
- Save rate: >10%
- Return visits: >30%

## Next Steps

1. Set up Convex provider in `app/layout.tsx`
2. Create core hooks in `hooks/`
3. Build PropertyCard component
4. Implement property details page
5. Add search functionality
6. Test all integrations

## Resources

- Convex Docs: https://docs.convex.dev
- Next.js Docs: https://nextjs.org/docs
- React 19: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- shadcn/ui: https://ui.shadcn.com

---

**Last Updated**: 2025-01-20
**Status**: In Progress
**Owner**: HAUS Development Team
