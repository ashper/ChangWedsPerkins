import { BrowserView, MobileView } from "react-device-detect";
import BrowserSite from "./BrowserSite";
import MobileSite from "./MobileSite";
import "./App.css";

function App() {
  return (
    <>
      <BrowserView>
        <BrowserSite></BrowserSite>
      </BrowserView>
      <MobileView>
        <MobileSite></MobileSite>
      </MobileView>
    </>
  );
}

export default App;
