import { Mic, Play, Square, CheckCircle2, Sparkles, Quote, Zap, Target, Clock } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { VoiceWaveform } from "./VoiceWaveform";

const DEMO_QUERIES = [
  "3 bedroom house in Melbourne with good schools nearby",
  "Investment property with high rental yield in Brisbane",
  "Waterfront apartment with city views under 1.5 million",
  "Family home with courtyard near parks in Sydney"
];

const DEMO_RESULTS = [
  { address: "42 Park Lane, Richmond", price: "$1,250,000", beds: 3, baths: 2, score: 9.2 },
  { address: "18 Harbour View, Southbank", price: "$1,180,000", beds: 3, baths: 2, score: 8.8 },
  { address: "7 Garden Street, Hawthorn", price: "$1,320,000", beds: 4, baths: 2, score: 8.5 },
];

type DemoState = 'idle' | 'listening' | 'processing' | 'results';

export const VoiceSearchCard = () => {
  const [demoState, setDemoState] = useState<DemoState>('idle');
  const [currentQuery, setCurrentQuery] = useState("");
  const [displayedQuery, setDisplayedQuery] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const runDemo = useCallback(() => {
    const query = DEMO_QUERIES[Math.floor(Math.random() * DEMO_QUERIES.length)];
    setCurrentQuery(query);
    setDisplayedQuery("");
    setCharIndex(0);
    setDemoState('listening');
  }, []);

  const stopDemo = useCallback(() => {
    setDemoState('idle');
    setDisplayedQuery("");
    setCharIndex(0);
  }, []);

  useEffect(() => {
    if (demoState === 'listening' && charIndex < currentQuery.length) {
      const timer = setTimeout(() => {
        setDisplayedQuery(currentQuery.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50 + Math.random() * 30);
      return () => clearTimeout(timer);
    } else if (demoState === 'listening' && charIndex >= currentQuery.length) {
      const timer = setTimeout(() => setDemoState('processing'), 500);
      return () => clearTimeout(timer);
    }
  }, [demoState, charIndex, currentQuery]);

  useEffect(() => {
    if (demoState === 'processing') {
      const timer = setTimeout(() => setDemoState('results'), 1500);
      return () => clearTimeout(timer);
    }
  }, [demoState]);

  return (
    <section className="w-full rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur shadow-2xl overflow-hidden group hover:ring-foreground/20 transition-all duration-300">
      <div className="flex items-center justify-between p-5 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-muted ring-1 ring-border flex items-center justify-center">
            <Mic className="w-4 h-4 text-foreground" />
          </div>
          <h2 className="text-foreground font-medium tracking-tight">Voice‑First Property Search</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted text-foreground text-xs font-medium">
            <Sparkles className="w-3 h-3" />
            AI-Powered
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="rounded-xl bg-muted/50 ring-1 ring-border p-4">
          <div className="flex items-center gap-4">
            {demoState === 'idle' ? (
              <button 
                onClick={runDemo}
                className="w-12 h-12 rounded-xl bg-foreground ring-1 ring-border flex items-center justify-center text-background hover:bg-foreground/90 transition-colors"
              >
                <Play className="w-5 h-5 ml-0.5" />
              </button>
            ) : (
              <button 
                onClick={stopDemo}
                className="w-12 h-12 rounded-xl bg-destructive/80 ring-1 ring-destructive/50 flex items-center justify-center text-white hover:scale-105 transition-transform"
              >
                <Square className="w-4 h-4" />
              </button>
            )}
            <div className="flex-1">
              {demoState === 'idle' && (
                <>
                  <p className="text-foreground text-sm font-medium">Try the Demo</p>
                  <p className="text-xs text-muted-foreground">Click play to see voice search in action</p>
                </>
              )}
              {demoState === 'listening' && (
                <>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <p className="text-foreground text-sm font-medium">Listening...</p>
                  </div>
                  <VoiceWaveform isActive={true} className="mt-2 h-8" />
                </>
              )}
              {demoState === 'processing' && (
                <>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-warning animate-pulse" />
                    <p className="text-foreground text-sm font-medium">Processing query...</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Searching 50,000+ listings</p>
                </>
              )}
              {demoState === 'results' && (
                <>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <p className="text-foreground text-sm font-medium">Search Complete</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Found 127 matching properties in 89ms</p>
                </>
              )}
            </div>
          </div>

          {(demoState === 'listening' || demoState === 'processing' || demoState === 'results') && (
            <div className="mt-4 p-3 rounded-lg bg-card/80 ring-1 ring-border">
              <p className="text-xs text-muted-foreground mb-1">Recognized query:</p>
              <p className="text-sm text-foreground">
                "{displayedQuery || currentQuery}"
                {demoState === 'listening' && <span className="animate-pulse">|</span>}
              </p>
            </div>
          )}
        </div>

        {demoState === 'results' && (
          <div className="mt-4 space-y-2 animate-fade-up">
            {DEMO_RESULTS.map((result, i) => (
              <div 
                key={i}
                className="p-3 rounded-lg bg-card/60 ring-1 ring-border hover:ring-foreground/20 transition-all cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-foreground font-medium">{result.address}</p>
                    <p className="text-xs text-muted-foreground">{result.beds} bed • {result.baths} bath</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground font-semibold">{result.price}</p>
                    <p className="text-xs text-muted-foreground">Score: {result.score}/10</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {demoState === 'idle' && (
          <div className="mt-4 grid sm:grid-cols-2 gap-2">
            {DEMO_QUERIES.map((query, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentQuery(query);
                  setDisplayedQuery("");
                  setCharIndex(0);
                  setDemoState('listening');
                }}
                className="p-3 rounded-lg bg-muted/40 ring-1 ring-border text-xs text-foreground text-left hover:ring-foreground/20 hover:bg-muted/60 transition-all"
              >
                "{query}"
              </button>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between p-3 rounded-lg bg-muted/30 ring-1 ring-border/50">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Target className="w-3 h-3 text-success" />
            <span className="text-foreground font-medium">98%</span> accuracy
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Zap className="w-3 h-3 text-warning" />
            <span className="text-foreground font-medium">50K+</span> daily queries
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3 h-3 text-foreground" />
            <span className="text-foreground font-medium">&lt;100ms</span> response
          </div>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-muted/30 ring-1 ring-border/50">
          <Quote className="w-5 h-5 text-muted-foreground mb-2" />
          <p className="text-sm text-foreground italic">
            "Voice search saved me 20 hours per month. I can find properties while driving between inspections."
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background text-xs font-semibold">
              SJ
            </div>
            <div>
              <p className="text-xs text-foreground font-medium">Sarah Johnson</p>
              <p className="text-xs text-muted-foreground">Senior Agent, Ray White Melbourne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
