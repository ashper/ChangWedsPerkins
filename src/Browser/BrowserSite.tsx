// import { useState } from "react";
import Heading from "./Heading";
// import Login from "../Shared/Login";
import Body from "./Body";
import "./BrowserSite.css";

function BrowserSite() {
  // const [password, setPassword] = useState(
  //   window.localStorage.getItem("password")
  // );

  // const loggedIn = password === "02082025";

  // function passwordChanged(password: string) {
  //   setPassword(password);
  //   window.localStorage.setItem("password", password);
  // }

  return (
    <div className="browserRoot">
      <Heading></Heading>
      <div>
        {/* {loggedIn ? ( */}
        <Body></Body>
        {/* ) : (
          <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <Login handleChange={passwordChanged}></Login>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default BrowserSite;
