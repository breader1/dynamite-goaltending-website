import React from "react";
import "./CallToAction.css";

interface CallToActionProps {
  message: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({
  message,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="cta-container">
      <p>{message}</p>
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

export default CallToAction;
