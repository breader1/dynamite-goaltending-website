import { BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Hero from "./components/Home/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import HeroImage from "./assets/images/Jacob_v5.jpg";
import DynamiteLogo from "./assets/images/dynamite-removebg.png";

function App() {
  const links = [
    { id: 1, linkName: "Home" },
    { id: 2, linkName: "About" },
    { id: 3, linkName: "Programs" },
    { id: 4, linkName: "Contact" },
  ];
  return (
    <>
      {/* Navbar */}
      <BrowserRouter>
        <Navbar title="Dynamite Goaltending" links={links} />
      </BrowserRouter>

      {/* Main */}
      <div>
        <Hero
          title={DynamiteLogo}
          subtitle="Add Explosive Power to Your Game"
          backgroundImage={HeroImage}
          ctaText="Get Started"
          ctaLink="/about"
        />
      </div>

      <div>
        <Programs />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Contact email="norm@dynamitegoaltending.com" />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
