import Hero from "../../Hero/Hero";
import HeroImage from "../../../assets/images/Jacob_v5.jpg";
import DynamiteLogo from "../../../assets/images/dynamite-removebg.png";

const HomeHero = () => {
  return (
    <Hero
      title={DynamiteLogo}
      subtitle="Add Explosive Power to Your Game"
      backgroundImage={HeroImage}
      ctaText="Get Started"
      ctaLink="/about"
    />
  );
};

export default HomeHero;
