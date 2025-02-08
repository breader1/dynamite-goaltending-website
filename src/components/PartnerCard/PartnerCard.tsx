import React from "react";
import { Partner } from "../../models/PartnerModel";
import "./PartnerCard.css";

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <div className="card text-center shadow-sm">
      <div
        className="card-img-top bg-light d-flex justify-content-center align-items-center"
        style={{ height: "150px" }}
      >
        <img
          src={partner.image}
          alt={partner.imageAlt}
          className="img-fluid"
          style={{ maxHeight: "100%" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{partner.name}</h5>
      </div>
    </div>
  );
};

export default PartnerCard;
