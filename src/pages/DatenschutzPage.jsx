import React, { useEffect } from 'react';
import Datenschutz from '../components/sections/Datenschutz';

const DatenschutzPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      <Datenschutz />
    </main>
  );
};

export default DatenschutzPage;
