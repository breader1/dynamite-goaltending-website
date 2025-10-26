import "./Gallery.css";

interface VideoSingleProps {
  url: string;
  title: string;
  description: string;
}

const VideoSingle = ({ url, title, description }: VideoSingleProps) => {
  return (
    <section className="video-section">
      {/* Section Title & Description */}
      <div className="video-text">
        <h2 className="video-title">{title}</h2>
        <p className="video-description">{description}</p>
      </div>

      {/* Embedded YouTube Playlist */}
      <div className="video-container">
        <iframe
          src={url}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSingle;
