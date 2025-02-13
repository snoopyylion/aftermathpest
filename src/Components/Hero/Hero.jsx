import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <section className="hero">
      {/* Hero Content */}
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Say Goodbye to Pests, <span className="highlight">For Good!</span>
        </motion.h1>

        <p className="hero-subtitle">
          Professional & Eco-Friendly Pest Control Services – Safe for Your Home & Business.
        </p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a href="#cta-action" className="btn btn-primary">
            Get a Free Quote
          </a>
          <a href="#learn-more" className="btn btn-secondary" onClick={togglePopup}>
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <motion.div 
            className="popup-content" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Property Rental Prices</h2>
            <ul>
              <li>2. Duplex Apartment (4 bedroom with BQ) - N85,000</li>
              <li>3. 3 Bedroom Flat with BQ - N75,000</li>
              <li>4. Warehouse Facility (Standard size with products in it) - N140,000</li>
              <li>5. A Room Apartment - N40,000</li>
            </ul>
            <p>Looking for a quote? <a href="#quote">Click here to get a free quote</a>.</p>
            <button className="close-btn" onClick={togglePopup}>Close</button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
