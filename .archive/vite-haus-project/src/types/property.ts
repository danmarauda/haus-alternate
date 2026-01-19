// Property Types
export type PropertyType = 
  | "house" 
  | "apartment" 
  | "condo" 
  | "townhouse" 
  | "loft" 
  | "studio" 
  | "penthouse" 
  | "duplex";

export type ListingType = "for-sale" | "for-rent" | "sold" | "off-market";

export type AmenityType =
  | "pool"
  | "spa"
  | "gym"
  | "tennis-court"
  | "garage"
  | "balcony"
  | "fireplace"
  | "air-conditioning"
  | "smart-home"
  | "security-system"
  | "wine-cellar"
  | "home-theater"
  | "elevator"
  | "outdoor-kitchen"
  | "sauna"
  | "garden"
  | "rooftop-deck"
  | "pet-friendly"
  | "concierge"
  | "doorman"
  | "storage"
  | "laundry"
  | "dishwasher"
  | "hardwood-floors"
  | "high-ceilings"
  | "city-view"
  | "ocean-view"
  | "mountain-view"
  | "waterfront"
  | "private-dock"
  | "heated-floors"
  | "solar-panels"
  | "ev-charging"
  | "infinity-pool"
  | "biometric-security";

export type PropertyFeature =
  | "waterfront"
  | "mountain-view"
  | "gated-community"
  | "new-construction"
  | "historic"
  | "eco-friendly"
  | "smart-home"
  | "luxury"
  | "investment"
  | "fixer-upper";

export type PropertyCondition = "excellent" | "good" | "fair" | "needs-work";

export type BadgeVariant = "new" | "premium" | "open-house" | "hot" | "price-drop" | "ai-verified";

export interface PropertyBadge {
  text: string;
  variant: BadgeVariant;
}

export interface PropertyAgent {
  name: string;
  phone?: string;
  email?: string;
  agency?: string;
  avatar?: string;
  rating?: number;
  reviewCount?: number;
  yearsExperience?: number;
}

export interface AIInsights {
  investmentScore: number;
  growthPotential: string;
  rentalYield: string;
  marketTrend?: "up" | "down" | "stable";
  demandLevel?: "high" | "medium" | "low";
  priceHistory?: {
    date: string;
    price: number;
  }[];
  estimatedValueRange?: {
    min: number;
    max: number;
    target: number;
  };
  suburbPerformance?: {
    period: string;
    change: number;
  };
}

export interface Property {
  // Core identifiers
  id: string;
  title: string;
  price: number;
  priceDisplay: string;
  location: string;
  address?: string;
  suburb?: string;
  state?: string;
  postcode?: string;

  // Property specifications
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  propertyType: PropertyType;
  listingType: ListingType;
  
  // Images
  images: string[];
  imageUrl: string;

  // Details
  amenities: AmenityType[];
  description: string;
  shortDescription?: string;
  yearBuilt?: number;
  lotSize?: number;
  landSize?: number;
  features?: PropertyFeature[];
  condition?: PropertyCondition;
  hoaFees?: number;
  propertyTax?: number;
  councilRates?: number;
  schoolDistrict?: string;
  walkScore?: number;
  transitScore?: number;

  // Status
  badges?: PropertyBadge[];
  occupancyStatus?: "owner-occupied" | "tenant-occupied" | "vacant";
  virtualTourUrl?: string;
  openHouseDate?: string;
  listingDate?: string;

  // Price tracking
  lastPriceChange?: {
    date: string;
    previousPrice: number;
    currentPrice: number;
  };

  // Location
  coordinates?: { lat: number; lng: number };

  // Agent
  agent?: PropertyAgent;

  // AI
  aiInsights?: AIInsights;

  // Inspections
  inspections?: {
    date: string;
    day: string;
    time: string;
  }[];

  // Auction
  auctionDate?: string;
  guidePrice?: number;

  // Nearby
  nearbyPlaces?: {
    category: string;
    name: string;
    distance: string;
  }[];

  // Floor plan
  floorPlanUrl?: string;
  floors?: {
    name: string;
    area?: number;
  }[];
}
