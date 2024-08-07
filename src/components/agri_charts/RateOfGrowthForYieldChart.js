import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactECharts from 'echarts-for-react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const GrowthRateChart = () => {
  const [data, setData] = useState([]);
  const [graphType, setGraphType] = useState("line");
  const [insight, setInsight] = useState("");
  const [cta, setCta] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://ig.gov-cloud.ai/pi-get-data-quarkus/v1.0/bigQuery/66b211e3311fa40776ef57f2/data?size=10000',
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3Ny1NUVdFRTNHZE5adGlsWU5IYmpsa2dVSkpaWUJWVmN1UmFZdHl5ejFjIn0.eyJleHAiOjE3MjEwNjUwNjgsImlhdCI6MTcyMTAyOTA2OCwianRpIjoiNDU2OWE4NjAtNTRlZS00ODljLTkxZGEtNGQ0NzNjZjk4ODBjIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmtleWNsb2FrLnN2Yy5jbHVzdGVyLmxvY2FsOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2NjE1NmNhMS0xY2ViLTQxZjctOTE0OC0wY2EwNGNjMzI1Y2MiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJIT0xBQ1JBQ1kiLCJzZXNzaW9uX3N0YXRlIjoiNjA2MGU3Y2UtZGZhNS00ODhiLWJlZWYtYTA1NGZkNzQ4ZmViIiwibmFtZSI6Ik1vYml1cyBrdXNoYWwuZ0Btb2JpdXNkdGFhcy5haSIsImdpdmVuX25hbWUiOiJNb2JpdXMiLCJmYW1pbHlfbmFtZSI6Imt1c2hhbC5nQG1vYml1c2R0YWFzLmFpIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicGFzc3dvcmRfdGVuYW50X2t1c2hhbC5nQG1vYml1c2R0YWFzLmFpIiwiZW1haWwiOiJwYXNzd29yZF90ZW5hbnRfa3VzaGFsLmdAbW9iaXVzZHRhYXMuYWkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIvKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiSE9MQUNSQUNZIjp7InJvbGVzIjpbIkhPTEFDUkFDWV9VU0VSIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI2MDYwZTdjZS1kZmE1LTQ4OGItYmVlZi1hMDU0ZmQ3NDhmZWIiLCJ0ZW5hbnRJZCI6IjY2MTU2Y2ExLTFjZWItNDFmNy05MTQ4LTBjYTA0Y2MzMjVjYyJ9.VYZcPeujLulFYl1ZOpdSXhafpRAM6qmWK48le-g30m9DGyfxsHqBSVERxBa1IqK5jTareyXvXWo2nVBCC67x_P6OfqtZRcMTUCaWQ3x_m6soScI6oCZBdEXjLPR8z_40ihhckO1aIdcqmI1ULlhrp_obPs00VdvKnXM8u9qZIhaOvb79-xYGx8CWd6LY2Foe_J_sW8YjRwEMeeVucqWBVdfJVpJ_gyuQgfigfV78ufjaKyIjy-FZ2t-ZGx5iT-ZsIaxK8eUqStljyQzDF5vZl3ZtJrdDgPZPDgU0ntbllSFSDMPt6i2BgvqQWh_ry4IV8mE2pPFYDicF3Rabzz982w',
            },
          }
        );
        setData(response.data.model.entities);

        // Generate insights and CTA
        generateInsights(response.data.model.entities);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const generateInsights = (data) => {
    let maxGrowthRate = 0;
    let yearWithMaxGrowth = "";

    data.forEach(item => {
      const growthRate = item.data.percentage_yield;
      if (growthRate > maxGrowthRate) {
        maxGrowthRate = growthRate;
        yearWithMaxGrowth = item.data.year;
      }
    });

    const insight = `The highest growth rate was observed in the year ${yearWithMaxGrowth} with a percentage yield of ${maxGrowthRate}%.`;
    const cta = `Consider analyzing the factors contributing to the high growth rate in ${yearWithMaxGrowth} to replicate success in other years.`;

    setInsight(insight);
    setCta(cta);
  };

  const getOption = () => {
    const years = data.map((item) => item.data.year);
    const totalYield = data.map((item) => item.data.total_yield);
    const cumulativeYield = data.map((item) => item.data.cumulative_yield);
    const percentageYield = data.map((item) => item.data.percentage_yield);

    return {
      title: {
        text: '',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Total Yield', 'Cumulative Yield', 'Percentage Yield'],
      },
      xAxis: {
        type: 'category',
        data: years,
      },
      yAxis: [
        {
          type: 'value',
          name: 'Yield (tons)',
          position: 'left',
        },
        {
          type: 'value',
          name: 'Percentage Yield (%)',
          position: 'right',
          axisLine: {
            lineStyle: {
              color: 'red',
            },
          },
        },
      ],
      series: [
        {
          name: 'Total Yield',
          type: 'line',
          data: totalYield,
          yAxisIndex: 0,
        },
        {
          name: 'Cumulative Yield',
          type: 'line',
          data: cumulativeYield,
          yAxisIndex: 0,
        },
        {
          name: 'Percentage Yield',
          type: 'line',
          data: percentageYield,
          yAxisIndex: 1,
        },
      ],
    };
  };

  return (
    <div className="growth-rate-chart-container" style={{ width: "100%", height: "100%" }}>
      <div style={{ textAlign: "end", marginRight: "25px" }}>
        
      </div>
      <div className="chart-container" style={{ height: "70%", width: "100%" }}>
        {graphType !== "table" ? (
          <ReactECharts option={getOption()} style={{ height: "100%", width: "100%" }} />
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Total Yield</th>
                  <th>Cumulative Yield</th>
                  <th>Percentage Yield</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.data.year}</td>
                    <td>{item.data.total_yield}</td>
                    <td>{item.data.cumulative_yield}</td>
                    <td>{item.data.percentage_yield}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="insight-cta-container" style={{ marginTop: "20px", textAlign: "center" }}>
        <p><strong>Insight:</strong> {insight}</p>
        <p><strong>Call to Action:</strong> {cta} <a href="#action-link">click here</a></p>
      </div>
    </div>
  );
};

export default GrowthRateChart;
