import { de } from './de.js';
import { en } from './en.js';

export const translations = {
  de,
  en
};

export const getTranslation = (language, key) => {
  const keys = key.split('.');
  let translation = translations[language];
  
  for (const k of keys) {
    if (translation && typeof translation === 'object') {
      translation = translation[k];
    } else {
      return key; // Return the key if translation is not found
    }
  }
  
  return translation || key;
};

// Hook for easier usage
import { useLanguage } from '../contexts/LanguageContext';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => getTranslation(language, key);
  
  return { t, language };
};
