import React from 'react';

// Section Components
import { useLanguage } from '../contexts/LanguageContext';

// German components
import HeroDE from '../components/sections/de/Hero';
import AboutDE from '../components/sections/de/About';
import ServicesDE from '../components/sections/de/Services';
import TestimonialsDE from '../components/sections/de/Testimonials';
import ContactDE from '../components/sections/de/Contact';

// English components
import HeroEN from '../components/sections/en/Hero';
import AboutEN from '../components/sections/en/About';
import ServicesEN from '../components/sections/en/Services';
import TestimonialsEN from '../components/sections/en/Testimonials';
import ContactEN from '../components/sections/en/Contact';

const Home = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <>
      {isGerman ? <HeroDE /> : <HeroEN />}
      {isGerman ? <AboutDE /> : <AboutEN />}
      {isGerman ? <ServicesDE /> : <ServicesEN />}
      {isGerman ? <TestimonialsDE /> : <TestimonialsEN />}
      {isGerman ? <ContactDE /> : <ContactEN />}
    </>
  );
};

export default Home;
