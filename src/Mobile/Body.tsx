import { Box, Button } from "@mui/material";
import BigImage from "../Shared/BigImage";
import "./Body.css";
import Travel from "./Travel";
import RSVP from "./RSVP";
import Countdown from "react-countdown";
import FAQ from "./FAQ";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} style={{ padding: "0" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const renderer = ({ days, hours }: { days: number; hours: number }) => {
  // Render a countdown
  return (
    <span>
      {days} days {hours} hours
    </span>
  );
};

function Body({
  value,
  tabChange,
}: {
  value: number;
  tabChange: (value: number) => void;
}) {
  const weddingDate = new Date(2025, 8, 2);
  return (
    <div className="bodyContainer">
      <div className="panel">
        <CustomTabPanel value={value} index={0}>
          <BigImage></BigImage>
          <p>
            {" "}
            <Countdown date={weddingDate} renderer={renderer} /> to 2nd August
            2025!
            <br />
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              style={{ backgroundColor: "#5c7d74" }}
              onClick={() => tabChange(3)}
            >
              RSVP
            </Button>
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <FAQ></FAQ>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div style={{ padding: "20px" }}>
            {" "}
            <Travel></Travel>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div style={{ padding: "20px" }}>
            {" "}
            <RSVP></RSVP>
          </div>
        </CustomTabPanel>
      </div>
    </div>
  );
}

export default Body;
