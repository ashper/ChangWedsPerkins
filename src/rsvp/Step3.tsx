import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";

function Step3({ nextStep }: { nextStep: () => void }) {
  return (
    <div>
      <div>How can we best reach you?</div>
      <RadioGroup defaultValue="email">
        <FormControlLabel value="email" control={<Radio />} label="Email" />
        <FormControlLabel
          value="whatsapp"
          control={<Radio />}
          label="WhatsApp"
        />
      </RadioGroup>
      <Button onClick={() => nextStep()}>Next</Button>
    </div>
  );
}

export default Step3;
