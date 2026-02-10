import { motion } from 'framer-motion';
import '../styles/Footer.css';

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" fill="white" opacity="0.9"/>
                  <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
                  <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
                  <path d="M9 15c1.5 2 4.5 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="footer-logo-text">MindEase</span>
            </div>
            <p className="footer-tagline">
              Professional counseling services for mental health and wellness. Making therapy accessible for everyone.
            </p>
          </div>

          <div className="footer-column">
            <h4>Platform</h4>
            <div className="footer-column-links">
              <a href="/know_more" className="footer-column-link">How It Works</a>
              <a href="/appointment" className="footer-column-link">Book Session</a>
              <a href="#therapists" className="footer-column-link">Our Therapists</a>
              <a href="/internship" className="footer-column-link">Careers</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <div className="footer-column-links">
              <a href="#about" className="footer-column-link">About Us</a>
              <a href="#" className="footer-column-link">Blog</a>
              <a href="#" className="footer-column-link">Press</a>
              <a href="#" className="footer-column-link">Contact</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <div className="footer-column-links">
              <a href="#" className="footer-column-link">Help Center</a>
              <a href="#" className="footer-column-link">Privacy Policy</a>
              <a href="#" className="footer-column-link">Terms of Service</a>
              <a href="#" className="footer-column-link">Accessibility</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            2025 MindEase Psychology. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy</a>
            <a href="#" className="footer-bottom-link">Terms</a>
            <a href="#" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
