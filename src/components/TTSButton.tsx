import React from 'react';
import { Volume2, VolumeX, Pause } from 'lucide-react';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { AccessibleButton } from './AccessibleButton';

interface TTSButtonProps {
  text: string;
  className?: string;
}

export const TTSButton = ({ text, className }: TTSButtonProps) => {
  const { speak, stop, isSpeaking } = useTextToSpeech();
  const { currentLanguage } = useLanguageContext();

  const handleClick = () => {
    if (isSpeaking) {
      stop();
    } else {
      // Map language codes to speech synthesis language codes
      const langMap = {
        en: 'en-US',
        hi: 'hi-IN',
        or: 'en-US', // Fallback to English for Odia
      };
      
      speak(text, { lang: langMap[currentLanguage] });
    }
  };

  return (
    <AccessibleButton
      onClick={handleClick}
      className={`p-2 ${className} ${isSpeaking ? 'speaking-pulse' : ''}`}
      ariaLabel={isSpeaking ? 'Stop reading' : 'Read text aloud'}
    >
      {isSpeaking ? (
        <VolumeX size={20} />
      ) : (
        <Volume2 size={20} />
      )}
    </AccessibleButton>
  );
};