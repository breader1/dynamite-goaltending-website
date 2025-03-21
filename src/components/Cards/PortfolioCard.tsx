import { Portfolio } from "../../models/PortfolioModel";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

const PortfolioCard = ({ portfolio }: PortfolioCardProps) => {
  return (
    <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
      <div className="card shadow border-2 border-black rounded mb-4" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="mb-3">
            <iframe
              width="100%"
              height="200"
              src={portfolio.url}
              title={portfolio.title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h5 className="fw-bold">{portfolio.title}</h5>
          <p>{portfolio.description}</p>
          <p>{portfolio.year}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
