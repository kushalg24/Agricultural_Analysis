

// export default AnalyticQueries;
import React, { useEffect, useState } from "react";
import "./analyticQueries.css";
import axios from "axios";
import searchIcon from "../../../images/search.png";
import tag from "../../../images/Tags.png";
import sortDescending from "../../../images/sortDescending.png";
import JsonTable from "../setup-configuration-form/search-palette/JsonTable";

const data = {
  "analyticalThemes": {
    "geographicalInformation": {
      "themes": [
        { "name": "Location Details", "description": "Information about the state, district, mandal, and village." },
        { "name": "Geospatial Data", "description": "Analysis of land geolocation data including geojson, bbox, and images." }
      ]
    },
    "cropInformation": {
      "themes": [
        { "name": "Crop Details", "description": "Details about crop season, types, and age of crops." }
      ]
    },
    "landOwnershipDetails": {
      "themes": [
        { "name": "Land Ownership", "description": "Details about land ownership, survey numbers, and cultivated land." },
        { "name": "Land Size", "description": "Information about the size of land in acres." }
      ]
    },
    "yieldProduction": {
      "themes": [
        { "name": "Crop Yield", "description": "Analysis of crop yield in tons and moisture content." },
        { "name": "Annual Production", "description": "Yearly production details and seasonal variations." }
      ]
    },
    "statisticalMeasures": {
      "themes": [
        { "name": "Yield Statistics", "description": "Statistical analysis of yield data including min, max, mean, and standard deviation." },
        { "name": "Data Reliability", "description": "Assessment of data reliability based on sample count and no-data count." }
      ]
    },
    "temporalInformation": {
      "themes": [
        { "name": "Time-Based Analysis", "description": "Temporal trends in crop production and yield data." }
      ]
    }
  },
  analyticalParameters: {
    bigQueryDataAnalysis: {
      parameters: [
        { name: "Total Rows", value: 5000000 },
        { name: "Total Size (Bytes)", value: 524288000 },
        { name: "Average Table Size (Bytes)", value: 131072000 },
        { name: "Average Rows per Table", value: 1250000 },
        { name: "Query Execution Time (ms)", value: 200 }
      ]
    },
    costAnalysis: {
      parameters: [
        { name: "Total Compute Cost", value: 321.25 },
        { name: "Total Storage Cost", value: 231.35 },
        { name: "Total Cost", value: 552.60 },
        { name: "Average Cost per Project", value: 276.30 },
        { name: "Cost Over Budget", value: 50.75 }
      ]
    },
    cloudStorage: {
      parameters: [
        { name: "Total Size (Bytes)", value: 157286400 },
        { name: "Total Object Count", value: 1500 },
        { name: "Average Object Size (Bytes)", value: 104857.6 },
        { name: "Storage Cost (USD)", value: 80.50 },
        { name: "Data Retrieval Time (ms)", value: 120 }
      ]
    }
  }
};
const analyticQueriesData = [
  {
    "Mobius_PI_id":"",
    "Mobius_PI_state":"",
    "Mobius_PI_district":"",
    "Mobius_PI_mandal":"",
    "Mobius_PI_village":"",
    "Mobius_PI_crop_season":"",
    "Mobius_PI_crop_types":"",
    "Mobius_PI_annual":"",
    "Mobius_PI_year":"",
    "Mobius_PI_survey_no":"",
    "Mobius_PI_land_size_in_acres":"",
    "Mobius_PI_owner_name":"",
    "Mobius_PI_landGeojson":"",
    "Mobius_PI_bbox":"",
    "Mobius_PI_geo_tiff_img":"",
    "Mobius_PI_land_img":"",
    "Mobius_PI_min":"",
    "Mobius_PI_max":"",
    "Mobius_PI_mean":"",
    "Mobius_PI_stDev":"",
    "Mobius_PI_sampleCount":"",
    "Mobius_PI_noDataCount":"",
    "Mobius_PI_timeStamp":"",
    "Mobius_PI_yield_in_tons":"",
    "Mobius_PI_moisture_content_in_percentage":"",
    "Mobius_PI_cultivated_land":"",
    "Mobius_PI_age_of_crop_in_months":""
  }
];

const AnalyticQueries = () => {
  const [activeTab1, setActiveTab1] = useState('level1');

  const handleTabClick = (tab1) => {
    setActiveTab1(tab1);
  };

  const [parameters, setParameters] = useState([]);
  async function getParametersFromSchema() {
    try {
      const response = await axios.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65b1fd361e40c81a6bcc794d/instances/list");
      if (response.status === 200) {
        setParameters(Object.keys(response.data.entities[0]));
      }
    } catch (err) {
      console.log("err", err);
    }
  }

  useEffect(() => {
    getParametersFromSchema();
  }, []);

  const keys = Object.keys(data.analyticalParameters.bigQueryDataAnalysis.parameters[0]);

  const keys1 = Object.keys(analyticQueriesData[0]);



  return (
    <>
      <div className="headingAqs">
        <div className="tabs1">

           <div
            className={activeTab1 === 'level2' ? 'active-tab1' : 'tab1'}
            onClick={() => handleTabClick('level2')}
          >
            Analytical Themes
          </div>
          <div
            className={activeTab1 === 'level1' ? 'active-tab1' : 'tab1'}
            onClick={() => handleTabClick('level1')}
          >
                Analytical Parameters
        
          </div>
         
        </div>

        <div className="tab1-content analyticsQueriesCardContainer scrollbar">
          {activeTab1 === 'level2' && (
            <div className="content1 scrollbar">
              {Object.keys(data.analyticalThemes).map((category, idx) => (
                <div key={idx}>
               {/* {category} */}
                  <div className="allCardsContainerAqs">
                    
                    {data.analyticalThemes[category].themes.map((theme, index) => (

                      <>
                      <div key={index} className={`cardContainerAqs ${index % 2 !== 0 ? 'even-bg' : ''}`}>
                     {theme.name} 
                       
                      </div>
                    <p style={{color:"grey"}}> - {theme.description}</p>
                      </>
                      
                      
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab1 === 'level1' && (

            
            // <div className="content1 scrollbar">
            //   {Object.keys(data.analyticalParameters).map((category, idx) => (
            //     <div key={idx}>
            //       <h3>{category}</h3>
            //       <div className="allCardsContainerAqs">
            //         {data.analyticalParameters[category].parameters.map((param, index) => (
            //           <div key={index} className={`cardContainerAqs ${index % 2 !== 0 ? 'even-bg' : ''}`}>
            //             <h4>{param.name}</h4>
            //             <p>{param.value}</p>
            //           </div>
            //         ))}
            //       </div>
            //     </div>
            //   ))}
            // </div>

            <div className="content1 scrollbar">
            {/* Content for Level 2 tab */}
            <div className="allCardsContainerAqs">
          {keys1.map((query, index) => (
            <div key={index} className={`cardContainerAqs ${index % 2 !== 0 ? 'even-bg' : ''}`}>
              {query}
            </div>
          ))}
        </div>
          </div>



          )}
        </div>
      </div>
    </>
  );
};

export default AnalyticQueries;
