import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Members", path: "/members" },
  ];

  return (
    <>
      <AppBar position="fixed" className="custom-navbar" elevation={0}>
        <Toolbar className="nav-toolbar">
          <Typography variant="h6" className="logo">
            HACKATHON
          </Typography>

          {/* Desktop Menu */}
          <Box className="nav-links">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Icon */}
          <IconButton
            edge="end"
            className="menu-btn"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className="drawer-list">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;