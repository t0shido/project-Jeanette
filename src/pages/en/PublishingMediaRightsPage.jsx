import React from 'react';
import { Link } from 'react-router-dom';
import mediaRightsImage from '../../assets/images/media_rights.jpg';

const PublishingMediaRightsPage = () => {
  return (
    <div className="service-detail-page">
      <div className="container mx-auto px-4 py-16">
        <div className="service-detail-header text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 font-playfair text-gray-800">Publishing & Media Rights Management</h1>
        </div>

        <div className="service-detail-content max-w-4xl mx-auto">
          <div className="service-detail-image-container mb-12">
            <img src={mediaRightsImage} alt="Publishing & Media Rights Management" className="service-detail-image" />
          </div>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">Specialized Assistance for Publishers and Media Companies</h2>
            <p className="text-lg mb-6">
              With my years of experience in publishing and media rights management, I support you in the 
              professional administration and marketing of your media rights. I offer tailored solutions for 
              publishers, authors, content creators, and media companies.
            </p>
            <p className="text-lg mb-6">
              In the complex world of media rights, I provide clarity and help you realize the full potential 
              of your content – whether it's books, digital publications, or other media formats.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">My Services at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Rights Management</h3>
                <p>Systematic recording and management of media rights, monitoring of usage rights and licenses</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">License Negotiations</h3>
                <p>Support during negotiations, creation of license agreements, advice on terms and compensation models</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Contract Management</h3>
                <p>Creation and review of contracts, monitoring of deadlines and obligations, documentation</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Publication Processes</h3>
                <p>Coordination of publication processes, scheduling, communication with all parties involved</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">Your Benefits</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>Professional management of your valuable media rights</li>
              <li>Optimization of license revenues and exploitation opportunities</li>
              <li>Legal certainty through careful contract creation and monitoring</li>
              <li>Efficient coordination of publication processes</li>
              <li>Industry-specific know-how and established networks</li>
            </ul>
          </section>

          <div className="text-center mt-12">
            <Link to="/#contact" className="inline-block px-8 py-3 bg-pink-100 text-gray-800 font-medium rounded-lg hover:bg-pink-200 transition-colors">
              Contact Me
            </Link>
            <Link to="/" className="inline-block ml-4 px-8 py-3 bg-white border border-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishingMediaRightsPage;
