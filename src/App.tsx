import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const links = [
    { id: 1, linkName: "Home" },
    { id: 2, linkName: "About" },
    { id: 3, linkName: "Programs" },
    { id: 4, linkName: "Contact" },
  ];
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navbar title="Dynamite Goaltending" links={links} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route
            path="/contact"
            element={<Contact/>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
