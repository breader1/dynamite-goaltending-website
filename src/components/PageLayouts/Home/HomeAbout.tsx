import AboutHeader from "../../Cards/CardHeader";
import TeamGrid from "../../Cards/TeamGrid";
import { coaches } from "../../../constants/Coaches";
import "./Home.css";

const HomeAbout = () => {
  return (
    <div id="about" className="about-section py-5">
      <div className="container">
        <AboutHeader
          title="Coaches"
          description="Our team of experienced coaches is dedicated to helping you reach your full potential. Meet the experts who will guide you on your journey to becoming an elite goalie."
        />

        {/* Team Grid */}
        <TeamGrid coaches={coaches} />
      </div>
    </div>
  );
};

export default HomeAbout;
