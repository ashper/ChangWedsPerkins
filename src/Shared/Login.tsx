import BigImage from "./BigImage";
import "./Login.css";
function Login({ handleChange }: { handleChange: (a: string) => void }) {
  return (
    <>
      {/* <BigImage></BigImage> */}
      <p>Please enter your password below to continue</p>
      <input
        className="password"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        title="password"
      ></input>
    </>
  );
}

export default Login;
