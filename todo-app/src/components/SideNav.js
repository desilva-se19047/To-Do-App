import React from 'react';
import './ComponentStyle.css';
import dashboard from "../assets/Dashboard.svg";


const SideNav = () => {
  return (
    <div className="side-nav">
    <div>
        <h3>Acmy Solutions</h3>
    </div>
      <img src={dashboard} alt="Dashboard" className="dashboard-image-1"/>
      <ul>
        <li><a href="#">Dashboard</a></li>
      </ul>
    </div>
  );
};

export default SideNav;

