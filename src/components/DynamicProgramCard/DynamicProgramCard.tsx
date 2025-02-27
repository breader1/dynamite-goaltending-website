import React from "react";
import { motion } from "framer-motion";
import "./DynamicCard.css";

interface DynamicProgramCardProps {
  program: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  onSelect: (id: number) => void;
}

const DynamicProgramCard: React.FC<DynamicProgramCardProps> = ({
  program,
  onSelect,
}) => {
  return (
    <motion.div
      className="dynamic-program-card"
      onClick={() => onSelect(program.id)}
      whileHover={{ scale: 1.05 }}
    >
      <img src={program.image} alt={program.title} loading="lazy" />
      <h3>{program.title}</h3>
      <p>{program.description}</p>
    </motion.div>
  );
};

export default DynamicProgramCard;
