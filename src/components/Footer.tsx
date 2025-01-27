import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Icons for social media
import "./styles.css"; // Optional for custom styles

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container text-center">
        {/* Social Media Links */}
        <div className="footer-social mb-3">
          <a
            href="https://www.linkedin.com/in/norm-reader-4207a356/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link me-3"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/fire_marshall_buzz/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Dynamite Goaltending. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
