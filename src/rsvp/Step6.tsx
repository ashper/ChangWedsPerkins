import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";

function Step6({ nextStep }: { nextStep: () => void }) {
  return (
    <div>
      <div>How many guests are you bringing?</div>
      <ToggleButtonGroup exclusive>
        <ToggleButton value="1">1</ToggleButton>
        <ToggleButton value="2">2</ToggleButton>
        <ToggleButton value="3">3</ToggleButton>
        <ToggleButton value="4">4</ToggleButton>
      </ToggleButtonGroup>
      <Button onClick={() => nextStep()}>Next</Button>
    </div>
  );
}

export default Step6;
