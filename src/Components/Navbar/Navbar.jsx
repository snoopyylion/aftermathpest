import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { CiMenuFries } from "react-icons/ci";
import { LuPanelRightClose } from "react-icons/lu";
import { TbEqual } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { MdMaximize } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/company", name: "Our Services" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact Us" },
  ];
  const handleScrollToCTA = () => {
    const ctaSection = document.getElementById("cta-action");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}
    >
      <div className="main-container">
        <NavLink to="/" className="logo">
          <img src={assets.logo} alt="Logo" />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="nav-items">
          <ul>
            {navLinks.map(({ path, name }) => (
              <li key={path} className="nav-item">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {name}
                </NavLink>
                {/* Show <TbEqual /> icon if the link is active */}
                <NavLink to={path} className="icon">
                  {({ isActive }) => isActive && <MdMaximize className="li" />}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <NavLink
        to="/contact"
          className="cta-button"
          // onClick={handleScrollToCTA}
        >
          <div className="icon-wrapper">
            <MdConnectWithoutContact />
            {/* <HiOutlineClipboardDocumentCheck /> */}
          </div>
          <div className="divider"></div>
          <div className="cta-text">
            <div className="cta-heading">Get Help</div>
            <div className="cta-subtext">Now</div>
          </div>
        </NavLink>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setSidebarVisible(true)}>
          {/* <CiMenuFries /> */}
          <SlMenu />
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
        <div className="sidebar-content">
          <div onClick={() => setSidebarVisible(false)} className="back-button">
            <div className="back-icon">
              <LuPanelRightClose />
            </div>
          </div>
          <div className="nav-itemss">
            {navLinks.map(({ path, name }) => (
              <NavLink
                key={path}
                onClick={() => setSidebarVisible(false)}
                className="nav-link"
                to={path}
              >
                {name}
              </NavLink>
            ))}
          </div>
          <NavLink to="/contact" className="cta-buttons">
            <div className="icon-wrapper">
              <MdConnectWithoutContact />
              {/* <HiOutlineClipboardDocumentCheck /> */}
            </div>
            <div className="divider"></div>
            <div className="cta-text">
              <div className="cta-heading">Get Help</div>
              <div className="cta-subtext">Now</div>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
