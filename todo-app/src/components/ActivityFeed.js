import React from 'react';
import './ComponentStyle.css';
import './MediaQuery.css';
import avatar1 from "../assets/Avatar-1.svg";
import avatar2 from "../assets/Avatar-2.svg";

function ActivityFeed() {
  return (
    <div className='activity-container'>
      <h3>   Activity Feed</h3>
        <div className="activity-content">
          <img src={avatar1} alt="Avatar-1" className="activity-image-1" />        
          <div className="activity-text">
            <p><b>Kushantha Charuka</b> created Contract <a href="#">#00124 need John Beige’s signature</a></p>
            <p className='time'>Sep 16, 2022 at 11:30 AM</p>
          </div>
        </div>
        <div className="activity-content">
          <img src={avatar2} alt="Avatar-2" className="activity-image-2" />        
          <div className="activity-text">
            <p>Lorem ipsum <b>dolor sit amet</b>, consectetur adipiscing elit. <b>Maecenas</b> pretium neque</p>
            <p className='time'>Sep 16, 2022 at 11:45 AM</p>
          </div>
        </div>
        <div className="activity-content">
          <img src={avatar2} alt="Avatar-2" className="activity-image-2" />        
          <div className="activity-text">
            <p>Lorem ipsum <b>dolor sit amet</b>, consectetur adipiscing elit. <b>Maecenas</b> pretium neque</p>
            <p className='time'>Sep 16, 2022 at 11:45 AM</p>
          </div>
        </div>
    </div>
  );
}

export default ActivityFeed;
