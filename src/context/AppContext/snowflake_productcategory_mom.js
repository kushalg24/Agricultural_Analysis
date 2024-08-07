import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import "./TableStyle.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SnowflakeProductCategorization_mom({ size }) {
  const [graphType, setGraphType] = useState("line"); // Default graph type is line

  // Static jumbled data representing month-over-month Snowflake Product Categorization
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dummyData = {
    months: months,
    products: [
      { name: "Compute", data: [320, 310, 300, 350, 340, 330, 360, 370, 390, 380, 400, 410] },
      { name: "Storage", data: [210, 220, 200, 250, 240, 230, 260, 270, 290, 280, 300, 310] },
      { name: "Data Transfer", data: [110, 120, 100, 150, 140, 130, 160, 170, 190, 180, 200, 210] },
      { name: "Services", data: [60, 70, 50, 80, 90, 100, 110, 120, 130, 140, 150, 160] },
      { name: "Other", data: [40, 50, 30, 60, 70, 80, 90, 100, 110, 120, 130, 140] },
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
      data: dummyData.months,
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
            {dummyData.months.map((month, index) => (
              <th key={index}>{month}</th>
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
  const insight = "Storage consumption shows a consistent increase over the months.";
  const cta = "Consider optimizing storage costs and reviewing storage usage patterns.";

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
        <p><strong>Call to Action:</strong> {cta} <a href="#optimize-storage">click here</a></p>
      </div>
    </div>
  );
}

export default SnowflakeProductCategorization_mom;
