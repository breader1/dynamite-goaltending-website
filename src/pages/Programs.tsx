import ProgramCard from "../components/Programs/ProgramCard";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Tailored Training Plans for Every Goalie",
      description:
        "Our training plans are customized to fit your specific needs and goals.",
      imageAlt: "Training Plan",
    },
    {
      id: 2,
      title: "Learn from Experienced and Passionate Coaches",
      description:
        "Our coaches bring years of experience and a passion for the game to every session.",
      imageAlt: "Experienced Coaches",
    },
  ];

  return (
    <section className="programs-section text-center py-5">
      <h2 className="fw-bold">Be Explosive</h2>
      <p className="mb-5">
        At Dynamite Goaltending, we focus on personalized training that caters
        to each goalie’s unique style. Our expert coaches utilize modern
        techniques to ensure you reach your full potential on the ice.
      </p>

      <div className="row justify-content-center">
        {programs.map((program) => (
          <div className="col-md-4 mb-4" key={program.id}>
            <ProgramCard
              title={program.title}
              description={program.description}
              imageAlt={program.imageAlt}
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button className="btn btn-primary me-2">Join</button>
        <a href="#" className="btn btn-outline-primary">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Programs;
