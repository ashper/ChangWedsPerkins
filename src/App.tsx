import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState(
    window.localStorage.getItem("password")
  );

  if (password === "02082025") {
    return <div>Chang Weds Perkins logged in</div>;
  } else {
    return (
      <>
        Please Login:
        <input
          type="text"
          onChange={(e) => {
            window.localStorage.setItem("password", e.target.value);
            setPassword(e.target.value);
          }}
        ></input>
      </>
    );
  }
}

export default App;
