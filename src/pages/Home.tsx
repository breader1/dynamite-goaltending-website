import Gallery from "../components/Gallery/Gallery";
import HomePrograms from "../components/PageLayouts/Home/HomePrograms";
import HomeAbout from "../components/PageLayouts/Home/HomeAbout";
import HomeHero from "../components/PageLayouts/Home/HomeHero";
import { ImageGallery } from "../constants/Images";
import HomeTestimonials from "../components/PageLayouts/Home/HomeTestimonials";
import { testimonials } from "../constants/Testimonials";
import { HomeIntro } from "../components/PageLayouts/Home/HomeIntro";
const Home = () => {
  return (
    <>
      <div>
        <HomeHero />

        <HomeIntro />

        <HomePrograms />

        <Gallery images={Object.values(ImageGallery)} />

        <HomeAbout />

        <HomeTestimonials testimonials={testimonials} />
      </div>
    </>
  );
};

export default Home;
