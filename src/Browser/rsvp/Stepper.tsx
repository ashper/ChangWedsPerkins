import { Button } from "@mui/material";
import { useState } from "react";

function Stepper({
  steps,
  manageNextStepValidation,
  stepsAmount,
}: {
  steps: JSX.Element[];
  manageNextStepValidation: (step: number) => boolean;
  stepsAmount: number;
}) {
  const [step, setStep] = useState(1);
  const onNextStep = () => {
    if (manageNextStepValidation(step) && step !== stepsAmount) {
      setStep(step + 1);
    }
  };

  return (
    <div>
      <div>{steps[step - 1]}</div>
      <div>
        {step !== 1 && <Button onClick={() => setStep(step - 1)}>Back</Button>}
        <Button onClick={() => onNextStep()}>
          {step === 1 ? "RSVP" : step === stepsAmount - 1 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
}

export default Stepper;
