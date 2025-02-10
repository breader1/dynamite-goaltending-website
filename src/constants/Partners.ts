import { Partner } from "../models/PartnerModel";
import TrappersImage from "../assets/images/trappers.jpg";
import WesternImage from "../assets/images/western.png";
import BlazersImage from "../assets/images/Blazers.png";

export const partners: Partner[] = [
  {
    id: 1,
    name: "Langley Trappers",
    image: TrappersImage,
    imageAlt: "Langley Trappers",
  },
  {
    id: 2,
    name: "Blazers",
    image: BlazersImage,
    imageAlt: "Blazers",
  },

  {
    id: 3,
    name: "Western Goaltending",
    image: WesternImage,
    imageAlt: "Western Goaltending",
  },
];
