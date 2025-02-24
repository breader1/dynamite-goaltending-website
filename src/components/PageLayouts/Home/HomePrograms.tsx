import ProgramCard from "../../ProgramCard/ProgramCard";
import {Link} from "react-router-dom";
import {programs} from "../../../constants/Programs";

const HomePrograms = () => {
  return (
    <div id="programs" className="programs-section text-center py-5">
      <h2 className="fw-bold">Be Explosive</h2>
      <p className="mb-5 text-black">
        At Dynamite Goaltending, we provide personalized training and modern
        techniques to help goalies reach their full potential.
      </p>

      <div className="row justify-content-center">
        {programs.map((program) => (
          <div className="col-md-5 mb-4" key={program.id}>
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
        <Link to="/programs" className="btn btn-outline-danger">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HomePrograms;
