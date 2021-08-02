import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";

const TitleBar = (props) => {
  console.log(props);
  const { isLoggedIn, displayPage } = props;
  const [element, setElement] = useState(null);
  const open = Boolean(element);
  const handleMenu = (event) => {
    setElement(event.currentTarget);
  };
  const handleMenuClick = (page) => {
    setElement(null);
    displayPage(page);
  };
  const renderHeading = () => {
    if (!isLoggedIn) {
      return <Typography>Home</Typography>;
    } else {
      return (
        <>
          <div>
            <IconButton edge="start" style={{ marginRight: "16px" }} color="inherit" onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={element} keepMounted open={open} onClose={() => setElement(null)}>
              <MenuItem onClick={() => handleMenuClick("splash")}>Home</MenuItem>
              <MenuItem onClick={() => handleMenuClick("contact")}>Contact</MenuItem>
              <MenuItem onClick={() => handleMenuClick("about")}>About</MenuItem>
            </Menu>
          </div>
          <Typography>Welcome</Typography>
        </>
      );
    }
  };
  return (
    <AppBar position="static">
      <Toolbar>{renderHeading()}</Toolbar>
    </AppBar>
  );
};

export default TitleBar;
