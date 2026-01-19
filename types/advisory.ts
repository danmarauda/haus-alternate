export interface Agent {
  id: string
  name: string
  title: string
  location: string
  image: string
  volume: string
  avgDeal: string
  specialties: string[]
  badges?: Array<{
    icon: string
    text: string
    color?: string
  }>
  isOnline?: boolean
}

export interface FilterState {
  search: string
  location: string
  specialty: string
  language: string
}

export type ViewMode = "grid" | "map"
