import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import "./TableStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Openai_RoleBasedUtilization_yoy({ size }) {
  const [graphType, setGraphType] = useState("line"); // Default graph type is line

  // Static data representing year-over-year role-based utilization
  const years = ["2019", "2020", "2021", "2022", "2023"];
  const dummyData = {
    years: years,
    roles: [
      { name: "Developer", data: [100, 60, 55, 70, 60] },
      { name: "Designer", data: [400, 45, 50, 500, 160] },
      { name: "Project Manager", data: [300, 35, 40, 45, 500] },
      { name: "QA Engineer", data: [200, 25, 300, 35, 40] },
      { name: "DevOps Engineer", data: [250, 30, 35, 400, 45] },
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
      data: dummyData.years,
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
            {dummyData.years.map((year, index) => (
              <th key={index}>{year}</th>
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
  const insight = "Developers show steady utilization over the years.";
  const cta = "Focus on training programs to maintain and improve developer skills.";

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

export default Openai_RoleBasedUtilization_yoy;
