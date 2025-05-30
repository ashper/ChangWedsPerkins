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
import { TFunction } from "i18next";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
      errors.Guest1 = t("RSVP.Errors.Name");
    }

    if (attending === "true") {
      if (!formData.Email?.trim()) {
        errors.Email = t("RSVP.Errors.Email");
      }
      if (!formData.Whatsapp?.trim()) {
        errors.Whatsapp = t("RSVP.Errors.WhatsApp");
      }

      if (
        formData.Email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)
      ) {
        errors.Email = t("RSVP.Errors.ValidEmail");
      }

      if (formData.Whatsapp && !/^\+?[\d\s-]{10,}$/.test(formData.Whatsapp)) {
        errors.Whatsapp = t("RSVP.Errors.PhoneNumber");
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
        errors[guest] = t("RSVP.Errors.Name");
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
          throw new Error(t("RSVP.Errors.Form"));
        } else if (!response.ok) {
          throw new Error(t("RSVP.Errors.Alert"));
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
    return <ThankYou t={t} />;
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
              label={t("RSVP.Fields.Attending")}
            />
            <FormControlLabel
              value="false"
              control={<Radio />}
              label={t("RSVP.Fields.NotAttending")}
            />
          </RadioGroup>
        </FormControl>

        {attending === "true" && (
          <Details
            formErrors={formErrors}
            telephone={telephone}
            telephoneChanged={(number) => setTelephone(number)}
            t={t}
          />
        )}
        {attending !== "true" && (
          <TextField
            label={t("RSVP.Fields.Name")}
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
          sx={{ mt: 2, backgroundColor: "#5c7d74" }}
        >
          {loading ? <CircularProgress size={24} /> : t("RSVP.Fields.RSVP")}
        </Button>
      </Stack>
    </form>
  );
}

interface DetailsProps {
  formErrors: Partial<Record<keyof FormData, string>>;
  telephone: string;
  telephoneChanged: (tel: string) => void;
  t: TFunction;
}

function Details({ formErrors, telephone, telephoneChanged, t }: DetailsProps) {
  return (
    <>
      <Guests formErrors={formErrors} t={t} />

      <MuiTelInput
        value={telephone}
        onChange={telephoneChanged}
        label={t("RSVP.Fields.WhatsApp")}
        name="Whatsapp"
        error={!!formErrors.Whatsapp}
        helperText={formErrors.Whatsapp}
      ></MuiTelInput>

      <TextField
        label={t("RSVP.Fields.Email")}
        name="Email"
        type="email"
        error={!!formErrors.Email}
        helperText={formErrors.Email}
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel>{t("RSVP.Fields.PreferredContactMethod")}</InputLabel>
        <Select
          name="ContactPreference"
          label={t("RSVP.Fields.PreferredContactMethod")}
          defaultValue="Whatsapp"
        >
          <MenuItem value="Whatsapp">{t("RSVP.Fields.WhatsApp")}</MenuItem>
          <MenuItem value="Email">{t("RSVP.Fields.Email")}</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

function Guests({
  formErrors,
  t,
}: {
  formErrors: Partial<Record<keyof FormData, string>>;
  t: TFunction;
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
        <InputLabel>{t("RSVP.Fields.NumberOfGuests")}</InputLabel>
        <Select
          name="NumberOfGuests"
          label={t("RSVP.Fields.NumberOfGuests")}
          value={numberOfGuests}
          onChange={handleNumberOfGuestsChange}
        >
          <MenuItem value={1}>{t("RSVP.Fields.1")}</MenuItem>
          <MenuItem value={2}>{t("RSVP.Fields.2")}</MenuItem>
          <MenuItem value={3}>{t("RSVP.Fields.3")}</MenuItem>
          <MenuItem value={4}>{t("RSVP.Fields.4")}</MenuItem>
          <MenuItem value={5}>{t("RSVP.Fields.5")}</MenuItem>
          <MenuItem value={6}>{t("RSVP.Fields.6")}</MenuItem>
          <MenuItem value={7}>{t("RSVP.Fields.7")}</MenuItem>
          <MenuItem value={8}>{t("RSVP.Fields.8")}</MenuItem>
          <MenuItem value={9}>{t("RSVP.Fields.9")}</MenuItem>
          <MenuItem value={10}>{t("RSVP.Fields.10")}</MenuItem>
        </Select>
      </FormControl>

      {new Array(Number(numberOfGuests)).fill("").map((_, index) => (
        <>
          <TextField
            key={index}
            label={t("RSVP.Fields.Guest") + " " + (index + 1)}
            name={"Guest" + (index + 1)}
            error={GetError("Guest" + (index + 1), formErrors)}
            helperText={GetErrorText("Guest" + (index + 1), formErrors)}
          />
          <TextField
            label={
              t("RSVP.Fields.DietaryRequirementsGuest") + " " + (index + 1)
            }
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

function ThankYou({ t }: { t: TFunction }) {
  return (
    <>
      <p>{t("RSVP.Fields.DietaryRequirementsGuest")}</p>
      <p>We cannot wait to see you on the big day!</p>
    </>
  );
}

export default RSVPForm;
