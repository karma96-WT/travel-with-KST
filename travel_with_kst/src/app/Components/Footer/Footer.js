"use client"
import React from 'react';
import './Footer.css';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhoneAlt 
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Left Column: Logo & Tagline */}
      <div className="footer-column footer-brand">
        <img
          src="images/logo.jpeg"
          alt="Logo"
          className="footer-logo"
        />
        <p className="footer-tagline">
          Travel with KST
        </p>
      </div>

      {/* Center Column: Important Links */}
      <div className="footer-column footer-links">
        <h3 className="footer-heading">Important Links</h3>
        <ul>
          <li>
            <a href="https://www.mfa.gov.bt/tourism/" target="_blank" rel="noopener noreferrer">
              Department of Tourism
            </a>
          </li>
          <li>
            <a href="https://www.drukair.com.bt" target="_blank" rel="noopener noreferrer">
              Druk Air
            </a>
          </li>
          <li>
            <a href="https://www.bhutanairlines.bt" target="_blank" rel="noopener noreferrer">
              Bhutan Airlines
            </a>
          </li>
          <li>
            <a href="https://www.doi.gov.bt" target="_blank" rel="noopener noreferrer">
              Department of Immigration, Bhutan
            </a>
          </li>
        </ul>
      </div>

      {/* Right Column: Contacts & Social Icons */}
      <div className="footer-column footer-contacts">
        <h3 className="footer-heading">Contacts</h3>
        <div className="social-icons">
          <a 
        href="#" 
        className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900  hover:text-white transition-all duration-200 hover:-translate-y-1"
        aria-label="Facebook"
      >
        <FaFacebookF className="text-lg" />
      </a>

      {/* Instagram */}
      <a 
        href="#" 
        className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900 hover:text-white transition-all duration-200 hover:-translate-y-1"
        aria-label="Instagram"
      >
        <FaInstagram className="text-xl" />
      </a>

      {/* WhatsApp */}
      <a 
        href="#" 
        className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900  hover:text-white transition-all duration-200 hover:-translate-y-1"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-xl" />
      </a>

      {/* Email */}
      <a 
        href="#" 
        className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900  hover:text-white transition-all duration-200 hover:-translate-y-1"
        aria-label="Email"
      >
        <FaEnvelope className="text-lg" />
      </a>

      {/* Phone */}
      <a 
        href="#" 
        className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900  hover:text-white transition-all duration-200 hover:-translate-y-1"
        aria-label="Phone"
      >
        <FaPhoneAlt className="text-base" />
      </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;