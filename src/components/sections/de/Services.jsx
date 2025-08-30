import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextReveal, FadeIn } from '../../animations/ScrollAnimations';
import backOfficeImage from '../../../assets/images/back_office.jpg';
import mediaRightsImage from '../../../assets/images/media_rights.jpg';

const Services = () => {
  const [hoveredFrame, setHoveredFrame] = useState(null);
  const navigate = useNavigate();

  const frames = [
    {
      id: "frame1",
      title: "Virtuelle Assistenz & Back-Office",
      description: "Professionelle Unterstützung für Ihren Geschäftsalltag mit E-Mail-Management, Kalender-Organisation, administrativen Aufgaben und Social Media Support. Konzentrieren Sie sich auf Ihr Kerngeschäft, während ich Ihnen den Rücken freihalte.",
      path: "/services/virtuelle-assistenz",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="frame-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      image: backOfficeImage
    },
    {
      id: "frame2",
      title: "Verlags- & Media-Rights-Management",
      description: "Spezialisierte Assistenz für Verlage und Medienunternehmen. Von der Verwaltung von Medienrechten über Lizenzverhandlungen bis hin zur Unterstützung bei Vertragsangelegenheiten und Publikationsabläufen.",
      path: "/services/media-rights",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="frame-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      image: mediaRightsImage
    }
  ];


  return (
    <section id="services" className="services-section">
      <div className="services-header-container">
        <div className="mb-12">
          <FadeIn y={30} duration={0.8}>
            <TextReveal text="Meine Leistungen" element="h2" className="section-title text-left" />
          </FadeIn>
          <div className="section-divider"></div>
        </div>
      </div>
      
      <div className="services-split-container">
        {frames.map((frame) => (
          <div
            key={frame.id}
            className={`services-split-half ${hoveredFrame === frame.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredFrame(frame.id)}
            onMouseLeave={() => setHoveredFrame(null)}
            onClick={() => navigate(frame.path)}
            role="button"
            tabIndex="0"
            aria-label={`Mehr über ${frame.title} erfahren`}
            onKeyDown={(e) => e.key === 'Enter' && navigate(frame.path)}
            style={{ backgroundImage: `url(${frame.image})` }}
          >
            <div className="services-split-overlay"></div>
            <div className="services-split-content">
              <h3 className="services-split-title">{frame.title}</h3>
              <div className="services-split-link">Mehr erfahren →</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
