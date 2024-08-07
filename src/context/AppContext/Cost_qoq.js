import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Cost_qoq({ size }) {
  const [graphType, setGraphType] = useState("bar"); // Default graph type is bar

  // Function to handle graph type change
  const handleGraphTypeChange = (type) => {
    setGraphType(type);
  };

  // Define common options for both bar and line graphs
  const commonOptions = {
    legend: {
      top: "5%",
    },
    tooltip: {},
    dataset: {
      source: [
        ["product", "2023-1", "2023-2", "2023-3", "2023-4"],
        ["Biq Query", 5.1, 3.8, 4.7, 6.1],
        ["Okta", 3.1, 3.4, 5.1, 3.2, 4.6],
        ["Snow Flake", 8.4, 5.2, 2.5, 4.1, 3.4],
        ["Open AI", 2.4, 3.9, 9.1, 6, 6],
        ["GCP", 7.4, 5.9, 3.1, 5.6],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {
      name: "Cost_Changes",
      nameLocation: "middle",
      nameGap: 30,
    },
  };

  // Define options for bar graph
  const barOptions = {
    ...commonOptions,
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }, { type: "bar" }],
  };

  // Define options for line graph
  const lineOptions = {
    ...commonOptions,
    series: [{ type: "line" }, { type: "line" }, { type: "line" }, { type: "line" }],
  };

  // Define table data
  const tableData = [
    { product: "Biq Query", "2023-1": 5.1, "2023-2": 3.8, "2023-3": 4.7, "2023-4": 6.1 },
    { product: "Okta", "2023-1": 3.1, "2023-2": 3.4, "2023-3": 5.1, "2023-4": 3.2, },
    { product: "Snow Flake", "2023-1": 8.4, "2023-2": 5.2, "2023-3": 2.5, "2023-4": 4.1},
    { product: "Open AI", "2023-1": 2.4, "2023-2": 3.9, "2023-3": 9.1, "2023-4": 6 },
    { product: "GCP", "2023-1": 7.4, "2023-2": 5.9, "2023-3": 3.1, "2023-4": 5.6 },
  ];

  // Render table when "Table" option is selected
  const renderTable = () => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>2023-1</th>
            <th>2023-2</th>
            <th>2023-3</th>
            <th>2023-4</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.product}</td>
              <td>{item["2023-1"]}</td>
              <td>{item["2023-2"]}</td>
              <td>{item["2023-3"]}</td>
              <td>{item["2023-4"]}</td>
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
  const insight = "OpenAI saw the highest increase in Q1 2023.";
  const cta = "Analyze the factors driving the cost increase for OpenAI. ";

  return (
    <div className="cost-qoq-container" style={{ width: "100%", height: "100%" }}>
      <div style={{textAlign:"end",marginRight:"25px"}}>
      <DropdownButton id="dropdown-basic-button" title={`${graphType === 'bar' ? 'Bar Graph' : graphType === 'line' ? 'Line Graph' : 'Table'}`}  onSelect={(e) => handleGraphTypeChange(e)}>
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

export default Cost_qoq;
