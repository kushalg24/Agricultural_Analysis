import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import "./TableStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Cost_yoy({ size }) {
  const [graphType, setGraphType] = useState("bar"); // Default graph type is bar

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
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  };

  // Define options for bar graph
  const barOptions = {
    ...commonOptions,
    series: [
      {
        name: "BigQuery",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [320, 302, 301, 334, 390, 330, 320],
      },
      {
        name: "Okta",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Snowflake",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Azure",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [150, 212, 201, 154, 190, 330, 410],
      },
      {
        name: "OpenAI",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 201, 234, 290, 330, 320],
      },
    ],
  };

  // Define options for line graph
  const lineOptions = {
    ...commonOptions,
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Example: Different x-axis data for line graph
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "BigQuery",
        type: "line",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [320, 302, 301, 334, 390, 330, 320],
      },
      {
        name: "Okta",
        type: "line",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Snowflake",
        type: "line",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Azure",
        type: "line",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [150, 212, 201, 154, 190, 330, 410],
      },
      {
        name: "OpenAI",
        type: "line",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 201, 234, 290, 330, 320],
      },
    ],
  };

  const tableData = [
    { name: "BigQuery", data: [320, 302, 301, 334, 390, 330, 320] },
    { name: "Okta", data: [120, 132, 101, 134, 90, 230, 210] },
    { name: "Snowflake", data: [220, 182, 191, 234, 290, 330, 310] },
    { name: "Azure", data: [150, 212, 201, 154, 190, 330, 410] },
    { name: "OpenAI", data: [120, 132, 201, 234, 290, 330, 320] },
  ];

  // Render table when "Table" option is selected
  const renderTable = () => (
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Platform</th>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            {item.data.map((value, i) => (
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
  const insight = "BigQuery usage peaks on Thursday and Friday.";
  const cta = "Optimize BigQuery usage by distributing the load evenly throughout the week.";

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{textAlign:"end",marginRight:"25px"}}>
      <DropdownButton id="dropdown-basic-button" title={`${graphType === 'bar' ? 'Bar Graph' : graphType === 'line' ? 'Line Graph' : 'Table'}`}  onSelect={(e) => handleGraphTypeChange(e)}>
      <Dropdown.Item eventKey="bar">Bar Graph</Dropdown.Item>
      <Dropdown.Item eventKey="line">Line Graph</Dropdown.Item>
      <Dropdown.Item eventKey="table">Table</Dropdown.Item>
      </DropdownButton>
      </div>
      <div style={{height: "80%", width: "100%"}}>
        {graphType !== "table" ? (
          <ReactEcharts option={getOption()} style={{height:"100%", width: "100%"}}/>
        ) : (
          renderTable()
        )}
      </div>
      <div className="insight-cta-container" style={{marginTop: "0px", textAlign: "center"}}>
        <p><strong>Insight:</strong> {insight}</p>
        <p><strong>Call to Action:</strong> {cta} <a href="#action-link">click here</a></p>
      </div>
    </div>
  );
}

export default Cost_yoy;
