import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import "./TableStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SnowflakeCostsAppropriation_yoy({ size }) {
  const [graphType, setGraphType] = useState("line"); // Default graph type is line

  // Static jumbled data representing yearly Snowflake Costs Appropriation in dollars
  const years = ["2019", "2020", "2021", "2022", "2023"];
  const dummyData = {
    years: years,
    services: [
      { name: "Compute", data: [3200, 3100, 3300, 3500, 3400] },
      { name: "Storage", data: [2100, 2200, 2300, 2500, 2400] },
      { name: "Data Transfer", data: [1100, 1200, 1300, 1500, 1400] },
      { name: "Services", data: [600, 700, 800, 900, 1000] },
      { name: "Other", data: [400, 500, 600, 700, 800] },
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
      formatter: function (params) {
        let tooltipContent = `${params[0].axisValue}<br/>`;
        params.forEach(param => {
          tooltipContent += `${param.marker}${param.seriesName}: $${param.value.toLocaleString()}<br/>`;
        });
        return tooltipContent;
      }
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
      axisLabel: {
        formatter: function (value) {
          return `$${value}`;
        }
      }
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
        position: 'insideTop',
        formatter: params => `$${params.value}`,
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
        formatter: params => `$${params.value}`,
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
                <td key={i}>${value}</td>
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
  const insight = "Compute costs have been steadily increasing over the years.";
  const cta = "Consider optimizing compute resources to manage costs.";

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
        <p><strong>Call to Action:</strong> {cta} <a href="#optimize-compute">click here</a></p>
      </div>
    </div>
  );
}

export default SnowflakeCostsAppropriation_yoy;
