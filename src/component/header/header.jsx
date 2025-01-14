import React, { useState } from 'react';
import './header.css';
import { Icon } from "@iconify/react/dist/iconify.js";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const menuItems = [
  "Home",
  "Notifications",
  "Communities",
  "Profile",
  "Explore",
  "Settings",
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const list = () => (
    <div onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <div style={{
        fontSize:"1.1rem",
        color:"#1F72DC",
        fontWeight:600,
        textAlign:"justify",
        margin:"30px 80px"
      }}>
Community
      </div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} style={{padding:"auto"}}>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <header className="header">
      <h1>Community</h1>
      <div className="menu-icon" onClick={toggleDrawer}>
        <Icon style={{ fontSize: "1.7rem" }} icon="mdi:menu" className="action-icon" />
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search Community" className="search-bar" />
        <button className="google-signin">Sign in with Google</button>
      </div>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </header>
  );
};

export default Header;