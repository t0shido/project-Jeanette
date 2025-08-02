import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`language-btn ${language === 'de' ? 'active' : ''}`}
        onClick={() => language !== 'de' && toggleLanguage()}
        aria-label="Switch to German"
      >
        DE
      </button>
      <span className="language-divider">|</span>
      <button
        className={`language-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => language !== 'en' && toggleLanguage()}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
