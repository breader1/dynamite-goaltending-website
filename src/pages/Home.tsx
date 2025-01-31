import Hero from "../components/Hero/Hero";
import HeroImage from "../assets/images/Jacob_v5.jpg";
import DynamiteLogo from "../assets/images/dynamite-removebg.png";
import HomePrograms from "../components/Home/HomePrograms";
import HomeAbout from "../components/Home/HomeAbout";

const Home = () => {
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

        {/* About Section */}
        <HomeAbout />
      </div>
    </>
  );
};

export default Home;
