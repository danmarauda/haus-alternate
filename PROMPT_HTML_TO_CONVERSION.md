# Ultra High-Quality HTML → React/Next.js Conversion Prompt

> **Copy and paste this prompt to AI agents for premium HTML to React conversions**

---

## 🎯 Mission

Convert static HTML files to **production-ready, type-safe React/Next.js components** with the highest quality standards. You are not just converting syntax - you are **modernizing legacy code** to meet 2025 standards.

## 📋 Input

You will receive:
- One or more HTML files (legacy markup)
- Project context (tech stack, conventions)
- Target destination path

## ✅ Output Requirements

### 1. **Code Quality Standards**

```typescript
// ✅ CORRECT - Modern, type-safe, clean
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { User } from "@/types/user"

interface UserProfileProps {
  user: User
  onEdit?: (id: string) => void
}

export function UserProfile({ user, onEdit }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </div>
      {onEdit && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(user.id)}
        >
          Edit
        </Button>
      )}
    </div>
  )
}
```

```typescript
// ❌ WRONG - Any types, no structure, messy
export default function ({ user }) {
  return (
    <div>
      <img src={user.avatar} />
      <div>{user.name}</div>
    </div>
  )
}
```

### 2. **Mandatory Conversion Checklist**

For **EVERY** HTML file converted:

- [ ] **File Structure**: Create proper directory structure (`app/route/page.tsx`)
- [ ] **TypeScript**: Add proper interfaces for all props
- [ ] **Client Directive**: Add `"use client"` when using hooks
- [ ] **Imports**: Organize imports (React → third-party → local)
- [ ] **JSX Hygiene**: Convert all HTML to JSX (className, onClick, self-closing)
- [ ] **Images**: Use Next.js Image component with proper optimization
- [ ] **Links**: Convert `<a>` to `<Link>` for internal navigation
- [ ] **Forms**: Add proper form validation and state management
- [ ] **Styles**: Convert inline styles to Tailwind classes
- [ ] **Components**: Extract reusable sub-components
- [ ] **Types**: Create corresponding type definition file
- [ ] **SEO**: Add proper metadata and page titles
- [ ] **Responsive**: Ensure mobile-first responsive design
- [ ] **Accessibility**: Add ARIA labels and semantic HTML
- [ ] **Error Handling**: Add proper error boundaries and loading states

### 3. **Component Architecture Pattern**

```typescript
// =================== FILE: app/example/page.tsx ===================
import { Metadata } from "next"
import { ExampleComponent } from "./components/example-component"
import { exampleData } from "./lib/data"

export const metadata: Metadata = {
  title: "Example Page | HAUS Platform",
  description: "Premium example page with modern design",
}

export default function ExamplePage() {
  return (
    <main className="min-h-screen bg-background">
      <ExampleComponent data={exampleData} />
    </main>
  )
}

// =================== FILE: app/example/components/example-component.tsx ===================
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { ExampleData } from "../../types/example"

interface ExampleComponentProps {
  data: ExampleData
}

export function ExampleComponent({ data }: ExampleComponentProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="container py-12">
      <div className="grid gap-6 md:grid-cols-2">
        {data.items.map((item, index) => (
          <Card
            key={item.id}
            className={`p-6 cursor-pointer transition ${
              index === activeIndex ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-muted-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

// =================== FILE: app/example/types/example.ts ===================
export interface ExampleData {
  items: ExampleItem[]
}

export interface ExampleItem {
  id: string
  title: string
  description: string
  category: string
  metadata?: {
    featured?: boolean
    views?: number
  }
}

// =================== FILE: app/example/lib/data.ts ===================
import { type ExampleData } from "../types/example"

export const exampleData: ExampleData = {
  items: [
    {
      id: "1",
      title: "Example Item",
      description: "This is an example",
      category: "general",
    },
  ],
}
```

### 4. **HTML → JSX Conversion Rules**

| HTML Pattern | JSX Equivalent | Notes |
|-------------|---------------|-------|
| `class="foo"` | `className="foo"` | **ALWAYS use className** |
| `style="color: red"` | `style={{ color: 'red' }}` | **CamelCase properties** |
| `<div onclick="foo()">` | `<div onClick={foo}>` | **camelCase event handlers** |
| `<img src="...">` | `<Image src="..." alt="..." />` | **Use Next.js Image** |
| `<a href="/page">` | `<Link href="/page">` | **Internal links only** |
| `<input type="text">` | `<Input type="text" />` | **Use shadcn/ui** |
| `<!-- comment -->` | `{/* comment */}` | **JSX comments** |
| `<br>` | `<br />` | **Self-closing tags** |
| `<div class="flex">` | `<div className="flex">` | **Tailwind classes** |
| `for="input"` | `htmlFor="input"` | **Label htmlFor** |

### 5. **TypeScript Best Practices**

```typescript
// ✅ CORRECT - Proper typing
interface UserCardProps {
  user: {
    id: string
    name: string
    email: string
    avatar?: string  // Optional field
  }
  onEdit?: (id: string) => void  // Optional callback
  variant?: "default" | "compact"  // Union type for variants
}

export function UserCard({ user, onEdit, variant = "default" }: UserCardProps) {
  // ...
}

// ❌ WRONG - Any types
interface Props {
  user: any
  onEdit: any
}
```

### 6. **Styling Conversions**

**Convert this:**
```html
<div class="container" style="display: flex; gap: 20px; padding: 40px 0;">
  <div style="flex: 1; background: white;">
    <h1 style="font-size: 32px; font-weight: bold; color: #333;">Title</h1>
  </div>
</div>
```

**To this:**
```tsx
<div className="container flex gap-5 py-10">
  <div className="flex-1 bg-background">
    <h1 className="text-4xl font-bold text-foreground">Title</h1>
  </div>
</div>
```

**Reference mappings:**
- `display: flex` → `flex`
- `gap: 20px` → `gap-5` (or `gap-[20px]` for custom)
- `padding: 40px 0` → `py-10`
- `flex: 1` → `flex-1`
- `background: white` → `bg-background`
- `font-size: 32px` → `text-4xl`
- `font-weight: bold` → `font-bold`
- `color: #333` → `text-foreground`

### 7. **Component Extraction Pattern**

When you see repeating HTML patterns:

```html
<!-- BEFORE: Repeated HTML -->
<div class="card">
  <img src="image1.jpg" />
  <h3>Title 1</h3>
  <p>Description 1</p>
</div>
<div class="card">
  <img src="image2.jpg" />
  <h3>Title 2</h3>
  <p>Description 2</p>
</div>
```

```tsx
// AFTER: Extracted component
interface CardProps {
  image: string
  title: string
  description: string
}

function Card({ image, title, description }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// Usage
<Card
  image="image1.jpg"
  title="Title 1"
  description="Description 1"
/>
<Card
  image="image2.jpg"
  title="Title 2"
  description="Description 2"
/>
```

### 8. **Responsive Design Standards**

```tsx
// ✅ CORRECT - Mobile-first responsive
<div className="
  text-sm          /* Mobile: small text */
  sm:text-base     /* Small screens: base text */
  lg:text-lg       /* Large screens: large text */
  xl:text-xl       /* Extra large: extra large */
">

<div className="
  grid             /* Mobile: 1 column */
  sm:grid-cols-2   /* Small: 2 columns */
  lg:grid-cols-3   /* Large: 3 columns */
  xl:grid-cols-4   /* Extra large: 4 columns */
">

// ❌ WRONG - No responsive design
<div className="text-xl grid grid-cols-4">
```

### 9. **State Management Pattern**

```tsx
"use client"

import { useState, useEffect } from "react"

export function SearchForm() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (searchQuery: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/search?q=${searchQuery}`)
      const data = await response.json()
      setResults(data.results)
    } catch (err) {
      setError("Failed to search")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSearch(query) }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="px-4 py-2 border rounded"
      />
      {isLoading && <p>Searching...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}
```

### 10. **Image Optimization**

```tsx
// ✅ CORRECT - Next.js Image with optimization
import Image from "next/image"

<Image
  src="/hero-image.jpg"
  alt="Luxury property interior"
  width={1200}
  height={800}
  priority        // For above-the-fold images
  className="rounded-lg object-cover"
/>

// ❌ WRONG - Unoptimized img tag
<img src="/hero-image.jpg" alt="Luxury property" />
```

### 11. **Form Handling**

```tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface FormData {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to submit")

      // Reset form on success
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        required
      />
      <Input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your@email.com"
        required
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message..."
        rows={5}
        required
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
```

### 12. **Error Boundaries**

```tsx
"use client"

import { Component, ReactNode } from "react"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Something went wrong</h2>
              <p className="mt-2 text-muted-foreground">
                {this.state.error?.message}
              </p>
              <Button
                className="mt-4"
                onClick={() => window.location.reload()}
              >
                Reload Page
              </Button>
            </div>
          </div>
        )
      )
    }

    return this.props.children
  }
}
```

### 13. **Loading States**

```tsx
import { Skeleton } from "@/components/ui/skeleton"

export function PropertyCardSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}

// Usage
function PropertyList() {
  const { properties, isLoading } = useProperties()

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <PropertyCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  return <div>{/* Actual content */}</div>
}
```

### 14. **Accessibility Standards**

```tsx
// ✅ CORRECT - Accessible
<button
  aria-label="Close dialog"
  onClick={onClose}
  className="rounded-full p-2 hover:bg-accent"
>
  <X aria-hidden="true" />
</button>

<form aria-labelledby="contact-heading">
  <h2 id="contact-heading">Contact Us</h2>
  <Label htmlFor="name">Name</Label>
  <Input
    id="name"
    name="name"
    aria-required="true"
    required
  />
</form>

// ❌ WRONG - Not accessible
<button onClick={onClose}>
  <X />
</button>
```

### 15. **File Organization Standards**

```
app/route-name/
├── page.tsx                 # Main page component
├── layout.tsx              # Route-specific layout (optional)
├── loading.tsx             # Loading UI (optional)
├── error.tsx               # Error UI (optional)
├── components/             # Page-specific components
│   ├── feature-card.tsx
│   ├── data-table.tsx
│   └── search-bar.tsx
├── lib/                    # Page-specific utilities
│   ├── data.ts
│   ├── helpers.ts
│   └── constants.ts
└── types/                  # Page-specific types
    └── feature.ts
```

### 16. **Performance Optimization**

```tsx
// ✅ Use dynamic imports for heavy components
import dynamic from "next/dynamic"

const HeavyChart = dynamic(() => import("./heavy-chart"), {
  loading: () => <Skeleton className="h-[400px]" />,
  ssr: false, // Disable SSR if not needed
})

// ✅ Memoize expensive computations
import { useMemo } from "react"

const sortedData = useMemo(
  () => data.sort((a, b) => b.value - a.value),
  [data]
)

// ✅ Use React.memo for pure components
export const PropertyCard = React.memo(function PropertyCard({
  property,
}: PropertyCardProps) {
  return <div>...</div>
})
```

### 17. **Testing Requirements**

After conversion, verify:

```bash
# 1. TypeScript compiles
npx tsc --noEmit

# 2. ESLint passes
npm run lint

# 3. Build succeeds
npm run build

# 4. No console errors in browser
# 5. All interactive elements work
# 6. Responsive on mobile/tablet/desktop
# 7. Accessibility passes (Lighthouse a11y score 90+)
```

### 18. **Common Conversion Mistakes to AVOID**

❌ **FORGET THESE MISTAKES:**

```tsx
// ❌ Don't use inline styles
<div style={{ color: "red", fontSize: "20px" }}>

// ✅ Use Tailwind classes
<div className="text-red-500 text-xl">

// ❌ Don't use any types
const data: any = fetchData()

// ✅ Use proper types
const data: Property[] = await fetchProperties()

// ❌ Don't forget alt text
<img src={image} />

// ✅ Always include descriptive alt
<img src={image} alt={title} />

// ❌ Don't use regular a tags for internal links
<a href="/about">About</a>

// ✅ Use Next.js Link
<Link href="/about">About</Link>

// ❌ Don't ignore errors
fetchData().catch(console.error)

// ✅ Handle errors properly
try {
  await fetchData()
} catch (error) {
  setError("Failed to load data")
  console.error(error)
}

// ❌ Don't use useEffect for everything
useEffect(() => {
  setName(user.name)
}, [])

// ✅ Use proper state initialization
const [name, setName] = useState(user.name)
```

### 19. **Final Quality Checklist**

Before marking conversion complete, verify:

- [ ] All TypeScript errors resolved
- [ ] All ESLint warnings fixed
- [ ] Build succeeds without errors
- [ ] Page renders correctly in browser
- [ ] All links and buttons work
- [ ] Forms validate and submit properly
- [ ] Images load and display correctly
- [ ] Responsive design works on mobile
- [ ] Loading states implemented
- [ ] Error handling in place
- [ ] Accessibility score 90+
- [ ] Performance score 90+
- [ ] SEO metadata added
- [ ] Console has no errors
- [ ] Types file created
- [ ] Components properly extracted
- [ ] Code is formatted (Prettier)

### 20. **Deliverables**

For each HTML file, provide:

1. **Main page component** (`app/route/page.tsx`)
2. **Type definitions** (`app/route/types/route.ts`)
3. **Sub-components** (`app/route/components/*.tsx`)
4. **Utilities/data** (`app/route/lib/*.ts`)
5. **Conversion notes** (what changed, why, improvements made)

## 🎨 Example Conversion

**BEFORE (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Agent Directory</title>
  <style>
    .card { background: white; padding: 20px; border-radius: 8px; }
    .agent-name { font-size: 24px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Our Agents</h1>
    <div class="card">
      <img src="agent1.jpg" alt="Agent">
      <h2 class="agent-name">John Smith</h2>
      <p>john@example.com</p>
      <button onclick="alert('Contacted!')">Contact</button>
    </div>
  </div>
</body>
</html>
```

**AFTER (React/Next.js):**
```tsx
// app/agents/page.tsx
import { Metadata } from "next"
import { AgentList } from "./components/agent-list"
import { getAgents } from "./lib/data"

export const metadata: Metadata = {
  title: "Elite Agents | HAUS Platform",
  description: "Meet our network of elite real estate professionals",
}

export default async function AgentsPage() {
  const agents = await getAgents()

  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Our Elite Agents</h1>
      <AgentList agents={agents} />
    </main>
  )
}

// app/agents/components/agent-list.tsx
"use client"

import { useState } from "react"
import { AgentCard } from "./agent-card"
import type { Agent } from "../types/agent"

interface AgentListProps {
  agents: Agent[]
}

export function AgentList({ agents }: AgentListProps) {
  const [filter, setFilter] = useState("all")

  const filteredAgents = agents.filter(agent =>
    filter === "all" || agent.specialty === filter
  )

  return (
    <>
      <div className="flex gap-2 mb-6">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "luxury" ? "default" : "outline"}
          onClick={() => setFilter("luxury")}
        >
          Luxury
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAgents.map(agent => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </>
  )
}

// app/agents/components/agent-card.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import type { Agent } from "../types/agent"

interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  const [contacted, setContacted] = useState(false)

  const handleContact = () => {
    setContacted(true)
    // In real app: send to API
    setTimeout(() => setContacted(false), 2000)
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="relative h-48 w-full mb-4">
          <Image
            src={agent.avatar}
            alt={agent.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="text-2xl font-bold">{agent.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{agent.title}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${agent.email}`}>{agent.email}</a>
          </div>
          {agent.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${agent.phone}`}>{agent.phone}</a>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={handleContact}
          disabled={contacted}
        >
          {contacted ? "Message Sent!" : "Contact Agent"}
        </Button>
      </CardFooter>
    </Card>
  )
}

// app/agents/types/agent.ts
export interface Agent {
  id: string
  name: string
  title: string
  email: string
  phone?: string
  avatar: string
  specialty: string
  rating?: number
  dealsClosed?: number
}

// app/agents/lib/data.ts
import { type Agent } from "../types/agent"

export async function getAgents(): Promise<Agent[]> {
  // In real app: fetch from Convex/DB
  return [
    {
      id: "1",
      name: "John Smith",
      title: "Luxury Property Specialist",
      email: "john.smith@haus.com",
      phone: "+61 2 9999 9999",
      avatar: "/agents/agent1.jpg",
      specialty: "luxury",
      rating: 4.9,
      dealsClosed: 150,
    },
    // ... more agents
  ]
}
```

## 📋 Summary

**Your conversion should:**

1. ✅ Be **type-safe** (no `any` types)
2. ✅ Use **modern React patterns** (hooks, functional components)
3. ✅ Follow **Next.js 16 best practices** (App Router, Image optimization)
4. ✅ Have **proper TypeScript interfaces** for all data
5. ✅ Use **Tailwind CSS** instead of inline styles
6. ✅ Include **loading and error states**
7. ✅ Be **accessible** (ARIA labels, semantic HTML)
8. ✅ Be **responsive** (mobile-first design)
9. ✅ Have **proper SEO** (metadata, titles)
10. ✅ Pass **TypeScript compilation** with zero errors

**Quality Metrics to Hit:**

- TypeScript: 100% type coverage
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 90+
- Lighthouse SEO: 100
- Zero console errors
- Zero build warnings

---

**Remember**: You're not just converting - you're **upgrading legacy code to production-grade modern React**. Every component should be something you're proud to ship to production. 🚀
