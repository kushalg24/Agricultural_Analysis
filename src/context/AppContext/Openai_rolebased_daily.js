import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import "./TableStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Openai_RoleBasedUtilization_daily({ size }) {
  const [graphType, setGraphType] = useState("line"); // Default graph type is line

  // Static data representing daily role-based utilization for June
  const daysInJune = Array.from({ length: 30 }, (_, i) => i + 1);
  const dummyData = {
    days: daysInJune.map(day => `June ${day}`),
    roles: [
        { name: "Developer", data: [72, 55, 63, 52, 68, 56, 59, 54, 60, 53, 67, 55, 73, 58, 70, 51, 69, 61, 62, 65, 66, 57, 64, 68, 71, 60, 67, 56, 57, 69] },
        { name: "Designer", data: [62, 41, 53, 42, 58, 46, 49, 44, 50, 43, 47, 45, 63, 48, 70, 40, 59, 51, 52, 55, 56, 57, 54, 60, 61, 64, 65, 66, 67, 68] },
        { name: "Project Manager", data: [72, 31, 43, 32, 58, 36, 39, 34, 40, 33, 37, 35, 73, 38, 50, 30, 49, 41, 42, 45, 46, 47, 44, 50, 51, 54, 55, 56, 57, 58] },
        { name: "QA Engineer", data: [52, 21, 33, 22, 48, 26, 29, 24, 30, 23, 27, 25, 53, 28, 40, 20, 49, 31, 32, 35, 36, 37, 34, 40, 41, 44, 45, 46, 47, 48] },
        { name: "DevOps Engineer", data: [62, 27, 36, 28, 48, 30, 33, 29, 38, 37, 47, 35, 63, 32, 50, 25, 49, 39, 42, 55, 46, 51, 54, 60, 61, 64, 65, 66, 67, 68] },
      ]
  };

  // Function to handle graph type change
  const handleGraphTypeChange = (type) => {
    setGraphType(type);
  };

  // Define common options for both line and bar graphs
  const commonOptions = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: dummyData.roles.map(role => role.name),
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: dummyData.days,
    },
    yAxis: {
      type: "value",
    },
  };

  // Define options for bar graph
  const barOptions = {
    ...commonOptions,
    series: dummyData.roles.map(role => ({
      name: role.name,
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: role.data,
    })),
  };

  // Define options for line graph
  const lineOptions = {
    ...commonOptions,
    series: dummyData.roles.map(role => ({
      name: role.name,
      type: "line",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: role.data,
    })),
  };

  // Render table when "Table" option is selected
  const renderTable = () => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Role</th>
            {dummyData.days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dummyData.roles.map((role, index) => (
            <tr key={index}>
              <td>{role.name}</td>
              {role.data.map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Dynamically switch between line, bar, and table options
  const getOption = () => {
    if (graphType === "bar") {
      return barOptions;
    } else if (graphType === "line") {
      return lineOptions;
    } else if (graphType === "table") {
      return renderTable();
    }
  };

  // One-line insight and CTA
  const insight = "Developer utilization is consistently high throughout June.";
  const cta = "Focus on maintaining this level of engagement among developers.";

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{textAlign:"end",marginRight:"25px"}}>
        <DropdownButton id="dropdown-basic-button" title={`${graphType === 'bar' ? 'Bar Graph' : graphType === 'line' ? 'Line Graph' : 'Table'}`} onSelect={(e) => handleGraphTypeChange(e)}>
          <Dropdown.Item eventKey="bar">Bar Graph</Dropdown.Item>
          <Dropdown.Item eventKey="line">Line Graph</Dropdown.Item>
          <Dropdown.Item eventKey="table">Table</Dropdown.Item>
        </DropdownButton>
      </div>
      {graphType !== "table" ? (
        <ReactEcharts option={getOption()} style={{height:"80%"}}/>
      ) : (
        renderTable()
      )}
      <div className="insight-cta-container" style={{marginTop: "0px", textAlign: "center"}}>
        <p><strong>Insight:</strong> {insight}</p>
        <p><strong>Call to Action:</strong> {cta} <a href="#action-link">click here</a></p>
      </div>
    </div>
  );
}

export default Openai_RoleBasedUtilization_daily;
