import { useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn, TextReveal } from '../../animations/ScrollAnimations';
import aboutMeImage from '../../../assets/images/about_me.jpg';

const About = memo(() => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
    smooth: 0.1 // Add slight smoothing to prevent jitter
  });
  
  // Transform values based on scroll progress
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  
  return (
    <section id="about" ref={containerRef}>
      <div className="container">
        <FadeIn y={30} duration={0.8}>
          <TextReveal text="Über mich" element="h2" className="section-title text-left" />
        </FadeIn>
        
        <div className="about-container">
          <motion.div 
            className="about-content-wrapper"
            style={{ y: textY, willChange: 'transform' }}
          >
            <div className="about-sections">
              <FadeIn y={20} delay={0.2}>
                <div className="about-section">
                  <h3 className="about-subtitle">Meine Expertise</h3>
                  <p className="about-text">
                    Als ausgebildete <strong>Speditionskauffrau</strong> mit zusätzlicher Erfahrung im <strong>Medienrechtsmanagement</strong> bringe ich wertvolle Kenntnisse aus verschiedenen Bereichen mit.
                  </p>
                  <ul className="about-list">
                    <li><strong>Spedition & Logistik:</strong> Organisation von Transportabläufen, Dokumentenmanagement, Abwicklung von Versandprozessen</li>
                    <li><strong>Medienrechtsmanagement:</strong> Verwaltung und Prüfung von Bildrechten, Lizenzmanagement</li>
                    <li><strong>Administration:</strong> Datenpflege, Bearbeitung von Vorgängen, Kommunikation mit verschiedenen Schnittstellen</li>
                  </ul>
                </div>
              </FadeIn>
              
              <FadeIn y={20} delay={0.4}>
                <div className="about-section">
                  <h3 className="about-subtitle">Meine Stärken</h3>
                  <ul className="about-list">
                    <li>Strukturierte Arbeitsweise</li>
                    <li>Hohes Verantwortungsbewusstsein</li>
                    <li>Schnelle Einarbeitung in neue Themen</li>
                    <li>Zuverlässige Aufgabenerfüllung</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image-container"
            style={{ 
              scale: imageScale,
              rotate: imageRotate,
              transformOrigin: "center center",
              willChange: 'transform'
            }}
          >
            <div className="about-image-frame"></div>
            <div
              className="about-image"
              style={{
                backgroundImage: `url(${aboutMeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default About;
