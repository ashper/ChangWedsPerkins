import { Box } from "@mui/material";
import BigImage from "../Shared/BigImage";
import "./Body.css";
import OurStory from "./OurStory";
import Travel from "./Travel";
import RSVP from "./RSVP";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function Body({ value }: { value: number }) {
  return (
    <div className="bodyContainer">
      <div className="panel">
        <CustomTabPanel value={value} index={0}>
          <BigImage></BigImage>
          Mobile View!
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <OurStory></OurStory>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Travel></Travel>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Wedding day details here
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <RSVP></RSVP>
        </CustomTabPanel>
      </div>
    </div>
  );
}

export default Body;
