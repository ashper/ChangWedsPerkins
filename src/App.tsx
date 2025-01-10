import { useState } from "react";
import "./App.css";
import RsvpForm from "./rsvpForm";
import Heading from "./Heading";
import Login from "./Login";

function App() {
  const [password, setPassword] = useState(
    window.localStorage.getItem("password")
  );

  const loggedIn = password === "02082025";

  function passwordChanged(password: string) {
    setPassword(password);
  }

  return (
    <>
      <Heading></Heading>
      <div>
        {loggedIn ? (
          <RsvpForm></RsvpForm>
        ) : (
          <Login handleChange={passwordChanged}></Login>
        )}
      </div>
    </>
  );
}

export default App;
