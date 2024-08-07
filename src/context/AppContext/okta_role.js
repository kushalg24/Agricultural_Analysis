import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './TableStyle.css'; // Make sure this file exists with your CSS styles

// Sample role-based utilization data for Okta for one month
const daysInJune = Array.from({ length: 30 }, (_, i) => i + 1);
const dummyData = {
  days: daysInJune.map(day => `June ${day}`),
  roles: [
    { name: "Admin", logins: [5, 3, 4, 6, 7, 5, 6, 4, 5, 3, 6, 5, 4, 6, 7, 5, 6, 4, 5, 3, 6, 5, 4, 6, 7, 5, 6, 4, 5, 3], actions: [12, 10, 11, 13, 15, 12, 14, 10, 11, 9, 14, 13, 12, 14, 15, 12, 14, 10, 11, 9, 14, 13, 12, 14, 15, 12, 14, 10, 11, 9] },
    { name: "User", logins: [50, 45, 48, 52, 55, 50, 53, 47, 49, 45, 52, 50, 48, 52, 55, 50, 53, 47, 49, 45, 52, 50, 48, 52, 55, 50, 53, 47, 49, 45], actions: [80, 70, 75, 85, 90, 80, 87, 70, 75, 68, 85, 80, 75, 85, 90, 80, 87, 70, 75, 68, 85, 80, 75, 85, 90, 80, 87, 70, 75, 68] },
    { name: "Developer", logins: [20, 18, 19, 21, 22, 20, 23, 19, 21, 18, 22, 21, 19, 21, 23, 20, 22, 19, 21, 18, 22, 21, 19, 21, 23, 20, 22, 19, 21, 18], actions: [45, 40, 42, 48, 50, 45, 50, 42, 45, 40, 48, 45, 42, 48, 50, 45, 50, 42, 45, 40, 48, 45, 42, 48, 50, 45, 50, 42, 45, 40] },
    { name: "Manager", logins: [10, 8, 9, 11, 12, 10, 11, 9, 10, 8, 11, 10, 9, 11, 12, 10, 11, 9, 10, 8, 11, 10, 9, 11, 12, 10, 11, 9, 10, 8], actions: [20, 15, 17, 22, 25, 20, 22, 17, 20, 15, 22, 20, 17, 22, 25, 20, 22, 17, 20, 15, 22, 20, 17, 22, 25, 20, 22, 17, 20, 15] }
  ]
};

const RoleBasedUtilizationChart_okta_daily = () => {
  // Define options for the chart
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Admin Logins', 'Admin Actions', 'User Logins', 'User Actions', 'Developer Logins', 'Developer Actions', 'Manager Logins', 'Manager Actions']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: dummyData.days
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: function (value) {
          return value.toString();
        }
      }
    },
    series: [
      {
        name: 'Admin Logins',
        type: 'bar',
        stack: 'Logins',
        data: dummyData.roles[0].logins
      },
      {
        name: 'Admin Actions',
        type: 'bar',
        stack: 'Actions',
        data: dummyData.roles[0].actions
      },
      {
        name: 'User Logins',
        type: 'bar',
        stack: 'Logins',
        data: dummyData.roles[1].logins
      },
      {
        name: 'User Actions',
        type: 'bar',
        stack: 'Actions',
        data: dummyData.roles[1].actions
      },
      {
        name: 'Developer Logins',
        type: 'bar',
        stack: 'Logins',
        data: dummyData.roles[2].logins
      },
      {
        name: 'Developer Actions',
        type: 'bar',
        stack: 'Actions',
        data: dummyData.roles[2].actions
      },
      {
        name: 'Manager Logins',
        type: 'bar',
        stack: 'Logins',
        data: dummyData.roles[3].logins
      },
      {
        name: 'Manager Actions',
        type: 'bar',
        stack: 'Actions',
        data: dummyData.roles[3].actions
      }
    ]
  };

  return (
    <div className="chart-container">

      <ReactEcharts option={options} style={{ height: '400px', width: '100%' }} />
    </div>
  );
}

export default RoleBasedUtilizationChart_okta_daily;
