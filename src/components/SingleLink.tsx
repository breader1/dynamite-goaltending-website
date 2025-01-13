import { Link } from "react-router-dom";
import "./styles.css";
import { motion } from "motion/react";

const MotionLink = motion(Link); // Wrap Link with motion for animations

interface Props {
  linkName: string;
  linkPath: string;
}

const SingleLink = ({ linkName, linkPath }: Props) => {
  return (
    <MotionLink
      to={linkPath} // Use 'to' for React Router navigation
      whileHover={{ scale: 1.1, color: "#ff0000" }}
      transition={{ duration: 0.2 }}
      className="page-link"
    >
      {linkName}
    </MotionLink>
  );
};

export default SingleLink;
