import "./about.css";
import { Images } from "../../../constants/Images";

const AboutDescription = () => {
  return (
    <>
      <div className="about-description py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6">
              <h2 className="section-title mb-4">Our Philosophy</h2>
              <p className="section-description">
                At Dynamite Goaltending, we believe that greatness is built
                through effort, determination, and playing with heart. Our
                mission is to help goalies become the best versions of
                themselves, both on and off the ice. We focus on fostering
                resilience, discipline, and a passion for the game, instilling
                values that extend beyond the rink. Through personalized
                coaching and a commitment to excellence, we empower our goalies
                to face challenges head-on and push their limits. Whether it’s
                mastering technique, building confidence, or developing mental
                toughness, we are dedicated to nurturing well-rounded athletes
                who strive for success in every aspect of life.
              </p>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-center">
              <img
                src={Images.NormShot}
                alt="Philosophy Image"
                className="philosophy-image img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDescription;
