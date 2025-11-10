import React, { useState, useRef, useEffect } from 'react';
import { TextReveal, FadeIn } from '../../animations/ScrollAnimations';
import { validateForm } from '../../../utils/formValidation';
import { motion } from 'framer-motion';

const ContactDE = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formFocus, setFormFocus] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleFocus = (field) => {
    setFormFocus(field);
  };
  
  const handleBlur = (e) => {
    const { name } = e.target;
    setFormFocus(null);
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate field on blur
    validateField(name, formData[name]);
  };
  
  // Validate a single field
  const validateField = (name, value) => {
    const { errors: fieldErrors } = validateForm({
      ...formData,
      [name]: value
    });
    
    if (fieldErrors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: fieldErrors[name]
      }));
      return false;
    } else {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
      return true;
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
    // Validate all fields
    const { isValid, errors: validationErrors } = validateForm(formData);
    setErrors(validationErrors);
    
    if (!isValid) {
      // Scroll to first error
      const firstErrorField = document.querySelector('.form-group.has-error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
        service: ''
      });
      setTouched({});
      setErrors({});
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  // Add subtle animation when component mounts
  useEffect(() => {
    if (formRef.current) {
      formRef.current.classList.add('form-appear');
    }
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background"></div>
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <FadeIn y={30} duration={0.8}>
              <TextReveal text="Kontakt" element="h2" className="section-title text-left" />
            </FadeIn>
            {/* Assistance text removed */}
          </div>
          
          <div className="contact-grid">
            <div className="contact-info-container">
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <h3>Kontaktinformationen</h3>
                  <div className="contact-decoration"></div>
                </div>
                
                <div className="contact-info-items">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <h4>E-Mail</h4>
                      <a href="mailto:hello@jeanette.com">
                        hello@jeanette.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <h4>Verfügbarkeit</h4>
                      <p>Montag - Freitag: 9:00 - 17:00 Uhr MEZ</p>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="contact-info-text">
                      <h4>Antwortzeit</h4>
                      <p>Gewöhnlich innerhalb von 24 Stunden</p>
                    </div>
                  </div>
                </div>
                
                <div className="contact-social">
                  <h3>Verbinden</h3>
                  <div className="social-icons">
                    <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="social-icon facebook" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a href="#" className="social-icon instagram" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div className={`form-group ${formFocus === 'name' ? 'focused' : ''} ${errors.name && touched.name ? 'has-error' : ''}`}>
                    <label htmlFor="name">Ihr Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      placeholder="Max Mustermann"
                      aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      required
                    />
                    {errors.name && touched.name && (
                      <motion.div 
                        className="error-message" 
                        id="name-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {errors.name === 'Please enter a valid name (at least 2 characters)' ? 
                          'Bitte geben Sie einen gültigen Namen ein (mindestens 2 Zeichen)' : errors.name}
                      </motion.div>
                    )}
                  </div>
                  
                  <div className={`form-group ${formFocus === 'email' ? 'focused' : ''} ${errors.email && touched.email ? 'has-error' : ''}`}>
                    <label htmlFor="email">E-Mail-Adresse</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      placeholder="max@beispiel.de"
                      aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      required
                    />
                    {errors.email && touched.email && (
                      <motion.div 
                        className="error-message" 
                        id="email-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {errors.email === 'Please enter a valid email address' ? 
                          'Bitte geben Sie eine gültige E-Mail-Adresse ein' : errors.email}
                      </motion.div>
                    )}
                  </div>
                </div>
                
                <div className={`form-group ${formFocus === 'service' ? 'focused' : ''} ${errors.service && touched.service ? 'has-error' : ''}`}>
                  <label htmlFor="service">Dienstleistung, an der Sie interessiert sind</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => handleFocus('service')}
                    onBlur={handleBlur}
                    aria-invalid={errors.service && touched.service ? 'true' : 'false'}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                    required
                  >
                    <option value="">Wählen Sie eine Dienstleistung</option>
                    <option value="inbox-management">E-Mail-Management</option>
                    <option value="calendar-management">Kalender-Management</option>
                    <option value="research">Recherche</option>
                    <option value="data-entry">Dateneingabe</option>
                    <option value="crm-management">CRM-Verwaltung</option>
                    <option value="social-media">Social Media Unterstützung</option>
                    <option value="other">Andere (Bitte angeben)</option>
                  </select>
                  {errors.service && touched.service && (
                    <motion.div 
                      className="error-message" 
                      id="service-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.service === 'Please select a service' ? 
                        'Bitte wählen Sie eine Dienstleistung aus' : errors.service}
                    </motion.div>
                  )}
                </div>
                
                <div className={`form-group ${formFocus === 'message' ? 'focused' : ''} ${errors.message && touched.message ? 'has-error' : ''}`}>
                  <label htmlFor="message">Ihre Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    rows="5"
                    placeholder="Erzählen Sie mir von Ihren Bedürfnissen und wie ich Ihnen helfen kann..."
                    aria-invalid={errors.message && touched.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    required
                  ></textarea>
                  {errors.message && touched.message && (
                    <motion.div 
                      className="error-message" 
                      id="message-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {errors.message === 'Please enter a message (at least 10 characters)' ? 
                        'Bitte geben Sie eine Nachricht ein (mindestens 10 Zeichen)' : errors.message}
                    </motion.div>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                >
                  <span className="button-text">{isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}</span>
                  <span className="button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
                
                {submitStatus === 'success' && (
                  <div className="success-message">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDE;
