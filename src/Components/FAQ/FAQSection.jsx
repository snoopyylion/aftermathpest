import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQSection.css";

const faqs = [
  {
    question: "Do you use safe chemicals?",
    answer: "Yes, we use eco-friendly and government-approved chemicals that are safe for children and pets.",
  },
  {
    question: "How much does pest control cost?",
    answer: "Pricing varies based on the type and severity of infestation. Contact us for a free quote.",
  },
  {
    question: "Is there a guarantee on your services?",
    answer: "Yes, we offer a satisfaction guarantee. If pests return within the guarantee period, we will re-treat for free.",
  },
  {
    question: "How effective is your pest control treatment?",
    answer: "Our treatments are highly effective, with most infestations eliminated within days. We also provide follow-up services.",
  },
  {
    question: "Do I need to leave my home during treatment?",
    answer: "In most cases, you can stay. However, for certain treatments, we recommend vacating for a few hours. Our experts will advise accordingly.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscribed successfully!");
        setEmail("");
      } else {
        setMessage("Subscription failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Try again.");
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
    id="faq"
      className="faq-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              whileHover={{ scale: 1.02 }}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                {openIndex === index ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="blog-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Pest Prevention Tips</h3>
        <p>Stay ahead of pests with our expert advice. Read our latest blog articles on effective pest prevention.</p>
        <form onSubmit={handleSubscribe} className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p className="subscribe-message">{message}</p>}
      </motion.div>
    </motion.section>
  );
};

export default FAQSection;
