import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Share2,
  Download,
  Bell,
  BellOff,
  FolderPlus,
  Star,
  X,
  Check,
  Mail,
  Link,
  FileText,
  Home,
  TrendingUp,
  MapPin,
  Calendar,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SavedPropertiesProps {
  propertyId: string;
  propertyAddress: string;
  propertyPrice: number;
  propertyImage?: string;
  isSaved?: boolean;
}

interface Collection {
  id: string;
  name: string;
  count: number;
  icon?: string;
}

interface AlertSettings {
  priceDrop: boolean;
  newListing: boolean;
  openHome: boolean;
  sold: boolean;
  priceThreshold?: number;
}

export const SavedProperties: React.FC<SavedPropertiesProps> = ({
  propertyId,
  propertyAddress,
  propertyPrice,
  propertyImage,
  isSaved: initialIsSaved = false,
}) => {
  const [isSaved, setIsSaved] = useState(initialIsSaved);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showCollectionsDialog, setShowCollectionsDialog] = useState(false);
  const [showBrochureDialog, setShowBrochureDialog] = useState(false);
  const [showAlertsDialog, setShowAlertsDialog] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const [collectionName, setCollectionName] = useState('');
  const [collections, setCollections] = useState<Collection[]>([
    { id: '1', name: 'Favorites', count: 12, icon: '❤️' },
    { id: '2', name: 'Potential Investments', count: 5, icon: '💰' },
    { id: '3', name: 'Weekend Viewings', count: 3, icon: '🏠' },
  ]);
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [alertSettings, setAlertSettings] = useState<AlertSettings>({
    priceDrop: true,
    newListing: false,
    openHome: true,
    sold: false,
    priceThreshold: propertyPrice * 0.95,
  });
  const [brochureFormat, setBrochureFormat] = useState<'pdf' | 'email' | 'print'>('pdf');

  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
    if (!isSaved) {
      // Animation for saving
    }
  };

  const handleCopyLink = () => {
    const link = `${window.location.origin}/property/${propertyId}`;
    setShareLink(link);
    navigator.clipboard.writeText(link);
  };

  const handleCreateCollection = () => {
    if (!collectionName.trim()) return;
    const newCollection: Collection = {
      id: Date.now().toString(),
      name: collectionName,
      count: 1,
      icon: '📁',
    };
    setCollections([...collections, newCollection]);
    setCollectionName('');
  };

  const handleAddToCollection = (collectionId: string) => {
    // In a real app, this would make an API call
    console.log('Adding to collection:', collectionId);
    setShowCollectionsDialog(false);
  };

  const handleShareEmail = () => {
    const subject = encodeURIComponent(`Check out this property: ${propertyAddress}`);
    const body = encodeURIComponent(
      `I thought you might be interested in this property:\n\n${propertyAddress}\nPrice: $${propertyPrice.toLocaleString()}\n\nView it here: ${shareLink || window.location.href}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleDownloadBrochure = () => {
    // In a real app, this would generate and download a PDF
    console.log('Downloading brochure as:', brochureFormat);
    setShowBrochureDialog(false);
  };

  const handleToggleAlerts = () => {
    setAlertsEnabled(!alertsEnabled);
    if (!alertsEnabled) {
      setShowAlertsDialog(true);
    }
  };

  return (
    <>
      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          variant={isSaved ? "default" : "outline"}
          size={isSaved ? "default" : "icon"}
          onClick={handleSaveToggle}
          className={isSaved ? "bg-haus-gold text-haus-black" : ""}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          {isSaved && <span className="ml-2">Saved</span>}
        </Button>

        <Button variant="outline" size="icon" onClick={() => setShowShareDialog(true)}>
          <Share2 className="w-4 h-4" />
        </Button>

        <Button variant="outline" size="icon" onClick={handleToggleAlerts}>
          {alertsEnabled ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
        </Button>

        <Button variant="outline" size="icon" onClick={() => setShowBrochureDialog(true)}>
          <Download className="w-4 h-4" />
        </Button>
      </div>

      {/* Share Dialog */}
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Property</DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="link" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="link">Link</TabsTrigger>
              <TabsTrigger value="collections">Collections</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
            </TabsList>

            <TabsContent value="link" className="space-y-4">
              <div>
                <Label>Share Link</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    value={shareLink || `${window.location.origin}/property/${propertyId}`}
                    readOnly
                    className="flex-1"
                  />
                  <Button onClick={handleCopyLink} className="bg-haus-gold text-haus-black">
                    <Link className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="w-full" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}>
                  Share on Facebook
                </Button>
                <Button variant="outline" className="w-full" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check out this property!`, '_blank')}>
                  Share on Twitter
                </Button>
                <Button variant="outline" className="w-full" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}>
                  Share on LinkedIn
                </Button>
                <Button variant="outline" className="w-full" onClick={() => window.open(`whatsapp://send?text=${encodeURIComponent(`Check out this property: ${propertyAddress} - ${window.location.href}`)}`, '_blank')}>
                  Share on WhatsApp
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="collections" className="space-y-4">
              <div className="space-y-2">
                <Label>Save to Collection</Label>
                {collections.map((collection) => (
                  <button
                    key={collection.id}
                    onClick={() => handleAddToCollection(collection.id)}
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-2xl">{collection.icon}</span>
                    <div className="flex-1 text-left">
                      <p className="font-medium">{collection.name}</p>
                      <p className="text-xs text-muted-foreground">{collection.count} properties</p>
                    </div>
                    <Check className="w-4 h-4 text-haus-gold" />
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="New collection name"
                  value={collectionName}
                  onChange={(e) => setCollectionName(e.target.value)}
                />
                <Button
                  onClick={handleCreateCollection}
                  disabled={!collectionName.trim()}
                  className="bg-haus-gold text-haus-black"
                >
                  <FolderPlus className="w-4 h-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="email" className="space-y-4">
              <div className="text-center py-6">
                <Mail className="w-12 h-12 mx-auto mb-4 text-haus-gold" />
                <p className="mb-4">Share this property via email</p>
                <Button onClick={handleShareEmail} className="bg-haus-gold text-haus-black">
                  <Mail className="w-4 h-4 mr-2" />
                  Open Email Client
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Brochure Dialog */}
      <Dialog open={showBrochureDialog} onOpenChange={setShowBrochureDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Property Brochure</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <Label>Select Format</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {(['pdf', 'email', 'print'] as const).map((format) => (
                  <button
                    key={format}
                    onClick={() => setBrochureFormat(format)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      brochureFormat === format
                        ? 'border-haus-gold bg-haus-gold/5'
                        : 'border-haus-stone hover:border-haus-gold/50'
                    }`}
                  >
                    <div className="text-center">
                      <FileText className={`w-6 h-6 mx-auto mb-2 ${
                        brochureFormat === format ? 'text-haus-gold' : 'text-muted-foreground'
                      }`} />
                      <p className="text-sm font-medium capitalize">{format}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <Card className="bg-secondary/30 border-0">
              <CardContent className="p-4">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-haus-gold" />
                  Brochure Includes
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span>High-resolution property images</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span>Detailed floor plans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span>Property specifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span>Neighborhood insights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span>Investment analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span>Agent contact information</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button onClick={handleDownloadBrochure} className="w-full bg-haus-gold text-haus-black">
              <Download className="w-4 h-4 mr-2" />
              Generate {brochureFormat === 'pdf' ? 'PDF' : brochureFormat === 'email' ? 'Email' : 'Print'} Brochure
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Alert Settings Dialog */}
      <Dialog open={showAlertsDialog} onOpenChange={setShowAlertsDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Property Alerts</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-haus-gold/10 rounded-xl">
              <div>
                <p className="font-medium">Enable Alerts</p>
                <p className="text-sm text-muted-foreground">Get notified about updates to this property</p>
              </div>
              <button
                onClick={() => setAlertsEnabled(!alertsEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  alertsEnabled ? 'bg-haus-gold' : 'bg-secondary'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-premium"
                  animate={{ left: alertsEnabled ? 'calc(100% - 20px)' : '4px' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </div>

            <div className="space-y-3">
              <Label>Alert Preferences</Label>

              <label className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-error" />
                  <div>
                    <p className="font-medium">Price Drop</p>
                    <p className="text-xs text-muted-foreground">Alert me if the price decreases</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={alertSettings.priceDrop}
                  onChange={(e) => setAlertSettings({ ...alertSettings, priceDrop: e.target.checked })}
                  className="w-5 h-5 rounded border-haus-stone text-haus-gold focus:ring-haus-gold"
                />
              </label>

              {alertSettings.priceDrop && (
                <div className="ml-8 p-3 bg-secondary/20 rounded-lg">
                  <Label>Alert Threshold</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-muted-foreground">Alert me if price drops below:</span>
                    <Input
                      type="number"
                      value={alertSettings.priceThreshold || ''}
                      onChange={(e) => setAlertSettings({ ...alertSettings, priceThreshold: Number(e.target.value) })}
                      className="w-32"
                    />
                  </div>
                </div>
              )}

              <label className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-info" />
                  <div>
                    <p className="font-medium">New Listing</p>
                    <p className="text-xs text-muted-foreground">Similar properties in this area</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={alertSettings.newListing}
                  onChange={(e) => setAlertSettings({ ...alertSettings, newListing: e.target.checked })}
                  className="w-5 h-5 rounded border-haus-stone text-haus-gold focus:ring-haus-gold"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-medium">Open Home</p>
                    <p className="text-xs text-muted-foreground">Upcoming inspection times</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={alertSettings.openHome}
                  onChange={(e) => setAlertSettings({ ...alertSettings, openHome: e.target.checked })}
                  className="w-5 h-5 rounded border-haus-stone text-haus-gold focus:ring-haus-gold"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-warning" />
                  <div>
                    <p className="font-medium">Sold Status</p>
                    <p className="text-xs text-muted-foreground">When this property is sold</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={alertSettings.sold}
                  onChange={(e) => setAlertSettings({ ...alertSettings, sold: e.target.checked })}
                  className="w-5 h-5 rounded border-haus-stone text-haus-gold focus:ring-haus-gold"
                />
              </label>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setShowAlertsDialog(false)} className="flex-1 bg-haus-gold text-haus-black">
                <Check className="w-4 h-4 mr-2" />
                Save Alerts
              </Button>
              <Button onClick={() => setShowAlertsDialog(false)} variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Toast (shown when saving) */}
      <AnimatePresence>
        {isSaved && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Card className="bg-success text-success-foreground border-success">
              <CardContent className="p-4 flex items-center gap-3">
                <Check className="w-5 h-5" />
                <div>
                  <p className="font-medium">Property Saved!</p>
                  <p className="text-sm opacity-90">Added to your favorites</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
