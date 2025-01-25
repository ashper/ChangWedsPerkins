import { useState } from "react";
import "./App.css";
import Heading from "./Heading";
import Login from "./Login";
import Body from "./Body";

function App() {
  const [password, setPassword] = useState(
    window.localStorage.getItem("password")
  );

  const loggedIn = password === "02082025";

  function passwordChanged(password: string) {
    setPassword(password);
    window.localStorage.setItem("password", password);
  }

  return (
    <>
      <Heading></Heading>
      <div>
        {loggedIn ? (
          <Body></Body>
        ) : (
          <Login handleChange={passwordChanged}></Login>
        )}
      </div>
    </>
  );
}

export default App;
