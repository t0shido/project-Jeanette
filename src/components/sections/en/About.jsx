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
          <TextReveal text="About Me" element="h2" className="section-title text-left" />
        </FadeIn>
        
        <div className="about-container">
          <motion.div 
            className="about-content-wrapper"
            style={{ y: textY, willChange: 'transform' }}
          >
            <div className="about-sections">
              <FadeIn y={20} delay={0.2}>
                <div className="about-section">
                  <h3 className="about-subtitle">My Expertise</h3>
                  <p className="about-text">
                    As a trained <strong>freight forwarding clerk</strong> with additional experience in <strong>media rights management</strong>, I bring valuable knowledge from various fields.
                  </p>
                  <ul className="about-list">
                    <li><strong>Freight & Logistics:</strong> Organization of transport processes, document management, handling of shipping processes</li>
                    <li><strong>Media Rights Management:</strong> Administration and verification of image rights, license management</li>
                    <li><strong>Administration:</strong> Data maintenance, processing of procedures, communication with various interfaces</li>
                  </ul>
                </div>
              </FadeIn>
              
              <FadeIn y={20} delay={0.4}>
                <div className="about-section">
                  <h3 className="about-subtitle">My Strengths</h3>
                  <ul className="about-list">
                    <li>Structured way of working</li>
                    <li>High sense of responsibility</li>
                    <li>Quick familiarization with new topics</li>
                    <li>Reliable task completion</li>
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
