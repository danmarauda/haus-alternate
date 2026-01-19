import { MailPlus } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
      <div className="rounded-2xl bg-card/80 ring-1 ring-border/60 backdrop-blur p-6 text-center">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight">Welcome to the new home of homes.</h2>
        <p className="text-sm text-muted-foreground mt-1">Join the HAUS waitlist for early access.</p>
        <form className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
          <input 
            type="email" 
            placeholder="your.email@example.com" 
            className="w-full sm:w-2/3 px-4 py-2.5 rounded-lg bg-background ring-1 ring-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-accent focus:ring-2" 
          />
          <button 
            type="submit" 
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            <MailPlus className="w-4 h-4" />
            Request Early Access
          </button>
        </form>
      </div>
    </section>
  );
};