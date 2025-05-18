import { useState } from "react";
import Login from "../Shared/Login";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./MobileSite.css";
import Body from "./Body";

function MobileSite() {
  const [password, setPassword] = useState(
    window.localStorage.getItem("password")
  );

  const loggedIn = password === "02082025";

  function passwordChanged(password: string) {
    setPassword(password);
    window.localStorage.setItem("password", password);
  }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding disableGutters>
          <ListItemButton>
            <ListItemText primary="Home" onClick={() => setValue(0)} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding disableGutters>
          <ListItemButton>
            <ListItemText primary="FAQ" onClick={() => setValue(1)} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding disableGutters>
          <ListItemButton>
            <ListItemText primary="Travel" onClick={() => setValue(2)} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding disableGutters>
          <ListItemButton>
            <ListItemText primary="RSVP" onClick={() => setValue(3)} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        sx={{
          "--AppBar-background": "#f4ede7",
          "--AppBar-color": "#231f20",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          AP & KQ
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#f4ede7",
            color: "#231f20",
          },
        }}
      >
        {DrawerList}
      </Drawer>
      <div className="mobileBody">
        {loggedIn ? (
          <Body
            value={value}
            tabChange={(value: number) => setValue(value)}
          ></Body>
        ) : (
          <div style={{ padding: "20px" }}>
            {" "}
            <Login handleChange={passwordChanged}></Login>
          </div>
        )}
      </div>
    </>
  );
}

export default MobileSite;
