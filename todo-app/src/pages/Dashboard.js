import React from 'react';
import HeaderNav from '../components/HeaderNav.js';
import SideNav from '../components/SideNav.js';
import Frame from '../components/Frame.js';
import TaskList from '../components/TaskList.js';

function Dashboard() {
    return (
      <div>
          <HeaderNav/>
          <SideNav/>
          <Frame/>
          <TaskList/>
      </div>
    );
}
  
export default Dashboard;