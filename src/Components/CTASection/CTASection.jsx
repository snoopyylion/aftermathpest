import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import "./CTASection.css";
import { assets } from "../../assets/assets";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CTASection = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        issue: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const templateParams = {
          from_name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          message: formData.issue,
          to_name: "AFTERMATH Team", // Change this if needed
        };
    
        emailjs
          .send(
            "service_yf08fn7",
            "template_jgrxj6j",
            templateParams,
            "wHuAAsSo-_qwIClOG"
          )
          .then(() => {
            toast.success("Message Sent Successfully!");
            setFormData({ name: "", phone: "", email: "", address: "", issue: "" });
          })
          .catch((err) => {
            toast.error("Failed to send message. Please try again.");
            console.error(err);
          });
      };
    
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted", formData);
//     // Add form submission logic here
//   };

  return (
    <motion.section
      id="cta-action"
      className="cta-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="cta-action">
        {/* Left Side: Text & Form */}
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get a Free Quote Today!</h2>
          <p>Protect your home or business with our expert pest control solutions.</p>

          {/* Form with Motion */}
          <motion.form
      onSubmit={handleSubmit}
      className="cta-form"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <motion.input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        whileFocus={{ scale: 1.05 }}
      />
      <motion.input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        whileFocus={{ scale: 1.05 }}
      />
      <motion.input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        whileFocus={{ scale: 1.05 }}
      />
      <motion.input
        type="text"
        name="address"
        placeholder="Your Address"
        value={formData.address}
        onChange={handleChange}
        required
        whileFocus={{ scale: 1.05 }}
      />
      <motion.textarea
        name="issue"
        placeholder="Describe Your Pest Issue"
        value={formData.issue}
        onChange={handleChange}
        required
        whileFocus={{ scale: 1.05 }}
      ></motion.textarea>

      <motion.button
        type="submit"
        className="cta-buttons"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Get a Free Quote
      </motion.button>
    </motion.form>

          {/* Contact Information */}
      <motion.div
        className="cta-contact"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a href="tel:+2347063454555">
          <FaPhoneAlt /> Call Us: +234 706 345 4555
        </a>
        <a href="https://wa.me/2348056260074">
          <FaWhatsapp /> WhatsApp: +234 805 626 0074
        </a>
        <a href="mailto:eddyenema@gmail.com">
          <FaEnvelope /> Email: support@pestcontrol.ng
        </a>
      </motion.div>

          {/* Trust Badges with Motion */}
          <motion.div
            className="cta-badges"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p><FaCheckCircle /> Licensed & Certified</p>
            <p><FaCheckCircle /> Eco-Friendly Solutions</p>
            <p><FaCheckCircle /> Trusted by Thousands</p>
          </motion.div>
        </motion.div>

        {/* Right Side: Video Section */}
        <motion.div
          className="cta-video"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video src={assets.video} autoPlay muted loop></video>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;
