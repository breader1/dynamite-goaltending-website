import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";
import CardHeader from "../Cards/CardHeader";
import VideoGallery from "./VideoGallery";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]); // Store refs for each thumbnail

  const nextImage = useCallback(() => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  // Auto-change image every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 8000);
    return () => clearInterval(interval);
  }, [nextImage]);

  // Scroll selected thumbnail into view
  useEffect(() => {
    const container = thumbnailRefs.current[0]?.parentElement; // Assuming all thumbnails share the same parent
    const activeThumbnail = thumbnailRefs.current[selectedIndex];
  
    if (container && activeThumbnail) {
      const containerRect = container.getBoundingClientRect();
      const thumbnailRect = activeThumbnail.getBoundingClientRect();
      
      // Only scroll horizontally
      container.scrollTo({
        left: container.scrollLeft + (thumbnailRect.left - containerRect.left),
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);
  
  const thumbnails = useMemo(
    () =>
      images.map((image, index) => (
        <motion.img
          key={index}
          ref={(el) => (thumbnailRefs.current[index] = el)}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className={`thumbnail ${index === selectedIndex ? "active" : ""}`}
          onClick={() => setSelectedIndex(index)}
          whileHover={{ scale: 1.05 }}
        />
      )),
    [images, selectedIndex]
  );

  const indicatorDots = useMemo(
    () =>
      images.length > 1 &&
      images.map((_, index) => (
        <div
          key={index}
          className={`dot ${index === selectedIndex ? "active" : ""}`}
          onClick={() => setSelectedIndex(index)}
        ></div>
      )),
    [images, selectedIndex]
  );

  return (
    <>
      <div className="gallery-container p-5">
        <CardHeader title="Our Goalies" description="" />

        {/* Main Image Display with Swipe Support */}
        <motion.div
          className="main-image"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_event, info) => {
            if (info.offset.x > 50) prevImage();
            if (info.offset.x < -50) nextImage();
          }}
        >
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
        </motion.div>

        {/* Thumbnail List */}
        <div className="thumbnail-list">{thumbnails}</div>

        {/* Indicator Dots */}
        {indicatorDots && <div className="indicator-dots">{indicatorDots}</div>}
      </div>
      <VideoGallery />
    </>
  );
};

export default Gallery;
