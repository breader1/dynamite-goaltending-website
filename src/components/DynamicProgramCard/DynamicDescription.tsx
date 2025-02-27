import React from "react";
import { Program } from "../../models/ProgramModel";
import "./DynamicCard.css";

interface DynamicDescriptionProps {
  program?: Program;
}

const DynamicDescription: React.FC<DynamicDescriptionProps> = ({ program }) => {
  if (!program) {
    return (
      <div className="dynamic-description-placeholder">
        Click on a program to see more details!
      </div>
    );
  }

  return (
    <div className="dynamic-description">
      <h2>{program.title}</h2>
      <img src={program.image} alt={program.title} loading="lazy" />
      <p>{program.long_description}</p>
    </div>
  );
};

export default DynamicDescription;
