import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import "./TableStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function OpenAI_Cost_Yearly({ size }) {
  const [graphType, setGraphType] = useState("line"); // Default graph type is line

  // Dummy data representing year-over-year cost for different OpenAI services
  const dummyData = {
    years: ["2019", "2020", "2021", "2022", "2023"],
    services: [
      { name: "GPT-3", data: [1200, 1320, 1010, 1340, 1500] },
      { name: "DALL-E", data: [3200, 3020, 3010, 3340, 3600] },
      { name: "Codex", data: [2200, 1820, 1910, 2340, 2500] },
      { name: "Whisper", data: [1500, 2120, 2010, 1540, 1700] },
      { name: "Embeddings", data: [1200, 1320, 2010, 2340, 2600] },
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
      data: dummyData.years,
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
            {dummyData.years.map((year, index) => (
              <th key={index}>{year}</th>
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
  const insight = "DALL-E shows a consistent increase in yearly costs.";
  const cta = "Evaluate DALL-E usage to optimize cost management.";

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

export default OpenAI_Cost_Yearly;
