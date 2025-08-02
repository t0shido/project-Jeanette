import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ImpressumDE from '../components/sections/de/Impressum';
import LegalNoticeEN from '../components/sections/en/LegalNotice';

const ImpressumPage = () => {
  const { language } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      {language === 'de' ? <ImpressumDE /> : <LegalNoticeEN />}
    </main>
  );
};

export default ImpressumPage;
