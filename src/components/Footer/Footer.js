import React from "react";
import "./Footer.css";
import sageLogo from "../../assets/Sagepath-Labs-Logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen, FaChevronRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-modern">
      {/* Top Wave Decoration (CSS handled) */}
      <div className="footer-wave"></div>

      <div className="container">
        <div className="footer-top-grid">

          {/* Col 1: Brand */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrap">
              {/* Use filter in CSS to make logo white/bright if needed, or use a white version */}
              <img src={sageLogo} alt="SagePath Labs" className="f-logo" />
            </div>
            <p className="f-desc">
              SagePath Labs is a premier diagnostic network dedicated to accuracy, integrity, and patient care.
              We combine advanced technology with human expertise to deliver results you can trust.
            </p>
            <div className="f-socials">
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="f-title">Quick Links</h4>
            <ul className="f-links">
              <li><a href="/"><FaChevronRight className="f-arrow" /> Home</a></li>
              <li><a href="/about"><FaChevronRight className="f-arrow" /> About Us</a></li>
              <li><a href="/doctors"><FaChevronRight className="f-arrow" /> Medical Team</a></li>
              <li><a href="/careers"><FaChevronRight className="f-arrow" /> Careers</a></li>
              <li><a href="/Become-a-Partner"><FaChevronRight className="f-arrow" /> Franchise</a></li>
              <li><a href="/contact"><FaChevronRight className="f-arrow" /> Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-col links-col">
            <h4 className="f-title">Our Services</h4>
            <ul className="f-links">
              <li><a href="/diagnostics"><FaChevronRight className="f-arrow" /> Pathology</a></li>
              <li><a href="/diagnostics"><FaChevronRight className="f-arrow" /> Radiology</a></li>
              <li><a href="/diagnostics"><FaChevronRight className="f-arrow" /> Corporate Wellness</a></li>
              <li><a href="/diagnostics"><FaChevronRight className="f-arrow" /> Home Collection</a></li>
              <li><a href="/diagnostics"><FaChevronRight className="f-arrow" /> Health Packages</a></li>
              <li><a href="/diagnostics"><FaChevronRight className="f-arrow" /> Clinical Trials</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="footer-col contact-col">
            <h4 className="f-title">Get in Touch</h4>
            <ul className="f-contact-list">
              <li>
                <FaMapMarkerAlt className="f-icon" />
                <span>
                  Plot No. 564, 1st Floor, Budda Nagar,
                  Peerzadiguda, Hyderabad, TS - 500039
                </span>
              </li>
              <li>
                <FaPhoneAlt className="f-icon" />
                <span>
                  <a href="tel:+919059902920">+91 90599 02920</a> <br />
                  <a href="tel:+917995862920">+91 79958 62920</a>
                </span>
              </li>
              <li>
                <FaEnvelopeOpen className="f-icon" />
                <a href="mailto:info@sagepathlabs.com">info@sagepathlabs.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter / Bottom */}
        <div className="footer-bottom-bar">
          <div className="f-copyright">
            &copy; {new Date().getFullYear()} SagePath Labs Pvt Ltd. All Rights Reserved.
          </div>
          <div className="f-legal">
            <a href="/privacy">Privacy Policy</a>
            <span className="sep">|</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
