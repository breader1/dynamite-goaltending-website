import { Partner } from "../models/PartnerModel";
import { images } from "../constants/Images";

export const partners: Partner[] = [
  {
    id: 1,
    name: "Langley Trappers",
    image: images.Trappers,
    imageAlt: "Langley Trappers",
    url:"https://www.langleytrappers.com/",
  },
  // {
  //   id: 2,
  //   name: "Blazers",
  //   image: images.Blazers,
  //   imageAlt: "Blazers",
  // },
  {
    id: 3,
    name: "Western Goaltending",
    image: images.Western,
    imageAlt: "Western Goaltending",
    url:"https://www.westerngoaltending.com/",
  },
  {
    id: 4,
    name: "The Hockey Shop",
    image: images.HockeyShop,
    imageAlt: "Western Goaltending",
    url:"https://www.thehockeyshop.com/",
  },
];
