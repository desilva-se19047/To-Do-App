import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './ComponentStyle.css';
import './MediaQuery.css';

function PriorityChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const data = {
      labels: ['High', 'Medium', 'Low'],
      datasets: [
        {
          data: [100 / 7, 200 / 7, 400 / 7],
          backgroundColor: ['red', 'yellow', 'blue'],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    const ctx = document.getElementById('donut-chart');
    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div className='priority-container'>
      <h3>Task Priority</h3>
      <div className='donut-chart-container'>
        <canvas id='donut-chart'></canvas>
      </div>
    </div>
  );
}

export default PriorityChart;
