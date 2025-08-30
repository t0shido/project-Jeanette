import React, { useRef, useEffect, useState, memo } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { debounce, throttle } from '../../utils/debounce';

// FadeIn component for simple fade-in animations on scroll
export const FadeIn = memo(({ 
  children, 
  y = 0, 
  x = 0, 
  delay = 0, 
  duration = 0.6,
  threshold = 0.1,
  once = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
});

// StaggerContainer for staggered animations of child elements
export const StaggerContainer = memo(({ 
  children, 
  delay = 0.1, 
  staggerChildren = 0.1,
  threshold = 0.1,
  once = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      style={{ willChange: 'opacity' }}
    >
      {children}
    </motion.div>
  );
});

// StaggerItem to be used inside StaggerContainer
export const StaggerItem = memo(({ children, y = 20, x = 0 }) => {
  const itemVariants = {
    hidden: { opacity: 0, y, x },
    show: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <motion.div 
      variants={itemVariants}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
});

// ParallaxSection for parallax scrolling effects
export const ParallaxSection = memo(({ 
  children, 
  speed = 0.5, 
  direction = "y",
  containerClassName = ""
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    smooth: 0.1 // Add slight smoothing to prevent jitter
  });
  
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === "y" ? ["0%", `${speed * 100}%`] : ["0%", "0%"]
  );
  
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === "x" ? ["0%", `${speed * 100}%`] : ["0%", "0%"]
  );
  
  return (
    <div ref={ref} className={`parallax-section ${containerClassName}`} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div 
        className="parallax-content"
        style={{ y, x, willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </div>
  );
});

// StickyScrollSection for sticky scroll effects
export const StickyScrollSection = memo(({ 
  children, 
  height = "200vh",
  stickyPosition = "50vh",
  containerClassName = ""
}) => {
  return (
    <div 
      className={`sticky-scroll-section ${containerClassName}`} 
      style={{ 
        height, 
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div 
        className="sticky-content"
        style={{ 
          position: "sticky", 
          top: stickyPosition,
          zIndex: 10
        }}
      >
        {children}
      </div>
    </div>
  );
});

// TextReveal for text splitting animations
export const TextReveal = memo(({ 
  text, 
  element = "h2", 
  className = "", 
  delay = 0.1,
  stagger = 0.02,
  threshold = 0.1,
  once = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const words = text.split(" ");
  
  // Create variants for container and words
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };
  
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.5
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  // Dynamically create the element based on the prop
  const Element = motion[element];
  
  return (
    <Element 
      ref={ref}
      className={`text-reveal-container ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ display: "inline-block" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="text-reveal-word"
          variants={wordVariants}
          style={{ 
            display: "inline-block",
            marginRight: "0.25em",
            whiteSpace: "nowrap",
            willChange: 'opacity, transform'
          }}
        >
          {word}
        </motion.span>
      ))}
    </Element>
  );
});

// ScrollProgress component for scroll progress indicator
export const ScrollProgress = memo(({ 
  height = "4px", 
  backgroundColor = "#bdb2a7", 
  zIndex = 2000 
}) => {
  const [scrollYProgress, setScrollYProgress] = useState(0);
  
  useEffect(() => {
    // Use requestAnimationFrame for smoother updates
    let rafId = null;
    let lastScrollY = window.scrollY;
    
    // Create throttled scroll handler for better performance
    const handleScrollThrottled = throttle(() => {
      // Cancel any pending animation frame
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      // Schedule the update on the next animation frame
      rafId = requestAnimationFrame(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY / scrollHeight;
        
        // Only update state if there's a significant change
        if (Math.abs(lastScrollY - window.scrollY) > 2) {
          setScrollYProgress(scrolled);
          lastScrollY = window.scrollY;
        }
      });
    }, 16); // ~60fps
    
    // Use passive: true for better performance
    window.addEventListener("scroll", handleScrollThrottled, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);
  
  return (
    <div 
      className="scroll-progress-bar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height,
        transformOrigin: "0%",
        transform: `scaleX(${scrollYProgress})`,
        backgroundColor,
        zIndex,
        willChange: 'transform'
      }}
    />
  );
});

// Optimized exports
export default {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ParallaxSection,
  StickyScrollSection,
  TextReveal,
  ScrollProgress
};
