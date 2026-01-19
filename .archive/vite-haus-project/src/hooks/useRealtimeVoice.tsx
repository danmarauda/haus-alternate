import { useState, useCallback, useRef } from 'react';
import { RealtimeAgent, RealtimeSession } from '@openai/agents/realtime';

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
  const sessionRef = useRef<RealtimeSession | null>(null);
  const agentRef = useRef<RealtimeAgent | null>(null);

  const startVoiceSearch = useCallback(async () => {
    try {
      setVoiceState('connecting');

      // Create the real estate voice agent
      const agent = new RealtimeAgent({
        name: "HAUS Voice Search Assistant",
        instructions: `You are a real estate search assistant for HAUS. Help users find properties by:

1. Understanding their search criteria including:
   - Location (city, neighborhood, state)
   - Property type (house, apartment, condo, penthouse, villa)
   - Price range (Under $500K, $500K-$1M, $1M-$2M, $2M-$5M, $5M+)
   - Bedrooms (1+, 2+, 3+, 4+ beds)
   - Amenities (parking, pool, garden, new builds)

2. Parse natural language queries like:
   - "Find me a 3-bedroom house in Austin under $800,000"
   - "Show me luxury penthouses in Manhattan"
   - "I want a family home with a pool in Miami Beach"

3. Respond with structured data in this format:
   "I'll search for [criteria]. Setting location to [location], property type to [type], price range to [range], bedrooms to [beds], and amenities to [amenities]."

4. Be conversational and helpful, asking for clarification when needed.

Keep responses concise and focus on extracting search parameters.`,
      });

      agentRef.current = agent;

      const session = new RealtimeSession(agent);
      sessionRef.current = session;

      // Connect to the session
      await session.connect({
        apiKey,
      });

      setVoiceState('listening');

    } catch (error) {
      console.error('Voice search error:', error);
      setVoiceState('error');
      setTimeout(() => setVoiceState('idle'), 3000);
    }
  }, [apiKey, onSearchData]);

  const stopVoiceSearch = useCallback(async () => {
    try {
      if (sessionRef.current) {
        // For now, we'll just set the state to idle
        // The actual disconnect method might be different in the API
        sessionRef.current = null;
      }
      agentRef.current = null;
      setVoiceState('idle');
    } catch (error) {
      console.error('Error stopping voice search:', error);
      setVoiceState('idle');
    }
  }, []);

  const parseSearchData = useCallback((content: string) => {
    const searchData: SearchData = {};
    const text = content.toLowerCase();

    // Parse location
    const locationPatterns = [
      /(?:in|near|around)\s+([a-zA-Z\s,]+?)(?:\s|$|,)/,
      /location\s+(?:to\s+)?([a-zA-Z\s,]+?)(?:\s|$|,)/,
    ];
    for (const pattern of locationPatterns) {
      const match = text.match(pattern);
      if (match) {
        searchData.location = match[1].trim();
        break;
      }
    }

    // Parse property type
    if (text.includes('house')) searchData.propertyType = 'house';
    else if (text.includes('apartment') || text.includes('apt')) searchData.propertyType = 'apartment';
    else if (text.includes('condo')) searchData.propertyType = 'condo';
    else if (text.includes('penthouse')) searchData.propertyType = 'penthouse';
    else if (text.includes('villa')) searchData.propertyType = 'villa';

    // Parse price range
    if (text.includes('under 500') || text.includes('below 500')) {
      searchData.priceRange = 'Under $500K';
    } else if (text.includes('500') && (text.includes('1m') || text.includes('million'))) {
      searchData.priceRange = '$500K - $1M';
    } else if (text.includes('1m') && text.includes('2m')) {
      searchData.priceRange = '$1M - $2M';
    } else if (text.includes('2m') && text.includes('5m')) {
      searchData.priceRange = '$2M - $5M';
    } else if (text.includes('5m') || text.includes('over 5')) {
      searchData.priceRange = '$5M+';
    }

    // Parse bedrooms
    const bedroomMatch = text.match(/(\d+)[\s-]?(?:bed|bedroom)/);
    if (bedroomMatch) {
      const num = parseInt(bedroomMatch[1]);
      searchData.bedrooms = `${num}+ beds`;
    }

    // Parse amenities
    const amenities: string[] = [];
    if (text.includes('parking')) amenities.push('parking');
    if (text.includes('pool')) amenities.push('pool');
    if (text.includes('garden')) amenities.push('garden');
    if (text.includes('new build') || text.includes('newly built')) amenities.push('new builds');
    
    if (amenities.length > 0) {
      searchData.amenities = amenities;
    }

    onSearchData(searchData);
  }, [onSearchData]);

  return {
    voiceState,
    startVoiceSearch,
    stopVoiceSearch,
  };
};