# HAUS Platform - Luxury Real Estate Platform

> Modern full-stack luxury real estate platform built with Next.js 16, React 19, and Convex backend

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Convex](https://img.shields.io/badge/Convex-latest-purple)](https://convex.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🏠 Overview

**HAUS Platform** is a comprehensive luxury real estate platform featuring elite property listings, AI-powered market intelligence, agent dashboards, and sophisticated buyer tools. Originally built as static HTML, now fully converted to a modern Next.js application with complete backend infrastructure.

### Key Features

- 🏢 **Property Listings** - Prestige property showcase with AI insights
- 🤖 **AI Market Intelligence** - Predictive analytics and trend analysis
- 👥 **Agent Directory** - Elite agent network with performance metrics
- 📊 **Agent Dashboard** - Pipeline management and analytics
- 🔍 **Smart Search** - Advanced filtering with saved searches
- 📄 **Document Vault** - Secure contract and document management
- 📈 **Market Analytics** - Real-time suburb statistics
- 🏷️ **Lead Management** - Enquiry tracking and conversion
- 📱 **Mobile Optimized** - Responsive design with mobile assistant
- 🎨 **Modern UI** - Glassmorphism, animations, dark theme

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 16.1.3 (App Router + Turbopack)
- **UI Library**: React 19 with TypeScript 5
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React
- **Animations**: GSAP, Framer Motion (in selected pages)
- **3D**: Spline (3D interactions on landing pages)

### Backend
- **BaaS**: Convex (Database, Functions, Real-time)
- **Database**: 10 tables with full relational schema
- **API**: Type-safe queries and mutations
- **Real-time**: Automatic subscriptions and updates

### Development
- **Package Manager**: Bun (ultra-fast)
- **Type Safety**: Strict TypeScript configuration
- **Code Quality**: ESLint, Prettier configured
- **Git**: Version control with GitHub

## 📁 Project Structure

```
haus-alternate/
├── app/                                    # Next.js App Router pages
│   ├── advisory/                           # Agent directory page
│   ├── agent-dashboard/                    # Agent dashboard
│   ├── agent-pipeline/                     # Deal pipeline management
│   ├── market-intelligence/                # Market analytics
│   ├── residential-intelligence/           # Residential insights
│   ├── new-home-listing/                   # Property listing form
│   ├── search-results/                     # Property search
│   ├── listings/                           # Property detail pages
│   ├── finance/                            # Finance calculators
│   ├── mobile-*/                           # Mobile-optimized pages
│   ├── templates/                          # Page templates (18+)
│   ├── generated-1/ through generated-10/  # Converted HTML pages
│   ├── globals.css                         # Global styles
│   ├── layout.tsx                          # Root layout
│   └── page.tsx                            # Home page
│
├── components/                             # React components
│   ├── providers/
│   │   └── ConvexProvider.tsx             # Convex context provider
│   ├── ui/
│   │   ├── empty-states/                   # 12 empty state components
│   │   ├── button.tsx, card.tsx, etc.     # shadcn/ui components
│   ├── haus-logo.tsx                       # HAUS logo component
│   └── mobile-*.tsx                        # Mobile-specific components
│
├── convex/                                 # Convex backend
│   ├── schema.ts                           # Database schema (10 tables)
│   ├── functions.ts                        # Queries & mutations
│   ├── client.ts                           # Convex client factory
│   ├── type_utils.ts                       # TypeScript helpers
│   └── convex.config.json                  # Convex CLI config
│
├── types/                                  # TypeScript interfaces
│   ├── advisory.ts
│   ├── agent-dashboard.ts
│   ├── listings.ts
│   ├── market.ts
│   └── ... (9 type files)
│
├── lib/                                    # Utility functions
│   └── utils.ts                            # cn() helper
│
├── .archive/html-originals/                # Original HTML files (10)
├── .env.convex.example                     # Environment template
├── CONVEX_SETUP.md                         # Backend setup guide
├── CONVERSION_SUMMARY.md                   # HTML→React conversion log
├── README.md                               # This file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🗄️ Database Schema

Complete Convex backend with **10 tables**:

### Properties
- Title, description, type, status
- Address, suburb, state, postcode, country
- Price, auction date, council rates
- Bedrooms, bathrooms, parking, land size
- Images, floorplan, virtual tour
- Agent assignment, contact info
- **AI Insights**: Value range, target price, yield, growth predictions
- Luxury flags, verification status

### Users
- Authentication (email, phone, avatar)
- Roles: admin, agent, buyer, seller
- **Agent Specific**: License, agency, specializations, ratings
- Preferences: Saved searches, saved properties, notifications
- **Fair Play**: Verification level, subscription tier

### Market Data
- Suburb statistics: median price, clearance rate, days on market
- Supply & demand metrics
- Growth predictions (12-month forecast)
- Demographics and amenities scores
- AI confidence levels

### Additional Tables
- **Agencies** - Agency profiles with stats
- **Saved Searches** - User search alerts
- **Documents** - Contract and document vault
- **Insights** - AI-generated market alerts
- **Activity Log** - User activity tracking
- **Notifications** - Email/push notifications
- **Leads** - Enquiry and lead management
- **Analytics** - Event tracking

## 🎨 UI Components

### Empty State Components (12 variants)

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

// Usage
<NoProperties onCreateListing={() => navigate('/create')} />
<NoSearchResults query="waterfront" onClear={() => clearFilters()} />
<ErrorState title="Failed to load" onRetry={() => refetch()} />
```

### shadcn/ui Components
- Button, Card, Input, Label
- Select, Checkbox, Slider, Textarea
- Sheet, ScrollArea, Badge
- All fully typed and customizable

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ or Bun
- GitHub account (for Convex)
- Modern web browser

### 1. Clone and Install

```bash
# Clone repository
git clone https://github.com/danmarauda/haus-alternate.git
cd haus-alternate

# Install dependencies (Bun recommended)
bun install

# Or with npm/pnpm
npm install
# or
pnpm install
```

### 2. Initialize Convex Backend

```bash
# Start Convex development (will prompt for project creation)
npx convex dev

# This will:
# - Create a new Convex project
# - Generate types (convex/_generated/)
# - Start dev dashboard at http://localhost:6789
```

### 3. Configure Environment

```bash
# Copy environment template
cp .env.convex.example .env.local

# Add your Convex deployment URL (from step 2)
echo "NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud" >> .env.local
```

### 4. Integrate Convex Provider

Add to `app/layout.tsx`:

```tsx
import { ConvexContextProvider } from "@/components/providers/ConvexProvider"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConvexContextProvider>
          {children}
        </ConvexContextProvider>
      </body>
    </html>
  )
}
```

### 5. Start Development Server

```bash
# Start Next.js dev server
bun dev
# or
npm run dev

# Open http://localhost:3000
```

## 📚 Usage Examples

### Fetching Properties

```tsx
import { useQuery } from "convex/react"
import { api } from "../../convex/_generated"

function PropertyList() {
  const properties = useQuery(api.properties.list, {
    status: "active",
    suburb: "Point Piper",
    limit: 10
  })

  if (!properties) return <Loading />
  if (properties.length === 0) return <NoProperties />

  return (
    <div>
      {properties.map(property => (
        <PropertyCard key={property._id} property={property} />
      ))}
    </div>
  )
}
```

### Saving a Property

```tsx
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated"

function SaveButton({ propertyId }) {
  const saveProperty = useMutation(api.properties.toggleSave)

  return (
    <button onClick={() => saveProperty({ propertyId })}>
      Save Property
    </button>
  )
}
```

### Using Empty States

```tsx
import { NoSearchResults, ErrorState } from "@/components/ui/empty-states"

function SearchResults({ query, results, error }) {
  if (error) return <ErrorState onRetry={() => refetch()} />
  if (results.length === 0) return <NoSearchResults query={query} />

  return results.map(r => <ResultCard key={r.id} result={r} />)
}
```

## 🚀 Deployment

### Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo for auto-deploy
```

### Backend (Convex)

```bash
# Deploy Convex functions to production
npx convex deploy

# View dashboard
npx convex dashboard
```

**Note**: Convex backend URL stays the same across environments!

## 📖 Available Pages

### Converted HTML Pages (10)
1. `/advisory` - HAUS Advisory Network
2. `/agent-dashboard` - Agent Dashboard
3. `/market-intelligence` - Market Analytics
4. `/residential-intelligence` - Residential Insights
5. `/new-home-listing` - Property Listing Form
6. `/search-results` - Property Search
7. `/listings/wolseley` - Property Detail
8. `/listings/prestige-wolseley` - Prestige Listing
9. `/agent-pipeline` - Deal Pipeline
10. Plus 11+ template and landing pages

### Template Pages
- Finance landing pages (crypto, loans)
- Mobile sales dashboard
- Travel booking interface
- Construction management
- Dark/light theme variants
- Interactive landing pages (GSAP, Spline, Voice)

## 🎯 Key Features

### Property Listings
- High-end image galleries
- AI-powered valuations
- Inspection scheduler
- Agent contact forms
- Save to favorites
- Share functionality

### Market Intelligence
- Suburb statistics
- Growth predictions
- Clearance rates
- Days on market
- Amenities scoring
- Comparable sales

### Agent Tools
- Pipeline management
- Lead tracking
- Performance analytics
- Commission tracking
- Team collaboration
- Document management

### Buyer Tools
- Saved searches
- Price alerts
- Property comparison
- Enquiry management
- Inspection booking
- Document vault

## 🧪 Development Commands

```bash
# Development
bun dev                  # Start dev server (http://localhost:3000)
npx convex dev           # Start Convex backend (http://localhost:6789)

# Build & Deploy
bun run build           # Production build
bun start               # Start production server
npx convex deploy       # Deploy backend to production

# Code Quality
bun run lint            # Run ESLint
npx tsc --noEmit        # Type check

# Convex Management
npx convex dashboard    # Open Convex dashboard
npx convex deploy       # Deploy to production
npx convex logs         # View function logs
```

## 📦 Package Scripts

```json
{
  "dev": "next dev --turbo",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/` maps to project root)
- Full type checking for Convex functions

### Tailwind CSS
- Custom fonts: Space Grotesk, Inter, Space Mono
- Custom color palette with zinc/neutral
- Dark theme default
- Responsive breakpoints: sm, md, lg, xl, 2xl

### Next.js
- App Router with Turbopack
- Static generation where possible
- Image optimization enabled
- Internationalized routing ready

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support:
- Open an issue on GitHub
- Check [CONVEX_SETUP.md](./CONVEX_SETUP.md) for backend setup
- Review [CONVERSION_SUMMARY.md](./CONVERSION_SUMMARY.md) for conversion details

## 🙏 Acknowledgments

- **Original HTML Design**: HAUS Real Estate Platform
- **Converted by**: Claude Code AI Assistant
- **Conversion Date**: January 19, 2025
- **Backend**: Convex (concierge.backend)

---

**Built with ❤️ for luxury real estate**

**Repository**: https://github.com/danmarauda/haus-alternate
**Live Demo**: Coming soon
