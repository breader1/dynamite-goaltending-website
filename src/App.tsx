import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Programs from "./pages/Programs";

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
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </BrowserRouter>

      {/* Main */}
      <main className=""></main>
    </>
  );
}

export default App;
