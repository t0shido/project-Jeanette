import React from 'react';
import { Link } from 'react-router-dom';
import backOfficeImage from '../../assets/images/back_office.jpg';

const VirtualAssistancePage = () => {
  return (
    <div className="service-detail-page">
      <div className="container mx-auto px-4 py-16">
        <div className="service-detail-header text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 font-playfair text-gray-800">Virtual Assistance & Back-Office</h1>
        </div>

        <div className="service-detail-content max-w-4xl mx-auto">
          <div className="service-detail-image-container mb-12">
            <img src={backOfficeImage} alt="Virtual Assistance & Back-Office" className="service-detail-image" />
          </div>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">Professional Support for Your Daily Business Operations</h2>
            <p className="text-lg mb-6">
              As your virtual assistant, I handle administrative tasks and back-office activities, 
              allowing you to focus on your core business. With my support, you gain valuable time 
              and can concentrate on what truly matters.
            </p>
            <p className="text-lg mb-6">
              My services are flexible and can be tailored to your individual needs. 
              Whether you need regular support or project-based collaboration – I am reliably at your side.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">My Services at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Email Management</h3>
                <p>Processing and organizing your emails, prioritizing important messages, creating response templates</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Calendar Organization</h3>
                <p>Appointment scheduling and coordination, reminders for important events, travel planning</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Administrative Tasks</h3>
                <p>Document management, data entry, creation of reports and presentations</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Social Media Support</h3>
                <p>Content creation and planning, community management, analysis and reporting</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">Your Benefits</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>Time savings through delegation of administrative tasks</li>
              <li>Cost efficiency through flexible collaboration without permanent employment</li>
              <li>Professional support with years of experience</li>
              <li>More focus on your core business and strategic tasks</li>
              <li>Reliable handling of even short-notice requests</li>
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

export default VirtualAssistancePage;
