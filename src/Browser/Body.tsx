import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import BigImage from "../Shared/BigImage";
import Travel from "./Travel";
import "./Body.css";
import OurStory from "./OurStory";
import RSVP from "./RSVP";

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
          <Tab label="Our Story" />
          <Tab label="Travel" />
          <Tab label="Wedding Day Details" />
          <Tab label="RSVP" />
        </Tabs>
      </div>
      <div className="panel">
        <CustomTabPanel value={value} index={0}>
          <BigImage></BigImage>
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
          <RSVP />
        </CustomTabPanel>
      </div>
    </div>
  );
}

export default Body;
