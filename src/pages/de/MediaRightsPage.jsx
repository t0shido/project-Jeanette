import React from 'react';
import { Link } from 'react-router-dom';
import mediaRightsImage from '../../assets/images/media_rights.jpg';

const MediaRightsPage = () => {
  return (
    <div className="service-detail-page">
      <div className="container mx-auto px-4 py-16">
        <div className="service-detail-header text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 font-playfair text-gray-800">Verlags- & Media-Rights-Management</h1>
        </div>

        <div className="service-detail-content max-w-4xl mx-auto">
          <div className="service-detail-image-container mb-12">
            <img src={mediaRightsImage} alt="Verlags- & Media-Rights-Management" className="service-detail-image" />
          </div>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">Spezialisierte Assistenz für Verlage und Medienunternehmen</h2>
            <p className="text-lg mb-6">
              Mit meiner langjährigen Erfahrung im Verlagswesen und Media-Rights-Management unterstütze ich Sie bei der 
              professionellen Verwaltung und Vermarktung Ihrer Medienrechte. Ich biete maßgeschneiderte Lösungen für 
              Verlage, Autoren, Content-Ersteller und Medienunternehmen.
            </p>
            <p className="text-lg mb-6">
              In der komplexen Welt der Medienrechte sorge ich für Klarheit und helfe Ihnen, das volle Potenzial 
              Ihrer Inhalte auszuschöpfen – sei es bei Büchern, digitalen Publikationen oder anderen Medienformaten.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">Meine Leistungen im Überblick</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Rechteverwaltung</h3>
                <p>Systematische Erfassung und Verwaltung von Medienrechten, Überwachung von Nutzungsrechten und Lizenzen</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Lizenzverhandlungen</h3>
                <p>Unterstützung bei Verhandlungen, Erstellung von Lizenzverträgen, Beratung zu Konditionen und Vergütungsmodellen</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Vertragsmanagement</h3>
                <p>Erstellung und Prüfung von Verträgen, Überwachung von Fristen und Verpflichtungen, Dokumentation</p>
              </div>
              <div className="service-item p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Publikationsabläufe</h3>
                <p>Koordination von Veröffentlichungsprozessen, Terminplanung, Kommunikation mit allen Beteiligten</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 font-playfair text-gray-800">Ihre Vorteile</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>Professionelles Management Ihrer wertvollen Medienrechte</li>
              <li>Optimierung von Lizenzeinnahmen und Verwertungsmöglichkeiten</li>
              <li>Rechtssicherheit durch sorgfältige Vertragserstellung und -überwachung</li>
              <li>Effiziente Koordination von Publikationsprozessen</li>
              <li>Branchenspezifisches Know-how und etablierte Netzwerke</li>
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

export default MediaRightsPage;
