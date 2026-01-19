import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
  FolderOpen,
  Eye,
  Share2,
  Printer,
  Calendar,
  Check,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Document {
  id: string;
  name: string;
  category: string;
  type: string;
  size: string;
  date: string;
  status: 'current' | 'pending' | 'expired';
  url: string;
}

interface DocumentVaultProps {
  documents?: Document[];
  propertyAddress: string;
}

const DEFAULT_DOCUMENTS: Document[] = [
  // Legal & Contracts
  { id: '1', name: 'Contract of Sale', category: 'Legal', type: 'PDF', size: '2.4 MB', date: '2024-01-15', status: 'current', url: '#' },
  { id: '2', name: 'Section 32 Vendor Statement', category: 'Legal', type: 'PDF', size: '1.8 MB', date: '2024-01-15', status: 'current', url: '#' },
  { id: '3', name: 'Title Search', category: 'Legal', type: 'PDF', size: '856 KB', date: '2024-01-10', status: 'current', url: '#' },

  // Building & Inspection
  { id: '4', name: 'Building Inspection Report', category: 'Building', type: 'PDF', size: '4.2 MB', date: '2024-01-08', status: 'current', url: '#' },
  { id: '5', name: 'Pest Inspection Report', category: 'Building', type: 'PDF', size: '2.1 MB', date: '2024-01-08', status: 'current', url: '#' },
  { id: '6', name: 'Depreciation Schedule', category: 'Building', type: 'XLSX', size: '1.2 MB', date: '2024-01-12', status: 'pending', url: '#' },

  // Council & Zoning
  { id: '7', name: 'Zoning Certificate', category: 'Council', type: 'PDF', size: '456 KB', date: '2023-12-20', status: 'current', url: '#' },
  { id: '8', name: 'Flood Certificate', category: 'Council', type: 'PDF', size: '234 KB', date: '2023-12-20', status: 'current', url: '#' },
  { id: '9', name: 'Planning Certificate', category: 'Council', type: 'PDF', size: '678 KB', date: '2023-12-15', status: 'current', url: '#' },

  // Floor Plans & Images
  { id: '10', name: 'Ground Floor Plan', category: 'Floor Plans', type: 'PDF', size: '1.5 MB', date: '2024-01-01', status: 'current', url: '#' },
  { id: '11', name: 'First Floor Plan', category: 'Floor Plans', type: 'PDF', size: '1.3 MB', date: '2024-01-01', status: 'current', url: '#' },
  { id: '12', name: 'High-Res Image Gallery', category: 'Images', type: 'ZIP', size: '45.8 MB', date: '2024-01-15', status: 'current', url: '#' },
];

const DOCUMENT_CATEGORIES = [
  { id: 'legal', name: 'Legal & Contracts', icon: FileText, color: 'text-error' },
  { id: 'building', name: 'Building & Inspection', icon: Check, color: 'text-warning' },
  { id: 'council', name: 'Council & Zoning', icon: Calendar, color: 'text-info' },
  { id: 'floorplans', name: 'Floor Plans & Images', icon: Eye, color: 'text-success' },
];

export const DocumentVault: React.FC<DocumentVaultProps> = ({
  documents = DEFAULT_DOCUMENTS,
  propertyAddress,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewDoc, setPreviewDoc] = useState<Document | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['legal']));

  const filteredDocs = selectedCategory === 'all'
    ? documents
    : documents.filter(d => d.category.toLowerCase() === selectedCategory);

  const getStatusBadge = (status: Document['status']) => {
    switch (status) {
      case 'current':
        return <Badge className="bg-success/10 text-success border-success/20"><Check className="w-3 h-3 mr-1" />Current</Badge>;
      case 'pending':
        return <Badge className="bg-warning/10 text-warning border-warning/20"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'expired':
        return <Badge className="bg-error/10 text-error border-error/20"><AlertTriangle className="w-3 h-3 mr-1" />Expired</Badge>;
    }
  };

  const toggleCategory = (catId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(catId)) {
        newSet.delete(catId);
      } else {
        newSet.add(catId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-display-md font-display">Document Vault</h2>
        <Button variant="outline" className="border-haus-gold text-haus-gold">
          <Download className="w-4 h-4 mr-2" />
          Download All as ZIP
        </Button>
      </div>

      <Card className="border- haus-stone">
        <CardContent className="p-6">
          {/* Document Categories */}
          <div className="space-y-2">
            {DOCUMENT_CATEGORIES.map((category) => {
              const categoryDocs = documents.filter(d =>
                d.category.toLowerCase().includes(category.id.toLowerCase())
              );

              return (
                <div key={category.id} className="border border- haus-stone rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-haus-gold/10 rounded-lg flex items-center justify-center">
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="font-display font-medium">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{categoryDocs.length} documents</p>
                      </div>
                    </div>
                    {expandedCategories.has(category.id) ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedCategories.has(category.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border- haus-stone"
                      >
                        <div className="p-4 grid gap-2">
                          {categoryDocs.map((doc) => (
                            <div
                              key={doc.id}
                              className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
                            >
                              <div className="flex items-center gap-3 flex-1">
                                <FileText className="w-8 h-8 text-muted-foreground group-hover:text-haus-gold transition-colors" />
                                <div className="flex-1">
                                  <p className="font-space text-sm font-medium">{doc.name}</p>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                                    <span>{doc.size}</span>
                                    <span>•</span>
                                    <span>{doc.date}</span>
                                  </div>
                                </div>
                                {getStatusBadge(doc.status)}
                              </div>
                              <div className="flex items-center gap-2 ml-4">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => setPreviewDoc(doc)}
                                  className="h-8 w-8"
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Download className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* PDF Preview Modal */}
      {previewDoc && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewDoc(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-premium max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-display text-lg">{previewDoc.name}</h3>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Printer className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setPreviewDoc(null)}>
                  ✕
                </Button>
              </div>
            </div>
            <div className="aspect-[1/1.414] bg-secondary flex items-center justify-center">
              <div className="text-center">
                <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">PDF Preview</p>
                <p className="text-sm text-muted-foreground mt-2">{previewDoc.name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
