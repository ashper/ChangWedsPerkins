import {
  FormControl,
  FormLabel,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { FormData } from "./FormData";

function Step5({
  formData,
  handleFieldChange,
}: {
  formData: FormData;
  handleFieldChange: (name: string, value: string) => void;
}) {
  return (
    <div>
      <FormControl>
        <FormLabel>How many guests are you bringing?</FormLabel>
        <ToggleButtonGroup
          exclusive
          value={formData.NumberOfGuests}
          onChange={(_event, value) => {
            handleFieldChange("NumberOfGuests", value);
          }}
        >
          <ToggleButton value="1">1</ToggleButton>
          <ToggleButton value="2">2</ToggleButton>
          <ToggleButton value="3">3</ToggleButton>
          <ToggleButton value="4">4</ToggleButton>
        </ToggleButtonGroup>
      </FormControl>
      <div>
        {formData.NumberOfGuests >= 1 && (
          <TextField
            value={formData.Guest1}
            label="Guest 1"
            onChange={(event) => {
              handleFieldChange("Guest1", event.target.value);
            }}
          ></TextField>
        )}
        {formData.NumberOfGuests >= 2 && (
          <TextField
            value={formData.Guest2}
            label="Guest 2"
            onChange={(event) => {
              handleFieldChange("Guest2", event.target.value);
            }}
          ></TextField>
        )}
        {formData.NumberOfGuests >= 3 && (
          <TextField
            value={formData.Guest3}
            label="Guest 3"
            onChange={(event) => {
              handleFieldChange("Guest3", event.target.value);
            }}
          ></TextField>
        )}
        {formData.NumberOfGuests >= 4 && (
          <TextField
            value={formData.Guest4}
            label="Guest 4"
            onChange={(event) => {
              handleFieldChange("Guest4", event.target.value);
            }}
          ></TextField>
        )}
      </div>

      <p>
        Note: Please kindly check your invite to find out if you have +1's
        available.
      </p>
    </div>
  );
}

export default Step5;
