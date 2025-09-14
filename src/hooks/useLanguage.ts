import { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'en' | 'hi' | 'or';

export interface LanguageContent {
  [key: string]: {
    en: string;
    hi: string;
    or: string;
  };
}

// Dummy translations for demo
export const translations: LanguageContent = {
  welcome: {
    en: 'Welcome to EduAccess',
    hi: 'एडुएक्सेस में आपका स्वागत है',
    or: 'ଏଡୁଆକ୍ସେସକୁ ସ୍ୱାଗତ',
  },
  search: {
    en: 'Search courses, notes, and more...',
    hi: 'कोर्स, नोट्स और अधिक खोजें...',
    or: 'ପାଠ୍ୟକ୍ରମ, ନୋଟ୍ସ ଏବଂ ଅନ୍ୟାନ୍ୟ ଖୋଜନ୍ତୁ...',
  },
  home: {
    en: 'Home',
    hi: 'होम',
    or: 'ଘର',
  },
  about: {
    en: 'About',
    hi: 'के बारे में',
    or: 'ବିଷୟରେ',
  },
  features: {
    en: 'Features',
    hi: 'सुविधाएं',
    or: 'ବିଶେଷତା',
  },
  contact: {
    en: 'Contact',
    hi: 'संपर्क',
    or: 'ଯୋଗାଯୋଗ',
  },
  dashboard: {
    en: 'Dashboard',
    hi: 'डैशबोर्ड',
    or: 'ଡ୍ୟାସବୋର୍ଡ',
  },
  notes: {
    en: 'Notes',
    hi: 'नोट्स',
    or: 'ନୋଟ୍ସ',
  },
  quiz: {
    en: 'Quiz',
    hi: 'प्रश्नोत्तरी',
    or: 'କୁଇଜ୍',
  },
  login: {
    en: 'Login',
    hi: 'लॉग इन',
    or: 'ଲଗଇନ୍',
  },
  signup: {
    en: 'Sign Up',
    hi: 'साइन अप',
    or: 'ସାଇନ ଅପ୍',
  },
  speakText: {
    en: 'Click to hear this text',
    hi: 'इस टेक्स्ट को सुनने के लिए क्लिक करें',
    or: 'ଏହି ଟେକ୍ସଟ ଶୁଣିବା ପାଇଁ କ୍ଲିକ୍ କରନ୍ତୁ',
  },
  startVoiceSearch: {
    en: 'Start voice search',
    hi: 'आवाज खोज शुरू करें',
    or: 'ଧ୍ୱନି ଖୋଜ ଆରମ୍ଭ କରନ୍ତୁ',
  },
};

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const changeLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
  }, []);

  const translate = useCallback((key: string): string => {
    return translations[key]?.[currentLanguage] || key;
  }, [currentLanguage]);

  const getLanguageName = useCallback((lang: Language): string => {
    const names = { en: 'English', hi: 'हिंदी', or: 'ଓଡ଼ିଆ' };
    return names[lang];
  }, []);

  return {
    currentLanguage,
    changeLanguage,
    translate,
    getLanguageName,
  };
};