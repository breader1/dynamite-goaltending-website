import "./ProgramCard.css";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  price?: number;
}

const ProgramCard = ({
  title,
  description,
  image,
  imageAlt,
  price,
}: ProgramCardProps) => {
  return (
    <div className="card h-100 text-center shadow-sm border border-black border-2">
      <div
        className="card-img-top bg-light"
        style={{
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt={imageAlt}
          className="img-fluid"
          style={{ maxHeight: "100%" }}
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{description}</p>
        {price && <p className="fw-bold">${price}</p>}
      </div>
    </div>
  );
};

export default ProgramCard;
