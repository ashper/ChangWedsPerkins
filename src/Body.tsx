import { Box, Tab, Tabs } from "@mui/material";
import RsvpForm from "./rsvpForm";
import { useState } from "react";
import BigImage from "./BigImage";
import Travel from "./Travel";

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

function Body() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiTab-root": {
            fontFamily: "Forum",
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
        <Tab label="Things To Do" />
        <Tab label="Photos" />
        <Tab label="Registry" />
        <Tab label="RSVP" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <BigImage></BigImage>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Our story text here
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Travel></Travel>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Things to do here
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Photos here
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Registry here
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        RSVP here
        <RsvpForm></RsvpForm>
      </CustomTabPanel>
    </>
  );
}

export default Body;
