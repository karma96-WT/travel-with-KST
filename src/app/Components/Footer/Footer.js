"use client"
import React, { useState } from 'react';
import './Footer.css';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhoneAlt 
} from "react-icons/fa";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/travel-with-KST' : '')

function Footer() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <footer className="footer-container">
      {/* Left Column: Logo & Tagline */}
      <div className="footer-column footer-brand">
        <img
          src={`${BASE}/images/logo.jpeg`}
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
      <div id="contacts" className="footer-column footer-contacts">
        <h3 className="footer-heading">Contacts</h3>
        <div className="social-icons">
          <a 
            href="https://www.facebook.com/gyeltshen.lepcha.37" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900 hover:text-white transition-all duration-200 hover:-translate-y-1"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-lg" />
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/tignaalmu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900 hover:text-white transition-all duration-200 hover:-translate-y-1"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl" />
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/+97517584420" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900 hover:text-white transition-all duration-200 hover:-translate-y-1"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-xl" />
          </a>

          {/* Email */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setShowEmail(true); }}
            className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900 hover:text-white transition-all duration-200 hover:-translate-y-1"
            aria-label="Email"
          >
            <FaEnvelope className="text-lg" />
          </a>
          {showEmail && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setShowEmail(false)}>
              <div className="bg-[#08150a] border-2 border-white/10 p-6 rounded-2xl text-center max-w-sm w-full mx-4 shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="w-12 h-12 rounded-full bg-[#e8572a] flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <h3 className="text-white font-bold mb-2">Email Address</h3>
                <p className="text-white/80 text-lg mb-6">02230125.cst@eub.edu.bt</p>
                <button 
                  onClick={() => setShowEmail(false)}
                  className="px-6 py-2 bg-[#e8572a] text-white rounded-lg hover:bg-[#d44a20] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Phone */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setShowPhone(true); }}
            className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center text-gray-900 hover:text-white transition-all duration-200 hover:-translate-y-1"
            aria-label="Phone"
          >
            <FaPhoneAlt className="text-base" />
          </a>
          {showPhone && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setShowPhone(false)}>
              <div className="bg-[#08150a] border-2 border-white/10 p-6 rounded-2xl text-center max-w-sm w-full mx-4 shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="w-12 h-12 rounded-full bg-[#e8572a] flex items-center justify-center mx-auto mb-4">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <h3 className="text-white font-bold mb-2">Phone Number</h3>
                <p className="text-white/80 text-lg mb-6">+97517584420</p>
                <button 
                  onClick={() => setShowPhone(false)}
                  className="px-6 py-2 bg-[#e8572a] text-white rounded-lg hover:bg-[#d44a20] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
