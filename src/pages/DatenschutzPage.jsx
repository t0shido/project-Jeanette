import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import DatenschutzDE from '../components/sections/de/Datenschutz';
import PrivacyPolicyEN from '../components/sections/en/PrivacyPolicy';

const DatenschutzPage = () => {
  const { language } = useLanguage();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      {language === 'de' ? <DatenschutzDE /> : <PrivacyPolicyEN />}
    </main>
  );
};

export default DatenschutzPage;
