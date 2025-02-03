import AboutHeader from "../Cards/CardHeader";
import TeamGrid from "../Cards/TeamGrid";
import NormProfileImage from "../../assets/images/Norm1.jpg";

const HomeAbout = () => {
  const teamMembers = [
    {
      name: "Coach Norm",
      role: "Head Coach",
      description:
        "With 20+ years of experience, Norm specializes in developing elite goalies, focusing on technique, agility, and mental toughness. Norm excels in helping his students get to the next level by providing personalized training and mentorship.",
      image: NormProfileImage,
    },
  ];
  return (
    <div id="about" className="about-section py-5 bg-dark-subtle">
      <div className="container">
        <AboutHeader
          title="Coaches"
          description="Our team of experienced coaches is dedicated to helping you reach your full potential. Meet the experts who will guide you on your journey to becoming an elite goalie."
        />

        {/* Team Grid */}
        <TeamGrid members={teamMembers} />
      </div>
    </div>
  );
};

export default HomeAbout;
