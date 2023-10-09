import React from 'react';
import './ComponentStyle.css';
import notification from "../assets/Notifications.svg";
import profile from "../assets/Profile.svg";
import chevron from "../assets/Chevron-down.svg";

const HeaderNav = () => {
  return (
    <header className="header">
        <div>
            <h4>Dashboard</h4>
        </div>
        <div>
            <img src= {notification} alt="Notification" className="header-image-1" />
            <img src= {profile} alt="Profile" className="header-image-2" />
            <img src= {chevron} alt="Chevron-down" className="header-image-3" />
        </div>  
    </header>
  );
};

export default HeaderNav;
