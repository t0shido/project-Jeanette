import React, { useEffect } from 'react';
import Impressum from '../components/sections/Impressum';

const ImpressumPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Impressum />
    </main>
  );
};

export default ImpressumPage;
