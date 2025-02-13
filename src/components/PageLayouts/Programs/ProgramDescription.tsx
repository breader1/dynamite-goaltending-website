import { useState } from "react";
import { programs} from "../../../constants/Programs";
import DynamicProgramCard from "../../DynamicProgramCard/DynamicProgramCard";
import DynamicDescription from "../../DynamicProgramCard/DynamicDescription";

const ProgramsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  const selectedProgramData = programs.find((p) => p.id === selectedProgram);

  return (
    <div className="container">
      <h1 className="text-center my-4">Our Programs</h1>

      {/* Program Cards */}
      <div className="row justify-content-center">
        {programs.map((program) => (
          <div key={program.id} className="col-md-4 mb-3">
            <DynamicProgramCard program={program} onSelect={setSelectedProgram} />
          </div>
        ))}
      </div>

      {/* Selected Program Description */}
      <DynamicDescription program={selectedProgramData} />
    </div>
  );
};

export default ProgramsPage;
