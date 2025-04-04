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
import { useState } from "react";

function RSVP() {
  const [attending, setAttending] = useState("true");

  function handleSubmit(formData: FormData) {
    const formValues = Object.fromEntries(formData);
    fetch("https://www.formbackend.com/f/8abd8f07b64133a2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formValues),
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
        alert(JSON.stringify(formValues));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const handleAttendanceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAttending((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <p>We need to put some text here to intro the RSVP form</p>
      <form action={handleSubmit}>
        <Stack spacing={2}>
          <TextField label="Name" name="Name"></TextField>
          <FormControl>
            <FormLabel>Attendance</FormLabel>
            <RadioGroup
              name="Attending"
              value={attending}
              onChange={handleAttendanceChange}
            >
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="I will be attending"
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="I am unable to attend"
              />
            </RadioGroup>
          </FormControl>

          {attending === "true" ? (
            <MoreDetails></MoreDetails>
          ) : (
            <SorryToHear></SorryToHear>
          )}

          <Button type="submit" variant="outlined">
            RSVP
          </Button>
        </Stack>
      </form>
    </>
  );

  function SorryToHear() {
    return (
      <>
        <p>We're sorry to hear you're not able to attend.</p>
        <p>Thank you for letting us know.</p>
      </>
    );
  }

  function MoreDetails() {
    const [numberOfGuests, setNumberOfGuests] = useState("1");

    const handleNumberOfGuestsChange = (event: SelectChangeEvent) => {
      setNumberOfGuests(event.target.value as string);
    };
    return (
      <>
        <FormControl fullWidth>
          <InputLabel>Number of Guests</InputLabel>
          <Select
            name="NumberOfGuests"
            label="Number of Guests"
            value={numberOfGuests}
            onChange={handleNumberOfGuestsChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>

        {Number(numberOfGuests) > 1 &&
          new Array(Number(numberOfGuests) - 1)
            .fill("")
            .map((_, index) => (
              <TextField
                key={index}
                label={"Guest " + (index + 1)}
                name={"ExtraGuest" + (index + 1)}
              ></TextField>
            ))}

        <TextField
          label="Dietary Requirements"
          name="DietaryRequirements"
          multiline
          minRows={2}
          maxRows={4}
        ></TextField>

        <TextField label="Whatsapp" name="Whatsapp" type="tel"></TextField>

        <TextField label="Email" name="Email" type="email"></TextField>

        <FormControl fullWidth>
          <InputLabel>Preferred Contact Method</InputLabel>
          <Select
            name="ContactPreference"
            label="Preferred Contact Method"
            defaultValue={"Whatsapp"}
          >
            <MenuItem value="Whatsapp">Whatsapp</MenuItem>
            <MenuItem value="Email">Email</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  }
}

export default RSVP;
