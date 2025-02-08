import Hero from "../../Hero/Hero";
import DynamiteLogo from "../../../assets/images/dynamite-removebg.png";
import AboutHeroImage from "../../../assets/images/Jacob_v3.jpg";

const AboutHero = () => {
  return (
    <Hero
      title={DynamiteLogo}
      subtitle="What Are We About?"
      backgroundImage={AboutHeroImage}
    />
  );
};

export default AboutHero;
