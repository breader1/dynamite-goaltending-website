import { Testimonial } from "../models/Testimonial";
import { images } from "./Images";

export const testimonials: Testimonial[] = [
  {
    name: "Thomas",
    role: "Men's League Goalie",
    image: "https://placehold.co/600x400",
    message:
      "Picked up a nice 5-2 win this morning at Fire Fighter hockey. Felt really confident after our session last week! Rebound control was on point!",
  },
  {
    name: "Jacob",
    role: "Junior Goalie",
    image: images.JacobV6,
    message:
      "Norm and Brett have been great coaches. They have helped me improve my game and have been very supportive. I would recommend them to anyone looking to improve their game.",
  },
];
