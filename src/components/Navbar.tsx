import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Grid, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAppsDropdown = () => {
    setIsAppsDropdownOpen(!isAppsDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Alec Chamberland</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-menu desktop-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <button 
              className="nav-link dropdown-toggle"
              onClick={toggleAppsDropdown}
            >
              <Grid size={20} />
              <span>Apps</span>
              <span className={`arrow ${isAppsDropdownOpen ? 'up' : 'down'}`}>▼</span>
            </button>
            {isAppsDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/ultralist" className="dropdown-link">UltraList</Link></li>
                <li><Link to="/pixelfarm" className="dropdown-link">Pixel Farm</Link></li>
              </ul>
            )}
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
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <button 
              className="nav-link dropdown-toggle"
              onClick={toggleAppsDropdown}
            >
              <Grid size={20} />
              <span>Apps</span>
              <span className={`arrow ${isAppsDropdownOpen ? 'up' : 'down'}`}>▼</span>
            </button>
            {isAppsDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/ultralist" className="dropdown-link" onClick={toggleMenu}>UltraList</Link></li>
                <li><Link to="/pixelfarm" className="dropdown-link" onClick={toggleMenu}>Pixel Farm</Link></li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
