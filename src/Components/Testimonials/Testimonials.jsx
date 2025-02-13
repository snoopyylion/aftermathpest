import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";
import { assets } from "../../assets/assets";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    name: "Adeyinka Adekunle",
    review:
      "Aftermath Pest Solutions completely got rid of our termite problem! Amazing service, professional team, and eco-friendly solutions.",
    rating: 5,
    beforeImg: assets.before1,
    afterImg: assets.after1,
  },
  {
    id: 2,
    name: "Tifase Olufunmilayo Abosede",
    review:
      "We had a terrible rodent issue, but Aftermath took care of it fast. No more mice, and their team was very friendly!",
    rating: 5,
    beforeImg: assets.before2,
    afterImg: assets.after2,
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.section
      className="testimonials-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="section-title">What Our Clients Say</h2>
      <p className="section-subtitle">
        Real experiences from customers who trusted Aftermath Pest Solutions.
      </p>

      <div className="testimonial-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentIndex].id}
            className="testimonial-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <p className="testimonial-text">
              "{testimonials[currentIndex].review}"
            </p>
            <h3 className="testimonial-author">
              - {testimonials[currentIndex].name}
            </h3>

            {/* Star Rating with Motion */}
            <motion.div
              className="stars"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {"⭐".repeat(testimonials[currentIndex].rating)}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Images with Motion Effect */}
        <motion.div
          className="testimonial-images"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src={testimonials[currentIndex].beforeImg}
            alt="Before"
            className="testimonial-img"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={testimonials[currentIndex].afterImg}
            alt="After"
            className="testimonial-img"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>

      {/* Controls with Motion Effect */}
      <motion.div
        className="testimonial-controls"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.button
          onClick={prevTestimonial}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MdArrowBackIos/> Prev
        </motion.button>
        <motion.button
          onClick={nextTestimonial}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Next <MdArrowForwardIos/>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
