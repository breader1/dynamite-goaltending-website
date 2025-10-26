import "./Gallery.css";

const YOUTUBE_PLAYLIST_ID = "PLCPWJN4tgTE21fx5N6RpQOPIiHithtwpn";
const PLAYLIST_EMBED_URL = `https://www.youtube-nocookie.com/embed/videoseries?list=${YOUTUBE_PLAYLIST_ID}`;

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
          referrerPolicy="strict-origin-when-cross-origin"
          title="YouTube Playlist"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoGallery;
