import React from 'react';
import { useEffect } from 'react';

const LegalNotice = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section id="legal-notice" className="impressum-section" style={{ paddingTop: 'clamp(80px, 10vh, 120px)', marginTop: 'clamp(40px, 5vh, 60px)' }}>
      <div className="container">
        <h2 className="section-title text-center">
          <span className="highlight">Legal Notice</span>
        </h2>
        
        <div className="impressum-content">
          <div className="impressum-block">
            <h3>Information according to § 5 TMG</h3>
            <p>
              Jeanette's Office<br />
              Sample Street 123<br />
              12345 Sample City<br />
              Germany
            </p>
          </div>
          
          <div className="impressum-block">
            <h3>Contact</h3>
            <p>
              Phone: +49 123 456789<br />
              Email: info@jeanettes-office.de
            </p>
          </div>
          
          <div className="impressum-block">
            <h3>VAT ID</h3>
            <p>
              VAT identification number according to § 27 a VAT Tax Act:<br />
              DE123456789
            </p>
          </div>
          
          <div className="impressum-block">
            <h3>Responsible for Content according to § 55 Para. 2 RStV</h3>
            <p>
              Jeanette Sample<br />
              Sample Street 123<br />
              12345 Sample City<br />
              Germany
            </p>
          </div>
          
          <div className="impressum-block">
            <h3>Disclaimer</h3>
            <h4>Liability for Content</h4>
            <p>
              The contents of our pages have been created with the greatest care. However, we cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with § 7 Para. 1 TMG under general laws. According to §§ 8 to 10 TMG, however, we as a service provider are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
            </p>
            
            <h4>Liability for Links</h4>
            <p>
              Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.
            </p>
            
            <h4>Copyright</h4>
            <p>
              The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalNotice;
