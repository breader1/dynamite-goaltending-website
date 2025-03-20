import { images } from "../../../constants/Images";
import Hero from "../../Hero/Hero";

const PortfolioHero = () => {
  return (
    <Hero
      title={images.DynamiteRemoveBG}
      subtitle="Build Your Goalie Portfolio"
      backgroundImage={images.Allen1}
    />
  );
};

export default PortfolioHero;
