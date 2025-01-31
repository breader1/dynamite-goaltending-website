"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";
import { Link } from "../../models/LinkModel";
import SingleLink from "./SingleLink";
import DynamiteLogo from "../../assets/images/dynamite.png";

interface Props {
  title: string;
  links?: Link[];
}

const Navbar = ({ title, links }: Props) => {
  const [isOpen, setIsOpen] = useState(false); // Track whether the menu is open
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Track screen size

  // Monitor screen size changes to determine if we're on a small screen
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 576); // Bootstrap `sm` breakpoint
      if (window.innerWidth >= 576) {
        setIsOpen(false); // close menu on larger screens
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Listen for screen size changes

    return () => window.removeEventListener("resize", handleResize); // Clean up the listener
  }, []);

  return (
    <nav className="navbar sticky-top navbar-expand-sm bg-black text-white border-bottom border-5 border-danger">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <a
          className="navbar-brand d-flex align-items-center text-white page-link"
          href="/home"
        >
          <img
            src={DynamiteLogo}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top me-2"
          />
          {title}
        </a>

        {/* Toggler Button (only visible on small screens) */}
        <button
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          {/* Animate presence for small screens */}
          <AnimatePresence>
            {(isOpen || !isSmallScreen) && (
              <motion.ul
                initial={isSmallScreen ? { opacity: 0, height: 0 } : false}
                animate={isSmallScreen ? { opacity: 1, height: "auto" } : false}
                // exit={isSmallScreen ? { opacity: 0, height: 0 } : false}
                style={isSmallScreen ? { overflow: "hidden", padding: 0 } : {}}
                className="navbar-nav ms-auto"
                key="menu"
              >
                {links?.map((link) => (
                  <li key={link.id} className="nav-item">
                    <SingleLink
                      linkName={link.linkName}
                      linkPath={link.linkName.toLowerCase()}
                    />
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
