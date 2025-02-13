import CallToAction from "../components/CallToAction/CallToAction";
import ProgramDescription from "../components/PageLayouts/Programs/ProgramDescription";
import { ProgramHero } from "../components/PageLayouts/Programs/ProgramHero";
const Programs = () => {
  return (
    <>
      <ProgramHero />
      <ProgramDescription />
      <CallToAction
        message={"Schedule a session with us today!"}
        buttonText={"Join now"}
        onButtonClick={function (): void {
          window.location.href = "/contact";
        }}
      />
    </>
  );
};

export default Programs;
