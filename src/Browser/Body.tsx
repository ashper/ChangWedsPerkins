import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Travel from "./Travel";
import "./Body.css";
import RSVP from "./RSVP";
import MoreOfUs from "./MoreOfUs";
import FAQ from "./FAQ";
import Home from "./Home";

function CustomTabPanel({
  children,
  index,
  value,
}: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function Body() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="bodyContainer">
      <div className="tabs">
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTab-root": {
              color: "#231f20 !important",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#231f20",
            },
          }}
        >
          <Tab label="Home" />
          <Tab label="FAQs" />
          <Tab label="More Of Us" />
          <Tab label="Travel" />
          <Tab label="RSVP" />
        </Tabs>
      </div>
      <div className="panel">
        <CustomTabPanel value={value} index={0}>
          <Home></Home>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <FAQ></FAQ>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <MoreOfUs></MoreOfUs>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Travel></Travel>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <RSVP />
        </CustomTabPanel>
      </div>
    </div>
  );
}

export default Body;
