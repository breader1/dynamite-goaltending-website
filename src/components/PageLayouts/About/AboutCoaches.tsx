import { coaches } from "../../../constants/Coaches";
import AboutHeader from "../../Cards/CardHeader";

const AboutCoaches = () => {
  return (
    <>
      <div className="about-coaches py-5 mb-5">
        <h2 className="text-center mb-5 section-title">The Team</h2>
        <div className="container">
          {/* Loop through all coaches */}
          {coaches.map((coach, index) => (
            <div className="row align-items-center mb-5" key={index}>
              {/* Alternate layout for odd/even rows */}
              <div
                className={`col-md-6 ${
                  index % 2 === 0 ? "order-md-1" : "order-md-2"
                } text-center`}
              >
                <img
                  src={coach.image}
                  alt={`${coach.name} Profile`}
                  className="philosophy-image img-fluid rounded shadow"
                  loading="lazy"
                />
              </div>
              <div
                className={`col-md-6 ${
                  index % 2 === 0 ? "order-md-2" : "order-md-1"
                }`}
              >
                <AboutHeader title={coach.name} description={coach.role} />
                <p className="section-description">{coach.long_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutCoaches;
