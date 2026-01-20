import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Home,
  TreePine,
  Zap,
  Shield,
  FileText,
  Map,
  Wrench,
  Calendar,
  Check,
  X,
} from "lucide-react";

interface PropertyDNAProps {
  yearBuilt?: number;
  landSize?: number;
  floorArea?: number;
  energyRating?: number;
  heritageStatus?: string;
  topography?: string;
  aspect?: string;
  soilType?: string;
  floodZone?: boolean;
  bushfireRisk?: string;
  easements?: string;
  zoning?: string;
}

export const PropertyDNA: React.FC<PropertyDNAProps> = ({
  yearBuilt = 2018,
  landSize = 892,
  floorArea = 450,
  energyRating = 6.5,
  heritageStatus = 'None',
  topography = 'Gently Sloping',
  aspect = 'North-facing rear',
  soilType = 'Sandstone',
  floodZone = false,
  bushfireRisk = 'Low (BAL 12.5)',
  easements = 'None',
  zoning = 'R2 Low Density Residential',
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'building',
      title: 'Building',
      icon: Home,
      items: [
        { label: 'Quality Rating', value: '5 Star', visual: 'stars' },
        { label: 'Architecture Style', value: 'Contemporary Waterfront' },
        { label: 'Energy Efficiency', value: `${energyRating} Stars`, color: energyRating >= 6 ? 'success' : 'warning' },
        { label: 'Heritage Status', value: heritageStatus },
        { label: 'Year Built', value: yearBuilt.toString() },
      ],
    },
    {
      id: 'sustainability',
      title: 'Sustainability Features',
      icon: Zap,
      items: [
        { label: 'Solar Panels', value: '5kW System', icon: Check },
        { label: 'Battery Storage', value: 'Tesla Powerwall', icon: Check },
        { label: 'Rainwater Tank', value: '10,000L', icon: Check },
        { label: 'Double-glazed Windows', value: 'Yes', icon: Check },
        { label: 'LED Lighting', value: 'Throughout', icon: Check },
        { label: 'EV Charging', value: 'Tesla Wall Connector', icon: Check },
      ],
    },
    {
      id: 'smart-home',
      title: 'Smart Home Technology',
      icon: Wrench,
      items: [
        { label: 'Security System', value: 'Integrated Biometric' },
        { label: 'Climate Control', value: 'Multi-zone' },
        { label: 'Lighting', value: 'Automated' },
        { label: 'Voice Control', value: 'Google Home' },
      ],
    },
    {
      id: 'land',
      title: 'Land Information',
      icon: Map,
      items: [
        { label: 'Land Size', value: `${landSize}m²` },
        { label: 'Floor Area', value: `${floorArea}m²` },
        { label: 'Topography', value: topography },
        { label: 'Aspect', value: aspect },
        { label: 'Soil Type', value: soilType },
        { label: 'Flood Zone', value: floodZone ? 'Yes (1 in 100)' : 'No', color: floodZone ? 'error' : 'success' },
        { label: 'Bushfire Risk', value: bushfireRisk, color: 'success' },
        { label: 'Easements', value: easements },
      ],
    },
    {
      id: 'utilities',
      title: 'Utilities & Services',
      icon: Zap,
      items: [
        { label: 'Internet', value: 'NBN FTTP 1000Mbps', icon: Check },
        { label: 'Gas', value: 'Connected (Natural)', icon: Check },
        { label: 'Water', value: 'Mains + Tank Backup', icon: Check },
        { label: 'Sewer', value: 'Connected', icon: Check },
      ],
    },
    {
      id: 'legal',
      title: 'Legal & Compliance',
      icon: FileText,
      items: [
        { label: 'Title Type', value: 'Torrens Title' },
        { label: 'Zoning', value: zoning },
        { label: 'Permissible Uses', value: 'Single dwelling, dual occupancy (STCA)' },
        { label: 'Rental Restrictions', value: 'None' },
        { label: 'Bylaws', value: 'N/A (Free-standing)' },
      ],
    },
    {
      id: 'renovation',
      title: 'Renovation History',
      icon: Calendar,
      items: [
        { label: '2018', value: 'Original Construction' },
        { label: '2023', value: 'Major Refurbishment ($645K total)' },
        { label: 'Kitchen', value: 'Upgrade ($250K)' },
        { label: 'Master Suite', value: 'Renovation ($180K)' },
        { label: 'Landscaping', value: 'Including Pool ($120K)' },
        { label: 'Other', value: 'HVAC, Lighting ($95K)' },
      ],
    },
  ];

  const renderStars = (rating: string) => {
    const match = rating.match(/(\d+)/);
    const count = match ? parseInt(match[1]) : 0;
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-sm ${i < count ? 'text-haus-gold fill-haus-gold' : 'text-haus-stone'}`}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-display-md font-display">Property DNA</h2>

      <div className="space-y-2">
        {sections.map((section) => (
          <Card key={section.id} className="border- haus-stone overflow-hidden">
            <button
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-haus-gold/10 rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-haus-gold" />
                </div>
                <h3 className="font-display font-medium">{section.title}</h3>
              </div>
              {expandedSection === section.id ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>

            {expandedSection === section.id && (
              <div className="p-4 pt-0 grid sm:grid-cols-2 gap-3">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between p-3 bg-secondary/30 rounded-lg"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        {"visual" in item && item.visual === 'stars' ? (
                          renderStars(item.value)
                        ) : ("icon" in item && item.icon !== undefined) ? (
                          <Check className="w-4 h-4 text-success flex-shrink-0" />
                        ) : null}
                        <p className={`font-space text-sm font-medium ${
                          "color" in item && item.color === 'success' ? 'text-success' :
                          "color" in item && item.color === 'warning' ? 'text-warning' :
                          "color" in item && item.color === 'error' ? 'text-error' :
                          ''
                        }`}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
