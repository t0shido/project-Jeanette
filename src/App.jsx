import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext';
import { AnimatePresence } from 'framer-motion';
import { ScrollProgress } from './components/animations/ScrollAnimations';
import PageTransition from './components/ui/PageTransition';

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import ImpressumPage from './pages/ImpressumPage'
import DatenschutzPage from './pages/DatenschutzPage'

// German Service Detail Pages
import VirtuelleAssistenzPage from './pages/de/VirtuelleAssistenzPage'
import MediaRightsPage from './pages/de/MediaRightsPage'

// English Service Detail Pages
import VirtualAssistancePage from './pages/en/VirtualAssistancePage'
import PublishingMediaRightsPage from './pages/en/PublishingMediaRightsPage'

// Layout component with animations
const Layout = () => {
  const location = useLocation();
  
  return (
    <>
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait">
        <Routes key={location.key}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/impressum" element={
            <PageTransition>
              <ImpressumPage />
            </PageTransition>
          } />
          <Route path="/datenschutz" element={
            <PageTransition>
              <DatenschutzPage />
            </PageTransition>
          } />
          
          {/* German Service Detail Pages */}
          <Route path="/services/virtuelle-assistenz" element={
            <PageTransition>
              <VirtuelleAssistenzPage />
            </PageTransition>
          } />
          <Route path="/services/media-rights" element={
            <PageTransition>
              <MediaRightsPage />
            </PageTransition>
          } />
          
          {/* English Service Detail Pages */}
          <Route path="/services/virtual-assistance" element={
            <PageTransition>
              <VirtualAssistancePage />
            </PageTransition>
          } />
          <Route path="/services/publishing-media-rights" element={
            <PageTransition>
              <PublishingMediaRightsPage />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout />
      </Router>
    </LanguageProvider>
  )
}

export default App
