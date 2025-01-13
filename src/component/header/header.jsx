import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import Sidebar from '../sideBar/sideBar';
import "./header.css";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header = ({toggleDrawer}) => {
 
  return (
    <header className="header">
      <h1>Community</h1>
      <div className="menu-icon" onClick={toggleDrawer}>
        <Icon style={{fontSize:"1.7rem"}} icon="mdi:menu"  className="action-icon" /> 
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search Community" className="search-bar" />
        <button className="google-signin">Sign in with Google</button>
      </div>
      
    </header>
    
  );
};

export default Header;
