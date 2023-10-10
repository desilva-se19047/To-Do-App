import React from 'react';
import HeaderNav from '../components/HeaderNav.js';
import SideNav from '../components/SideNav.js';
import Frame from '../components/Frame.js';
import TaskList from '../components/TaskList.js';
import ActivityFeed from '../components/ActivityFeed.js';

function Dashboard() {
    return (
      <div>
          <HeaderNav/>
          <SideNav/>
          <Frame/>
          <TaskList/>
          <ActivityFeed/>
      </div>
    );
}
  
export default Dashboard;