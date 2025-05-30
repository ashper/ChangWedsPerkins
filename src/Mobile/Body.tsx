import { Box } from "@mui/material";
import "./Body.css";
import Travel from "./Travel";
import RSVP from "./RSVP";
import FAQ from "./FAQ";
import MoreOfUs from "./MoreOfUs";
import Home from "./Home";

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

function Body({
  value,
  tabChange,
}: {
  value: number;
  tabChange: (value: number) => void;
}) {
  return (
    <div className="bodyContainerMobile">
      <div className="panel">
        <CustomTabPanel value={value} index={0}>
          <Home tabChange={(arg0) => tabChange(arg0)}></Home>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <FAQ></FAQ>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <MoreOfUs></MoreOfUs>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div style={{ padding: "20px" }}>
            <Travel></Travel>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <div style={{ padding: "20px" }}>
            <RSVP></RSVP>
          </div>
        </CustomTabPanel>
      </div>
    </div>
  );
}

export default Body;
