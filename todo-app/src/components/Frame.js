import React from 'react';
import './ComponentStyle.css';
import './MediaQuery.css';
import close from "../assets/Close.svg";
import vector from "../assets/Vector.svg";

const Frame = () => {
  return (
    <div className="frame">
      <div className="frame-content">
        <div className="welcome">
          <h3>Welcome back, John Doe</h3>
        </div>
        <div className="frame-text">
          <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
          <a href="#"><u>Look here for more information</u></a>
        </div>
      </div>
      <div>
        <img src={vector} alt="Vector" className="frame-image-1" />
        <img src={close} alt="Close" className="frame-image-2" />
      </div>
    </div>
  );
};

export default Frame;
