import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactECharts from 'echarts-for-react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const TotalYieldByCropTypeChart = () => {
  const [chartData, setChartData] = useState({ years: [], dataByCropType: {} });
  const [graphType, setGraphType] = useState("bar");
  const [insight, setInsight] = useState("");
  const [cta, setCta] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: 'get',
        url: 'https://ig.gov-cloud.ai/pi-get-data-quarkus/v1.0/bigQuery/66b1f9edb7ea59463e796644/data?size=10000',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3Ny1NUVdFRTNHZE5adGlsWU5IYmpsa2dVSkpaWUJWVmN1UmFZdHl5ejFjIn0.eyJleHAiOjE3MjEwNjUwNjgsImlhdCI6MTcyMTAyOTA2OCwianRpIjoiNDU2OWE4NjAtNTRlZS00ODljLTkxZGEtNGQ0NzNjZjk4ODBjIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmtleWNsb2FrLnN2Yy5jbHVzdGVyLmxvY2FsOjgwODAvcmVhbG1zL21hc3RlciIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2NjE1NmNhMS0xY2ViLTQxZjctOTE0OC0wY2EwNGNjMzI1Y2MiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJIT0xBQ1JBQ1kiLCJzZXNzaW9uX3N0YXRlIjoiNjA2MGU3Y2UtZGZhNS00ODhiLWJlZWYtYTA1NGZkNzQ4ZmViIiwibmFtZSI6Ik1vYml1cyBrdXNoYWwuZ0Btb2JpdXNkdGFhcy5haSIsImdpdmVuX25hbWUiOiJNb2JpdXMiLCJmYW1pbHlfbmFtZSI6Imt1c2hhbC5nQG1vYml1c2R0YWFzLmFpIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicGFzc3dvcmRfdGVuYW50X2t1c2hhbC5nQG1vYml1c2R0YWFzLmFpIiwiZW1haWwiOiJwYXNzd29yZF90ZW5hbnRfa3VzaGFsLmdAbW9iaXVzZHRhYXMuYWkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIvKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1tYXN0ZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiSE9MQUNSQUNZIjp7InJvbGVzIjpbIkhPTEFDUkFDWV9VU0VSIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI2MDYwZTdjZS1kZmE1LTQ4OGItYmVlZi1hMDU0ZmQ3NDhmZWIiLCJ0ZW5hbnRJZCI6IjY2MTU2Y2ExLTFjZWItNDFmNy05MTQ4LTBjYTA0Y2MzMjVjYyJ9.VYZcPeujLulFYl1ZOpdSXhafpRAM6qmWK48le-g30m9DGyfxsHqBSVERxBa1IqK5jTareyXvXWo2nVBCC67x_P6OfqtZRcMTUCaWQ3x_m6soScI6oCZBdEXjLPR8z_40ihhckO1aIdcqmI1ULlhrp_obPs00VdvKnXM8u9qZIhaOvb79-xYGx8CWd6LY2Foe_J_sW8YjRwEMeeVucqWBVdfJVpJ_gyuQgfigfV78ufjaKyIjy-FZ2t-ZGx5iT-ZsIaxK8eUqStljyQzDF5vZl3ZtJrdDgPZPDgU0ntbllSFSDMPt6i2BgvqQWh_ry4IV8mE2pPFYDicF3Rabzz982w'
        }
      };

      try {
        const response = await axios(config);
        const entities = response.data.model.entities;

        const years = [];
        const dataByCropType = {};

        entities.forEach(item => {
          const { year, total_yield, crop_types } = item.data;

          if (!years.includes(year)) {
            years.push(year);
          }

          if (!dataByCropType[crop_types]) {
            dataByCropType[crop_types] = [];
          }

          dataByCropType[crop_types].push({ year, total_yield });
        });

        setChartData({ years, dataByCropType });

        // Generate insights and CTA
        generateInsights(dataByCropType);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const generateInsights = (dataByCropType) => {
    let maxTotalYield = 0;
    let cropWithMaxYield = "";

    Object.keys(dataByCropType).forEach(cropType => {
      const totalYield = dataByCropType[cropType].reduce((sum, item) => sum + item.total_yield, 0);

      if (totalYield > maxTotalYield) {
        maxTotalYield = totalYield;
        cropWithMaxYield = cropType;
      }
    });

    const insight = `${cropWithMaxYield} has the highest total yield.`;
    const cta = `Consider focusing on ${cropWithMaxYield} for further yield optimization.`;

    setInsight(insight);
    setCta(cta);
  };

  const getOption = () => {
    const series = Object.keys(chartData.dataByCropType).map(cropType => ({
      name: cropType,
      type: 'bar',
      data: chartData.dataByCropType[cropType].map(item => item.total_yield),
    }));

    return {
      title: {
        text: '',
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: Object.keys(chartData.dataByCropType),
      },
      xAxis: {
        type: 'category',
        data: chartData.years,
      },
      yAxis: {
        type: 'value',
      },
      series,
    };
  };

  return (
    <div className="total-yield-by-crop-type-chart-container" style={{ width: "100%", height: "100%" }}>
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
                  {Object.keys(chartData.dataByCropType).map((cropType, index) => (
                    <th key={index}>{cropType}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {chartData.years.map((year, yearIndex) => (
                  <tr key={yearIndex}>
                    <td>{year}</td>
                    {Object.keys(chartData.dataByCropType).map((cropType, cropIndex) => (
                      <td key={cropIndex}>
                        {chartData.dataByCropType[cropType].find(item => item.year === year)?.total_yield || '-'}
                      </td>
                    ))}
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

export default TotalYieldByCropTypeChart;
