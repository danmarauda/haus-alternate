import { Mic, MicOff, Loader2, Volume2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VoiceWaveform } from '@/components/VoiceWaveform';
import { cn } from '@/lib/utils';

type VoiceState = 'idle' | 'connecting' | 'listening' | 'processing' | 'speaking' | 'error';

interface VoiceSearchButtonProps {
  voiceState: VoiceState;
  onStart: () => void;
  onStop: () => void;
  className?: string;
  showAIPoweredBadge?: boolean;
}

export const VoiceSearchButton = ({ 
  voiceState, 
  onStart, 
  onStop,
  className,
  showAIPoweredBadge = true
}: VoiceSearchButtonProps) => {
  const isActive = voiceState !== 'idle';
  const isListening = voiceState === 'listening';
  
  const getIcon = () => {
    switch (voiceState) {
      case 'connecting':
      case 'processing':
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case 'listening':
        return <VoiceWaveform isActive={true} className="w-8" />;
      case 'speaking':
        return <Volume2 className="h-4 w-4" />;
      case 'error':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Mic className="h-4 w-4" />;
    }
  };

  const getStateText = () => {
    switch (voiceState) {
      case 'connecting':
        return 'Connecting...';
      case 'listening':
        return 'Listening...';
      case 'processing':
        return 'Processing...';
      case 'speaking':
        return 'Speaking...';
      case 'error':
        return 'Error';
      default:
        return 'Voice';
    }
  };

  const handleClick = () => {
    if (isActive) {
      onStop();
    } else {
      onStart();
    }
  };

  return (
    <div className="relative flex items-center gap-2">
      <Button
        onClick={handleClick}
        variant={isActive ? "default" : "outline"}
        size="lg"
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          "bg-black/10 border-white/10 backdrop-blur-xl text-white hover:bg-white/20",
          "focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan/50",
          {
            'bg-brand-cyan/20 border-brand-cyan/40 shadow-glow-cyan': isListening,
            'bg-accent/20 border-accent/30': voiceState === 'speaking',
            'bg-destructive/20 border-destructive/30': voiceState === 'error',
          },
          className
        )}
      >
        {/* Animated ring for listening state */}
        {isListening && (
          <>
            <div className="absolute inset-0 rounded-lg border-2 border-brand-cyan/50 animate-ping opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 via-brand-purple/10 to-brand-cyan/20 animate-gradient-shift" />
          </>
        )}
        
        <div className="flex items-center gap-2 relative z-10">
          {getIcon()}
          <span className="hidden sm:inline text-sm font-medium font-geist">
            {getStateText()}
          </span>
        </div>
      </Button>

      {/* AI-Powered Badge */}
      {showAIPoweredBadge && !isActive && (
        <Badge 
          className={cn(
            "absolute -top-2 -right-2 text-[9px] px-1.5 py-0.5",
            "bg-brand-purple/80 text-white border-brand-purple/50",
            "animate-pulse-glow shadow-glow-brand"
          )}
        >
          AI
        </Badge>
      )}
    </div>
  );
};
