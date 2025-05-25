import {
  Button,
  FormControl,
  FormControlLabel,
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
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";

interface FormData {
  Attending: string;
  NumberOfGuests?: string;
  Whatsapp?: string;
  Email?: string;
  ContactPreference?: string;
  Guest1?: string;
  Guest2?: string;
  Guest3?: string;
  Guest4?: string;
  Guest5?: string;
  Guest6?: string;
  Guest7?: string;
  Guest8?: string;
  Guest9?: string;
  Guest10?: string;
  DietaryRequirementsGuest1?: string;
  DietaryRequirementsGuest2?: string;
  DietaryRequirementsGuest3?: string;
  DietaryRequirementsGuest4?: string;
  DietaryRequirementsGuest5?: string;
  DietaryRequirementsGuest6?: string;
  DietaryRequirementsGuest7?: string;
  DietaryRequirementsGuest8?: string;
  DietaryRequirementsGuest9?: string;
  DietaryRequirementsGuest10?: string;
}

function RSVPForm() {
  const [attending, setAttending] = useState("true");

  const [submitted, setSubmitted] = useState(
    window.localStorage.getItem("submitted")
  );
  const [telephone, setTelephone] = useState("+65");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  function validateForm(formData: FormData): boolean {
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.Guest1?.trim()) {
      errors.Guest1 = "Name is required";
    }

    if (attending === "true") {
      if (!formData.Email?.trim()) {
        errors.Email = "Email is required";
      }
      if (!formData.Whatsapp?.trim()) {
        errors.Whatsapp = "WhatsApp is required";
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
      CheckName(2, formData, errors);
      CheckName(3, formData, errors);
      CheckName(4, formData, errors);
      CheckName(5, formData, errors);
      CheckName(6, formData, errors);
      CheckName(7, formData, errors);
      CheckName(8, formData, errors);
      CheckName(9, formData, errors);
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function CheckName(
    n: number,
    formData: FormData,
    errors: Partial<Record<keyof FormData, string>>
  ) {
    if (Number(formData.NumberOfGuests) >= n) {
      const guest = ("Guest" + n) as keyof typeof formData;
      if (!formData[guest]?.trim()) {
        errors[guest] = "Name is required";
      }
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("submit");
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData) as unknown as FormData;
    console.log(formValues);
    if (!validateForm(formValues)) {
      console.log("errors", formErrors);
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

        <FormControl>
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

        {attending === "true" && (
          <Details
            formErrors={formErrors}
            telephone={telephone}
            telephoneChanged={(number) => setTelephone(number)}
          />
        )}
        {attending !== "true" && (
          <TextField
            label="Name"
            name="Name"
            required
            error={!!formErrors.Guest1}
            helperText={formErrors.Guest1}
            fullWidth
          />
        )}

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
  telephone: string;
  telephoneChanged: (tel: string) => void;
}

function Details({ formErrors, telephone, telephoneChanged }: DetailsProps) {
  return (
    <>
      <Guests formErrors={formErrors} />

      <MuiTelInput
        value={telephone}
        onChange={telephoneChanged}
        label="WhatsApp"
        name="Whatsapp"
        error={!!formErrors.Whatsapp}
        helperText={formErrors.Whatsapp}
      ></MuiTelInput>

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

function Guests({
  formErrors,
}: {
  formErrors: Partial<Record<keyof FormData, string>>;
}) {
  const [numberOfGuests, setNumberOfGuests] = useState("1");

  const handleNumberOfGuestsChange = (event: SelectChangeEvent) => {
    setNumberOfGuests(event.target.value as string);
  };

  function GetError(
    name: string,
    formErrors: Partial<Record<keyof FormData, string>>
  ): boolean {
    const guest = name as keyof typeof formErrors;
    return !!formErrors[guest];
  }
  function GetErrorText(
    name: string,
    formErrors: Partial<Record<keyof FormData, string>>
  ): string {
    const guest = name as keyof typeof formErrors;
    if (formErrors[guest]) {
      return formErrors[guest];
    }
    return "";
  }

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

      {new Array(Number(numberOfGuests)).fill("").map((_, index) => (
        <>
          <TextField
            key={index}
            label={"Guest " + (index + 1)}
            name={"Guest" + (index + 1)}
            error={GetError("Guest" + (index + 1), formErrors)}
            helperText={GetErrorText("Guest" + (index + 1), formErrors)}
          />
          <TextField
            label={"Dietary Requirements Guest " + (index + 1)}
            name={"DietaryRequirementsGuest" + (index + 1)}
            multiline
            minRows={2}
            maxRows={4}
            fullWidth
          />
        </>
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
