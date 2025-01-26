import { Button, TextField } from "@mui/material";

function Step4({ nextStep }: { nextStep: () => void }) {
  return (
    <div>
      <div>How can we best reach you?</div>
      <TextField></TextField>
      <Button onClick={() => nextStep()}>Next</Button>
    </div>
  );
}

export default Step4;
