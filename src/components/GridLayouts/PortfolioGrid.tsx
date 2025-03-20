import { useState } from "react";
import { Portfolio } from "../../models/PortfolioModel";
import SearchBar from "../SearchBar/SearchBar";
import PortfolioCard from "../Cards/PortfolioCard";

interface PortfolioGridProps {
  data?: Portfolio[];
}

const PortfolioGrid = ({ data: portfolios = [] }: PortfolioGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter portfolios based on search term
  const filteredPortfolios = portfolios.filter((portfolio) =>
    portfolio.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container text-center">
      <h2 className="mb-4 mt-5">Goalie Portfolios</h2>

      {/* Search Bar Component */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="row justify-content-center">
        {filteredPortfolios.length > 0 ? (
          filteredPortfolios.map((portfolio, index) => (
            <PortfolioCard key={index} portfolio={portfolio} />
          ))
        ) : (
          <p className="text-muted">No matching goalies found.</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioGrid;
