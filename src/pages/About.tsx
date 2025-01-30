import AboutHeader from "../components/About/AboutHeader";
import TeamGrid from "../components/About/TeamGrid";
import NormProfileImage from "../assets/images/Norm1.jpg"

const About = () => {
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
    <section id="about" className="about-section py-5">
      <div className="container">
        {/* Header Section */}
        <AboutHeader
          title="About Dynamite Goaltending"
          description="At Dynamite Goaltending, we help goalies elevate their game through personalized coaching, modern techniques, and a passion for excellence. Our mission is to empower players to unlock their full potential both on and off the ice."
        />

        {/* Team Grid */}
        <TeamGrid members={teamMembers} />
      </div>
    </section>
  );
};

export default About;
