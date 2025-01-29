import { TextField } from "@mui/material";
import { FormData } from "./FormData";

function Step2({
  formData,
  handleFieldChange,
}: {
  formData: FormData;
  handleFieldChange: (name: string, value: string) => void;
}) {
  return (
    <div>
      <TextField
        value={formData.Name}
        label="Which one of our lovely guests are you?"
        fullWidth
        onChange={(event) => {
          handleFieldChange("Name", event.target.value);
        }}
      ></TextField>
    </div>
  );
}

export default Step2;
