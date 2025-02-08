import { Program } from "../models/ProgramModel";
import PrivateSessionImage from "../assets/images/Jacob_v4.jpg";
import TeamPracticeImage from "../assets/images/Jacob_v1.jpg";
import TwoToOneRatioImage from "../assets/images/Jacob_v2.jpg";

export const programs: Program[] = [
  {
    id: 1,
    title: "Private Sessions",
    description: "1-on-1 Training Sessions",
    image: PrivateSessionImage,
    imageAlt: "Training Plan",
    price: 120,
  },
  {
    id: 2,
    title: "Team Practices",
    description: "Goalie Training During Team Practices",
    image: TeamPracticeImage,
    imageAlt: "Experienced Coaches",
    price: 80,
  },
  {
    id: 3,
    title: "2:1 Ratio",
    description: "Split the cost of a private session with a friend",
    image: TwoToOneRatioImage,
    imageAlt: "2:1 Training",
    price: 60,
  },
];
