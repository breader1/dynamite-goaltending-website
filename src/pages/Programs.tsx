import { useNavigate } from "react-router-dom";
import CallToAction from "../components/CallToAction/CallToAction";
import ProgramDescription from "../components/PageLayouts/Programs/ProgramDescription";
import { ProgramHero } from "../components/PageLayouts/Programs/ProgramHero";

const Programs = () => {
  const navigate = useNavigate();
  return (
    <>
      <ProgramHero />
      <ProgramDescription />
      <CallToAction
        message={"Schedule a session with us today!"}
        buttonText={"Join now"}
        onButtonClick={() => navigate("/contact")}
      />
    </>
  );
};

export default Programs;
