import ProgramCard from "../ProgramCard/ProgramCard";
import PrivateSessionImage from "../../assets/images/Jacob_v4.jpg";
import TeamPracticeImage from "../../assets/images/Jacob_v3.jpg";
import TwoToOneRatioImage from "../../assets/images/Jacob_v2.jpg";

const HomePrograms = () => {
  const programs = [
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
  return (
    <div id="programs" className="programs-section text-center py-5">
      <h2 className="fw-bold">Be Explosive</h2>
      <p className="mb-5 ">
        At Dynamite Goaltending, we provide personalized training and modern
        techniques to help goalies reach their full potential.
      </p>

      <div className="row justify-content-center">
        {programs.map((program) => (
          <div className="col-md-4 mb-4" key={program.id}>
            <ProgramCard
              title={program.title}
              description={program.description}
              imageAlt={program.imageAlt}
              price={program.price}
              image={program.image}
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <a href="/about" className="btn btn-outline-danger">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default HomePrograms;
