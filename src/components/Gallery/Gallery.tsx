import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles.css";
import CardHeader from "../Cards/CardHeader";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-change image every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [selectedIndex]);

  return (
    <>
      <div className="gallery-container p-5">
        <CardHeader title={"Our Goalies"} description={""} />
        {/* Main Image Display with Framer Motion */}
        <div className="main-image">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex]}
              alt="Selected"
              className="selected-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              layout
            />
          </AnimatePresence>
        </div>

        {/* Thumbnail List */}
        <div className="thumbnail-list">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === selectedIndex ? "active" : ""}`}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
