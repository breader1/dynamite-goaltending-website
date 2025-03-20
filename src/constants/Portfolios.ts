import { PortfolioVideoURLs } from "./PortfolioVideoURLs";
import { Portfolio } from "./../models/PortfolioModel";

export const Portfolios: Portfolio[] = [
  // id: number;
  // title: string;
  // description: string;
  // url: string;
  {
    id: 1,
    title: "Jacob Wang",
    description: "'08 - Junior Goalie",
    url: PortfolioVideoURLs.Jacob,
    year: "2025",
  },

];

export default Portfolios;
