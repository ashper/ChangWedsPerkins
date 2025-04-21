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
  Alert,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";

interface FormData {
  Name: string;
  Attending: string;
  NumberOfGuests?: string;
  DietaryRequirements?: string;
  Whatsapp?: string;
  Email?: string;
  ContactPreference?: string;
  ExtraGuest1?: string;
  ExtraGuest2?: string;
  ExtraGuest3?: string;
  ExtraGuest4?: string;
  ExtraGuest5?: string;
  ExtraGuest6?: string;
  ExtraGuest7?: string;
  ExtraGuest8?: string;
  ExtraGuest9?: string;
}

function RSVPForm() {
  const [attending, setAttending] = useState("true");
  const [submitted, setSubmitted] = useState(
    window.localStorage.getItem("submitted")
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  function validateForm(formData: FormData): boolean {
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.Name?.trim()) {
      errors.Name = "Name is required";
    }

    if (attending === "true") {
      if (!formData.Email?.trim() && !formData.Whatsapp?.trim()) {
        errors.Email = "Either email or WhatsApp is required";
        errors.Whatsapp = "Either email or WhatsApp is required";
      }

      if (
        formData.Email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)
      ) {
        errors.Email = "Please enter a valid email address";
      }

      if (formData.Whatsapp && !/^\+?[\d\s-]{10,}$/.test(formData.Whatsapp)) {
        errors.Whatsapp = "Please enter a valid phone number";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData) as unknown as FormData;

    if (!validateForm(formValues)) {
      return;
    }

    setLoading(true);

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
          throw new Error("Please check your form inputs and try again");
        } else if (!response.ok) {
          throw new Error("Something went wrong. Please try again later.");
        }
        return response.json();
      })
      .then(() => {
        window.localStorage.setItem("submitted", "true");
        setSubmitted("true");
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
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
    <form onSubmit={handleSubmit} noValidate>
      <Stack spacing={3}>
        {error && (
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        <TextField
          label="Name"
          name="Name"
          required
          error={!!formErrors.Name}
          helperText={formErrors.Name}
          fullWidth
        />

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

        {attending === "true" && <Details formErrors={formErrors} />}

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : "RSVP"}
        </Button>
      </Stack>
    </form>
  );
}

interface DetailsProps {
  formErrors: Partial<Record<keyof FormData, string>>;
}

function Details({ formErrors }: DetailsProps) {
  return (
    <>
      <Guests />
      <TextField
        label="Dietary Requirements"
        name="DietaryRequirements"
        multiline
        minRows={2}
        maxRows={4}
        fullWidth
      />

      <TextField
        label="Whatsapp"
        name="Whatsapp"
        type="tel"
        error={!!formErrors.Whatsapp}
        helperText={formErrors.Whatsapp}
        fullWidth
      />

      <TextField
        label="Email"
        name="Email"
        type="email"
        error={!!formErrors.Email}
        helperText={formErrors.Email}
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel>Preferred Contact Method</InputLabel>
        <Select
          name="ContactPreference"
          label="Preferred Contact Method"
          defaultValue="Whatsapp"
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

export default RSVPForm;
