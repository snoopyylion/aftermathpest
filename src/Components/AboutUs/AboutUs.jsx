import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLeaf, FaBolt } from "react-icons/fa"; // Importing icons
import "./AboutUs.css";
import { assets } from "../../assets/assets";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        {/* Left Side: Image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={assets.team} alt="Our Team" />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">
            Why Choose <span>Our Pest Control Services?</span>
          </h2>
          <p className="about-description">
            With years of experience, we provide <strong>safe, eco-friendly, and reliable pest control solutions</strong>. Our trained professionals ensure <strong>quick response times</strong> and <strong>effective treatments</strong> to keep your home and business pest-free.
          </p>

          {/* Benefits List */}
          <ul className="about-benefits">
            <li>✅ <strong>Eco-Friendly & Safe Treatments</strong></li>
            <li>✅ <strong>Licensed & Certified Experts</strong></li>
            <li>✅ <strong>Affordable & Transparent Pricing</strong></li>
            <li>✅ <strong>Quick Response & 24/7 Support</strong></li>
          </ul>

          {/* Trust Badges (Icons Instead of Images) */}
          <div className="trust-badges">
            <div className="badge">
              <FaShieldAlt className="icon" />
              <span>Certified</span>
            </div>
            <div className="badge">
              <FaLeaf className="icon" />
              <span>Eco-Friendly</span>
            </div>
            <div className="badge">
              <FaBolt className="icon" />
              <span>Fast Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
