import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  Video,
  Clock,
  Star,
  Calendar,
  Award,
  Languages,
  Check,
  ChevronRight,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PropertyAgent {
  name: string;
  phone?: string;
  email?: string;
  agency?: string;
  avatar?: string;
  rating?: number;
  reviewCount?: number;
  yearsExperience?: number;
  languages?: string[];
  specialties?: string[];
  responseTime?: string;
}

interface AgentContactSuiteProps {
  agent: PropertyAgent;
  propertyName: string;
}

export const AgentContactSuite: React.FC<AgentContactSuiteProps> = ({
  agent,
  propertyName,
}) => {
  const [chatOpen, setChatOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [questionOpen, setQuestionOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'agent'; content: string; time: string }>>([]);
  const [chatInput, setChatInput] = useState('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [questionText, setQuestionText] = useState('');

  const quickQuestions = [
    "Is this property still available?",
    "Can I schedule an inspection?",
    "What's the asking price?",
    "Are there any offers?",
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleSendChat = () => {
    if (!chatInput.trim()) return;

    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

    setChatMessages(prev => [...prev, {
      role: 'user',
      content: chatInput,
      time
    }]);
    setChatInput('');

    // Simulate agent response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        role: 'agent',
        content: `Thanks for your message about ${propertyName}. I'll be right with you! In the meantime, feel free to ask me anything about the property.`,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      }]);
    }, 1000);
  };

  const handleScheduleCallback = () => {
    if (!selectedDate || !selectedTime) return;
    setCallbackOpen(false);
    // Show confirmation toast
  };

  const handleAskQuestion = () => {
    if (!questionText.trim()) return;
    setQuestionOpen(false);
    setQuestionText('');
    // Show confirmation toast
  };

  const handleCall = () => {
    if (agent.phone) {
      window.location.href = `tel:${agent.phone}`;
    }
  };

  const handleEmail = () => {
    if (agent.email) {
      const subject = encodeURIComponent(`Inquiry about ${propertyName}`);
      const body = encodeURIComponent(`Hi ${agent.name},\n\nI'm interested in learning more about ${propertyName}.\n\nLooking forward to hearing from you.`);
      window.location.href = `mailto:${agent.email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Agent Profile Card */}
      <Card className="border- haus-stone overflow-hidden">
        <div className="relative h-24 bg-gradient-to-r from-haus-gold/20 to-haus-gold/5">
          <div className="absolute -bottom-12 left-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-haus-gold to-haus-gold/70 flex items-center justify-center text-4xl font-display text-white shadow-premium">
              {agent.name.charAt(0)}
            </div>
          </div>
          <div className="absolute top-4 right-4">
            {agent.responseTime && (
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <Clock className="w-3 h-3 mr-1" />
                {agent.responseTime}
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="pt-16 pb-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-display mb-1">{agent.name}</h3>
              <p className="text-haus-gold font-space text-sm">{agent.agency}</p>
            </div>

            {agent.rating && (
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(agent.rating!) ? 'fill-haus-gold text-haus-gold' : 'text-haus-stone'}`}
                    />
                  ))}
                </div>
                <span className="font-space">{agent.rating}</span>
                <span className="text-muted-foreground text-sm">({agent.reviewCount} reviews)</span>
              </div>
            )}

            {agent.specialties && agent.specialties.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {agent.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            )}

            {agent.languages && agent.languages.length > 0 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Languages className="w-4 h-4" />
                <span>{agent.languages.join(', ')}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Contact Options */}
      <Card className="border- haus-stone">
        <CardContent className="p-6">
          <h4 className="font-display text-lg mb-4">Contact Options</h4>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleCall}
              className="w-full bg-foreground text-background hover:bg-foreground/90"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button
              onClick={handleEmail}
              variant="outline"
              className="w-full border-haus-stone"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Button
              onClick={() => setChatOpen(true)}
              variant="outline"
              className="w-full border-haus-stone"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Live Chat
            </Button>
            <Button
              onClick={() => setCallbackOpen(true)}
              variant="outline"
              className="w-full border-haus-stone"
            >
              <Video className="w-4 h-4 mr-2" />
              Video Call
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t border- haus-stone">
            <Button
              onClick={() => setQuestionOpen(true)}
              variant="ghost"
              className="w-full text-haus-gold hover:bg-haus-gold/10"
            >
              <Clock className="w-4 h-4 mr-2" />
              Schedule Callback
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Agent's Active Listings */}
      <Card className="border- haus-stone">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-display text-lg">Active Listings</h4>
            <Button variant="ghost" size="sm" className="text-haus-gold">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-3 p-3 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer">
                <div className="w-20 h-16 bg-haus-stone rounded-lg flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-space font-medium text-sm truncate">
                    {item + 10} Wolseley Road, Point Piper
                  </p>
                  <p className="text-haus-gold font-space">${35 - item}.5M</p>
                  <p className="text-xs text-muted-foreground">5 beds • 4 baths • 892m²</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Sales */}
      <Card className="border- haus-stone">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-display text-lg">Recent Sales</h4>
            <Badge variant="outline" className="border-success text-success">
              <Award className="w-3 h-3 mr-1" />
              Top Performer
            </Badge>
          </div>
          <div className="space-y-3">
            {[
              { address: '8 Wolseley Road', price: '$32.5M', date: 'Mar 2024' },
              { address: '15 Wentworth Street', price: '$28.9M', date: 'Feb 2024' },
              { address: '3 Pacific Road', price: '$41.2M', date: 'Jan 2024' },
            ].map((sale, index) => (
              <div key={index} className="flex items-center justify-between p-3 border-b border- haus-stone last:border-0">
                <div>
                  <p className="font-space font-medium text-sm">{sale.address}</p>
                  <p className="text-xs text-muted-foreground">{sale.date}</p>
                </div>
                <p className="font-space text-success">{sale.price}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Live Chat Dialog */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-haus-gold flex items-center justify-center">
                <span className="text-white font-display">{agent.name.charAt(0)}</span>
              </div>
              <div>
                <DialogTitle className="text-lg">{agent.name}</DialogTitle>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
          </DialogHeader>

          <div className="h-80 overflow-y-auto mb-4 p-4 bg-secondary/30 rounded-xl space-y-3">
            {chatMessages.length === 0 ? (
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 mx-auto mb-3 text-haus-gold" />
                <p className="text-sm text-muted-foreground mb-4">Start a conversation with {agent.name}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setChatInput(question)}
                      className="px-3 py-1.5 text-xs bg-haus-gold/10 text-haus-gold rounded-full hover:bg-haus-gold/20 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === 'user'
                      ? 'bg-foreground text-background'
                      : 'bg-secondary text-foreground'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                    <p className="text-xs opacity-60 mt-1">{msg.time}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendChat()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 bg-secondary border border- haus-stone rounded-xl focus:outline-none focus:border-haus-gold"
            />
            <Button
              onClick={handleSendChat}
              disabled={!chatInput.trim()}
              size="icon"
              className="bg-haus-gold text-haus-black"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Callback Dialog */}
      <Dialog open={callbackOpen} onOpenChange={setCallbackOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Schedule a Video Call</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <Label>Select Date</Label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label>Select Time</Label>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`px-3 py-2 text-sm rounded-lg transition-all ${
                      selectedTime === slot
                        ? 'bg-haus-gold text-haus-black'
                        : 'bg-secondary hover:bg-secondary/70'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleScheduleCallback} className="flex-1 bg-haus-gold text-haus-black" disabled={!selectedDate || !selectedTime}>
                <Check className="w-4 h-4 mr-2" />
                Confirm
              </Button>
              <Button onClick={() => setCallbackOpen(false)} variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Question Dialog */}
      <Dialog open={questionOpen} onOpenChange={setQuestionOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ask a Question</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <Label>Your Question</Label>
              <Textarea
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="What would you like to know about this property?"
                rows={4}
                className="mt-2"
              />
            </div>

            <div className="flex gap-3">
              <Button onClick={handleAskQuestion} className="flex-1 bg-haus-gold text-haus-black" disabled={!questionText.trim()}>
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
              <Button onClick={() => setQuestionOpen(false)} variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
