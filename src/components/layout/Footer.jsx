import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container footer-container">
        <div>
          <a href="/" className="footer-logo">
            Jeanettes Office<span>.</span>
          </a>
          <p className="footer-description">
            Professionelle virtuelle Assistenzdienstleistungen, damit Sie sich auf das konzentrieren können, was am wichtigsten ist.
          </p>
        </div>
        
        {/* Social media icons removed as requested */}
        
        <div className="footer-divider"></div>
        
        <div className="footer-copyright">
          <p>© {currentYear} Jeanettes Office. Alle Rechte vorbehalten. | <Link to="/impressum" className="impressum-link">Impressum</Link> | <Link to="/datenschutz" className="impressum-link">Datenschutz</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
