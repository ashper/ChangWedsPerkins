import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

function RSVP() {
  const [form, setForm] = useState<RSVPData>(defaultData);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const handleChangeSelect = (event: SelectChangeEvent<string>) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    fetch("https://www.formbackend.com/f/8abd8f07b64133a2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (response.status === 422) {
          throw new Error("Validation error");
        } else if (!response.ok) {
          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then(() => {
        // You can even use `data` here. Access `data.submission_text`, `data.values` etc.
        alert(JSON.stringify(form));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <p>We need to put some text here to intro the RSVP form</p>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            name="Name"
            value={form.Name}
            onChange={handleChange}
          ></TextField>
          <FormControl>
            <FormLabel>Attendance</FormLabel>
            <RadioGroup
              name="Attending"
              value={form.Attending}
              onChange={handleChange}
            >
              <FormControlLabel
                value={true}
                control={<Radio />}
                label="I will be attending"
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="I am unable to attend"
              />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Number of Guests</InputLabel>
            <Select
              name="NumberOfGuests"
              value={form.NumberOfGuests}
              label="Number of Guests"
              onChange={handleChangeSelect}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Dietary Requirements"
            name="DietaryRequirements"
            value={form.DietaryRequirements}
            onChange={handleChange}
            multiline
            minRows={2}
            maxRows={4}
          ></TextField>

          <TextField
            label="Accessibility Requirements"
            name="AccessibilityRequirements"
            value={form.AccessibilityRequirements}
            onChange={handleChange}
            multiline
            minRows={2}
            maxRows={4}
          ></TextField>

          <FormControl fullWidth>
            <InputLabel>Preferred Contact Method</InputLabel>
            <Select
              name="ContactPreference"
              value={form.ContactPreference}
              label="Age"
              onChange={handleChangeSelect}
            >
              <MenuItem value="Whatsapp">Whatsapp</MenuItem>
              <MenuItem value="Phone">Phone</MenuItem>
              <MenuItem value="Email">Email</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label={form.ContactPreference}
            name="ContactValue"
            value={form.ContactValue}
            onChange={handleChange}
          ></TextField>

          <Button type="submit" variant="outlined">
            RSVP
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default RSVP;

const defaultData: RSVPData = {
  Attending: true,
  Name: "",
  NumberOfGuests: "1",
  DietaryRequirements: "",
  ContactPreference: "Whatsapp",
  ContactValue: "",
  AccessibilityRequirements: "",
};

export interface RSVPData {
  Attending: boolean;
  Name: string;
  NumberOfGuests: string;
  DietaryRequirements: string;
  ContactPreference: "Whatsapp" | "Phone" | "Email";
  ContactValue: string;
  AccessibilityRequirements: string;
}
