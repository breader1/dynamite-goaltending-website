import PortfolioContent from "../components/PageLayouts/Portfolios/PortfolioContent";
import PortfolioHero from "../components/PageLayouts/Portfolios/PortfolioHero";
import PortfolioInfo from "../components/PageLayouts/Portfolios/PortfolioIntro";

const Portfolios = () => {
  return (
    <>
      <PortfolioHero />
      <PortfolioContent />
      <PortfolioInfo />
    </>
  );
};

export default Portfolios;
