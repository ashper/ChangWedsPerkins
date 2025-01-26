import { Button, TextField } from "@mui/material";

function Step2({ nextStep }: { nextStep: () => void }) {
  return (
    <div>
      <div>Which one of our lovely guests are you?</div>
      <TextField></TextField>
      <Button onClick={() => nextStep()}>Next</Button>
    </div>
  );
}

export default Step2;
