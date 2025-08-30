import { Link } from 'react-router-dom';
import { useTranslation } from '../../translations';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container footer-container">
        <div>
          <a href="/" className="footer-logo">
            <div className="logo-main">Jeanette's Office<span>.</span></div>
          </a>
          <p className="footer-description">
            {t('footer.description')}
          </p>
        </div>
        
        {/* Social media icons removed as requested */}
        
        <div className="footer-divider"></div>
        
        <div className="footer-copyright">
          <p>© {currentYear} Jeanette's Office. {t('footer.copyright')} | <Link to="/impressum" className="impressum-link">{t('footer.imprint')}</Link> | <Link to="/datenschutz" className="impressum-link">{t('footer.privacy')}</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
