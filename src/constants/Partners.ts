import { Partner } from "../models/PartnerModel";
import { Images } from "../constants/Images";

export const partners: Partner[] = [
  {
    id: 1,
    name: "Langley Trappers",
    image: Images.Trappers,
    imageAlt: "Langley Trappers",
  },
  {
    id: 2,
    name: "Blazers",
    image: Images.Blazers,
    imageAlt: "Blazers",
  },

  {
    id: 3,
    name: "Western Goaltending",
    image: Images.Western,
    imageAlt: "Western Goaltending",
  },
];
