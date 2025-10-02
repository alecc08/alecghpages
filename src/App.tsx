import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListKeeper from './pages/ListKeeper';
import PixelFarm from './pages/PixelFarm';
import './styles/globals.css';
import './components/Navbar.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listkeeper" element={<ListKeeper />} />
              <Route path="/pixelfarm" element={<PixelFarm />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
