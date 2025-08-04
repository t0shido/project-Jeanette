import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section id="privacy" className="impressum-section" style={{ paddingTop: 'clamp(80px, 10vh, 120px)', marginTop: 'clamp(40px, 5vh, 60px)' }}>
      <div className="container">
        <h2 className="section-title text-center">
          <span className="highlight">Privacy Policy</span>
        </h2>
        
        <div className="impressum-content">
          <div className="impressum-block">
            <h3>1. Privacy at a Glance</h3>
            <h4>General Information</h4>
            <p>
              The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you. Detailed information on data protection can be found in our privacy policy listed below this text.
            </p>
            
            <h4>Data Collection on this Website</h4>
            <p>
              <strong>Who is responsible for data collection on this website?</strong><br />
              Data processing on this website is carried out by the website operator. You can find their contact details in the legal notice of this website.
            </p>
            
            <p>
              <strong>How do we collect your data?</strong><br />
              Your data is collected in part by you providing it to us. This could be data that you enter in a contact form, for example.
            </p>
            
            <p>
              Other data is collected automatically by our IT systems when you visit the website. This is primarily technical data (e.g. internet browser, operating system or time of page access). This data is collected automatically as soon as you enter this website.
            </p>
            
            <p>
              <strong>What do we use your data for?</strong><br />
              Part of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.
            </p>
            
            <p>
              <strong>What rights do you have regarding your data?</strong><br />
              You have the right to receive information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. You can contact us at any time regarding this and other questions about data protection. You also have the right to lodge a complaint with the competent supervisory authority.
            </p>
          </div>
          
          <div className="impressum-block">
            <h3>2. Hosting</h3>
            <p>
              We host the content of our website with the following provider:
            </p>
            
            <h4>External Hosting</h4>
            <p>
              This website is hosted externally. The personal data collected on this website is stored on the servers of the host. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access and other data generated via a website.
            </p>
            
            <p>
              External hosting is carried out for the purpose of contract fulfillment towards our potential and existing customers (Art. 6 Para. 1 lit. b GDPR) and in the interest of secure, fast and efficient provision of our online offering by a professional provider (Art. 6 Para. 1 lit. f GDPR). If appropriate consent has been requested, processing is carried out exclusively on the basis of Art. 6 Para. 1 lit. a GDPR; consent can be revoked at any time.
            </p>
          </div>
          
          <div className="impressum-block">
            <h3>3. General Information and Mandatory Information</h3>
            <h4>Data Protection</h4>
            <p>
              The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.
            </p>
            
            <p>
              When you use this website, various personal data is collected. Personal data is data that can be used to personally identify you. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this happens.
            </p>
            
            <p>
              We point out that data transmission on the Internet (e.g. when communicating by email) can have security gaps. Complete protection of data from access by third parties is not possible.
            </p>
            
            <h4>Note on the Responsible Party</h4>
            <p>
              The responsible party for data processing on this website is:
            </p>
            
            <p>
              Jeanette's Office<br />
              Sample Street 123<br />
              12345 Sample City<br />
              Germany
            </p>
            
            <p>
              Phone: +49 123 456789<br />
              Email: info@jeanettes-office.de
            </p>
            
            <p>
              The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, email addresses, etc.).
            </p>
          </div>
          
          <div className="impressum-block">
            <h3>4. Data Collection on this Website</h3>
            <h4>Cookies</h4>
            <p>
              Our websites use so-called "cookies". Cookies are small data packets and do not cause any damage to your device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your device. Session cookies are automatically deleted after your visit ends. Permanent cookies remain stored on your device until you delete them yourself or automatic deletion occurs through your web browser.
            </p>
            
            <p>
              Cookies can come from us (first-party cookies) or from third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services from third-party companies within websites (e.g. cookies for processing payment services).
            </p>
            
            <p>
              Cookies have various functions. Many cookies are technically necessary because certain website functions would not work without them (e.g. the shopping cart function or the display of videos). Other cookies can be used to evaluate user behavior or for advertising purposes.
            </p>
            
            <p>
              Cookies that are necessary for carrying out the electronic communication process, for providing certain functions you have requested (e.g. for the shopping cart function) or for optimizing the website (e.g. cookies for measuring web audiences) (necessary cookies) are stored on the basis of Art. 6 Para. 1 lit. f GDPR, unless another legal basis is specified. The website operator has a legitimate interest in storing necessary cookies for the technically error-free and optimized provision of its services. If consent to the storage of cookies and comparable recognition technologies has been requested, processing is carried out exclusively on the basis of this consent (Art. 6 Para. 1 lit. a GDPR); consent can be revoked at any time.
            </p>
            
            <p>
              You can set your browser to inform you about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general, and activate the automatic deletion of cookies when closing the browser. When cookies are deactivated, the functionality of this website may be limited.
            </p>
          </div>
          
          <div className="impressum-block">
            <h3>5. Contact Form</h3>
            <p>
              If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.
            </p>
            
            <p>
              The processing of this data is based on Art. 6 Para. 1 lit. b GDPR if your inquiry is related to the fulfillment of a contract or is necessary for carrying out pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries directed to us (Art. 6 Para. 1 lit. f GDPR) or on your consent (Art. 6 Para. 1 lit. a GDPR) if this has been requested.
            </p>
            
            <p>
              The data you enter in the contact form remains with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g. after your inquiry has been processed). Mandatory legal provisions - especially retention periods - remain unaffected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
