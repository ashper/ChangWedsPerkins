import { Button } from "@mui/material";

function Step1({ nextStep }: { nextStep: () => void }) {
  return (
    <div>
      <div>Please join us for our wedding</div>
      <div>August 2nd, 2025</div>
      <Button variant="contained" onClick={() => nextStep()}>
        RSVP
      </Button>
    </div>
  );
}

export default Step1;
