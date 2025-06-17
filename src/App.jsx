import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import ImpressumPage from './pages/ImpressumPage'
import DatenschutzPage from './pages/DatenschutzPage'

function App() {

  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
