import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        {/* Logo */}
        <a href="#" className="logo">
          Jeanette's Office<span>.</span>
        </a>

        {/* Regular Navigation */}
        <nav className="nav-regular">
          <a href="#about">
            About
          </a>
          <a href="#services">
            Services
          </a>
          <a href="#testimonials">
            Testimonials
          </a>
          <a href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
