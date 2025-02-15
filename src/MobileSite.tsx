import { useState } from "react";
import Login from "./Login";
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

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Home", "Our Story", "Travel", "Day Details", "RSVP"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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
          A & K
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
          "Logged in"
        ) : (
          <Login handleChange={passwordChanged}></Login>
        )}
      </div>
    </>
  );
}

export default MobileSite;
