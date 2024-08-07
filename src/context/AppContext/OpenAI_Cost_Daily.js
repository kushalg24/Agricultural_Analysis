import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import "./TableStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function OpenAI_Cost_Daily({ size }) {
  const [graphType, setGraphType] = useState("bar"); // Default graph type is line

  // Static data representing daily cost for different OpenAI services in June
  const daysInJune = Array.from({ length: 30 }, (_, i) => i + 1);
  const dummyData = {
    days: daysInJune.map(day => `June ${day}`),
    services: [
        { name: "GPT-3", data: [11, 15, 12, 18, 15, 19, 15, 20, 16, 13, 21, 24, 20, 22, 28, 15, 19, 27, 26, 25, 28, 30, 35, 29, 27, 23, 28, 21, 29, 20] },
        { name: "DALL-E", data: [22, 23, 25, 23, 28, 24, 25, 35, 38, 30, 32, 39, 31, 33, 35, 28, 29, 34, 33, 30, 35, 38, 32, 35, 37, 33, 31, 24, 36, 35] },
        { name: "Codex", data: [16, 15, 15, 18, 15, 16, 15, 20, 18, 15, 22, 14, 18, 22, 18, 15, 19, 27, 16, 25, 18, 20, 15, 29, 27, 33, 28, 11, 19, 20] },
        { name: "Whisper", data: [16, 15, 19, 21, 12, 19, 15, 20, 26, 23, 21, 14, 17, 12, 18, 15, 29, 27, 16, 15, 18, 10, 11, 29, 27, 33, 18, 21, 19, 20] },
        { name: "Embeddings", data: [12, 19, 11, 18, 12, 18, 15, 19, 16, 13, 12, 14, 18, 15, 18, 15, 19, 27, 16, 15, 18, 10, 15, 29, 17, 23, 18, 21, 19, 20] },
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
  const insight = "DALL-E shows a higher daily cost compared to other services.";
  const cta = "Monitor and optimize DALL-E usage to control daily costs.";

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

export default OpenAI_Cost_Daily;
