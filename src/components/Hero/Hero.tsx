import { Parallax } from "react-parallax";
import { motion } from "motion/react";
import "./Hero.css";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string; // Background image for parallax
  ctaText?: string;
  ctaLink?: string;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
}: HeroProps) => {
  return (
    <Parallax bgImage={backgroundImage} strength={300}>
      <div className="hero-overlay"></div>
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            <img src={title} alt="" />
          </h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {ctaText && (
            <a href={ctaLink} className="hero-cta">
              {ctaText}
            </a>
          )}
        </motion.div>
      </section>
    </Parallax>
  );
};

export default Hero;
