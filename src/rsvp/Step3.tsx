import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { FormData } from "./FormData";

function Step3({
  formData,
  handleFieldChange,
}: {
  formData: FormData;
  handleFieldChange: (name: string, value: string) => void;
}) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">
        How can we best reach you?
      </FormLabel>
      <RadioGroup
        defaultValue="whatsapp"
        value={formData.EmailOrWhatsApp}
        onChange={(event) => {
          handleFieldChange("EmailOrWhatsApp", event.target.value);
        }}
      >
        <FormControlLabel
          value="whatsapp"
          control={<Radio />}
          label="WhatsApp"
        />
        <FormControlLabel value="email" control={<Radio />} label="Email" />
      </RadioGroup>
    </FormControl>
  );
}

export default Step3;
