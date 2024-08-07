import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import "./TableStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SnowflakeProductCategorization_daily({ size }) {
  const [graphType, setGraphType] = useState("line"); // Default graph type is line

  // Static jumbled data representing daily Snowflake Product Categorization for June
  const daysInJune = Array.from({ length: 30 }, (_, i) => i + 1);
  const dummyData = {
    days: daysInJune.map(day => `June ${day}`),
    products: [
      { name: "Compute", data: [3, 4, 2, 5, 4, 3, 6, 7, 9, 8, 4, 1, 3, 2, 5, 6, 3, 4, 5, 7, 8, 9, 6, 5, 3, 2, 4, 5, 6, 7] },
      { name: "Storage", data: [2, 2, 2, 5, 4, 3, 6, 7, 9, 8, 3, 1, 2, 4, 5, 6, 7, 2, 5, 3, 4, 6, 3, 4, 5, 6, 3, 4, 5, 6] },
      { name: "Data Transfer", data: [1, 2, 1, 5, 4, 3, 6, 7, 9, 8, 3, 1, 2, 4, 5, 6, 7, 2, 5, 3, 4, 6, 3, 4, 5, 6, 3, 4, 5, 6] },
      { name: "Services", data: [6, 7, 5, 8, 9, 1, 3, 4, 6, 7, 3, 2, 5, 6, 7, 4, 3, 2, 5, 4, 6, 7, 4, 3, 5, 6, 7, 4, 3, 2] },
      { name: "Other", data: [4, 5, 3, 6, 7, 8, 9, 1, 3, 2, 5, 6, 7, 4, 3, 5, 6, 7, 4, 3, 5, 6, 7, 4, 3, 5, 6, 7, 4, 3] },
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
      data: dummyData.products.map(product => product.name),
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
    series: dummyData.products.map(product => ({
      name: product.name,
      type: "bar",
      stack: "total",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: product.data,
    })),
  };

  // Define options for line graph
  const lineOptions = {
    ...commonOptions,
    series: dummyData.products.map(product => ({
      name: product.name,
      type: "line",
      label: {
        show: true,
      },
      emphasis: {
        focus: "series",
      },
      data: product.data,
    })),
  };

  // Render table when "Table" option is selected
  const renderTable = () => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            {dummyData.days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dummyData.products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              {product.data.map((value, i) => (
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
  const insight = "Compute usage shows a consistent trend with occasional spikes.";
  const cta = "Consider analyzing these spikes for potential optimization.";

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

export default SnowflakeProductCategorization_daily;
