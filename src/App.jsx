import React from 'react'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Section Components
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

function App() {

  return (
    <div>
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
