"use client";

import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import "./styles.css";

// Wrap NavLink with motion
const MotionNavLink = motion(NavLink);

interface Props {
  linkName: string;
  linkPath: string;
}

const SingleLink = ({ linkName, linkPath }: Props) => {
  return (
    <MotionNavLink
      to={linkPath}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      className={({ isActive }) =>
        `page-link ${isActive ? "active-link" : ""}`
      } // Add 'active-link' class when the route matches
    >
      {linkName}
    </MotionNavLink>
  );
};

export default SingleLink;
