import Gallery from "../components/Gallery/Gallery";
import HomePrograms from "../components/PageLayouts/Home/HomePrograms";
import HomeAbout from "../components/PageLayouts/Home/HomeAbout";
import HomeHero from "../components/PageLayouts/Home/HomeHero";
import { ImageGallery } from "../constants/Images";
import HomeTestimonials from "../components/PageLayouts/Home/HomeTestimonials";
import { testimonials } from "../constants/Testimonials";
const Home = () => {
  return (
    <>
      <div>
        <HomeHero />

        <HomePrograms />

        <Gallery images={Object.values(ImageGallery)} />

        <HomeAbout />

        <HomeTestimonials testimonials={testimonials} />
      </div>
    </>
  );
};

export default Home;
