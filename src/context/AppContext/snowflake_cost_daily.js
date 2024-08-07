import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import "./TableStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SnowflakeCostsAppropriation_daily({ size }) {
  const [graphType, setGraphType] = useState("bar"); // Default graph type is line

  // Static single-digit data representing daily Snowflake Costs Appropriation in June
  const daysInJune = Array.from({ length: 30 }, (_, i) => i + 1);
  const dummyData = {
    days: daysInJune.map(day => `June ${day}`),
    services: [
      { name: "Compute", data: [3, 4, 3, 5, 6, 2, 5, 7, 6, 8, 7, 4, 5, 6, 5, 4, 3, 7, 6, 8, 5, 4, 3, 5, 6, 7, 8, 6, 5, 4] },
      { name: "Storage", data: [2, 3, 2, 4, 5, 3, 4, 6, 5, 7, 6, 3, 4, 5, 4, 3, 2, 6, 5, 7, 4, 3, 2, 4, 5, 6, 7, 5, 4, 3] },
      { name: "Data Transfer", data: [1, 2, 1, 3, 4, 2, 3, 5, 4, 6, 5, 2, 3, 4, 3, 2, 1, 5, 4, 6, 3, 2, 1, 3, 4, 5, 6, 4, 3, 2] },
      { name: "Services", data: [6, 7, 6, 8, 9, 7, 8, 9, 9, 8, 7, 6, 7, 8, 7, 6, 5, 9, 8, 9, 7, 6, 5, 7, 8, 9, 9, 8, 7, 6] },
      { name: "Other", data: [4, 5, 4, 6, 7, 5, 6, 7, 7, 6, 5, 4, 5, 6, 5, 4, 3, 7, 6, 7, 5, 4, 3, 5, 6, 7, 7, 6, 5, 4] },
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
      data: dummyData.days,
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
  const insight = "Daily cost shows variation across different services.";
  const cta = "Review daily expenditures to identify optimization opportunities.";

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
        <p><strong>Call to Action:</strong> {cta} <a href="#optimize-expenditures">click here</a></p>
      </div>
    </div>
  );
}

export default SnowflakeCostsAppropriation_daily;
