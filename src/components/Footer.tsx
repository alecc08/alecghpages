import React from 'react';
import { Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
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
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <p className="footer-attribution">Built with React</p>
      </div>
    </footer>
  );
};

export default Footer;
