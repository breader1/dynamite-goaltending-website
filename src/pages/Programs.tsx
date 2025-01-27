import ProgramCard from "../components/Programs/ProgramCard";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Private Sessions",
      description:"1-on-1 Training Sessions",
      imageAlt: "Training Plan",
      price: 120,
    },
    {
      id: 2,
      title: "Team Practices",
      description:"Goalie Training During Team Practices",
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
