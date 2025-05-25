import { Testimonial } from "../models/Testimonial";
import { images } from "./Images";

export const testimonials: Testimonial[] = [
  {
    name: "Thomas",
    role: "Men's League Goalie",
    image: images.Thomas,
    message:
      "Picked up a nice 5-2 win this morning at Fire Fighter hockey. Felt really confident after our session last week! Rebound control was on point!",
  },
  {
    name: "Jacob",
    role: "Junior Goalie",
    image: images.JacobV6,
    message:
      "Norm is a great coach. He's helped me improve my game and is very supportive. I would recommend him to anyone looking to improve their game.",
  },
  {
    name: "Dhali Jaswal",
    role: "Men's League Goalie",
    image: images.Dynamite,
    message:
      "Norm is a fantastic instructor and has great technical understanding of the position.",
  },
];
