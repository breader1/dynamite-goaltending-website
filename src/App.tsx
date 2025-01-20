import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Hero from "./components/Home/Hero";

function App() {
  const links = [
    { id: 1, linkName: "Home" },
    { id: 2, linkName: "About" },
    { id: 3, linkName: "Programs" },
  ];
  return (
    <>
      {/* Navbar */}
      <BrowserRouter>
        <Navbar title="Dynamite Goaltending" links={links} />
        <Routes>
          <Route path="" element={<About />} />
          <Route path="" element={<Programs />} />
        </Routes>
      </BrowserRouter>

      {/* Main */}
      <div>
        <Hero
          title="Welcome to Dynamite Goaltending"
          subtitle="Your one-stop shop for goaltending excellence."
          backgroundImage="https://placehold.co/1600x900"
          ctaText="Get Started"
          ctaLink="/about"
        />
      </div>

      <div>
        <Programs/>
      </div>
    </>
  );
}

export default App;
