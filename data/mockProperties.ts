import { Property } from "@/types/property";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export const mockProperties: Property[] = [
  {
    id: "oceanview-modern-villa",
    title: "Oceanview Modern Villa",
    price: 2800000,
    priceDisplay: "$2.8M",
    location: "Malibu, CA",
    address: "42 Pacific Coast Highway",
    suburb: "Malibu",
    state: "California",
    postcode: "90265",
    bedrooms: 4,
    bathrooms: 3,
    squareFootage: 2800,
    propertyType: "house",
    listingType: "for-sale",
    images: [property1.src, property2.src, property3.src],
    imageUrl: property1.src,
    description: `A monumental residence of rare distinction, this architectural masterpiece commands an iconic position overlooking the Pacific Ocean. Designed to dissolve the boundaries between the built form and the coastal spectacle, the home offers an unparalleled waterfront lifestyle.

Spanning three expansive levels connected by a commercial-grade lift, the residence features floor-to-ceiling vitrine glass, a state-of-the-art Wolf & Sub-Zero kitchen, and a temperature-controlled wine cellar. The outdoor entertaining haven flows seamlessly to a heated infinity pool and private beach access.`,
    shortDescription: "Stunning modern villa with panoramic ocean views and luxury finishes throughout.",
    amenities: [
      "pool",
      "spa",
      "gym",
      "wine-cellar",
      "smart-home",
      "elevator",
      "outdoor-kitchen",
      "infinity-pool",
      "ocean-view",
      "waterfront",
      "biometric-security"
    ],
    features: ["waterfront", "luxury", "smart-home", "new-construction"],
    yearBuilt: 2021,
    lotSize: 8500,
    landSize: 892,
    condition: "excellent",
    propertyTax: 28000,
    councilRates: 4200,
    walkScore: 72,
    transitScore: 45,
    badges: [
      { text: "New", variant: "new" },
      { text: "AI Verified", variant: "ai-verified" }
    ],
    virtualTourUrl: "#",
    openHouseDate: "Sat, 2-5 PM",
    listingDate: "2024-01-15",
    agent: {
      name: "Sarah Chen",
      phone: "+1 (310) 555-0123",
      email: "sarah.chen@haus.com",
      agency: "HAUS Prestige",
      avatar: "",
      rating: 4.9,
      reviewCount: 124,
      yearsExperience: 12
    },
    aiInsights: {
      investmentScore: 8.7,
      growthPotential: "+12% YoY",
      rentalYield: "4.2%",
      marketTrend: "up",
      demandLevel: "high",
      estimatedValueRange: {
        min: 2600000,
        max: 3100000,
        target: 2850000
      },
      suburbPerformance: {
        period: "12 Mo",
        change: 12.5
      }
    },
    inspections: [
      { date: "Oct 14", day: "Saturday", time: "11:00am - 11:45am" },
      { date: "Oct 18", day: "Wednesday", time: "6:00pm - 6:30pm" }
    ],
    auctionDate: "14 Oct, 11:00am",
    guidePrice: 2800000,
    nearbyPlaces: [
      { category: "Education", name: "Malibu High School", distance: "0.8 km" },
      { category: "Dining", name: "Nobu Malibu", distance: "1.2 km" },
      { category: "Transport", name: "Pacific Coast Hwy", distance: "0.1 km" },
      { category: "Lifestyle", name: "Malibu Country Mart", distance: "2.1 km" }
    ],
    floors: [
      { name: "Ground Floor", area: 320 },
      { name: "Level 1 (Bedrooms)", area: 280 },
      { name: "Lower Entertainment", area: 292 }
    ],
    coordinates: { lat: 34.0259, lng: -118.7798 }
  },
  {
    id: "skyline-penthouse-suite",
    title: "Skyline Penthouse Suite",
    price: 5200000,
    priceDisplay: "$5.2M",
    location: "Manhattan, NY",
    address: "432 Park Avenue, PH",
    suburb: "Midtown",
    state: "New York",
    postcode: "10022",
    bedrooms: 5,
    bathrooms: 4,
    squareFootage: 4500,
    propertyType: "penthouse",
    listingType: "for-sale",
    images: [property2.src, property3.src, property1.src],
    imageUrl: property2.src,
    description: `Perched atop one of Manhattan's most prestigious addresses, this extraordinary penthouse offers 360-degree views of the New York skyline. Every detail has been meticulously crafted to create a residence of unparalleled sophistication.

The great room features 12-foot ceilings and floor-to-ceiling windows that frame iconic views of Central Park and the Hudson River. A private terrace wraps the entire floor, providing an outdoor oasis in the heart of the city.`,
    shortDescription: "Ultra-luxury penthouse with 360° Manhattan skyline views.",
    amenities: [
      "gym",
      "concierge",
      "doorman",
      "elevator",
      "smart-home",
      "city-view",
      "rooftop-deck",
      "wine-cellar",
      "home-theater",
      "spa"
    ],
    features: ["luxury", "smart-home"],
    yearBuilt: 2018,
    lotSize: 4500,
    condition: "excellent",
    hoaFees: 8500,
    propertyTax: 52000,
    walkScore: 98,
    transitScore: 100,
    badges: [
      { text: "Premium", variant: "premium" },
      { text: "Hot", variant: "hot" }
    ],
    virtualTourUrl: "#",
    listingDate: "2024-01-10",
    agent: {
      name: "Michael Ross",
      phone: "+1 (212) 555-0456",
      email: "michael.ross@haus.com",
      agency: "HAUS Prestige",
      rating: 4.8,
      reviewCount: 89,
      yearsExperience: 15
    },
    aiInsights: {
      investmentScore: 9.2,
      growthPotential: "+18% YoY",
      rentalYield: "3.8%",
      marketTrend: "up",
      demandLevel: "high",
      estimatedValueRange: {
        min: 4800000,
        max: 5600000,
        target: 5200000
      },
      suburbPerformance: {
        period: "12 Mo",
        change: 15.2
      }
    },
    inspections: [
      { date: "Oct 15", day: "Sunday", time: "2:00pm - 3:00pm" }
    ],
    guidePrice: 5200000,
    nearbyPlaces: [
      { category: "Education", name: "Dalton School", distance: "0.5 km" },
      { category: "Dining", name: "Le Bernardin", distance: "0.8 km" },
      { category: "Transport", name: "Grand Central", distance: "0.4 km" },
      { category: "Lifestyle", name: "Central Park", distance: "0.2 km" }
    ],
    floors: [
      { name: "Main Level", area: 2800 },
      { name: "Upper Level", area: 1700 }
    ],
    coordinates: { lat: 40.7614, lng: -73.9718 }
  },
  {
    id: "contemporary-townhouse",
    title: "Contemporary Townhouse",
    price: 1150000,
    priceDisplay: "$1.15M",
    location: "Austin, TX",
    address: "1847 South Congress Ave",
    suburb: "South Congress",
    state: "Texas",
    postcode: "78704",
    bedrooms: 3,
    bathrooms: 3,
    squareFootage: 1900,
    propertyType: "townhouse",
    listingType: "for-sale",
    images: [property3.src, property1.src, property2.src],
    imageUrl: property3.src,
    description: `This stunning contemporary townhouse in the heart of Austin's vibrant South Congress neighborhood represents the perfect blend of modern design and urban convenience. Recently renovated with premium finishes throughout.

The open-concept living area features polished concrete floors, custom built-ins, and walls of glass that flood the space with natural light. A private rooftop deck offers skyline views and the perfect setting for entertaining.`,
    shortDescription: "Modern townhouse in Austin's trendiest neighborhood.",
    amenities: [
      "rooftop-deck",
      "smart-home",
      "garage",
      "hardwood-floors",
      "high-ceilings",
      "city-view",
      "ev-charging"
    ],
    features: ["new-construction", "smart-home", "eco-friendly"],
    yearBuilt: 2022,
    lotSize: 2400,
    condition: "excellent",
    hoaFees: 450,
    propertyTax: 12000,
    walkScore: 95,
    transitScore: 65,
    badges: [
      { text: "Price Drop", variant: "price-drop" },
      { text: "Open House", variant: "open-house" }
    ],
    virtualTourUrl: "#",
    openHouseDate: "Sun, 1-4 PM",
    listingDate: "2024-01-08",
    lastPriceChange: {
      date: "2024-01-20",
      previousPrice: 1250000,
      currentPrice: 1150000
    },
    agent: {
      name: "Emma Wilson",
      phone: "+1 (512) 555-0789",
      email: "emma.wilson@haus.com",
      agency: "HAUS Austin",
      rating: 4.7,
      reviewCount: 56,
      yearsExperience: 8
    },
    aiInsights: {
      investmentScore: 7.9,
      growthPotential: "+15% YoY",
      rentalYield: "5.1%",
      marketTrend: "up",
      demandLevel: "high",
      estimatedValueRange: {
        min: 1050000,
        max: 1250000,
        target: 1150000
      },
      suburbPerformance: {
        period: "12 Mo",
        change: 18.3
      }
    },
    inspections: [
      { date: "Oct 14", day: "Saturday", time: "1:00pm - 4:00pm" },
      { date: "Oct 15", day: "Sunday", time: "1:00pm - 4:00pm" }
    ],
    guidePrice: 1150000,
    nearbyPlaces: [
      { category: "Education", name: "Travis Heights Elementary", distance: "0.6 km" },
      { category: "Dining", name: "Perla's", distance: "0.3 km" },
      { category: "Transport", name: "Congress Ave", distance: "0.1 km" },
      { category: "Lifestyle", name: "Barton Springs", distance: "1.5 km" }
    ],
    floors: [
      { name: "Ground Floor", area: 650 },
      { name: "Second Floor", area: 750 },
      { name: "Rooftop", area: 500 }
    ],
    coordinates: { lat: 30.2500, lng: -97.7500 }
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return mockProperties.find(property => property.id === id);
};

export const getPropertyByTitle = (title: string): Property | undefined => {
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  return mockProperties.find(property => property.id === slug);
};
