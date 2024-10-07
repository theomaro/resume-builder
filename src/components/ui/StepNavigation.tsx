import { useParams } from "react-router-dom";

// Step components
import ProgressBar from "./ProgressBar";
import PersonalInfo from "../steps/PersonalInfo";
import EducationBackground from "../steps/EducationBackground";
import AcademicQualifications from "../steps/AcademicQualifications";
import ProfessionalQualifications from "../steps/ProfessionalQualifications";
import WorkExperience from "../steps/WorkExperience";
import Skills from "../steps/Skills";
import Referees from "../steps/Referees";
import ProfessionalSummary from "../steps/Summary";
import Review from "../steps/Review";

function StepNavigation() {
  const { step } = useParams();

  // Render step component
  const renderStep = () => {
    switch (Number(step)) {
      case 1:
        return <PersonalInfo />;
      case 2.1:
        return (
          <EducationBackground>
            <AcademicQualifications />
          </EducationBackground>
        );
      case 2.2:
        return (
          <EducationBackground>
            <ProfessionalQualifications />
          </EducationBackground>
        );
      case 3:
        return <WorkExperience />;
      case 4:
        return <Skills />;
      case 5:
        return <Referees />;
      case 6:
        return <ProfessionalSummary />;
      case 7:
        return <Review />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <>
      <ProgressBar />

      <div className="flex-1 bg-white">{renderStep()}</div>
    </>
  );
}

export default StepNavigation;
