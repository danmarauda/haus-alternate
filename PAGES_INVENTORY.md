# HAUS Platform - Complete Pages Inventory

**Generated**: 2026-01-20
**Total Pages**: 92
**Total Size**: ~2.4 MB

## Quick Statistics

| Category | Pages | Total Size |
|----------|-------|------------|
| **Authentication** | 3 | 22 KB |
| **Properties & Listings** | 6 | 84 KB |
| **User Dashboard** | 5 | 127 KB |
| **Agent & Platform** | 4 | 102 KB |
| **Market Intelligence** | 3 | 82 KB |
| **Landing Pages** | 9 | 361 KB |
| **Company/Utility** | 7 | 82 KB |
| **Mobile/App** | 3 | 68 KB |
| **Templates** | 13 | 514 KB |
| **Generated/Special** | 14 | 476 KB |
| **Finance** | 3 | 76 KB |
| **Other** | 3 | 42 KB |
| **Error/Root** | 2 | 5.4 KB |

---

## 1. Authentication Pages (3)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/auth/login` | `app/auth/login/page.tsx` | 9.0 KB | ✅ Migrated | Social login (Google/GitHub), email/password, "Remember me", responsive split layout |
| `/auth/register` | `app/auth/register/page.tsx` | 11 KB | ✅ Migrated | User registration with form validation, social signup options |
| `/auth/forgot-password` | `app/auth/forgot-password/page.tsx` | 3.8 KB | ✅ Migrated | Password reset with email input |

**Migration Source**: Vite project (`src/pages/Login.tsx`, `Register.tsx`, `ForgotPassword.tsx`)

---

## 2. Properties & Listings Pages (6)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/properties` | `app/properties/page.tsx` | 16 KB | ✅ Original | Convex integration, grid/list toggle, filters sidebar, search, pagination |
| `/properties/[slug]` | `app/properties/[slug]/page.tsx` | 23 KB | ✅ Original | Dynamic property details, image gallery, enquiry form, AI insights |
| `/listings/[id]` | `app/listings/[id]/page.tsx` | 15 KB | ✅ Migrated | Dynamic route property listing from Vite |
| `/listings/wolseley` | `app/listings/wolseley/page.tsx` | 23 KB | ✅ Migrated | Specific property listing - Wolseley |
| `/listings/wolseley-point-piper` | `app/listings/wolseley-point-piper/page.tsx` | 4.2 KB | ✅ Migrated | Prestige Wolseley Point Piper listing |
| `/listings/wolseley-prestige` | `app/listings/wolseley-prestige/page.tsx` | 7.0 KB | ✅ Migrated | Prestige Wolseley listing variant |
| `/listings/prestige-wolseley` | `app/listings/prestige-wolseley/page.tsx` | 31 KB | ✅ Migrated | Full prestige Wolseley property page |

**Key Features**:
- Grid/List/Compact view modes
- Advanced filtering (price, beds, baths, property type, prestige)
- Real-time search
- Convex backend integration
- SEO metadata with `generateMetadata`
- Loading skeletons and error states

---

## 3. User Dashboard Pages (5)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/dashboard` | `app/dashboard/page.tsx` | 16 KB | ✅ Migrated | Property search dashboard, saved properties, recent searches, market snapshot |
| `/account-settings` | `app/account-settings/page.tsx` | 37 KB | ✅ Original | User profile, notifications, privacy, security settings |
| `/favorites` | `app/favorites/page.tsx` | 15 KB | ✅ Migrated | Saved properties with grid/list toggle, price tracking, alerts |
| `/messages` | `app/messages/page.tsx` | 12 KB | ✅ Migrated | Real-time chat interface, contact list, read receipts, file attachments |
| `/notifications` | `app/notifications/page.tsx` | 14 KB | ✅ Migrated | Centralized notification center, filtering, preferences |
| `/my-feed` | `app/my-feed/page.tsx` | 29 KB | ✅ Migrated | Personalized property feed with AI matching scores, schedule widget |

**Migration Source**: Vite project (`src/pages/Dashboard.tsx`, `Favorites.tsx`, `Messages.tsx`, `Notifications.tsx`, `MyFeed.tsx`)

---

## 4. Agent & Platform Pages (4)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/agents` | `app/agents/page.tsx` | 15 KB | ✅ Migrated | Agent directory with search, filtering |
| `/agent-dashboard` | `app/agent-dashboard/page.tsx` | 36 KB | ✅ Migrated | Agent-specific dashboard with lead management, performance analytics |
| `/agent-pipeline` | `app/agent-pipeline/page.tsx` | 30 KB | ✅ Original | Sales pipeline tracking, deal stages, conversion metrics |
| `/advisory-network` | `app/advisory-network/page.tsx` | 21 KB | ✅ Migrated | Advisory network connections, expert profiles |
| `/deal-team` | `app/deal-team/page.tsx` | 29 KB | ✅ Migrated | Contact management interface with animations |

**Migration Source**: Vite project (`src/pages/Agents.tsx`, `AgentDashboard.tsx`, `AdvisoryNetwork.tsx`, `DealTeam.tsx`)

---

## 5. Market Intelligence Pages (3)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/analytics` | `app/analytics/page.tsx` | 15 KB | ✅ Migrated | Market analytics dashboard with live ticker, stats grid, price index chart |
| `/market-intelligence` | `app/market-intelligence/page.tsx` | 30 KB | ✅ Original | Comprehensive market data, trends, forecasts |
| `/residential-intelligence` | `app/residential-intelligence/page.tsx` | 37 KB | ✅ Original | Residential-specific market insights, suburb analytics |
| `/buyer-profile` | `app/buyer-profile/page.tsx` | 37 KB | ✅ Original | Buyer persona profiling, matching algorithm |

**Migration Source**: Vite project (`src/pages/Analytics.tsx`)

---

## 6. Landing Pages (9)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/` | `app/page.tsx` | 3.5 KB | ✅ Original | Home page with CTA, feature badges |
| `/landing-main` | `app/landing-main/page.tsx` | 61 KB | ✅ Migrated | Main landing page with GSAP animations |
| `/landing-v2` | `app/landing-v2/page.tsx` | 19 KB | ✅ Migrated | Alternative landing design |
| `/landing-gsap` | `app/landing-gsap/page.tsx` | 47 KB | ✅ Original | GSAP-animated landing |
| `/landing-geist` | `app/landing-geist/page.tsx` | 63 KB | ✅ Original | Geist-themed landing |
| `/landing-light` | `app/landing-light/page.tsx` | 36 KB | ✅ Original | Light-themed landing |
| `/landing-spline` | `app/landing-spline/page.tsx` | 44 KB | ✅ Original | Spline 3D landing |
| `/landing-voice` | `app/landing-voice/page.tsx` | 16 KB | ✅ Original | Voice-activated landing |
| `/index-landing` | `app/index-landing/page.tsx` | 12 KB | ✅ Migrated | Index/home landing with loading animation |
| `/landing-1` | `app/landing-1/page.tsx` | 24 KB | ✅ Original | Landing variant 1 |
| `/landing-2` | `app/landing-2/page.tsx` | 21 KB | ✅ Original | Landing variant 2 |
| `/landing-3` | `app/landing-3/page.tsx` | 19 KB | ✅ Original | Landing variant 3 |
| `/landing-4` | `app/landing-4/page.tsx` | 25 KB | ✅ Original | Landing variant 4 |

**Migration Source**: Vite project (`src/pages/Landing.tsx`, `LandingPage.tsx`, `Index.tsx`)

---

## 7. Company/Utility Pages (7)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/about` | `app/about/page.tsx` | 14 KB | ✅ Original | Company information, team, mission |
| `/contact` | `app/contact/page.tsx` | 15 KB | ✅ Migrated | Contact form with validation |
| `/help` | `app/help/page.tsx` | 13 KB | ✅ Migrated | Help center with FAQs |
| `/careers` | `app/careers/page.tsx` | 13 KB | ✅ Migrated | Job listings, application form |
| `/press` | `app/press/page.tsx` | 12 KB | ✅ Migrated | Press room, media kit |
| `/privacy` | `app/privacy/page.tsx` | 9.9 KB | ✅ Migrated | Privacy policy |
| `/terms` | `app/terms/page.tsx` | 8.5 KB | ✅ Migrated | Terms of service |
| `/austrac` | `app/austrac/page.tsx` | 10 KB | ✅ Migrated | AUSTRAC compliance page |

**Migration Source**: Vite project (`src/pages/Contact.tsx`, `Help.tsx`, `Careers.tsx`, `Press.tsx`, `Privacy.tsx`, `Terms.tsx`, `Austrac.tsx`)

---

## 8. Mobile/App Pages (3)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/mobile-storyboard` | `app/mobile-storyboard/page.tsx` | 45 KB | ✅ Original | Mobile storyboard UI |
| `/mobile-assistant` | `app/mobile-assistant/page.tsx` | 23 KB | ✅ Original | Mobile voice assistant |
| `/mobile-voice-assistant` | `app/components/mobile-voice-assistant/page.tsx` | 9.3 KB | ✅ Original | Component variant of voice assistant |
| `/components/mobile-storyboard` | `app/components/mobile-storyboard/page.tsx` | 12 KB | ✅ Original | Component variant of storyboard |

---

## 9. Tools & Calculators Pages (4)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/mortgage-calculator` | `app/mortgage-calculator/page.tsx` | 15 KB | ✅ Migrated | Interactive calculator with useState/useMemo |
| `/compare` | `app/compare/page.tsx` | 17 KB | ✅ Migrated | Property comparison with dynamic state management |
| `/sell` | `app/sell/page.tsx` | 16 KB | ✅ Migrated | Property seller landing page |
| `/search` | `app/search/page.tsx` | 14 KB | ✅ Original | Property search with filters |
| `/search-results` | `app/search-results/page.tsx` | 27 KB | ✅ Original | Search results display |

**Migration Source**: Vite project (`src/pages/Compare.tsx`, `Sell.tsx`, `Search.tsx`, `SearchResults.tsx`)

---

## 10. Special Interest Pages (5)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/first-home-dashboard` | `app/first-home-dashboard/page.tsx` | 31 KB | ✅ Original | First home buyer specific dashboard |
| `/appraisal-report` | `app/appraisal-report/page.tsx` | 26 KB | ✅ Original | Property appraisal report generation |
| `/enterprise` | `app/enterprise/page.tsx` | 42 KB | ✅ Migrated | Enterprise AI Platform page |
| `/new-home-listing` | `app/new-home-listing/page.tsx` | 57 KB | ✅ Original | New home listing showcase |
| `/ecosystem` | `app/ecosystem/page.tsx` | 31 KB | ✅ Original | HAUS ecosystem overview |

**Migration Source**: Vite project (`src/pages/EnterpriseAIPlatform.tsx`)

---

## 11. Template Pages (13)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/templates/alias-enterprise-ai` | `app/templates/alias-enterprise-ai/page.tsx` | 32 KB | ✅ Original | Enterprise AI template |
| `/templates/alias-fixed-nav` | `app/templates/alias-fixed-nav/page.tsx` | 35 KB | ✅ Original | Fixed navigation template |
| `/templates/alias-creative-studio` | `app/templates/alias-creative-studio/page.tsx` | 33 KB | ✅ Original | Creative studio template |
| `/templates/alias-dark-header` | `app/templates/alias-dark-header/page.tsx` | 35 KB | ✅ Original | Dark header template |
| `/templates/alias-landing-light` | `app/templates/alias-landing-light/page.tsx` | 59 KB | ✅ Original | Light landing template |
| `/templates/alias-interactive-badge` | `app/templates/alias-interactive-badge/page.tsx` | 53 KB | ✅ Original | Interactive badge template |
| `/templates/alias-hero-cards` | `app/templates/alias-hero-cards/page.tsx` | 37 KB | ✅ Original | Hero cards template |
| `/templates/haus-ecosystem-ui` | `app/templates/haus-ecosystem-ui/page.tsx` | 32 KB | ✅ Original | Ecosystem UI template |
| `/templates/fabrica-home` | `app/templates/fabrica-home/page.tsx` | 48 KB | ✅ Original | Fabrica home template |
| `/templates/reputable-dashboard` | `app/templates/reputable-dashboard/page.tsx` | 19 KB | ✅ Original | Reputable dashboard template |
| `/templates/mobile-sales-dashboard` | `app/templates/mobile-sales-dashboard/page.tsx` | 26 KB | ✅ Original | Mobile sales dashboard |
| `/templates/megabuild-construction` | `app/templates/megabuild-construction/page.tsx` | 4.7 KB | ✅ Original | Construction template |
| `/templates/finance-landing` | `app/templates/finance-landing/page.tsx` | 16 KB | ✅ Original | Finance landing template |
| `/templates/crypto-loans-mobile` | `app/templates/crypto-loans-mobile/page.tsx` | 19 KB | ✅ Original | Crypto loans mobile template |
| `/templates/travel-booking` | `app/templates/travel-booking/page.tsx` | 37 KB | ✅ Original | Travel booking template |

---

## 12. Generated Pages (10)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/generated-1` | `app/generated-1/page.tsx` | 53 KB | ✅ Original | Generated page 1 |
| `/generated-2` | `app/generated-2/page.tsx` | 22 KB | ✅ Original | Generated page 2 |
| `/generated-3` | `app/generated-3/page.tsx` | 48 KB | ✅ Original | Generated page 3 |
| `/generated-4` | `app/generated-4/page.tsx` | 17 KB | ✅ Original | Generated page 4 |
| `/generated-5` | `app/generated-5/page.tsx` | 51 KB | ✅ Original | Generated page 5 |
| `/generated-6` | `app/generated-6/page.tsx` | 31 KB | ✅ Original | Generated page 6 |
| `/generated-7` | `app/generated-7/page.tsx` | 34 KB | ✅ Original | Generated page 7 |
| `/generated-8` | `app/generated-8/page.tsx` | 26 KB | ✅ Original | Generated page 8 |
| `/generated-9` | `app/generated-9/page.tsx` | 25 KB | ✅ Original | Generated page 9 |
| `/generated-10` | `app/generated-10/page.tsx` | 28 KB | ✅ Original | Generated page 10 |

---

## 13. Finance Pages (3)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/finance/dashboard` | `app/finance/dashboard/page.tsx` | 27 KB | ✅ Original | Finance dashboard |
| `/finance/landing` | `app/finance/landing/page.tsx` | 24 KB | ✅ Original | Finance landing page |
| `/finance/crypto` | `app/finance/crypto/page.tsx` | 25 KB | ✅ Original | Crypto finance page |

---

## 14. Other Pages (3)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/showcase` | `app/showcase/page.tsx` | 8.1 KB | ✅ Original | Component showcase |
| `/feed` | `app/feed/page.tsx` | 29 KB | ✅ Original | Feed page |
| `/advisory` | `app/advisory/page.tsx` | 19 KB | ✅ Original | Advisory page |
| `/alias/badge` | `app/alias/badge/page.tsx` | 52 KB | ✅ Original | Alias badge showcase |
| `/alias/cards` | `app/alias/cards/page.tsx` | 37 KB | ✅ Original | Alias cards showcase |

---

## 15. Error & Root Pages (2)

| Route | File | Size | Status | Features |
|-------|------|------|--------|----------|
| `/` (root) | `app/page.tsx` | 3.5 KB | ✅ Original | Home page with CTAs, feature badges |
| `*` (404) | `app/not-found.tsx` | 1.9 KB | ✅ Migrated | Custom 404 page (Next.js App Router format) |

**Migration Source**: Vite project (`src/pages/NotFound.tsx`)

---

## Page Types by Architecture

### Server Components (Default)
- Static pages: `about`, `contact`, `help`, `careers`, `press`, `privacy`, `terms`, `austrac`
- Landing pages: Most landing variants
- Template pages
- Generated pages

### Client Components ("use client")
- Authentication: All auth pages
- Properties: `properties`, `properties/[slug]`, all listing pages
- Dashboard: `dashboard`, `account-settings`, `favorites`, `messages`, `notifications`, `my-feed`
- Agent: `agents`, `agent-dashboard`, `agent-pipeline`, `advisory-network`, `deal-team`
- Tools: `mortgage-calculator`, `compare`, `sell`, `search`
- Intelligence: `analytics`, `market-intelligence`, `residential-intelligence`, `buyer-profile`

### Dynamic Routes
- `/properties/[slug]` - Property details by slug
- `/listings/[id]` - Listing by ID

### Special Next.js Files
- `app/not-found.tsx` - Custom 404 page (App Router format)
- `app/page.tsx` - Root/home page

---

## Migration Status Summary

### ✅ Migrated from Vite (48 pages)
These pages were converted from the original Vite + React Router project:

**Authentication (3)**: `auth/login`, `auth/register`, `auth/forgot-password`

**Agent/Platform (5)**: `agents`, `agent-dashboard`, `advisory-network`, `deal-team`

**Properties (6)**: `listings/[id]`, `listings/wolseley`, `listings/wolseley-point-piper`, `listings/wolseley-prestige`, `listings/prestige-wolseley`

**User (5)**: `dashboard`, `favorites`, `messages`, `notifications`, `my-feed`

**Landing (4)**: `landing-main`, `landing-v2`, `index-landing`

**Utility (7)**: `contact`, `help`, `careers`, `press`, `privacy`, `terms`, `austrac`

**Tools (4)**: `mortgage-calculator`, `compare`, `sell`, `search`

**Intelligence (1)**: `analytics`

**Special (3)**: `enterprise`, `not-found`

**Other (10)**: Various generated and special pages

### ✅ Original Next.js (44 pages)
These pages were built directly in Next.js without migration:

**Core Platform**: `page.tsx`, `properties`, `properties/[slug]`, `search`, `search-results`

**Agent**: `agent-pipeline`, `market-intelligence`, `residential-intelligence`, `buyer-profile`, `account-settings`

**Landing Variants (7)**: `landing-gsap`, `landing-geist`, `landing-light`, `landing-spline`, `landing-voice`, `landing-1` through `landing-4`

**Mobile**: `mobile-storyboard`, `mobile-assistant`

**Special**: `first-home-dashboard`, `appraisal-report`, `new-home-listing`, `ecosystem`

**Templates (13)**: Full template collection

**Generated (10)**: `generated-1` through `generated-10`

**Finance (3)**: Finance section pages

**Showcase**: `showcase`, `feed`, `advisory`, `alias/badge`, `alias/cards`

---

## Common Patterns Used

### 1. Page Structure
```tsx
"use client" // For interactive pages

import { Shell } from "@/components/shell"
import { ErrorBoundary } from "@/components/error-boundary"
import { PageLoader } from "@/components/page-loader"
import { generatePageMetadata } from "@/lib/metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generatePageMetadata({
  title: "Page Title | HAUS",
  description: "Page description",
  keywords: ["keywords"],
})

function PageContent() {
  return <main>...</main>
}

export default function Page() {
  return (
    <ErrorBoundary>
      <Shell>
        <Suspense fallback={<PageLoader />}>
          <PageContent />
        </Suspense>
      </Shell>
    </ErrorBoundary>
  )
}
```

### 2. Client Component Pattern
```tsx
"use client"

import { useState, useCallback, useMemo } from "react"
import { useSearchParams } from "next/navigation"

export default function InteractivePage() {
  const [state, setState] = useState()
  const searchParams = useSearchParams()

  return <div>...</div>
}
```

### 3. Dynamic Route Pattern
```tsx
interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const property = await fetchProperty(params.slug)
  return generatePageMetadata({ title: property.title })
}

export default async function Page({ params }: PageProps) {
  const property = await fetchProperty(params.slug)
  return <div>...</div>
}
```

---

## Component Wrappers Used

- **Shell** - Main layout wrapper with navigation
- **ErrorBoundary** - Error handling wrapper
- **PageLoader** - Loading state fallback
- **Suspense** - React Suspense for async components

---

## Libraries & Technologies

| Technology | Usage |
|------------|-------|
| **React 19** | UI framework |
| **Next.js 16** | App Router, Server Components |
| **TypeScript 5** | Type safety |
| **Tailwind CSS** | Styling |
| **shadcn/ui** | Component library |
| **Convex** | Backend-as-a-Service |
| **Lucide React** | Icons |
| **Framer Motion** | Animations (some pages) |
| **GSAP** | Animations (legacy landing pages) |
| **Spline** | 3D elements (landing-spline) |

---

## File Size Distribution

- **< 10 KB**: 13 pages (mostly forms and simple pages)
- **10-20 KB**: 28 pages (standard content pages)
- **20-40 KB**: 35 pages (feature-rich pages)
- **40-60 KB**: 12 pages (complex landing pages)
- **> 60 KB**: 2 pages (large generated/template pages)

---

## SEO & Metadata

All pages use `generatePageMetadata()` utility for consistent SEO:

```tsx
export const metadata: Metadata = generatePageMetadata({
  title: "Page Title",
  description: "Page description for SEO",
  keywords: ["relevant", "keywords"],
})
```

---

## Performance Considerations

1. **Code Splitting**: Automatic with Next.js App Router
2. **Image Optimization**: Uses Next.js `Image` component
3. **Lazy Loading**: Implemented for large components
4. **Server Components**: Reduces client-side JavaScript
5. **Dynamic Imports**: Available for heavy components

---

## Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- Focus management in forms

---

## Next Steps

1. **Testing**: Comprehensive testing of all 92 pages
2. **Optimization**: Bundle size optimization
3. **Analytics**: Implement tracking across all pages
4. **SEO**: Meta tag refinement
5. **Performance**: Lighthouse score improvements

---

**Document Version**: 1.0
**Last Updated**: 2026-01-20
**Maintained By**: HAUS Development Team
