import ProgramCard from "../components/Programs/ProgramCard";
import PrivateSessionImage from "../assets/images/Jacob_v4.jpg";
import TeamPracticeImage from "../assets/images/Jacob_v3.jpg";

const Programs = () => {
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
  ];

  return (
    <section id="programs" className="programs-section text-center py-5">
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
        <button className="btn btn-danger me-2">Join</button>
        <a href="#" className="btn btn-outline-danger">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Programs;
