import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import HeroImage from "../assets/images/Jacob_v5.jpg";
import DynamiteLogo from "../assets/images/dynamite-removebg.png";
import HomePrograms from "../components/Home/HomePrograms";
import HomeAbout from "../components/Home/HomeAbout";
import Belle from "../assets/images/Belle.jpg";
import Brett from "../assets/images/Brett.jpg";
import BelleTrophy from "../assets/images/BelleTrophy.jpg";
import KRTeam from "../assets/images/KRTeam.jpg";
import Underdogs from "../assets/images/underdogs.png";
import Jacob from "../assets/images/jacob.jpg";

const Home = () => {
  const images = [Belle, Brett, BelleTrophy, KRTeam, Underdogs, Jacob];

  return (
    <>
      <div>
        <Hero
          title={DynamiteLogo}
          subtitle="Add Explosive Power to Your Game"
          backgroundImage={HeroImage}
          ctaText="Get Started"
          ctaLink="/about"
        />

        {/* Programs Section */}
        <HomePrograms />

        <Gallery images={images} />

        {/* About Section */}
        <HomeAbout />
      </div>
    </>
  );
};

export default Home;
