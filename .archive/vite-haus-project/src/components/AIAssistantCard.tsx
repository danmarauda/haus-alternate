import { Bot, MessageCircle, Send, Sparkles, ArrowRight, Loader2, User } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const SUGGESTED_PROMPTS = [
  "Analyze this property's investment potential",
  "Compare these 3 listings",
  "Draft an offer letter",
  "Explain the buying process"
];

const AI_RESPONSE = `Based on my analysis of 15 key factors, this property shows strong investment potential:

**Growth Score: 8.7/10**
• Suburb has 12% YoY growth
• Rental yield: 4.2% (above average)
• Infrastructure projects nearby
• Low days-on-market (avg 21 days)

I recommend proceeding with further due diligence.`;

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

type DemoState = 'idle' | 'typing' | 'responding' | 'complete';

export const AIAssistantCard = () => {
  const [demoState, setDemoState] = useState<DemoState>('idle');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typingText, setTypingText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [selectedPrompt, setSelectedPrompt] = useState("");

  const startDemo = useCallback((prompt: string) => {
    setSelectedPrompt(prompt);
    setMessages([{ role: 'user', content: prompt }]);
    setDemoState('responding');
    setTypingText("");
    setCharIndex(0);
  }, []);

  const resetDemo = useCallback(() => {
    setDemoState('idle');
    setMessages([]);
    setTypingText("");
    setCharIndex(0);
    setSelectedPrompt("");
  }, []);

  useEffect(() => {
    if (demoState === 'responding' && charIndex < AI_RESPONSE.length) {
      const timer = setTimeout(() => {
        setTypingText(AI_RESPONSE.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 15 + Math.random() * 10);
      return () => clearTimeout(timer);
    } else if (demoState === 'responding' && charIndex >= AI_RESPONSE.length) {
      setMessages(prev => [...prev, { role: 'assistant', content: AI_RESPONSE }]);
      setDemoState('complete');
    }
  }, [demoState, charIndex]);

  return (
    <section className="w-full rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur shadow-2xl overflow-hidden group hover:ring-foreground/20 transition-all duration-300">
      <div className="flex items-center justify-between p-5 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-muted ring-1 ring-border flex items-center justify-center">
            <Bot className="w-4 h-4 text-foreground" />
          </div>
          <h2 className="text-foreground font-medium tracking-tight">AI Property Assistant</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted text-foreground text-xs font-medium">
            <Sparkles className="w-3 h-3" />
            GPT-4 Powered
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="rounded-xl bg-muted/50 ring-1 ring-border overflow-hidden">
          <div className="min-h-[200px] max-h-[280px] p-4 space-y-4 overflow-y-auto">
            {demoState === 'idle' && (
              <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-muted ring-1 ring-border flex items-center justify-center mb-3">
                  <MessageCircle className="w-5 h-5 text-foreground" />
                </div>
                <p className="text-sm text-foreground font-medium">Ask me anything about real estate</p>
                <p className="text-xs text-muted-foreground mt-1">Click a prompt below to see me in action</p>
              </div>
            )}

            {messages.find(m => m.role === 'user') && (
              <div className="flex items-start gap-3 animate-fade-up">
                <div className="w-8 h-8 rounded-lg bg-muted ring-1 ring-border flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1 p-3 rounded-lg bg-card ring-1 ring-border">
                  <p className="text-sm text-foreground">{messages[0].content}</p>
                </div>
              </div>
            )}

            {demoState === 'responding' && (
              <div className="flex items-start gap-3 animate-fade-up">
                <div className="w-8 h-8 rounded-lg bg-foreground ring-1 ring-border flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-background" />
                </div>
                <div className="flex-1 p-3 rounded-lg bg-muted/50 ring-1 ring-border">
                  {charIndex === 0 ? (
                    <div className="flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin text-foreground" />
                      <span className="text-xs text-muted-foreground">HAUS AI is thinking...</span>
                    </div>
                  ) : (
                    <div className="text-sm text-foreground whitespace-pre-wrap">
                      {typingText}
                      <span className="animate-pulse">|</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {demoState === 'complete' && messages.find(m => m.role === 'assistant') && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-foreground ring-1 ring-border flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-background" />
                </div>
                <div className="flex-1 p-3 rounded-lg bg-muted/50 ring-1 ring-border">
                  <div className="text-sm text-foreground whitespace-pre-wrap">
                    {messages.find(m => m.role === 'assistant')?.content}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-border/60 bg-card/50">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about properties, investments, market trends..."
                className="flex-1 px-3 py-2 rounded-lg bg-muted/50 ring-1 ring-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-foreground/30"
                readOnly
              />
              <button className="w-9 h-9 rounded-lg bg-foreground flex items-center justify-center text-background hover:bg-foreground/90 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-xs text-muted-foreground">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => demoState === 'idle' ? startDemo(prompt) : resetDemo()}
                className={`px-3 py-1.5 rounded-full text-xs ring-1 transition-all ${
                  selectedPrompt === prompt
                    ? 'bg-foreground/10 ring-foreground/30 text-foreground'
                    : 'bg-muted/40 ring-border text-foreground hover:ring-foreground/20 hover:bg-muted/60'
                }`}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">
          Try AI Assistant
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
