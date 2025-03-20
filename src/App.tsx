import './App.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { links } from './constants/Links';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Merch from './pages/Merch';
import Portfolios from './pages/Portfolios';
// import Programs from './pages/Programs';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navbar title="Dynamite Goaltending" links={links} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/programs" element={<Programs />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/portfolios" element={<Portfolios />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
