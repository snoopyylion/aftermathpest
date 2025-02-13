import React from "react";
import { motion } from "framer-motion";
import { FaBug, FaSpider, FaMouse, FaHome } from "react-icons/fa";
import { FaMosquito } from "react-icons/fa6";
import { FaMosquitoNet } from "react-icons/fa6";
import { MdOutlinePestControlRodent } from "react-icons/md";
import { GiLongLeggedSpider } from "react-icons/gi";
import { GiLongAntennaeBug } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";


import "./OurServices.css";

const services = [
  {
    id: 1,
    name: "Residential & Commercial Services",
    icon: <IoHomeOutline className="service-icon" />,
    description:
      "Our residential and commercial pest control services are tailored to keep your home and business pest-free. We use advanced treatment methods to eliminate infestations and prevent future occurrences."
  },
  {
    id: 5,
    name: "Ant Control",
    icon: <GiLongAntennaeBug className="service-icon" />,
    description:
      "Ant infestations can be difficult to control. Our ant treatment targets the colony at its source, using safe and effective solutions to ensure they don’t return."
  },
  {
    id: 2,
    name: "Spider Control",
    icon: <GiLongLeggedSpider className="service-icon" />,
    description:
      "Spiders can be a nuisance and sometimes dangerous. We identify and eliminate spider nests, reducing their population while ensuring your space remains safe."
  },
  {
    id: 3,
    name: "Rodent Removal",
    icon: <MdOutlinePestControlRodent className="service-icon" />,
    description:
      "Rodents pose health risks and structural damage. Our rodent removal service includes trapping, exclusion, and long-term prevention strategies to keep them out."
  },
  {
    id: 4,
    name: "Mosquito Treatment",
    icon: <FaMosquitoNet className="service-icon" />,
    description:
      "Mosquitoes are carriers of diseases. Our mosquito control treatment includes larvicides and targeted sprays to reduce their breeding and protect your environment."
  }
];

const OurServices = () => {
  return (
    <motion.section
      className="services-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Pest Control Services
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        We offer professional and eco-friendly pest control solutions for your home and business.
      </motion.p>
      
      <motion.div
        className="services-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="icon-container"
              whileHover={{ rotate: 10, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default OurServices;
