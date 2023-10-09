import React from 'react';
import './ComponentStyle.css';
import dashboard from "../assets/Dashboard.svg";


const SideNav = () => {
  return (
    <div className="side-nav">
        <div className="rectangle-430">
            <h3>Acmy Solutions</h3>
        </div>
        <div>
            <a href="#" className="dashboard-button">
            <img src={dashboard} alt="Dashboard" className="dashboard-image-1" />
            Dashboard
            </a>
        </div>
    </div>
  );
};

export default SideNav;

