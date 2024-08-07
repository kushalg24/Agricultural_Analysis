import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function StorageGraphYearly({ size }) {
  const [graphType, setGraphType] = useState("line"); // Default graph type is line

  // Function to handle graph type change
  const handleGraphTypeChange = (type) => {
    setGraphType(type);
  };

  const storageData = [
    { "Year": 2017, "Technology": "BigQuery", "Storage": 150 },
    { "Year": 2018, "Technology": "BigQuery", "Storage": 470 },
    { "Year": 2019, "Technology": "BigQuery", "Storage": 490 },
    { "Year": 2020, "Technology": "BigQuery", "Storage": 500 },
    { "Year": 2021, "Technology": "BigQuery", "Storage": 510 },
    { "Year": 2022, "Technology": "BigQuery", "Storage": 520 },
    { "Year": 2023, "Technology": "BigQuery", "Storage": 530 },

    { "Year": 2017, "Technology": "Snowflake", "Storage": 180 },
    { "Year": 2018, "Technology": "Snowflake", "Storage": 290 },
    { "Year": 2019, "Technology": "Snowflake", "Storage": 300 },
    { "Year": 2020, "Technology": "Snowflake", "Storage": 310 },
    { "Year": 2021, "Technology": "Snowflake", "Storage": 320 },
    { "Year": 2022, "Technology": "Snowflake", "Storage": 330 },
    { "Year": 2023, "Technology": "Snowflake", "Storage": 340 },

    { "Year": 2017, "Technology": "Azure", "Storage": 200 },
    { "Year": 2018, "Technology": "Azure", "Storage": 410 },
    { "Year": 2019, "Technology": "Azure", "Storage": 420 },
    { "Year": 2020, "Technology": "Azure", "Storage": 430 },
    { "Year": 2021, "Technology": "Azure", "Storage": 440 },
    { "Year": 2022, "Technology": "Azure", "Storage": 450 },
    { "Year": 2023, "Technology": "Azure", "Storage": 460 },

    { "Year": 2017, "Technology": "OpenAI", "Storage": 150 },
    { "Year": 2018, "Technology": "OpenAI", "Storage": 530 },
    { "Year": 2019, "Technology": "OpenAI", "Storage": 580 },
    { "Year": 2020, "Technology": "OpenAI", "Storage": 590 },
    { "Year": 2021, "Technology": "OpenAI", "Storage": 510 },
    { "Year": 2022, "Technology": "OpenAI", "Storage": 520 },
    { "Year": 2023, "Technology": "OpenAI", "Storage": 590 },
  ];

  // Get unique years
  const uniqueYears = [...new Set(storageData.map((item) => item.Year))];

  // Group storageData by Technology
  const seriesData = storageData.reduce((acc, item) => {
    if (!acc[item.Technology]) {
      acc[item.Technology] = [];
    }
    acc[item.Technology].push(item.Storage);
    return acc;
  }, {});

  const series = Object.keys(seriesData).map((tech) => ({
    name: tech,
    type: graphType === "line" ? "line" : "bar", // Dynamically choose type based on selected graphType
    smooth: true,
    data: seriesData[tech],
  }));

  const option = {
    animationDuration: 1000,
    dataset: [
      {
        id: 'dataset_raw',
        source: storageData
      }
    ],
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis',
      formatter: (params) => {
        const year = params[0].axisValue;
        const tooltipItems = params
          .filter((item, index, self) => self.findIndex((i) => i.seriesName === item.seriesName) === index) // Remove duplicate series
          .map((item) => `${item.marker} ${item.seriesName}: ${item.data} GB`)
          .join('<br>');
        return `Year: ${year}<br>${tooltipItems}`;
      }
    },
    xAxis: {
      type: 'category',
      nameLocation: 'middle',
      data: uniqueYears.map(String)
    },
    yAxis: {
      name: 'Storage (GB)'
    },
    grid: {
      right: 140
    },
    legend: {
      data: Object.keys(seriesData), // Array of legend names
    },
    series: series,
  };

  const renderTable = () => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            {Object.keys(seriesData).map((tech) => (
              <th key={tech}>{tech}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {uniqueYears.map((year) => (
            <tr key={year}>
              <td>{year}</td>
              {Object.keys(seriesData).map((tech) => (
                <td key={`${year}-${tech}`}>{seriesData[tech][uniqueYears.indexOf(year)]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const getOption = () => {
    if (graphType === "line") {
      return option;
    } else if (graphType === "bar") {
      return option;
    } else if (graphType === "table") {
      return renderTable();
    }
  };

  // One-line insight and CTA
  const insight = "BigQuery shows the highest increase in storage usage over the years.";
  const cta = "Evaluate BigQuery's storage needs and optimize usage.";

  return (
    <div className="storage-graph-yearly-container" style={{height:"100%",width:"100%"}}>
      <div style={{textAlign:"end",marginRight:"25px"}}>
         <DropdownButton id="dropdown-basic-button" title={`${graphType === 'bar' ? 'Bar Graph' : graphType === 'line' ? 'Line Graph' : 'Table'}`}  onSelect={(e) => handleGraphTypeChange(e)}>
           <Dropdown.Item eventKey="line">Line Graph</Dropdown.Item>
           <Dropdown.Item eventKey="bar">Bar Graph</Dropdown.Item>
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
      <div className="insight-cta-container" style={{marginTop: "0px", textAlign: "center"}}>
        <p><strong>Insight:</strong> {insight}</p>
        <p><strong>Call to Action:</strong> {cta} <a href="#action-link">Click here</a></p>
      </div>
    </div>
  );
}

export default StorageGraphYearly;
