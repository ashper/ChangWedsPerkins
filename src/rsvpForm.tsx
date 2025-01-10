import { useState } from "react";

function RsvpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://www.formbackend.com/f/8abd8f07b64133a2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => {
        if (response.status === 422) {
          throw new Error("Validation error");
        } else if (!response.ok) {
          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((data) => {
        // You can even use `data` here. Access `data.submission_text`, `data.values` etc.
        setSuccessMessage("Form submitted successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {successMessage.length == 0 && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Send</button>
        </form>
      )}

      {successMessage.length > 0 && <p>{successMessage}</p>}
    </>
  );
}

export default RsvpForm;
