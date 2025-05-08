import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          hamburgerRef.current &&
          !hamburgerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    // Close mobile menu when screen is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    // Close mobile menu when hash changes (user navigates to a new section)
    const handleHashChange = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  // Handle link clicks with smooth scrolling and menu closing
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    closeMobileMenu();
    
    // Smooth scroll to the target section
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: 'smooth'
      });
      
      // Update URL hash without scrolling
      history.pushState(null, null, href);
    }
  };

  const navLinks = [
    { href: '#about', text: 'Über uns' },
    { href: '#services', text: 'Leistungen' },
    { href: '#testimonials', text: 'Referenzen' },
    { href: '#contact', text: 'Kontakt' }
  ];

  return (
    <header className={`${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <a href="#" className="logo">
          Jeanettes Büro<span>.</span>
        </a>

        {/* Regular Navigation */}
        <nav className="nav-regular">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          ref={hamburgerRef}
          className={`mobile-menu-button ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}></div>
        <nav ref={mobileMenuRef} className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <a href="#" className="logo">
              Jeanettes Büro<span>.</span>
            </a>
            <button 
              className="mobile-menu-close" 
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mobile-menu-content">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.text}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
