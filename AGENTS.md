# HAUS Platform - Agent Guide

This guide helps AI agents work effectively in the HAUS luxury real estate platform codebase.

## Project Overview

**HAUS Platform** is a modern full-stack real estate platform built with:
- **Frontend**: Next.js 16.1 (App Router), React 19, TypeScript 5
- **Backend**: Convex (BaaS) for database, functions, and real-time
- **Styling**: Tailwind CSS with custom design tokens
- **Package Manager**: Bun (recommended) - see `bun.lock`
- **Theme**: Dark theme by default

## Essential Commands

```bash
# Development
bun dev                    # Start Next.js dev server (http://localhost:3000)
npx convex dev             # Start Convex backend (http://localhost:6789)

# Build & Deploy
bun run build             # Production build
bun start                 # Start production server
npx convex deploy         # Deploy Convex to production

# Code Quality
bun run lint              # Run ESLint
npx tsc --noEmit         # Type check without emitting files

# Convex Management
npx convex dashboard       # Open Convex dashboard
npx convex logs           # View function logs
```

## Project Structure

```
haus-alternate/
├── app/                          # Next.js App Router pages
│   ├── [route]/                  # Route pages with layout.tsx + page.tsx
│   │   ├── layout.tsx           # Route-specific layout
│   │   └── page.tsx             # Route page content
│   ├── globals.css              # Global styles + Tailwind imports
│   ├── layout.tsx               # Root layout (fonts, providers)
│   └── page.tsx                 # Home page
│
├── components/
│   ├── providers/
│   │   └── ConvexProvider.tsx   # Convex context provider with demo mode
│   ├── ui/                      # shadcn/ui components (Button, Card, etc.)
│   ├── vite-components/         # Migrated from Vite project
│   ├── shell.tsx                # Universal page wrapper
│   ├── header.tsx               # Site header
│   └── footer.tsx               # Site footer
│
├── convex/                      # Convex backend
│   ├── schema.ts                # Complete database schema (10 tables)
│   ├── functions.ts             # Queries and mutations
│   ├── client.ts                # Convex client factory (supports demo mode)
│   ├── type_utils.ts            # TypeScript helpers
│   └── convex.config.json       # Convex CLI config
│
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx           # Mobile detection hook
│   └── use-toast.ts             # Toast notifications
│
├── lib/
│   ├── utils.ts                 # cn() utility for className merging
│   ├── convex.ts                # Convex utilities
│   └── metadata.ts             # SEO metadata generators
│
├── types/                       # TypeScript type definitions
│   ├── property.ts
│   ├── listings.ts
│   ├── advisory.ts
│   └── ... (9 type files)
│
├── data/                        # Mock data (for demo mode)
│   └── mockProperties.ts
│
├── .archive/                    # Archived Vite/HTML projects
│   ├── vite-haus-project/
│   └── html-originals/
│
└── Configuration Files
    ├── package.json             # Dependencies and scripts
    ├── tsconfig.json            # TypeScript config
    ├── tailwind.config.ts       # Tailwind configuration
    ├── next.config.js          # Next.js configuration
    └── postcss.config.js       # PostCSS configuration
```

## Code Conventions

### File Naming
- **Components**: PascalCase (e.g., `PropertyCard.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`, `layout.tsx`)
- **Utilities**: camelCase (e.g., `use-mobile.tsx`, `utils.ts`)
- **Types**: lowercase (e.g., `property.ts`, `listings.ts`)

### Page Structure Pattern

All pages should follow this pattern:

```tsx
"use client"  // Use "use client" for pages with interactivity

import { Suspense } from "react"
import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"

function PageContent() {
  return (
    // Your page content here
  )
}

export default function PageName() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader text="Loading..." />}>
          <PageContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
```

### Component Pattern

```tsx
"use client"

import { cn } from "@/lib/utils"

interface ComponentProps {
  // Define props
}

export function ComponentName({ prop1, prop2, className }: ComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      {/* Component content */}
    </div>
  )
}
```

### TypeScript Patterns

- Use `v.string()`, `v.number()`, `v.id()`, etc. for Convex schema validation
- Use `v.optional(v.type())` for optional fields
- Import types from `convex/_generated` for type safety
- All Convex functions use strict typing

### Styling Conventions

- **Colors**: zinc/neutral palette (zinc-950, zinc-900, etc.)
- **Dark Theme**: Default (use `dark:` variants sparingly, mostly dark mode)
- **Spacing**: Consistent use of Tailwind scale (4px base unit)
- **Border Radius**: Rounded-md, rounded-lg, rounded-xl, rounded-2xl
- **Typography**:
  - `font-display`: Space Grotesk (headings)
  - `font-body`: Inter (body text)
  - `font-mono`: Space Mono (technical text)

## Convex Integration

### Setup

1. Add `ConvexContextProvider` to root layout:
```tsx
import { ConvexContextProvider } from "@/components/providers/ConvexProvider"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConvexContextProvider showDemoBanner={false}>
          {children}
        </ConvexContextProvider>
      </body>
    </html>
  )
}
```

### Using Queries

```tsx
"use client"

import { useQuery } from "convex/react"
import { api } from "../../convex/_generated"

function Component() {
  const properties = useQuery(api.functions.listProperties, {
    status: "active",
    limit: 10
  })

  if (!properties) return <Loading />
  if (properties.length === 0) return <NoProperties />

  return properties.map(p => <PropertyCard key={p._id} property={p} />)
}
```

### Using Mutations

```tsx
"use client"

import { useMutation } from "convex/react"
import { api } from "../../convex/_generated"

function SaveButton({ propertyId }: { propertyId: string }) {
  const saveProperty = useMutation(api.properties.toggleSave)

  return (
    <button onClick={() => saveProperty({ propertyId })}>
      Save
    </button>
  )
}
```

### Demo Mode

The app supports demo mode when Convex is not configured. The `ConvexContextProvider`:
- Returns a mock client when `NEXT_PUBLIC_CONVEX_URL` is not set
- Shows an optional demo banner
- Allows the app to run without backend crashes

## Components Library

### shadcn/ui Components

Located in `components/ui/`:
- Button, Card, Input, Label, Select, Checkbox, Slider, Textarea
- Dialog, Sheet, ScrollArea, Badge, Tabs, Separator
- Accordion, Collapsible, Popover, Dropdown Menu
- Tooltip, Toast, Sonner (toaster)
- All follow the same pattern with `cn()` for className merging

### Empty State Components

Located in `components/ui/empty-states/index.tsx`:

```tsx
import {
  NoProperties,
  NoSavedProperties,
  NoSearchResults,
  NoDocuments,
  NoInsights,
  NoNotifications,
  NoLeads,
  NoTeamMembers,
  NoMarketData,
  ErrorState,
  ProcessingState,
  EmptyStatCard
} from "@/components/ui/empty-states"

// Usage examples
<NoProperties onCreateListing={() => navigate('/create')} />
<NoSearchResults query="waterfront" onClear={() => clearFilters()} />
<ErrorState title="Failed to load" onRetry={() => refetch()} />
```

### Custom Components

- **Shell**: Universal page wrapper with header/footer
- **Header**: Site navigation
- **Footer**: Site footer
- **PageLoader**: Loading spinner component
- **ErrorBoundary**: Error boundary wrapper

## Database Schema (Convex)

### Tables (10 total)

1. **properties**: Property listings with AI insights
2. **users**: User accounts (agents, buyers, sellers)
3. **agencies**: Real estate agencies
4. **marketData**: Suburb statistics and predictions
5. **savedSearches**: User search alerts
6. **documents**: Contract and document vault
7. **insights**: AI-generated market alerts
8. **activityLog**: User activity tracking
9. **notifications**: Email/push notifications
10. **leads**: Enquiry and lead management
11. **analytics**: Event tracking

### Key Schema Patterns

- All tables have `createdAt` and `updatedAt` timestamps
- Use `v.id("tableName")` for foreign key references
- Indexes are defined on frequently queried fields
- Optional fields use `v.optional()` wrapper

## Type Definitions

Type files are in `types/` directory:
- **property.ts**: Property-related types
- **listings.ts**: Listing-specific types
- **advisory.ts**: Advisory network types
- **agent-dashboard.ts**: Dashboard types
- **market.ts**: Market data types
- And more...

Import types from these files for consistency:
```tsx
import type { Property, MarketData, Agent } from "@/types/property"
```

## Hooks

### use-mobile.tsx
```tsx
import { useIsMobile } from "@/hooks/use-mobile"

function Component() {
  const isMobile = useIsMobile()

  return isMobile ? <MobileView /> : <DesktopView />
}
```

### use-toast.tsx
```tsx
import { useToast } from "@/hooks/use-toast"

function Component() {
  const { toast } = useToast()

  const handleClick = () => {
    toast({
      title: "Success",
      description: "Action completed successfully"
    })
  }
}
```

## Utility Functions

### cn() className merger

Always use `cn()` from `@/lib/utils` to merge classnames:

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-classes", isActive && "active-class", className)}>
```

This utility uses `clsx` and `tailwind-merge` to intelligently merge Tailwind classes.

## Important Gotchas

### Convex Demo Mode

- The app runs in demo mode when `NEXT_PUBLIC_CONVEX_URL` is not set
- `ConvexProvider` returns a mock client to prevent crashes
- Check `isConvexConfigured()` from `convex/client.ts` if needed
- Demo banner can be hidden with `showDemoBanner={false}` prop

### Type Safety

- **Always** use types from `convex/_generated` for Convex operations
- All Convex functions must be typed with `v.*` validators
- Don't use `any` types - use proper TypeScript types
- The `tsconfig.json` has strict mode enabled

### Client vs Server

- Use `"use client"` directive for components with:
  - Event handlers
  - useState/useEffect
  - useQuery/useMutation hooks
- Server components (default in Next.js) are preferred for performance
- Mark pages as client only when necessary

### Image Optimization

- Use Next.js `Image` component for all images
- Configure remote patterns in `next.config.js`
- Currently configured for:
  - `https://images.unsplash.com`
  - `https://**.supabase.co`

### Path Aliases

- `@/` maps to project root
- Import from `@/components`, `@/lib`, `@/hooks`, etc.
- Configured in `tsconfig.json`

### Mobile Responsiveness

- Mobile breakpoint: 768px (Tailwind `md:`)
- Use `useIsMobile()` hook for conditional rendering
- Many pages have mobile-specific variants

### Empty States

- Always provide fallbacks for empty data states
- Use empty state components from `components/ui/empty-states`
- Handle loading, error, and empty cases

## Testing

Currently no tests are configured. When adding tests:

1. Test utilities (if needed)
2. Test components with React Testing Library
3. Test Convex functions with Convex test utilities
4. Run tests before committing changes

## Deployment

### Frontend (Vercel)
```bash
vercel deploy
```

### Backend (Convex)
```bash
npx convex deploy
```

**Note**: Convex backend URL stays the same across environments!

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_CONVEX_URL`: Your Convex deployment URL

See `.env.convex.example` for template.

## Common Tasks

### Adding a New Page

1. Create directory in `app/` (e.g., `app/new-page/`)
2. Create `layout.tsx` and `page.tsx`
3. Follow the page structure pattern
4. Add navigation links if needed

### Adding a New Component

1. Create component file in `components/`
2. Use TypeScript with proper prop interfaces
3. Use `cn()` for className merging
4. Export component and types if needed

### Adding a New Convex Function

1. Add function to `convex/functions.ts`
2. Use `query` or `mutation` from `convex/_generated/server`
3. Define args with `v.*` validators
4. Write the handler with proper error handling
5. Update types if needed

### Modifying Schema

1. Edit `convex/schema.ts`
2. Run `npx convex dev` to regenerate types
3. Update any affected functions
4. Consider data migration strategy

## Additional Resources

- **README.md**: Project overview and features
- **CONVEX_SETUP.md**: Detailed Convex backend setup
- **CONVERSION_SUMMARY.md**: HTML to React conversion details
- **IMPLEMENTATION_SUMMARY.md**: Implementation notes
- **Convex Docs**: https://docs.convex.dev
- **Next.js Docs**: https://nextjs.org/docs

## Key Dependencies

### Frontend
- `next`: ^16.0.0 (App Router)
- `react`: ^19.0.0
- `@radix-ui/*`: UI primitives
- `lucide-react`: Icons
- `framer-motion`: Animations
- `gsap`: Advanced animations

### Backend
- `convex`: ^1.31.5 (BaaS)
- `zod`: ^4.3.5 (Validation)

### Styling
- `tailwindcss`: ^3.4.1
- `class-variance-authority`: Component variants
- `clsx`: Conditional classes
- `tailwind-merge`: Smart className merging

## Code Style Tips

1. **Always** use `cn()` for merging classnames
2. **Always** follow the page structure pattern with ErrorBoundary and Suspense
3. **Always** provide empty states for data lists
4. **Always** use TypeScript types - no `any`
5. **Always** use `"use client"` directive for client components
6. Prefer server components for performance
7. Keep components small and focused
8. Use descriptive component and prop names
9. Add comments only when explaining complex logic
10. Maintain consistency with existing code patterns
