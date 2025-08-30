import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useTranslation } from '../../translations';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
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
    closeMobileMenu();
    
    // If we're not on the home page, don't try to scroll
    if (!isHomePage) return;
    
    // Only prevent default and handle scroll if we're on the home page
    e.preventDefault();
    
    // Smooth scroll to the target section
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // Use native scrollIntoView with CSS scroll-margin-top handling the offset
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL hash without scrolling
      history.pushState(null, null, href);
    }
  };

  // Links for navigation
  const navLinks = [
    { 
      href: '#services', 
      text: t('nav.services'), 
      homePath: '/',
      hasDropdown: true,
      dropdownItems: [
        { 
          href: '/services/virtuelle-assistenz', 
          text: t('nav.virtuelleAssistenz'),
          englishHref: '/services/virtual-assistance',
          englishText: t('nav.virtualAssistance')
        },
        { 
          href: '/services/media-rights', 
          text: t('nav.mediaRights'),
          englishHref: '/services/publishing-media-rights',
          englishText: t('nav.publishingMediaRights')
        }
      ]
    },
    { href: '#about', text: t('nav.about'), homePath: '/' },
    { href: '#testimonials', text: t('nav.testimonials'), homePath: '/' },
    { href: '#contact', text: t('nav.contact'), homePath: '/' }
  ];

  return (
    <header className={`${isScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <a href="/" className="logo">
          <div className="logo-main">Jeanette's Office<span>.</span></div>
        </a>

        {/* Navigation and Language Switcher Container */}
        <div className="nav-container">
          {/* Regular Navigation */}
          <nav className="nav-regular">
            {navLinks.map((link, index) => (
              link.hasDropdown ? (
                <div className="nav-item" key={index}>
                  {isHomePage ? (
                    <a 
                      className="nav-item-with-dropdown"
                      href={link.href} 
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.text}
                      <span className="dropdown-arrow"></span>
                    </a>
                  ) : (
                    <Link 
                      className="nav-item-with-dropdown"
                      to={link.homePath} 
                    >
                      {link.text}
                      <span className="dropdown-arrow"></span>
                    </Link>
                  )}
                  <div className="dropdown-menu">
                    {link.dropdownItems.map((item, itemIndex) => (
                      <Link 
                        key={itemIndex} 
                        to={item.href}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                isHomePage ? (
                  <a 
                    key={index} 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.text}
                  </a>
                ) : (
                  <Link 
                    key={index} 
                    to={link.homePath} 
                  >
                    {link.text}
                  </Link>
                )
              )
            ))}
          </nav>
          
          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>

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
              <React.Fragment key={index}>
                {isHomePage ? (
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.text}
                  </a>
                ) : (
                  <Link 
                    to={link.homePath} 
                  >
                    {link.text}
                  </Link>
                )}
                
                {/* Add dropdown items directly below their parent in mobile view */}
                {link.hasDropdown && link.dropdownItems.map((item, itemIndex) => (
                  <Link 
                    key={`dropdown-${index}-${itemIndex}`}
                    to={item.href}
                    className="mobile-dropdown-item"
                  >
                    {item.text}
                  </Link>
                ))}
              </React.Fragment>
            ))}
            
            {/* Language Switcher in Mobile Menu */}
            <div className="mobile-language-switcher">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
