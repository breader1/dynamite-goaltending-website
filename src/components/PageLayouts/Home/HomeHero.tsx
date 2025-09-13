import Hero from "../../Hero/Hero";
import {images} from "../../../constants/Images";

const HomeHero = () => {
  return (
    <Hero
      title={images.DynamiteRemoveBG}
      subtitle="Add Explosive Power to Your Game"
      email="norm@dynamitegoaltending.com"
      backgroundImage={images.JacobV5}
      ctaText="Get Started"
      ctaLink="/about"
    />
  );
};

export default HomeHero;
