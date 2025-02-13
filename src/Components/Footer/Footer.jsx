import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <h3 className="footer-title">Contact Us</h3>
          <p><FiMapPin className="footer-icon" /> 123 Pest Control St, City, Country</p>
          <p><FiPhone className="footer-icon" /> +123 456 7890</p>
          <p><FiMail className="footer-icon" /> info@pestcontrol.com</p>
        </div>

        <div className="footer-section quick-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/company">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-section social-links">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h3 className="footer-title">Subscribe to Our Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pest Control Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
