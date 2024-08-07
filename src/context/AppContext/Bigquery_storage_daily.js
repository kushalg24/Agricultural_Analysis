import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import "./TableStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Bigquery_storage_daily({ size }) {
  const [graphType, setGraphType] = useState("line"); // Default graph type is line

  // Static data representing day-over-day storage consumption for different BigQuery services for the month of June
  const dummyData = {
    days: Array.from({ length: 30 }, (_, i) => `June ${i + 1}`),
    services: [
      { name: "BigQuery", data: [12, 14, 11, 15, 9, 21, 19, 20, 18, 22, 21, 23, 22, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 29, 31, 32, 33, 34, 35] },
      { name: "Cloud Storage", data: [32, 30, 33, 31, 35, 33, 37, 38, 36, 40, 39, 42, 41, 43, 45, 44, 47, 48, 46, 50, 51, 52, 50, 54, 53, 55, 57, 56, 59, 60] },
      { name: "Compute Engine", data: [22, 21, 24, 23, 26, 25, 28, 27, 29, 30, 31, 32, 31, 33, 34, 35, 34, 37, 38, 39, 40, 41, 42, 41, 43, 44, 45, 46, 47, 48] },
      { name: "App Engine", data: [15, 16, 17, 18, 17, 20, 21, 22, 21, 24, 23, 25, 26, 27, 28, 27, 30, 31, 32, 33, 34, 35, 34, 36, 37, 38, 39, 40, 41, 42] },
      { name: "Cloud Functions", data: [12, 13, 14, 15, 14, 17, 18, 19, 18, 21, 20, 22, 21, 23, 24, 25, 24, 27, 28, 29, 28, 31, 30, 32, 31, 33, 34, 35, 34, 36] },
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
      data: dummyData.services.map(service => service.name),
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
      name: "Storage Consumption (GB)",
    },
  };

  // Define options for bar graph
  const barOptions = {
    ...commonOptions,
    series: dummyData.services.map(service => ({
      name: service.name,
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: service.data,
    })),
  };

  // Define options for line graph
  const lineOptions = {
    ...commonOptions,
    series: dummyData.services.map(service => ({
      name: service.name,
      type: "line",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: service.data,
    })),
  };

  // Render table when "Table" option is selected
  const renderTable = () => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Service</th>
            {dummyData.days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dummyData.services.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              {service.data.map((value, i) => (
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
  const insight = "Cloud Storage shows the highest variability in daily storage consumption.";
  const cta = "Analyze Cloud Storage usage patterns to identify optimization opportunities.";

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ textAlign: "end", marginRight: "25px" }}>
        <DropdownButton id="dropdown-basic-button" title={`${graphType === 'bar' ? 'Bar Graph' : graphType === 'line' ? 'Line Graph' : 'Table'}`} onSelect={(e) => handleGraphTypeChange(e)}>
          <Dropdown.Item eventKey="bar">Bar Graph</Dropdown.Item>
          <Dropdown.Item eventKey="line">Line Graph</Dropdown.Item>
          <Dropdown.Item eventKey="table">Table</Dropdown.Item>
        </DropdownButton>
      </div>
      {graphType !== "table" ? (
        <ReactEcharts option={getOption()} style={{ height: "80%" }} />
      ) : (
        renderTable()
      )}
      <div className="insight-cta-container" style={{ marginTop: "0px", textAlign: "center" }}>
        <p><strong>Insight:</strong> {insight}</p>
        <p><strong>Call to Action:</strong> {cta} <a href="#action-link">click here</a></p>
      </div>
    </div>
  );
}

export default Bigquery_storage_daily;
