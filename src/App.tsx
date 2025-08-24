import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UltraList from './pages/UltraList';
import PixelFarm from './pages/PixelFarm';
import './styles/globals.css';
import './components/Navbar.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ultralist" element={<UltraList />} />
            <Route path="/pixelfarm" element={<PixelFarm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
