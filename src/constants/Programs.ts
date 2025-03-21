import { Program } from "../models/ProgramModel";
import { images } from "../constants/Images";

export const programs: Program[] = [
  {
    id: 1,
    title: "Private Sessions",
    description: "1-on-1 Training Sessions",
    image: images.Belle,
    imageAlt: "Training Plan",
    price: '80',
    long_description:
      "Our private goalie training sessions provide a personalized, one-on-one experience tailored to your unique needs and skill level. Whether you're a beginner looking to build a strong foundation or an advanced goalie refining your technique, our experienced coaches will work closely with you to enhance your strengths and improve key areas of your game. With individualized instruction, focused drills, and expert guidance, you'll gain the confidence and skills needed to take your performance to the next level.",
  },
  {
    id: 2,
    title: "Team Practices",
    description: "Training During Team Practices",
    image: images.Allen1,
    imageAlt: "Experienced Coaches",
    price: '85',
    long_description:
      "Our team practice sessions are designed to challenge and develop goalies of all ages and skill levels in a dynamic, team-oriented environment. Our experienced coaches work closely with you to create a structured training plan that aligns with your goals, focusing on key aspects like positioning, reaction time, and game-ready techniques. Through high-intensity drills, real-game scenarios, and expert feedback, you'll build confidence, sharpen your skills, and become a stronger, more resilient goalie.",
  },
  {
    id: 3,
    title: "2:1 Ratio",
    description: "Split the cost of a private session",
    image: images.JacobV4,
    imageAlt: "2:1 Training",
    price: '60',
    long_description:
      "Our 2:1 ratio training sessions provide goalies of all ages and skill levels with the perfect balance of individualized coaching and competitive training. With two goalies per session, you'll receive personalized instruction while also benefiting from live comparisons, situational drills, and friendly competition. Our experienced coaches will tailor a structured training plan to your needs, helping you refine your technique, improve reaction speed, and elevate your overall performance in a focused yet dynamic environment.",
  },
  {
    id: 4,
    title: "Portfolio Building",
    description: "Build a portfolio for scouts",
    image: images.Allen4,
    imageAlt: "Portfolio",
    price: '190 + Ice Time Cost',
    long_description:
      "Our portfolio building sessions are designed to help goalies of all ages and skill levels create a comprehensive, professional portfolio that showcases their talent, skills, and experience. Whether you're looking to attract college scouts, professional teams, or sponsors, our experienced coaches will work closely with you to develop a customized portfolio that highlights your strengths, achievements, and unique playing style. With expert guidance, professional feedback, and a strategic approach, you'll gain the visibility and recognition you need to stand out in a competitive market.",
  },
];
