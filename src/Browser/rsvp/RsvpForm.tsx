import { useState } from "react";
import Stepper from "./Stepper";
import { FormData } from "./FormData";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";

function RsvpForm() {
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    Name: "",
    EmailOrWhatsApp: "whatsapp",
    EmailAddress: "",
    PhoneNumber: "",
    NumberOfGuests: 0,
    DietaryRestrictions: "",
    Guest1: "",
    Guest2: "",
    Guest3: "",
    Guest4: "",
  });

  const handleFieldChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const manageNextStepValidation = (step: number) => {
    if (step === steps.length - 1) {
      handleSubmit();
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    fetch("https://www.formbackend.com/f/8abd8f07b64133a2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
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
        setSuccessMessage("Form submitted successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const steps = [
    <Step1></Step1>,
    <Step2 formData={formData} handleFieldChange={handleFieldChange}></Step2>,
    <Step3 formData={formData} handleFieldChange={handleFieldChange}></Step3>,
    <Step4 formData={formData} handleFieldChange={handleFieldChange}></Step4>,
    <Step5 formData={formData} handleFieldChange={handleFieldChange}></Step5>,
    <Step6 formData={formData} handleFieldChange={handleFieldChange}></Step6>,
    <Step7></Step7>,
  ];

  if (successMessage) {
    return <Step7></Step7>;
  } else {
    return (
      <>
        <Stepper
          steps={steps}
          stepsAmount={7}
          manageNextStepValidation={manageNextStepValidation}
        ></Stepper>
      </>
    );
  }
}

export default RsvpForm;
