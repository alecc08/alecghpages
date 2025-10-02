import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Globe } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr-CA' : 'en');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">AC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-right">
          <ul className="nav-menu desktop-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">{t('nav.home')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/listkeeper" className="nav-link">{t('nav.listkeeper')}</Link>
            </li>
            <li className="nav-item">
              <Link to="/pixelfarm" className="nav-link">{t('nav.pixelfarm')}</Link>
            </li>
          </ul>
          <button
            onClick={toggleLanguage}
            className="language-toggle desktop-language"
            aria-label="Toggle language"
            title={language === 'en' ? 'Français' : 'English'}
          >
            <Globe size={20} />
            <span className="language-code">{language === 'en' ? 'FR' : 'EN'}</span>
          </button>
          <a
            href="https://github.com/alecc08"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link desktop-github"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
        </div>

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
            <Link to="/" className="nav-link" onClick={toggleMenu}>{t('nav.home')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/listkeeper" className="nav-link" onClick={toggleMenu}>{t('nav.listkeeper')}</Link>
          </li>
          <li className="nav-item">
            <Link to="/pixelfarm" className="nav-link" onClick={toggleMenu}>{t('nav.pixelfarm')}</Link>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                toggleLanguage();
                toggleMenu();
              }}
              className="nav-link language-link"
            >
              <Globe size={20} />
              <span>{language === 'en' ? 'Français' : 'English'}</span>
            </button>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/alecc08"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
              onClick={toggleMenu}
            >
              <Github size={20} />
              <span>{t('nav.github')}</span>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
