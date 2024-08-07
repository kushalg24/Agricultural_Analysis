import React, { useState, useEffect } from 'react';
import ReactEcharts from "echarts-for-react";
import * as echarts from 'echarts/core';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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

export default function StorageGraph_monthly({ size }) {
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
      xAxis: [
        {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'BigQuery',
          type: graphType,
          barWidth: 45,
          stack: 'Storage',
          emphasis: {
            focus: 'series'
          },
          data: [62, 73, 70, 73, 91, 93, 92, 73, 70, 73, 91, 93]
        },
        {
          name: 'Snowflake',
          type: graphType,
          barWidth: 45,
          stack: 'Storage',
          emphasis: {
            focus: 'series'
          },
          data: [62, 73, 70, 73, 100, 113, 110, 62, 73, 70, 73, 100]
        },
        {
          name: 'Azure',
          type: graphType,
          barWidth: 45,
          stack: 'Storage',
          emphasis: {
            focus: 'series'
          },
          data: [60, 72, 71, 74, 91, 100, 110, 60, 72, 71, 74, 91]
        },
        {
          name: 'OpenAI',
          type: graphType,
          barWidth: 45,
          stack: 'Storage',
          emphasis: {
            focus: 'series'
          },
          data: [62, 82, 91, 84, 91, 100, 120, 62, 82, 91, 84, 91]
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
            <th>Month</th>
            <th>BigQuery</th>
            <th>Snowflake</th>
            <th>Azure</th>
            <th>OpenAI</th>
          </tr>
        </thead>
        <tbody>
          {option.xAxis[0].data.map((month, index) => (
            <tr key={index}>
              <td>{month}</td>
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
  const insight = "Snowflake shows significant usage peaks in May and October.";
  const cta = "Investigate Snowflake usage trends to manage costs.";

  return (
    <div className="storage-graph-monthly-container" style={{height:"100%",width:"100%",overflow:"auto"}}>
      <div style={{textAlign:"end",marginRight:"25px"}}>
         <DropdownButton id="dropdown-basic-button" title={`${graphType === 'bar' ? 'Bar Graph' : graphType === 'line' ? 'Line Graph' : 'Table'}`} onSelect={(e) => handleGraphTypeChange(e)}>
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
        <p><strong>Call to Action:</strong> {cta} <a href="#action-link">Click here</a></p>
      </div>
    </div>
  );
}
