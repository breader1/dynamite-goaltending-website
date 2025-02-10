import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Video.css";
import CardHeader from "../Cards/CardHeader";
import { Video } from "../../models/VideoModel";

interface VideoGalleryProps {
  videos: Video[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="gallery-container mt-5 p-5">
      <CardHeader title={"Training"} description={""} />

      {/* Main Video Display */}
      <div className="main-video">
        <AnimatePresence mode="wait">
          <motion.video
            key={selectedIndex}
            src={videos[selectedIndex].url}
            className="selected-video"
            controls
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
        {videos.map((video, index) => (
          <motion.img
            key={index}
            src={video.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === selectedIndex ? "active" : ""}`}
            onClick={() => setSelectedIndex(index)}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
