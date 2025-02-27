// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./Video.css";
// import CardHeader from "../Cards/CardHeader";
// import { Video } from "../../models/VideoModel";

// interface VideoGalleryProps {
//   videos: Video[];
// }

// const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [thumbnails, setThumbnails] = useState<string[]>([]);

//   useEffect(() => {
//     const generateThumbnails = async () => {
//       const newThumbnails: string[] = [];

//       for (const video of videos) {
//         const videoElement = document.createElement("video");
//         videoElement.src = video.url;
//         videoElement.crossOrigin = "anonymous";

//         await new Promise((resolve) => {
//           videoElement.addEventListener("loadeddata", () => {
//             const canvas = document.createElement("canvas");
//             const ctx = canvas.getContext("2d");
//             if (!ctx) return;

//             canvas.width = 160; // Set thumbnail width
//             canvas.height = 90; // Set thumbnail height

//             videoElement.currentTime = 1; // Capture frame at 1 second
//             videoElement.addEventListener("seeked", () => {
//               ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
//               newThumbnails.push(canvas.toDataURL("image/png"));
//               if (newThumbnails.length === videos.length) setThumbnails(newThumbnails);
//               resolve(true);
//             });
//           });
//         });
//       }
//     };

//     generateThumbnails();
//   }, [videos]);

//   return (
//     <div className="gallery-container mt-5 p-5">
//       <CardHeader title={"Training"} description={""} />

//       {/* Main Video Display */}
//       <div className="main-video">
//         <AnimatePresence mode="wait">
//           <motion.video
//             key={selectedIndex}
//             src={videos[selectedIndex].url}
//             className="selected-video"
//             controls
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.5 }}
//             layout
//           />
//         </AnimatePresence>
//       </div>

//       {/* Thumbnail List */}
//       <div className="thumbnail-list">
//         {thumbnails.map((thumbnail, index) => (
//           <motion.img
//             key={index}
//             src={thumbnail}
//             alt={`Thumbnail ${index + 1}`}
//             className={`thumbnail ${index === selectedIndex ? "active" : ""}`}
//             onClick={() => setSelectedIndex(index)}
//             whileHover={{ scale: 1.05 }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;
import "./Gallery.css";

const YOUTUBE_PLAYLIST_ID = "PLCPWJN4tgTE21fx5N6RpQOPIiHithtwpn";
const PLAYLIST_EMBED_URL = `https://www.youtube.com/embed/videoseries?list=${YOUTUBE_PLAYLIST_ID}`;

const VideoGallery: React.FC = () => {
  return (
    <section className="video-section">
      {/* Section Title & Description */}
      <div className="video-text">
        <h2 className="video-title">Training Videos</h2>
        <p className="video-description">
          Watch our goaltender training sessions and drills. New videos are
          added regularly!
        </p>
      </div>

      {/* Embedded YouTube Playlist */}
      <div className="video-container">
        <iframe
          src={PLAYLIST_EMBED_URL}
          title="YouTube Playlist"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoGallery;
