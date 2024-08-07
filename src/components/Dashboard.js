


import "../styles/Dashboard.css";
import "../styles/DashboardModal.css";
import { Component, useEffect, useState } from "react";
import DashboardModal from "./DashboardModal";
import AppContext from "../context/AppContext/AppContext";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SidePanelForDahBoard from "./SidePanelForDashBoard";
import Cost_yoy from "../context/AppContext/Costyoy";
import Cost_mom from "../context/AppContext/Cost_mom";
import Cost_qoq from "../context/AppContext/Cost_qoq";
import Costconsumption from "../context/AppContext/Costconsumption";
import StorageGraphYearly from "../context/AppContext/StorageGraphYearly";
import StorageGraph_monthly from "../context/AppContext/Storagegraph_month";
import StorageGraph_Daily from "../context/AppContext/Storage_daily";
import CustomStepper from "./StepperComp";
import iceBerg from "../images/iceberg6.jpg";
import arrowimage1 from "../images/arrowimage1.png";
import arrowimage2 from "../images/arrowimage2.png";
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import dragIcon from "../images/dragIcon.svg";
import Localbase from 'localbase';
import { Responsive, WidthProvider } from 'react-grid-layout';
import TableComponent from "./main-form-container/analytics-setup-form/TableComponent";
import Cookies from 'js-cookie';
import Bigquery_cost_mom from "../context/AppContext/Bigquery_cost_mom";
import Bigquery_cost_yoy from "../context/AppContext/Bigquery_cost_yoy";
import Bigquery_cost_daily from "../context/AppContext/Bigquery_cost_daily";
import OpenAI_Cost_MoM from "../context/AppContext/OpenAI_Cost_MoM";
import OpenAI_Cost_Yearly from "../context/AppContext/OpenAI_Cost_Yearly";
import OpenAI_Cost_Daily from "../context/AppContext/OpenAI_Cost_Daily";
import Openai_RoleBasedUtilization_mom from "../context/AppContext/Openai_RoleBasedUtilization_mom";
import Openai_RoleBasedUtilization_yoy from "../context/AppContext/Openai_RolebasedUtilization_yoy";
import Openai_RoleBasedUtilization_daily from "../context/AppContext/Openai_rolebased_daily";
import SnowflakeStorageConsumption_mom from "../context/AppContext/snowflake_storage_monthly";
import SnowflakeStorageConsumption_yoy from "../context/AppContext/snowflakestorage_yoy";
import SnowflakeStorageConsumption_daily from "../context/AppContext/snowflakestorage_daily";
import SnowflakeProductCategorization_mom from "../context/AppContext/snowflake_productcategory_mom";
import SnowflakeProductCategorization_yoy from "../context/AppContext/snowflake_product_yearly";
import SnowflakeCostsAppropriation_yoy from "../context/AppContext/snowflake_cost_yoy";
import SnowflakeCostsAppropriation_daily from "../context/AppContext/snowflake_cost_daily";
import SnowflakeCostsAppropriation_mom from "../context/AppContext/snowflake_cost_mom";
import OktaSystemLogsTable from "../context/AppContext/oktalogs";
import RoleBasedUtilizationChart_okta_daily from "../context/AppContext/okta_role";
import MapPage from "../agriMap/pages/MapPage"


import TotalYeild from "../components/agri_charts/TotalYeild"

import TotalYieldByCropTypeChart from "../components/agri_charts/TotalYieldByCropTypeChart"



import TotalYieldByDistrictChart from "../components/agri_charts/TotalYieldByDistrictChart"

import TotalYieldByLandSizeChart from "../components/agri_charts/TotalYieldByLandSizeChart"

import TotalYieldByCropSeasonChart from "../components/agri_charts/TotalYieldByCropSeasonChart"

import YieldByCropSeasonChart from "../components/agri_charts/YieldByCropSeasonChart"



import YieldByCropTypeChart from "../components/agri_charts/YieldByCropTypeChart"

import AverageYieldByCropTypeChart from "../components/agri_charts/AverageYieldByCropTypeChart"

import AverageMoistureContentChart from "../components/agri_charts/AverageMoistureContentChart"

import AverageLandSizeChart from "../components/agri_charts/AverageLandSizeChart"
import YieldByCropTypeChart2 from "../components/agri_charts/YieldByCropTypeChart2"

import GrowthRateChart from "../components/agri_charts/RateOfGrowthForYieldChart"




const ResponsiveGridLayout = WidthProvider(Responsive);






function Dashboard({ dashboardChoice }) {
  const db = new Localbase('db');
  // set display for dashboard modal
  const [modalDisplay, setModalDisplay] = useState(false);
  // set which graph will be displayed in modal
  const [showSummary, setShowSummary] = useState(true);
  const [selectSummary, setSelectsummary] = useState("");
  const [showLicences, setShowLicences] = useState(false);
  const [dashboardModalGraph, setDashboardModalGraph] = useState(0);
  let {
    dashboardState,
    selectedAQobject,
    setSelectedAQobject,
    aqArray,
    aqStylesPayload,
    setAqstylesPayload,
    setShowLoading1
  } = useContext(AppContext);

  const [graphindex, setgraphindex] = useState();

  // function to toggle modal
  function displayModal(index) {
    setModalDisplay(true);
    setgraphindex(index);
    setDashboardModalGraph("PolarBarChart");
  }




  let componets = {
    Cost: [
      { graphname: "Daily Costs", Con: Cost_yoy },
      { graphname: "Consumption Costs", Con: Costconsumption },
      { graphname: "Quaterly Costs", Con: Cost_qoq }
     
    ],
    Usage: [
      { graphname: "Storage Consumption", Con: StorageGraphYearly },
      { graphname: "Storage Consumption monthly", Con: StorageGraph_monthly },
      { graphname: "Storage Consumption Daily", Con: StorageGraph_Daily },
    ],
    'BigQuery Costs Appropriation': [
      { graphname: "Cost Consumption yearly", Con: Bigquery_cost_yoy},
      { graphname: "Costs Consumption monthly", Con: Bigquery_cost_mom },
      { graphname: "Costs Consumption Daily", Con: Bigquery_cost_daily },
    ],
    'BigQuery Storage Consumption':[
      { graphname: "Storage Consumption yearly", Con: Bigquery_cost_yoy },
      { graphname: "Storage Consumption Daily", Con: Bigquery_cost_daily },
      { graphname: "Storage Consumption monthly", Con: Bigquery_cost_mom},
   ],
    'OpenAI Costs Appropriation':[
      { graphname: "Costs Consumption yearly", Con: OpenAI_Cost_Yearly},
      { graphname: "Costs Consumption Daily", Con:OpenAI_Cost_Daily },
      { graphname: "Costs Consumption monthly", Con:OpenAI_Cost_MoM},
   ],
   'OpenAI Role based Utilization':[
    { graphname: "RoleBasedUtilization yearly", Con: Openai_RoleBasedUtilization_yoy},
    { graphname: "Daily RoleBasedUtilization", Con:Openai_RoleBasedUtilization_daily },
    { graphname: "RoleBasedUtilization monthly", Con:Openai_RoleBasedUtilization_mom},
 ],

 'Snowflake Storage Consumption':[
  { graphname: "Storage Consumption yearly", Con: SnowflakeStorageConsumption_yoy },
  { graphname: "Storage Consumption monthly", Con: SnowflakeStorageConsumption_mom },
  { graphname: "Storage Consumption Daily", Con: SnowflakeStorageConsumption_daily },
],

'Snowflake Product Categorization':[
  { graphname: "Product Categorization yearly", Con: SnowflakeProductCategorization_yoy },
  { graphname: "Product Categorization monthly", Con: SnowflakeProductCategorization_mom },
  { graphname: "Product Categorization Daily", Con: SnowflakeStorageConsumption_daily },
],
'Snowflake Costs Appropriation':[
  { graphname: "Costs Consumption yearly", Con: SnowflakeCostsAppropriation_yoy},
  { graphname: "Costs Consumption Daily", Con:SnowflakeCostsAppropriation_daily },
  { graphname: "Costs Consumption monthly", Con:SnowflakeCostsAppropriation_mom},
]
,
'OKTA system logs':[
  { graphname: "System Logs", Con: OktaSystemLogsTable}
 
]
,

'OKTA Role based Utilization':[
{ graphname: "RoleBasedUtilization daily", Con: RoleBasedUtilizationChart_okta_daily},


],
'Sentinal Hub Api Yield Estimation':[
{ graphname: "Total Yield by Year and Crop Season", Con: TotalYeild},

{ graphname: "Total Yield by Year, Crop Season, and Crop Type", Con: TotalYieldByCropTypeChart},

{ graphname: "Total Yield by Year, District, and Crop Season", Con: TotalYieldByDistrictChart},


{ graphname: "Total Yield by Land Size Category and Year", Con: TotalYieldByLandSizeChart},


{ graphname: "Total Yield by Crop Season and District", Con: TotalYieldByCropSeasonChart},

{ graphname: "Yield by Year and Crop Season", Con: YieldByCropSeasonChart},


{ graphname: "Total Yield by Year and Crop Type", Con: YieldByCropTypeChart},
{ graphname: "Average Yield by Crop Type", Con: AverageYieldByCropTypeChart},





]
,
'Sentinal Hub Api Moisture Content':[
{ graphname: "Average Moisture Content by Year and Crop Type", Con: AverageMoistureContentChart},


],
'Sentinal Hub Api Average Land Size':[
{ graphname: "Average Land Size For Each Crop Type", Con: AverageLandSizeChart},


],
'Sentinal Hub Api YoY Yield Growth by Crop Type':[
{ graphname: "Yield by Crop Type Over the Years", Con: YieldByCropTypeChart2},

{ graphname: "Rate of Growth for Yield", Con: GrowthRateChart},


],
  };
  
  
  

  console.log("Selectsummary",selectSummary)







  const navigate = useNavigate();
  const [graphlist, setgraphlist] = useState([]);
  const [showIceberg, setShowIceberg] = useState(true);
  const [expandSideBar, setExpandSideBar] = useState(false);

  useEffect(() => {
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmOGYxNjhmLTNmZjYtNDZlMi1iMTJlLWE2YTdlN2Y2YTY5MCJ9.eyJwcm9maWxlVXJsIjoid3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2F2aW5hc2gtcGF0ZWwtcm9ja3oiLCJyZWNlbnRfc2Vzc2lvbiI6Ik5BIiwic3ViIjoiZ2FpYW4uY29tIiwicGFyZW50VGVuYW50SWQiOiJOQSIsImNvbG9yIjoiYmxhY2siLCJ1c2VyX25hbWUiOiJzaGFoYWppLmthZGFtQGdhaWFuc29sdXRpb25zLmNvbSIsImlzcyI6ImdhaWFuLmNvbSIsImlzQWRtaW4iOnRydWUsInBsYXRmb3JtSWQiOiI2NGUyMDgwNTM4Yzk0OTdjMWZlOGUyN2UiLCJ1c2VyTmFtZSI6InNoYWhhamkua2FkYW1AZ2FpYW5zb2x1dGlvbnMuY29tIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9NQVJLRVRQTEFDRV9VU0VSIl0sImNsaWVudF9pZCI6ImdhaWFuIiwic2NvcGUiOlsidHJ1c3QiLCJyZWFkIiwid3JpdGUiXSwidGVuYW50SWQiOiI2NGUxZmQzZDE0NDNlYjAwMDE4Y2MyMzEiLCJsb2dvIjoid3d3Lmdvb2dsZS5jb20vaW1hZ2VzLiIsImV4cCI6MTcwOTY3NTI4NywianRpIjoiMTEzODBiOGYtMzA4OS00NTMwLThjMWEtZDkzNTgzNTIxOTMwIiwiZW1haWwiOiJhcHBzQGdhaWFuc29sdXRpb25zLmNvbSJ9.SMolskYsb4NnmoEMxoiBeoerdpfW2K3jaH7j67uEAPhCwka_Ci1y_ZELsAyz3nkCV3Fo-lPhTp8OCaGBfytWvrWGs8AGXq8uiUlxXmQpvBts7eff1XRMQCGXK1F9b0L_T8JqAEBzPWgHdt4G5bTE7jJuzfzfT86dW_4lOAdR33iooMvmnc6iKF4mipsFSwIp6jQEYY8tpYta_-psSWK_wcjp8ypwR9tNfTZ8bpKlSNKniMR_xtEwB0KGCxEmNns_NorS5Q9xj9-gV2ShgTVmaMk7z-mJx1GIsIqItkAFej1I_p1mYWk7YlcaWe6GZCXft4Xjij_nbdZv6KLh2rWCzQ';
    Cookies.set('token', token, { expires: 7, domain:".aidtaas.com"}); // expires in 7 days
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const aqlist = await axios.get(
          "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65523f7a060abb4a5ff3c0c4/instances/list?size=100"
        );

        const filteredBqData =
          aqlist.data.entities.length > 0 &&
          aqlist.data.entities.filter((data) => aqArray.includes(data.BQ_Id));

        let filterdata = [];
        filteredBqData.map((data) => {
          filterdata.push({
            titile: data.BQ_Name,
            description: data.BQ_Description,
            urls: data.BA_App_Urls[0],
            action:data.BQ_Action
          });
        });
        setgraphlist(filterdata);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [aqArray]);

  const [randomData, setRandomData] = useState(generateRandomData());
  function generateRandomData() {
    const platforms = ['Azure', 'Bigquery', 'Snowflake', 'Open AI'];
    const platform = platforms[Math.floor(Math.random() * platforms.length)];
    let visiblePercentage = Math.floor(Math.random() * 45) + 35;
    let hiddenPercentage = 100 - visiblePercentage;
    while (hiddenPercentage <= visiblePercentage || hiddenPercentage < 55) {
        visiblePercentage = Math.floor(Math.random() * 45) + 35;
        hiddenPercentage = 100 - visiblePercentage;
    }
    const formattedPlatform =
      platform.charAt(0).toUpperCase() + platform.slice(1);
    const initialParagraph = `${formattedPlatform}, data consumption is ${hiddenPercentage}% hidden and ${visiblePercentage}% visible. Balancing both is essential for optimal utilization.`;
    const paragraph1 = (
      <>
        <p id="line1" style={{textAlign: "center"}}>
          <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>{`${formattedPlatform} : `}</span>
           Actual data consumption reveals 
          <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>{` ${visiblePercentage}% `}</span>
           visible in the forefront, while concealed data amounts to 
          <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>{` ${hiddenPercentage}% `}</span>
        </p>
        <p id="line2" style={{ textAlign: "center"}}>
          emphasizing the importance of strategically minimizing hidden utilization for optimal efficiency
        </p>
      </>
    );    
    return {
      hidden: hiddenPercentage,
      visible: visiblePercentage,
      paragraph: initialParagraph,
      formattedPlatform:formattedPlatform,
      paragraph1:paragraph1
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomData(generateRandomData());
    }, 20000);
    return () => clearInterval(intervalId);
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); 
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="Dashboard">
      <SidePanelForDahBoard
        expandSideBar={expandSideBar}
        setExpandSideBar={setExpandSideBar}
        modalDisplay={modalDisplay}
        setShowSummary={setShowSummary}
        setSelectsummary={setSelectsummary}
        setShowLicences={setShowLicences}
        setShowIceberg={setShowIceberg}
      />
      <div className="dasboard-button">
        <div className="dashboard-title">
          {showSummary ? (selectSummary==="Insights"?"":selectSummary) : aqStylesPayload?.analyticsStyleName}
        </div>

        <div className="dashboard-top-row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="dashboard-top-left-column">
            {showIceberg ? (
              <>
              <MapPage/>
                {/* <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    position: "relative",
                    flexDirection: "column",
                  }}
                >         
                  <div className="typewriter" key={randomData.formattedPlatform}>
                    {randomData.paragraph1}
                  </div>
                  <div style={{ position: "relative" }} key={randomData.visible}>
                    <div className="animatedDiv" style={{position:"absolute",top:"30%",left:"58%"}}>
                      <img src={arrowimage1} alt="arrowimage" style={{height:"44px",width:"125px"}}/>
                         <span style={{position:"absolute",top:"25%",left:"63%",color:"white"}}>{randomData.visible}%</span>
                    </div>
                    <div className="animatedDiv" style={{position:"absolute",top:"70%", left:"55%",backgroundColor:"#E1EBF4"}}>
                      <img src={arrowimage2} alt="arrowimage" style={{height:"50px",width:"125px"}}/>
                         <span style={{position:"absolute",top:"32%",left:"63%",color:"white"}}>{randomData.hidden}%</span>
                    </div>
                    
                    <img
                      src={iceBerg}
                      alt="Iceberg"
                      style={{ width: "70%", height: "500", marginLeft: "15%" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "80px",
                  }}
                >
                  <h4 style={{ marginBottom: "30px" }}>How it works?</h4>

                  <div>
                    <CustomStepper />
                  </div>
                </div> */}
              </>
            ) : (
              <>
                {showSummary &&
                  !showLicences &&
                  <ResponsiveGridLayout
                  draggableHandle=".drag-handle"
                  cols={{ lg: 14, md: 14, sm: 1, xs: 1, xxs: 1 }}
                  breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                  >
                     
                  {componets[selectSummary]?.map(({ graphname, Con }, index) =>
                    graphname.substring(0, 4).toLowerCase() === "cost" ? (
                   <></>
                    ) : (
                      <div
                        className="gridchild"
                        key={index.toString()}
                        style={{ cursor: "pointer"}}
                        data-grid={{ x: index % 2 === 0 ? 0 : 6, y: Math.floor(index / 2) * 7, w: index==0?14:(index%2==0?6:8), h: 3 ,minH: 2, minW: 5}}
                      >
                        <span id="dragme" className='drag-handle'><img src={dragIcon} alt="dragIcon"/></span>
                        <div
                          className="graph-title"
                          style={{
                           
                            fontSize: "18px",
                            fontWeight: "500",
                          }}
                        >
                          {graphname}

                         
                        </div>
                        <div style={{width:"100%",height:"90%"}}><Con aqId="6560a2dd5d14bf53cde1922b"/>
                        </div>
                       
                      </div>
                    )
                  )}
                  </ResponsiveGridLayout>
                  }


{!showSummary &&
                  !showLicences &&
                  <ResponsiveGridLayout
                  draggableHandle=".drag-handle"
                  cols={{ lg: 14, md: 14, sm: 1, xs: 1, xxs: 1 }}
                  breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                  >
                     
                  {componets[selectSummary]?.map(({ graphname, Con }, index) =>
                  
                      <div
                        className="gridchild"
                        key={index.toString()}
                        style={{ cursor: "pointer"}}
                        data-grid={{ x: index % 2 === 0 ? 0 : 6, y: Math.floor(index / 2) * 7, w: index==0?14:(index%2==0?6:8), h: 3 ,minH: 2, minW: 5}}
                      >
                        <span id="dragme" className='drag-handle'><img src={dragIcon} alt="dragIcon"/></span>
                        <div
                          className="graph-title"
                          style={{
                           
                            fontSize: "18px",
                            fontWeight: "500",
                          }}
                        >
                          {graphname}

                         
                        </div>
                        <div style={{width:"100%",height:"90%"}}><Con aqId="6560a2dd5d14bf53cde1922b"/>
                        </div>
                       
                      </div>
                    
                  )}
                  </ResponsiveGridLayout>
                  }
              </>
            )}
          </div>
        </div>
      </div>

      {modalDisplay && (
        <DashboardModal
          dashboardModalGraph={dashboardModalGraph}
          graphindex={graphindex}
          setgraphindex={setgraphindex}
          setModalDisplay={setModalDisplay}
          graphlist={graphlist}
        />
      )}
    </div>
  );
}

export default Dashboard;


