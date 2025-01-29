import { TextField } from "@mui/material";
import { FormData } from "./FormData";

function Step6({
  formData,
  handleFieldChange,
}: {
  formData: FormData;
  handleFieldChange: (name: string, value: string) => void;
}) {
  return (
    <div>
      <TextField
        multiline
        rows={4}
        fullWidth
        value={formData.DietaryRestrictions}
        label="Dietary restrictions or allergies"
        onChange={(event) => {
          handleFieldChange("DietaryRestrictions", event.target.value);
        }}
      ></TextField>
    </div>
  );
}

export default Step6;
