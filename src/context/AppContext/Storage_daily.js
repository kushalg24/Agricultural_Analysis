import React, { useState, useEffect } from 'react';
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent
} from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  BarChart,
  LineChart,
  CanvasRenderer
]);

export default function StorageGraph_Daily() {
  const [graphType, setGraphType] = useState("bar"); // Default graph type is bar

  // Function to handle graph type change
  const handleGraphTypeChange = (type) => {
    setGraphType(type);
  };

  const [option, setOption] = useState(null);

  useEffect(() => {
    const newOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: graphType === "line" ? 'category' : 'value',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: graphType === "line" ? 'value' : 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      series: [
        {
          name: 'BigQuery',
          type: graphType,
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [32, 30, 31, 33, 39, 33, 32]
        },
        {
          name: 'Snowflake',
          type: graphType,
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [22, 18, 19, 23, 29, 33, 31]
        },
        {
          name: 'Azure',
          type: graphType,
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [15, 21, 20, 15, 19, 33, 41]
        },
        {
          name: 'OpenAI',
          type: graphType,
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [12, 13, 20, 23, 29, 33, 32]
        }
      ]
    };

    setOption(newOption);

    return () => {
      setOption(null);
    };
  }, [graphType]);

  if (!option) {
    return null; // or a loading indicator if desired
  }

  const renderTable = () => (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>BigQuery</th>
            <th>Snowflake</th>
            <th>Azure</th>
            <th>OpenAI</th>
          </tr>
        </thead>
        <tbody>
          {option.xAxis.data.map((day, index) => (
            <tr key={index}>
              <td>{day}</td>
              {option.series.map((serie, idx) => (
                <td key={idx}>{serie.data[index]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const getOption = () => {
    if (graphType === "bar" || graphType === "line") {
      return option;
    } else if (graphType === "table") {
      return renderTable();
    }
  };

  // One-line insight and CTA
  const insight = "BigQuery shows the highest usage on Friday.";
  const cta = "Monitor and optimize BigQuery usage to balance the load.";

  return (
    <div className="storage-graph-daily-container" style={{ height: "100%", width: "100%" }}>
      <div style={{ textAlign: "end", marginRight: "25px" }}>
        <DropdownButton id="dropdown-basic-button" title={`${graphType === 'bar' ? 'Bar Graph' : graphType === 'line' ? 'Line Graph' : 'Table'}`} onSelect={(e) => handleGraphTypeChange(e)}>
          <Dropdown.Item eventKey="bar">Bar Graph</Dropdown.Item>
          <Dropdown.Item eventKey="line">Line Graph</Dropdown.Item>
          <Dropdown.Item eventKey="table">Table</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="chart-container" style={{ height: "70%", width: "100%" }}>
        {graphType !== "table" ? (
          <ReactEcharts option={getOption()} />
        ) : (
          renderTable()
        )}
      </div>
      <div className="insight-cta-container" style={{ marginTop: "20px", textAlign: "center" }}>
        <p><strong>Insight:</strong> {insight}</p>
        <p><strong>Call to Action:</strong> {cta} <a href="#action-link">click here</a></p>
      </div>
    </div>
  );
}
