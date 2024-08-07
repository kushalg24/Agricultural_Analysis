import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Costconsumption({ size }) {
  const [graphType, setGraphType] = useState("pie"); // Default graph type is pie

  // Function to handle graph type change
  const handleGraphTypeChange = (type) => {
    setGraphType(type);
  };

  // Define options for pie chart
  const pieOptions = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "horizontal",
      right: "10%",
      top: "0",
    },
    series: [
      {
        name: "Cost Consumption",
        type: "pie",
        radius: "70%",
        data: [
          { value: 100, name: "Okta" },
          { value: 200, name: "Snowflake" },
          { value: 150, name: "BigQuery" },
          { value: 180, name: "OpenAI" },
          { value: 80, name: "Azure" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  // Define options for line chart
  const lineOptions = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Okta", "Snowflake", "BigQuery", "GCP", "OpenAI", "Azure"],
      right: "10%",
      top: "0",
    },
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      { name: "Okta", type: "line", data: [100, 150, 120, 180, 90, 200] },
      { name: "Snowflake", type: "line", data: [80, 130, 110, 160, 70, 180] },
      { name: "BigQuery", type: "line", data: [120, 170, 140, 200, 110, 220] },
      { name: "GCP", type: "line", data: [90, 140, 100, 160, 80, 180] },
      { name: "OpenAI", type: "line", data: [110, 160, 130, 180, 100, 200] },
      { name: "Azure", type: "line", data: [70, 120, 90, 140, 60, 150] },
    ],
  };

  // Define options for bar chart
  const barOptions = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Okta", "Snowflake", "BigQuery", "GCP", "OpenAI", "Azure"],
      right: "10%",
      top: "0",
    },
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      { name: "Okta", type: "bar", data: [100, 150, 120, 180, 90, 200] },
      { name: "Snowflake", type: "bar", data: [80, 130, 110, 160, 70, 180] },
      { name: "BigQuery", type: "bar", data: [120, 170, 140, 200, 110, 220] },
      { name: "GCP", type: "bar", data: [90, 140, 100, 160, 80, 180] },
      { name: "OpenAI", type: "bar", data: [110, 160, 130, 180, 100, 200] },
      { name: "Azure", type: "bar", data: [70, 120, 90, 140, 60, 150] },
    ],
  };

  // Define table data for Costconsumption
  const tableData = [
    { name: "Okta", value: 100 },
    { name: "Snowflake", value: 200 },
    { name: "BigQuery", value: 150 },
    { name: "GCP", value: 120 },
    { name: "OpenAI", value: 180 },
    { name: "Azure", value: 80 },
  ];

  // Render table when "Table" option is selected
  const renderTable = () => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Dynamically switch between pie, line, bar chart, and table options
  const getOption = () => {
    if (graphType === "pie") {
      return pieOptions;
    } else if (graphType === "line") {
      return lineOptions;
    } else if (graphType === "bar") {
      return barOptions;
    } else if (graphType === "table") {
      return renderTable();
    }
  };

  // One-line insight and CTA
  const insight = "Snowflake has the highest cost consumption.";
  const cta = "Investigate Snowflake usage to optimize costs. ";

  return (
    <div className="cost-consumption-container" style={{ width: "100%", height: "100%" }}>
      <div style={{textAlign:"end",marginRight:"25px"}}>
         <DropdownButton id="dropdown-basic-button" title={`${graphType === 'pie' ? 'Pie Chart' : graphType === 'bar' ? 'Bar Graph' : graphType === 'line' ? 'Line Graph' : 'Table'}`}  onSelect={(e) => handleGraphTypeChange(e)}>
           <Dropdown.Item eventKey="pie">Pie Chart</Dropdown.Item>
           <Dropdown.Item eventKey="bar">Bar Graph</Dropdown.Item>
           <Dropdown.Item eventKey="line">Line Graph</Dropdown.Item>
           <Dropdown.Item eventKey="table">Table</Dropdown.Item>
         </DropdownButton>
      </div>
      <div className="chart-container" style={{height: "70%", width: "100%"}}>
        {graphType !== "table" ? (
          <ReactEcharts option={getOption()} style={{height:"100%", width: "100%"}}/>
        ) : (
          renderTable()
        )}
      </div>
      <div className="insight-cta-container" style={{marginTop: "20px", textAlign: "center"}}>
        <p><strong>Insight:</strong> {insight}</p>
        <p><strong>Call to Action:</strong> {cta} <a href="#action-link">click here</a></p>
      </div>
    </div>
  );
}

export default Costconsumption;
