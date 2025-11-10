import { useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ParallaxSection } from '../../animations/ScrollAnimations';
import heroBackgroundWebp from '../../../assets/images/hero_background.webp';
import heroImage from '../../../assets/images/hero_image.webp';

const Hero = memo(() => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    smooth: 0.1 // Add slight smoothing to prevent jitter
  });
  
  // Transform values for parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  return (
    <>
      <section id="hero" ref={containerRef} className="hero-section">
        <motion.div 
          className="hero-background"
          style={{ 
            y: backgroundY,
            backgroundImage: `url(${heroBackgroundWebp})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        />
        
        <motion.div 
          className="hero-content"
          style={{ y: contentY, opacity }}
        >
          <div className="container">
            <div className="hero-text">
              <motion.div 
                className="hero-slogan-main"
                initial={false}
                animate={{ opacity: 1 }}
              >
                <p>Focus on what truly matters</p>
              </motion.div>
              <motion.p 
                className="hero-subtitle"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
              >
                
              </motion.p>
              <motion.a 
                href="#contact" 
                className="hero-cta"
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch Now
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="circle-frame-container"
          style={{ 
            scale: imageScale,
            position: 'absolute',
            top: '33%',
            left: '10%',
            transform: 'none'
          }}
        >
          <div 
            className="circle-frame"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </motion.div>
      </section>
      <div className="hero-bottom-bar"></div>
    </>
  );
});

export default Hero;
