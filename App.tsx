
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SectorsPage from './pages/SectorsPage';
import ValuesPage from './pages/ValuesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';


const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/values" element={<ValuesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
