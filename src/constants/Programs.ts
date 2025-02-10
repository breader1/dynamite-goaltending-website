import { Program } from "../models/ProgramModel";
import {Images} from "../constants/Images";

export const programs: Program[] = [
  {
    id: 1,
    title: "Private Sessions",
    description: "1-on-1 Training Sessions",
    image: Images.Belle,
    imageAlt: "Training Plan",
    price: 120,
  },
  {
    id: 2,
    title: "Team Practices",
    description: "Goalie Training During Team Practices",
    image: Images.JacobV1,
    imageAlt: "Experienced Coaches",
    price: 80,
  },
  {
    id: 3,
    title: "2:1 Ratio",
    description: "Split the cost of a private session with a friend",
    image: Images.JacobV2,
    imageAlt: "2:1 Training",
    price: 60,
  },
];
