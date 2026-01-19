export const HausLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
            <path d="M8 1.5L3 5.5V14.5H6V10.5H10V14.5H13V5.5L8 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor"/>
          </svg>
        </div>
      </div>
      <div className="text-xl font-bold tracking-tight text-foreground font-geist">
        HAUS
      </div>
    </div>
  );
};