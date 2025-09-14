import React, { useState } from 'react';
import { Mic, MicOff, Search } from 'lucide-react';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { AccessibleButton } from './AccessibleButton';

interface VoiceSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export const VoiceSearch = ({ onSearch, placeholder, className }: VoiceSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { 
    isListening, 
    transcript, 
    interimTranscript, 
    startListening, 
    stopListening, 
    resetTranscript,
    isSupported 
  } = useSpeechRecognition();
  const { translate, currentLanguage } = useLanguageContext();

  const handleVoiceSearch = () => {
    if (isListening) {
      stopListening();
      if (transcript.trim()) {
        setSearchQuery(transcript);
        onSearch(transcript);
      }
    } else {
      resetTranscript();
      const langMap = {
        en: 'en-US',
        hi: 'hi-IN',
        or: 'en-US', // Fallback
      };
      startListening({ lang: langMap[currentLanguage] });
    }
  };

  const handleTextSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTextSearch();
    }
  };

  React.useEffect(() => {
    if (transcript && !isListening) {
      setSearchQuery(transcript);
    }
  }, [transcript, isListening]);

  const displayValue = isListening 
    ? (transcript + interimTranscript) 
    : searchQuery;

  return (
    <div className={`flex gap-2 ${className}`}>
      <div className="flex-1 relative">
        <input
          type="text"
          value={displayValue}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder || translate('search')}
          className="input-accessible w-full pr-12"
          aria-label="Search input"
        />
        <AccessibleButton
          onClick={handleTextSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2"
          ariaLabel="Search"
        >
          <Search size={20} />
        </AccessibleButton>
      </div>
      
      {isSupported && (
        <AccessibleButton
          onClick={handleVoiceSearch}
          className={`p-3 ${isListening ? 'speaking-pulse bg-accent text-accent-foreground' : ''}`}
          ariaLabel={isListening ? 'Stop voice search' : translate('startVoiceSearch')}
        >
          {isListening ? <MicOff size={24} /> : <Mic size={24} />}
        </AccessibleButton>
      )}
    </div>
  );
};