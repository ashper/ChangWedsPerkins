import { Button, TextField } from "@mui/material";

function Step5({ nextStep }: { nextStep: () => void }) {
  return (
    <div>
      <div>Enter here</div>
      <TextField></TextField>
      <Button onClick={() => nextStep()}>Next</Button>
    </div>
  );
}

export default Step5;
