import { useState, useCallback, useRef } from 'react';

type VoiceState = 'idle' | 'connecting' | 'listening' | 'processing' | 'speaking' | 'error';

interface SearchData {
  location?: string;
  propertyType?: string;
  priceRange?: string;
  bedrooms?: string;
  amenities?: string[];
}

interface UseRealtimeVoiceProps {
  onSearchData: (data: SearchData) => void;
  apiKey: string;
}

export const useRealtimeVoice = ({ onSearchData, apiKey }: UseRealtimeVoiceProps) => {
  const [voiceState, setVoiceState] = useState<VoiceState>('idle');
  const sessionRef = useRef<any>(null);
  const agentRef = useRef<any>(null);

  const startVoiceSearch = useCallback(async () => {
    try {
      setVoiceState('connecting');
      // Stub implementation - just set to listening after a delay
      setTimeout(() => {
        setVoiceState('listening');
      }, 1000);
    } catch (error) {
      console.error('Voice search error:', error);
      setVoiceState('error');
      setTimeout(() => setVoiceState('idle'), 3000);
    }
  }, [apiKey, onSearchData]);

  const stopVoiceSearch = useCallback(async () => {
    try {
      if (sessionRef.current) {
        sessionRef.current = null;
      }
      agentRef.current = null;
      setVoiceState('idle');
    } catch (error) {
      console.error('Error stopping voice search:', error);
      setVoiceState('idle');
    }
  }, []);

  return {
    voiceState,
    startVoiceSearch,
    stopVoiceSearch,
  };
};
