import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  Utensils,
  Coffee,
  ShoppingBag,
  Train,
  Car,
  Shield,
  Calendar,
  TrendingUp,
  Building,
  TreePine,
} from "lucide-react";

interface NeighborhoodInsightsProps {
  suburb?: string;
  nearbyPlaces?: Array<{
    category: string;
    name: string;
    distance: string;
    rating?: number;
  }>;
}

export const NeighborhoodInsights: React.FC<NeighborhoodInsightsProps> = ({
  suburb = 'Point Piper',
  nearbyPlaces = [],
}) => {
  // Simulated demographic data
  const demographics = {
    population: 12456,
    medianAge: 42,
    householdIncome: 185000,
    familyHouseholds: 68,
  };

  const education = [
    { name: 'Point Piper Public School', type: 'Primary', distance: '0.3km', rating: 9.2 },
    { name: 'Rose Bay Public School', type: 'Primary', distance: '1.2km', rating: 8.8 },
    { name: 'Rose Bay Secondary College', type: 'Secondary', distance: '1.5km', rating: 8.5 },
    { name: 'Kincoppal Rose Bay', type: 'Private', distance: '1.8km', rating: 9.0 },
    { name: 'SCEGGS Redlands', type: 'Private', distance: '2.5km', rating: 9.3 },
  ];

  const lifestyle = [
    { category: 'Restaurants', count: 23, radius: '1km', icon: Utensils },
    { category: 'Cafes', count: 12, radius: '500m', icon: Coffee },
    { category: 'Bars', count: 8, radius: '1km', icon: Coffee },
    { category: 'Galleries', count: 4, radius: '2km', icon: ShoppingBag },
    { category: 'Parks', count: 6, radius: '1km', icon: TreePine },
  ];

  const transport = [
    { type: 'CBD', time: '25 min', mode: 'car' },
    { type: 'Train Station', time: '12 min', mode: 'walk' },
    { type: 'Bus Stops', count: 3, radius: '500m' },
    { type: 'Airport', time: '35 min', mode: 'drive' },
  ];

  const safety = {
    overallScore: 92,
    propertyCrime: 'Low',
    violentCrime: 'Very Low',
    vandalism: 'Low',
    neighborhoodWatch: 'Yes',
  };

  const futureDevelopments = [
    { name: 'Point Piper Residences', type: 'Residential', status: 'Under Construction', completion: '2025', distance: '200m', impact: 'neutral' },
    { name: 'Rose Bay Promenade', type: 'Commercial', status: 'Approved', completion: '2024', distance: '500m', impact: 'positive' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-display-md font-display">Neighborhood Insights</h2>

      {/* Demographics */}
      <Card className="border- haus-stone">
        <CardContent className="p-6">
          <h3 className="font-display text-lg mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-haus-gold" />
            Demographics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-secondary/30 rounded-xl">
              <p className="text-2xl font-space">{demographics.population.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Population</p>
            </div>
            <div className="text-center p-4 bg-secondary/30 rounded-xl">
              <p className="text-2xl font-space">{demographics.medianAge}</p>
              <p className="text-xs text-muted-foreground">Median Age</p>
            </div>
            <div className="text-center p-4 bg-secondary/30 rounded-xl">
              <p className="text-2xl font-space">${demographics.householdIncome.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Median Income</p>
            </div>
            <div className="text-center p-4 bg-secondary/30 rounded-xl">
              <p className="text-2xl font-space">{demographics.familyHouseholds}%</p>
              <p className="text-xs text-muted-foreground">Family Households</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="border- haus-stone">
        <CardContent className="p-6">
          <h3 className="font-display text-lg mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-haus-gold" />
            Education
          </h3>
          <div className="space-y-3">
            {education.map((school, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-space font-medium">{school.name}</p>
                    <Badge variant="outline" className="text-xs">{school.type}</Badge>
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span>{school.distance}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-haus-gold text-haus-gold" />
                      {school.rating}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm">View Catchment</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lifestyle */}
      <Card className="border- haus-stone">
        <CardContent className="p-6">
          <h3 className="font-display text-lg mb-4">Lifestyle</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            {lifestyle.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-32 text-center p-4 bg-secondary/30 rounded-xl">
                <item.icon className="w-8 h-8 mx-auto mb-2 text-haus-gold" />
                <p className="font-space font-medium">{item.count}</p>
                <p className="text-xs text-muted-foreground">{item.category}</p>
                <p className="text-xs text-muted-foreground">within {item.radius}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transport */}
      <Card className="border- haus-stone">
        <CardContent className="p-6">
          <h3 className="font-display text-lg mb-4 flex items-center gap-2">
            <Train className="w-5 h-5 text-haus-gold" />
            Transport
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {transport.map((item, index) => (
              <div key={index} className="p-3 bg-secondary/30 rounded-lg">
                <p className="text-xs text-muted-foreground">{item.type}</p>
                <p className="font-space font-medium flex items-center gap-1">
                  {item.mode === 'car' && <Car className="w-4 h-4" />}
                  {item.mode === 'walk' && <Users className="w-4 h-4" />}
                  {item.mode === 'drive' && <Car className="w-4 h-4" />}
                  {item.time}
                  {item.count && ` (${item.count} stops)`}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Safety */}
      <Card className="border- haus-stone">
        <CardContent className="p-6">
          <h3 className="font-display text-lg mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-haus-gold" />
            Safety
          </h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full border-4 border-haus-gold flex items-center justify-center">
              <span className="text-2xl font-space font-bold text-haus-gold">{safety.overallScore}</span>
            </div>
            <div>
              <p className="font-display text-lg">Very Safe</p>
              <p className="text-sm text-muted-foreground">Safety score out of 100</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center justify-between p-2 bg-success/5 rounded">
              <span className="text-muted-foreground">Property Crime</span>
              <span className="text-success font-medium">{safety.propertyCrime}</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-success/5 rounded">
              <span className="text-muted-foreground">Violent Crime</span>
              <span className="text-success font-medium">{safety.violentCrime}</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-success/5 rounded">
              <span className="text-muted-foreground">Vandalism</span>
              <span className="text-success font-medium">{safety.vandalism}</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-success/5 rounded">
              <span className="text-muted-foreground">Neighborhood Watch</span>
              <span className="text-success font-medium">{safety.neighborhoodWatch}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Developments */}
      <Card className="border- haus-stone">
        <CardContent className="p-6">
          <h3 className="font-display text-lg mb-4 flex items-center gap-2">
            <Building className="w-5 h-5 text-haus-gold" />
            Future Developments
          </h3>
          <div className="space-y-3">
            {futureDevelopments.map((dev, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border- haus-stone rounded-lg">
                <div className="flex-1">
                  <p className="font-space font-medium">{dev.name}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-xs">{dev.type}</Badge>
                    <span>•</span>
                    <span>{dev.status}</span>
                    <span>•</span>
                    <span>{dev.completion}</span>
                    <span>•</span>
                    <span>{dev.distance}</span>
                  </div>
                </div>
                <Badge className={
                  dev.impact === 'positive' ? 'bg-success/10 text-success border-success/20' :
                  dev.impact === 'negative' ? 'bg-error/10 text-error border-error/20' :
                  'bg-secondary text-muted-foreground'
                }>
                  {dev.impact}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.81 6.38L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
