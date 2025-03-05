import { TextField } from "@mui/material";
import { FormData } from "./FormData";

function Step4({
  formData,
  handleFieldChange,
}: {
  formData: FormData;
  handleFieldChange: (name: string, value: string) => void;
}) {
  if (formData.EmailOrWhatsApp === "email") {
    return (
      <div>
        <TextField
          value={formData.EmailAddress}
          fullWidth
          label="Email Address"
          onChange={(event) => {
            handleFieldChange("Email", event.target.value);
          }}
        ></TextField>
      </div>
    );
  } else {
    return (
      <div>
        <TextField
          value={formData.PhoneNumber}
          fullWidth
          label="Phone Number"
          onChange={(event) => {
            handleFieldChange("PhoneNumber", event.target.value);
          }}
        ></TextField>
      </div>
    );
  }
}

export default Step4;
