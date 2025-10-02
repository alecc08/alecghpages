import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">AC</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-menu desktop-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/listkeeper" className="nav-link">ListKeeper</Link>
          </li>
          <li className="nav-item">
            <Link to="/pixelfarm" className="nav-link">Pixel Farm</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="nav-menu mobile-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/listkeeper" className="nav-link" onClick={toggleMenu}>ListKeeper</Link>
          </li>
          <li className="nav-item">
            <Link to="/pixelfarm" className="nav-link" onClick={toggleMenu}>Pixel Farm</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
