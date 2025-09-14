import React from 'react';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { Language } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { currentLanguage, changeLanguage, getLanguageName } = useLanguageContext();
  
  const languages: Language[] = ['en', 'hi', 'or'];

  return (
    <div className={cn('flex gap-2', className)}>
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={cn(
            'language-button',
            currentLanguage === lang && 'active'
          )}
          aria-label={`Switch to ${getLanguageName(lang)}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};