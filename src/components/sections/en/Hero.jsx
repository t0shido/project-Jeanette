import { useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ParallaxSection } from '../../animations/ScrollAnimations';

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
          style={{ y: backgroundY }}
        >
          <picture>
            <source srcSet="/images/hero_background.webp" type="image/webp" />
            <img 
              src="/images/hero_background.jpg" 
              alt="Jeanette - Virtual Assistant" 
              fetchpriority="high"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0
              }}
            />
          </picture>
        </motion.div>
        
        <motion.div 
          className="hero-content"
          style={{ y: contentY, opacity }}
        >
          <div className="container">
            <div className="hero-text" style={{ marginLeft: '500px' }}>
              <motion.div 
                className="hero-slogan-main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p>Focus on what truly matters</p>
              </motion.div>
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              >
                
              </motion.p>
              <motion.a 
                href="#contact" 
                className="hero-cta"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
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
          <div className="circle-frame">
            <picture>
              <source srcSet="/images/hero_image.webp" type="image/webp" />
              <img 
                src="/images/hero_image.jpg" 
                alt="Jeanette" 
                className="profile-image"
                loading="eager"
              />
            </picture>
          </div>
        </motion.div>
      </section>
      <div className="hero-bottom-bar"></div>
    </>
  );
});

export default Hero;
