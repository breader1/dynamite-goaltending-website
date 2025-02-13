import Hero from "../../Hero/Hero";
import { images } from "../../../constants/Images";

export const ProgramHero = () => {
  return (
    <Hero
      title={images.DynamiteRemoveBG}
      subtitle={"Check out what our programs have to offer!"}
      backgroundImage={images.JacobV2}
    />
  );
};
