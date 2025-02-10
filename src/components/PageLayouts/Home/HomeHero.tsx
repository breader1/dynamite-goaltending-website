import Hero from "../../Hero/Hero";
import {Images} from "../../../constants/Images";

const HomeHero = () => {
  return (
    <Hero
      title={Images.DynamiteRemoveBG}
      subtitle="Add Explosive Power to Your Game"
      backgroundImage={Images.JacobV5}
      ctaText="Get Started"
      ctaLink="/about"
    />
  );
};

export default HomeHero;
