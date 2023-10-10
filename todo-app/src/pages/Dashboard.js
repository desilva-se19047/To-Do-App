import React from 'react';
import HeaderNav from '../components/HeaderNav.js';
import SideNav from '../components/SideNav.js';
import Frame from '../components/Frame.js';
import TaskList from '../components/TaskList.js';
import ActivityFeed from '../components/ActivityFeed.js';
import PriorityChart from '../components/PriorityChart.js';
import './PageStyle.css';

function Dashboard() {
    return (
      <div>
          <HeaderNav/>
          <SideNav/>
          <Frame/>
          <TaskList/>
          <ActivityFeed/>
          <PriorityChart/>
      </div>
    );
}
  
export default Dashboard;