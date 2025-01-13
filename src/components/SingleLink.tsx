import { Link } from 'react-router-dom';
import "./styles.css";
import { motion } from 'motion/react';

interface Props {
  linkName: string;
  linkPath: string;
}

const SingleLink = ({ linkName, linkPath }: Props) => {
  return (
<motion.a
  href={linkPath}
  whileHover={{ scale: 1.1, color: "#ff0000" }}
  transition={{ duration: 0.2 }}
  className="page-link"
>
  {linkName}
</motion.a>

  );
};

export default SingleLink;
