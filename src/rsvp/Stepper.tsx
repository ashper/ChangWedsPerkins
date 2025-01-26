import { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./Step6";
import Step7 from "./Step7";

function Stepper() {
  const [step, setStep] = useState(1);

  function nextStep() {
    setStep(step + 1);
  }

  if (step === 1) {
    return <Step1 nextStep={nextStep}></Step1>;
  }
  if (step === 2) {
    return <Step2 nextStep={nextStep}></Step2>;
  }
  if (step === 3) {
    return <Step3 nextStep={nextStep}></Step3>;
  }
  if (step === 4) {
    return <Step4 nextStep={nextStep}></Step4>;
  }
  if (step === 5) {
    return <Step5 nextStep={nextStep}></Step5>;
  }
  if (step === 6) {
    return <Step6 nextStep={nextStep}></Step6>;
  }
  if (step === 7) {
    return <Step7></Step7>;
  }
}

export default Stepper;
