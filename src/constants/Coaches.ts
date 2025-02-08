import { Coach } from "../models/CoachModel";
import NormProfileImage from "../assets/images/Norm1.jpg";
import BrettProfileImage from "../assets/images/Brett.jpg";

export const coaches: Coach[] = [
  {
    name: "Coach Norm",
    role: "Head Coach",
    description:
      "Norm specializes in developing elite goalies, focusing on technique, agility, and mental toughness. Norm excels in helping his students get to the next level by providing personalized training and mentorship.",
    long_description: `"I’ve spent over 25 years coaching goalies of all ages and skill levels, and I absolutely love what I do. As a former pro athlete, I know firsthand what it takes to succeed, and I’m here to help goalies refine their technique, boost their agility, and build the mental toughness they need to excel. My favorite part of coaching is getting to know each student and providing personalized training that helps them reach their full potential—both on and off the ice." -Norm`,
    image: NormProfileImage,
  },
  {
    name: "Coach Brett",
    role: "Assistant Coach",
    description:
      "Brett is a former Junior goalie with a passion for helping young athletes develop their skills and reach their full potential. Brett specializes in building confidence, improving technique, and fostering a love for the game.",
    long_description: `"Hockey can teach you a lot about life if you’re willing to listen. As a former Junior goalie, I’ve learned the importance of hard work, dedication, and perseverance, and I’m here to help young athletes develop the skills they need to succeed. I want my students to be tenacious and never give up, in hockey or in life and be the best version of themselves they can be." -Brett`,
    image: BrettProfileImage,
  },

];
