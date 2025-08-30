import React from 'react';
import { Link } from 'react-router-dom';

const VirtuelleAssistenzPage = () => {
  return (
    <div className="service-detail-page">
      <div className="container mx-auto px-4 py-16">
        <div className="service-detail-header text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 font-playfair text-gray-800">Virtuelle Assistenz & Back-Office</h1>
          <div className="frame-icon-container mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="frame-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>

        <div className="service-detail-content max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">Professionelle Unterstützung für Ihren Geschäftsalltag</h2>
            <p className="text-lg mb-6">
              Als Ihre virtuelle Assistenz übernehme ich administrative Aufgaben und Back-Office-Tätigkeiten, 
              damit Sie sich auf Ihr Kerngeschäft konzentrieren können. Mit meiner Unterstützung gewinnen Sie 
              wertvolle Zeit und können sich auf das fokussieren, was wirklich zählt.
            </p>
            <p className="text-lg mb-6">
              Meine Dienstleistungen sind flexibel und können an Ihre individuellen Bedürfnisse angepasst werden. 
              Ob regelmäßige Unterstützung oder projektbezogene Zusammenarbeit – ich stehe Ihnen zuverlässig zur Seite.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">Meine Leistungen im Überblick</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">E-Mail-Management</h3>
                <p>Bearbeitung und Organisation Ihrer E-Mails, Priorisierung wichtiger Nachrichten, Erstellung von Antwortvorlagen</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Kalender-Organisation</h3>
                <p>Terminplanung und -koordination, Erinnerungen an wichtige Ereignisse, Reiseplanung</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Administrative Aufgaben</h3>
                <p>Dokumentenverwaltung, Dateneingabe, Erstellung von Berichten und Präsentationen</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Social Media Support</h3>
                <p>Erstellung und Planung von Inhalten, Community Management, Analyse und Reporting</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">Ihre Vorteile</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>Zeitersparnis durch Delegation administrativer Aufgaben</li>
              <li>Kosteneffizienz durch flexible Zusammenarbeit ohne Festanstellung</li>
              <li>Professionelle Unterstützung mit langjähriger Erfahrung</li>
              <li>Mehr Fokus auf Ihr Kerngeschäft und strategische Aufgaben</li>
              <li>Zuverlässige Erledigung auch kurzfristiger Anfragen</li>
            </ul>
          </section>

          <div className="text-center mt-12">
            <Link to="/#contact" className="inline-block px-8 py-3 bg-pink-100 text-gray-800 font-medium rounded-lg hover:bg-pink-200 transition-colors">
              Kontaktieren Sie mich
            </Link>
            <Link to="/" className="inline-block ml-4 px-8 py-3 bg-white border border-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtuelleAssistenzPage;
