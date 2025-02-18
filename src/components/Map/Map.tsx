const Map = () => {
  return (
    <div className="map-container text-center mb-4">
      <iframe
        title="Langley Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10497.491407282285!2d-122.66033678874608!3d49.10443090533159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d1b6e54b7f13%3A0xdeadbeef!2sLangley%2C%20BC!5e0!3m2!1sen!2sca!4v1707525422467"
        width="100%"
        height="350"
        style={{ border: "0", borderRadius: "10px" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
