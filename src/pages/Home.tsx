import Gallery from "../components/Gallery/Gallery";
import HomePrograms from "../components/PageLayouts/Home/HomePrograms";
import HomeAbout from "../components/PageLayouts/Home/HomeAbout";
import HomeHero from "../components/PageLayouts/Home/HomeHero";
import { ImageGallery } from "../constants/Images";
const Home = () => {
  return (
    <>
      <div>
        <HomeHero />

        <HomePrograms />

        <Gallery images={Object.values(ImageGallery)} />

        <HomeAbout />
      </div>
    </>
  );
};

export default Home;
