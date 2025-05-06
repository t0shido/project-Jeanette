import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      title: "Inbox Management",
      description: "Keep your email organized with professional filtering, responding, and organizing of your inbox.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Calendar Management",
      description: "Efficient scheduling, appointment setting, and calendar organization to optimize your time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Research",
      description: "Thorough research on topics, competitors, markets, or any information you need for your business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Data Entry",
      description: "Accurate and efficient data entry, organization, and management for your business needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "CRM Management",
      description: "Maintain and update your customer relationship management system to keep track of clients and leads.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Social Media Support",
      description: "Content scheduling, basic graphic creation, and management of your social media presence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="service-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      )
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">
            My <span className="highlight">Services</span>
          </h2>
          <p className="services-subtitle">
            Professional support tailored to your specific needs. Here's how I can help you reclaim your time.
          </p>
        </div>

        <div className="services-slider-container">
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div key={index} className="service-slide">
                <div className="service-card">
                  <div className="service-icon-container">
                    {service.icon}
                  </div>
                  <h3 className="service-title">
                    {service.title}
                  </h3>
                  <p className="service-description">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="services-cta">
          <p className="services-cta-text">
            Need a service not listed here? I'm flexible and can adapt to your specific requirements.
          </p>
          <a href="#contact" className="button primary-button">
            Discuss Your Needs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
