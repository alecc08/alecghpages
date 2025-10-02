import React from 'react';
import { Github } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">© {currentYear} Alec Chamberland</p>
          <div className="footer-links">
            <a
              href="https://github.com/alecc08"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
              <span>{t('nav.github')}</span>
            </a>
          </div>
        </div>
        <p className="footer-attribution">{t('footer.builtWith')}</p>
      </div>
    </footer>
  );
};

export default Footer;
