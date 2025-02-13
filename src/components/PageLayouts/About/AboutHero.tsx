import Hero from "../../Hero/Hero";
import { images } from "../../../constants/Images";

const AboutHero = () => {
  return (
    <Hero
      title={images.DynamiteRemoveBG}
      subtitle="What Are We About?"
      backgroundImage={images.JacobV3}
    />
  );
};

export default AboutHero;
