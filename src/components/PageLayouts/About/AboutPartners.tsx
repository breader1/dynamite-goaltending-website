import { partners } from "../../../constants/Partners";
import PartnerCard from "../../Cards/PartnerCard/PartnerCard";

const AboutPartners = () => {
  return (
    <div className="partners-section py-5">
      <div className="container text-center">
        <h2 className="mb-5">Our Partners</h2>
        <div className="row justify-content-center">
          {partners.map((partner) => (
            <div className="col-md-4 mb-4" key={partner.id}>
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPartners;
