import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default active index

  const menuItems = [
    "Home",
    "Notifications",
    "Communities",
    "Profile",
    "Explore",
    "Settings",
  ];

  return (
    <nav className="sidebar">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
