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

function RSVPForm() {
  const [attending, setAttending] = useState("true");
  const [submitted, setSubmitted] = useState(
    window.localStorage.getItem("submitted")
  );

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
        window.localStorage.setItem("submitted", "true");
        setSubmitted("true");
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

  if (submitted) {
    return <ThankYou />;
  }

  return (
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

        {attending === "true" ? <Details /> : ""}

        <Button type="submit" variant="outlined">
          RSVP
        </Button>
      </Stack>
    </form>
  );
}

export default RSVPForm;

function Details() {
  return (
    <>
      <Guests />
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

function Guests() {
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
              label={"Guest " + (index + 2)}
              name={"ExtraGuest" + (index + 1)}
            ></TextField>
          ))}
    </>
  );
}

function ThankYou() {
  return (
    <>
      <p>Thank you for taking the time to respond.</p>
      <p>We cannot wait to see you on the big day!</p>
    </>
  );
}
