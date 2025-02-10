import Hero from "../../Hero/Hero";
import { Images } from "../../../constants/Images";

const AboutHero = () => {
  return (
    <Hero
      title={Images.DynamiteRemoveBG}
      subtitle="What Are We About?"
      backgroundImage={Images.JacobV3}
    />
  );
};

export default AboutHero;
