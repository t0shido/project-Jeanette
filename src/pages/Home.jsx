import React from 'react';

// Section Components
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
