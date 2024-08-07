import "./IntegrationSetup.css";
import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import AppContext from "../../../context/AppContext/AppContext";
import axios from "axios";
import { db } from "../../../App";
import { useLocation } from "react-router-dom";
import { MainformContext } from "../main-from-header/MainFormHeader";
import { useDispatch, useSelector } from "react-redux";
import { modifyAndPostData } from "../../../redux/inputslice";
import axioos from "../../../axiosInstance/axioos";
const defaultappState1 ={
  "endpoints": [
      {
          "id": "Get_Source_Info",
          "name": "Get_Source_Info",
          "children": [
              {
                  "id": "GetBucketsList",
                  "name": "GetBucketsList",
                  "children": [],
                  "selectedOutputParams": [
                      "kind",
                      "selfLink",
                      "id",
                      "name"
                  ],
                  "selectedWorkflows": [
                      "purge workflow"
                  ],
                  "description": "Obtain information about a specific bucket in Google Cloud Storage, including its metadata, access controls, and other properties.",
                  "selected": true,
                  "inputParams": {
                      "project": "8213",
                      "maxResults": 10,
                      "prefix": "er",
                      "pageToken": "hjiue-dj832-1j1i",
                      "projection": "full"
                  },
                  "outputParams": [
                      "kind",
                      "selfLink",
                      "id",
                      "name",
                      "projectNumber",
                      "metageneration",
                      "location",
                      "storageClass",
                      "etag",
                      "defaultEventBasedHold",
                      "timeCreated",
                      "updated",
                      "encryption",
                      "website",
                      "owner",
                      "logging",
                      "versioning",
                      "autoclass",
                      "retentionPolicy",
                      "objectRetention",
                      "billing",
                      "locationType",
                      "rpo"
                  ]
              }
          ],
          "selectedOutputParams": [
              "source",
              "callerSuppliedUserAgent",
              "granted"
          ],
          "selectedWorkflows": [
              "purge workflow"
          ],
          "description": "API description not found",
          "selected": true,
          "inputParams": {
              "projectId": "8783",
              "datasetId": "893189",
              "maxResults": 67,
              "pageToken": "ijdw-29892j-2i1"
          },
          "outputParams": [
              "source",
              "callerSuppliedUserAgent",
              "granted",
              "accessType",
              "permission",
              "user",
              "ingestedDate",
              "resourceType",
              "serviceName",
              "severity",
              "accessTimeStamp",
              "id"
          ]
      },
      {
          "id": "GetdatasetsList",
          "name": "GetdatasetsList",
          "children": [],
          "selectedOutputParams": [],
          "selectedWorkflows": [],
          "description": "Retrieve information about a specific dataset in Google BigQuery, including details about its schema, tables, and other configurations.",
          "selected": false,
          "inputParams": {
              "projectId": "your_project_id",
              "all": true,
              "filter": "your_filter_criteria",
              "maxResults": 67,
              "pageToken": "your_page_token"
          },
          "outputParams": [
              "kind",
              "etag",
              "nextPageToken",
              "datasets"
          ]
      },
      {
          "id": "GetTablesList",
          "name": "GetTablesList",
          "children": [],
          "selectedOutputParams": [],
          "selectedWorkflows": [],
          "description": "Retrieve details about a specific table in Google BigQuery, including its schema, size, and other relevant information.",
          "selected": false,
          "inputParams": {
              "projectId": "8783",
              "datasetId": "893189",
              "maxResults": 67,
              "pageToken": "ijdw-29892j-2i1"
          },
          "outputParams": [
              "kind",
              "etag",
              "nextPageToken",
              "tables",
              "totalItems"
          ]
      }
  ]
}
const defaultapidata=[
    {
        "id": "Get_Source_Info",
        "name": "Get_Source_Info",
        "children": [
            {
                "id": "GetBucketsList",
                "name": "GetBucketsList",
                "children": [],
                "selectedOutputParams": [
                    "selfLink",
                    "id",
                    "kind"
                ],
                "selectedWorkflows": [
                    "purge workflow"
                ],
                "description": "Obtain information about a specific bucket in Google Cloud Storage, including its metadata, access controls, and other properties.",
                "selected": true,
                "inputParams": {
                    "project": "8213",
                    "maxResults": 10,
                    "prefix": "er",
                    "pageToken": "hjiue-dj832-1j1i",
                    "projection": "full"
                },
                "outputParams": [
                    "kind",
                    "selfLink",
                    "id",
                    "name",
                    "projectNumber",
                    "metageneration",
                    "location",
                    "storageClass",
                    "etag",
                    "defaultEventBasedHold",
                    "timeCreated",
                    "updated",
                    "encryption",
                    "website",
                    "owner",
                    "logging",
                    "versioning",
                    "autoclass",
                    "retentionPolicy",
                    "objectRetention",
                    "billing",
                    "locationType",
                    "rpo"
                ]
            }
        ],
        "selectedOutputParams": [
            "source",
            "callerSuppliedUserAgent",
            "granted",
            "accessType"
        ],
        "selectedWorkflows": [
            "purge workflow"
        ],
        "description": "API description not found",
        "selected": true,
        "inputParams": {
            "projectId": "8783",
            "datasetId": "893189",
            "maxResults": 67,
            "pageToken": "ijdw-29892j-2i1"
        },
        "outputParams": [
            "source",
            "callerSuppliedUserAgent",
            "granted",
            "accessType",
            "permission",
            "user",
            "ingestedDate",
            "resourceType",
            "serviceName",
            "severity",
            "accessTimeStamp",
            "id"
        ]
    },
    {
        "id": "GetdatasetsList",
        "name": "GetdatasetsList",
        "children": [],
        "selectedOutputParams": [
            "kind",
            "etag",
            "nextPageToken"
        ],
        "selectedWorkflows": [],
        "description": "Retrieve information about a specific dataset in Google BigQuery, including details about its schema, tables, and other configurations.",
        "selected": true,
        "inputParams": {
            "projectId": "your_project_id",
            "all": true,
            "filter": "your_filter_criteria",
            "maxResults": 67,
            "pageToken": "your_page_token"
        },
        "outputParams": [
            "kind",
            "etag",
            "nextPageToken",
            "datasets"
        ]
    },
    {
        "id": "GetTablesList",
        "name": "GetTablesList",
        "children": [],
        "selectedOutputParams": [
            "nextPageToken",
            "etag",
            "kind"
        ],
        "selectedWorkflows": [],
        "description": "Retrieve details about a specific table in Google BigQuery, including its schema, size, and other relevant information.",
        "selected": true,
        "inputParams": {
            "projectId": "8783",
            "datasetId": "893189",
            "maxResults": 67,
            "pageToken": "ijdw-29892j-2i1"
        },
        "outputParams": [
            "kind",
            "etag",
            "nextPageToken",
            "tables",
            "totalItems"
        ]
    }
]

function IntegrationSetup() {
  let {
    selectedIntegration,
    setSelectedIntegration,
    selectedPlatform,
    setPlatformSetUp,
    setapidatalist,
    apidatalist,
    appState1,
    setAppState1,
    previousIntegration,
    setSelectedNode,
    setSelectedPlatform,
    form2,
    setForm2
  } = useContext(AppContext);
  let {setIntegration,setPlatform} =useContext(MainformContext)
  const location = useLocation();
  const {data:selectedData,status:status} =useSelector(state=>state.inputslice)
  const loginData =useSelector(data=>data.loginslice)
  const searchParams = new URLSearchParams(location.search);
  const integrationName = searchParams.get('integrationName');
  const platformName =searchParams.get('platformName')
  console.log()
  console.log(integrationName,"wasi blacksheep")

  const [filteredRes, setFilteredRes] = useState("");
  const [visitedLink, setVisitedLink] = useState([]); //for visited link color change
  const [integrationData,SetIntegrationData] =useState({})
  const [selectedIntegrationLocal,setSelectedIntegrationLocal]=useState({});
  const [pipelineDetails,setPipelineDetails] =useState({
    Integration_Name:"",
    Integration_Description:"",
    inputGroups:[{
      apiName:"",
      schemaId:"",
      triggerUrl:""
    }]
  })
  const [selectedOption, setSelectedOption] = useState("Integration");
  const [inputGroups, setInputGroups] = useState([]);

    const handleAddGroup = () => {
      setInputGroups([
        ...inputGroups,
        {
          apiName: '',
          schemaId: '',
          triggerUrl: ''
        }
      ]);
    };
  
    const handleInputChange = (index, event) => {
      const { name, value } = event.target;
      const updatedGroups = [...inputGroups];
      updatedGroups[index][name] = value;
      setInputGroups(updatedGroups);
    };
  
    const handleRemoveGroup = (index) => {
      const updatedGroups = [...inputGroups];
      updatedGroups.splice(index, 1);
      setInputGroups(updatedGroups);
    };


  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const [integrationList,setIntegrationList]=useState([]);
  const [iList,setIList]=useState([]);
  const [toggleIntegration,setToggleIntegration]=useState(false);
  const dispatch =useDispatch()
  //for visited link color change
  const handleLinkVisit = (inputLink) => {
    const isPresent = visitedLink.indexOf(inputLink);
    if (isPresent === -1) {
      setVisitedLink((prev) => [...prev, inputLink]);
    }
    console.log(visitedLink);
  };


  // this updated res we need to send to post api

  // get response

//   async function AddToLocalBase(integration,payload,idx){
// try{
//   let users = await db.collection(integration).add({
// id:idx,...payload
//   })
//   console.log(users,"added or not")
// }
// catch(err){
// console.log(err,"error while adding to localbase")
// }
//   }
//   async function UpdateLocalBase(integration,payload){
//     try{
//       let previousdata =await getDataFromLocalBase(integration)
//       console.log("previousdata",{...previousdata[0],...payload})
//     let users =await db.collection(integration).doc({id:1}).update({...previousdata[0],
//       ...payload
//     })
//     }
//     catch(err){
//     console.log(err,"error while updating loacalbase")
//     }
//   }
//   async function getDataFromLocalBase(integration){
//     try {
//       let users = await db.collection(integration)
//         .get()
//       console.log('data from localbase ', users)
//       return users
//     }
//     catch(error) {
//       console.log('error fetching from localbase', error)
//       return []
//     }
//   }
  async function fetchData() {
    const APP_SCHEMA_URL =
      "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655dd4db0dcad815a07fd071/instances/list";

    try {
      const res = await axioos.get(APP_SCHEMA_URL);
      const res_data = res.data

      if (res_data.entities) {
        const filteredRes = res_data.entities.find(
          (data) => data.UserId === loginData?.UserId
        );

        if (filteredRes.id) {
          setFilteredRes(filteredRes);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {

   
    fetchData();
  }, [selectedPlatform,selectedIntegration]);


  console.log(selectedPlatform.integrations,"gaian2")

  
// useEffect(()=>{
// //     //update localbase if apidatalist changes if it is not empty
//     console.log("updatelocalbase is run","apidatalist is",apidatalist,"integration nams is ",selectedIntegration.Integration_Name,appState1)
// if(apidatalist.length!==0)UpdateLocalBase(selectedIntegration.Integration_Name,{appState1:appState1,apidatalist:apidatalist})

//   },[apidatalist])

//   useEffect(()=>{
//     //update localbase
//   //   console.log("updatelocalbase is run")
//   //skip first render
//   // initialRender.current=false
 
//     //update the  appstate1 in localbase when appstate1 is updated skip if it is empty
//   if(appState1.endpoints.length>0){
//     UpdateLocalBase(selectedIntegration.Integration_Name,{apidatalist:appState1.endpoints,appState1:appState1})}
//   // UpdateLocalBase(selectedIntegration.Integration_Name,{appState1:appState1,apidatalist:apidatalist})
//   },[appState1])


  const handleSubmit = async () => {
    try {
      const updatedData = filteredRes?.PlatformSchemas?.map((data) => {
        if (data.platform_name === selectedPlatform.platform_name) {
          // Check if the integration already exists to avoid duplicates
          if (
            data.integrations.includes(selectedIntegrationLocal?.Integration_Name)
          ) {
            // Stop the function and display an alert
            throw new Error("Integration already exists!");
          } else {
            // Include the new integration if it doesn't exist
            const updatedIntegrations = [
              ...data.integrations,
              selectedIntegrationLocal?.Integration_Name,
            ];
            return { ...data, integrations: updatedIntegrations };
          }
        }
        return data;
      });
      setToggleIntegration((prev)=>!prev);

      // Create a copy of the filteredRes state
      const updatedFilteredRes = { ...filteredRes };

      // Update the PlatformSchemas in the copied state
      if (updatedFilteredRes && updatedData) {
        updatedFilteredRes.PlatformSchemas = updatedData;
      }

      // Update the state using setFilteredRes
      setFilteredRes(updatedFilteredRes);

      // Update selectedIntegration with schemaIds and workflowIds
      const updatedIntegration = {
        ...selectedIntegrationLocal,
        schemaIds: selectedIntegrationLocal.schemaIds || [],
        workflowIds: selectedIntegrationLocal.workflowIds || [],
      };
console.log(updatedIntegration,"demo5")
      // posting data into platform api.

      const platformRes = await axios.post(
        "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e953b528ebd37244d9d4d3/instance?upsert=true",
        updatedFilteredRes
      );

      // /posting data into integration api.

      // const integrationRes = await axios.post(
      //   "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655dd2fd0dcad815a07fd06f/instance",
      //   selectedIntegration
      // );

      const integrationRes = await axios.post(
        "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655dd2fd0dcad815a07fd06f/instance",
        updatedIntegration
      );

      console.log(
        "updatedFilteredRes",
        "platformRes",
        "integrationRes",
        updatedFilteredRes,
        platformRes,
        integrationRes
      );

      // Update the integration list after submitting the form in the platform setup
      setPlatformSetUp((prevSetups) => {
        const updatedSetups = prevSetups.map((setup) => {
          if (setup.platform_name === selectedPlatform.platform_name) {
            const updatedIntegrations = [
              ...setup.integrations,
              selectedIntegrationLocal?.Integration_Name, // Assuming Integration_Name holds the new integration data
            ];
            return { ...setup, integrations: updatedIntegrations };
          }
          return setup;
        });
        return updatedSetups;
      });
      setSelectedPlatform(prev=>({...prev,integrations:[...prev.integrations,updatedIntegration]}))
      
      // Clear the form inputs and state
      setSelectedIntegrationLocal({
        Integration_Name: "",
        Integration_Description: "",
        API_reference: "",
        Documentation: "",
        Operational_Endpoint: "",
        Credentials_type: "username",
        username: "",
        password: "",
        apikey: "",
        schemaIds: [],
        workflowIds: [],
      })
    } catch (error) {
      // Display an alert when the integration already exists
      alert(error.message);
      console.error("Error handling form submission:", error);
    }
  };

  useEffect(()=>{
    setSelectedIntegrationLocal({...selectedIntegration})
  },[selectedIntegration])
  useEffect(()=>{
    setForm2({userName:"",password:"",apiKey:"",cookie:""});
  },[selectedIntegration?.Integration_Name])
  useEffect(() => {
    const storedIntegration = sessionStorage.getItem(`${selectedIntegration?.Integration_Name}`);
    if (storedIntegration) {
      setForm2(JSON.parse(storedIntegration));
    }
  }, [selectedIntegration?.Integration_Name]);

  // Update sessionStorage when form2 changes
  useEffect(() => {
    if(selectedIntegration.Integration_Name&&(!form2.apiKey||!form2.cookie) ) { sessionStorage.setItem(
      `${selectedIntegration?.Integration_Name}`,
      JSON.stringify(form2)
    )}
  }, [form2]);
const [integrationfromschema,setintegrationsfromschema]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
     try{
      const platformLists = await axioos.get(
        "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65cde8291b707d34e93752d7/instances/list"
      );

      const integrationListfromschema=await axioos.get(
        "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655dd2fd0dcad815a07fd06f/instances/list"
      )
      setintegrationsfromschema(integrationListfromschema.data.entities);
      const platformNames = platformLists.data.entities[0].PlatformSchemas;
      const platform = platformNames.find(platform => platform.platform_name === selectedPlatform.platform_name);
      if(platform){
        setIntegrationList(platform.integrations);
      }
     }catch(e){
      console.log(e);
     }
    }
    fetchData()
  },[])

  console.log(form2,'gaian1');

  
  return (
    <div className="integration-setup">
      {selectedIntegration.Integration_Name?<></>: 
     <div style={{display:"flex",gap:"10px",marginLeft:"350px"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
          <input type="radio" checked={selectedOption === "Integration"}
            onChange={() => handleOptionChange("Integration")}/>
          <label>Integration</label>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
         <input type="radio" checked={selectedOption === "Pipeline"}
            onChange={() => handleOptionChange("Pipeline")}/>
         <label>Pipeline</label>
        </div>
      </div>}
      <div className="integration-setup-container">
        {
          selectedOption==='Integration'?<form className="integration-setup-form">
          <label className="integration-setup-label">Integration Name</label>
          {selectedIntegration.Integration_Name?<input
            placeholder="Integration name"
            className="integration-setup-input"
            value={
              selectedIntegration["Integration_Name"]
                ? selectedIntegration["Integration_Name"]
                : ""
            }
            onChange={(e) =>
              setSelectedIntegration({
                ...selectedIntegration,
                Integration_Name: e.target.value,
              })
            }
            // value={integrationName}
            // onChange={handleIntegrationNameChange}
          />:<select className="integration-setup-input" style={{padding:"5px"}} onChange={(e) => {
            const selectedIntegration1 = integrationfromschema.find(iname => iname.Integration_Name === e.target.value);
            console.log(selectedIntegration1,selectedIntegrationLocal,"spyker")
            if (selectedIntegration1) {
              setSelectedIntegrationLocal({
                ...selectedIntegrationLocal,
                ...selectedIntegration1
              });
            }
            else{
              setSelectedIntegrationLocal({
      ...selectedIntegration1
              })
            }
          }}
           >
              <option>Select Integration</option>
              {
                integrationList.filter((iname) => !selectedPlatform.integrations.includes(iname)).map((iname)=>(
                  <option  value={iname}>{iname}</option>
                ))
              }
              
            </select>}
          <label className="integration-setup-label">
            Integration Description
          </label>
          <input
            placeholder="Short description about the integration"
            className="integration-setup-input"
            value={
              selectedIntegrationLocal["Integration_Description"]
                ? selectedIntegrationLocal["Integration_Description"]
                : ""
            }
            onChange={(e) =>
              setSelectedIntegrationLocal({
                ...selectedIntegrationLocal,
                Integration_Description: e.target.value,
              })
            }
          />
          <label className="integration-setup-label">API reference</label>
          <input
            placeholder="API reference"
            // className="integration-setup-input clickable-link"
            className={`integration-setup-input clickable-link ${
              visitedLink.includes(selectedIntegrationLocal["API_reference"])
                ? "visitedLink"
                : ""
            }`}
            value={
              selectedIntegrationLocal["API_reference"]
                ? selectedIntegrationLocal["API_reference"]
                : ""
            }
            // readOnly
            onChange={(e) =>
              setSelectedIntegrationLocal({
                ...selectedIntegrationLocal,
                API_reference: e.target.value,
              })
            }
            onClick={() => {
              if (selectedIntegrationLocal["API_reference"]) {
                window.open(selectedIntegrationLocal["API_reference"], "_blank");
              }
              handleLinkVisit(selectedIntegrationLocal["API_reference"]);
            }}
          />
          <label className="integration-setup-label">Documentation</label>
          <input
            placeholder="Documentation"
            // className="integration-setup-input clickable-link"
            className={`integration-setup-input clickable-link ${
              visitedLink.includes(selectedIntegrationLocal["Documentation"])
                ? "visitedLink"
                : ""
            }`}
            value={
              selectedIntegrationLocal["Documentation"]
                ? selectedIntegrationLocal["Documentation"]
                : ""
            }
            // readOnly
            onChange={(e) =>
              setSelectedIntegrationLocal({
                ...selectedIntegrationLocal,
                Documentation: e.target.value,
              })
            }
            onClick={() => {
              if (selectedIntegrationLocal["Documentation"]) {
                window.open(selectedIntegrationLocal["Documentation"], "_blank");
              }
              handleLinkVisit(selectedIntegrationLocal["Documentation"]);
            }}
          />
          <label className="integration-setup-label">
            Operational Endpoint
          </label>
          <input
            placeholder="Operational Endpoint"
            // className="integration-setup-input clickable-link"
            className={`integration-setup-input clickable-link ${
              visitedLink.includes(selectedIntegrationLocal["Operational_Endpoint"])
                ? "visitedLink"
                : ""
            }`}
            value={
              selectedIntegrationLocal["Operational_Endpoint"]
                ? selectedIntegrationLocal["Operational_Endpoint"]
                : ""
            }
            // readOnly
            onChange={(e) =>
              setSelectedIntegrationLocal({
                ...selectedIntegrationLocal,
                Operational_Endpoint: e.target.value,
              })
            }
            onClick={() => {
              if (selectedIntegrationLocal["Operational_Endpoint"]) {
                window.open(
                  selectedIntegrationLocal["Operational_Endpoint"],
                  "_blank"
                );
              }
              handleLinkVisit(selectedIntegrationLocal["Operational_Endpoint"]);
            }}
          />
          <label for="html" className="integration-setup-radio-heading">
            Credentials
          </label>

          <div className="integration-setup-radio-cont">
            <div className="integration-setup-radio">
              <input
                type="radio"
                id="username"
                name="credential_type"
                value="username"
                checked={selectedIntegrationLocal?.Credentials_type !== "apikey"}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedIntegrationLocal({
                      ...selectedIntegrationLocal,
                      Credentials_type: "username",
                    });
                  }
                }}
              />

              <label
                htmlFor="username"
                className="integration-setup-radio-label"
              >
                Username/Password
              </label>
            </div>
            <div className="integration-setup-radio">
              <input
                type="radio"
                id="api"
                name="credential_type"
                value="api"
                checked={selectedIntegrationLocal?.Credentials_type === "apikey"}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedIntegrationLocal({
                      ...selectedIntegrationLocal,
                      Credentials_type: "apikey",
                    });
                  }
                }}
              />
              <label htmlFor="api" className="integration-setup-radio-label">
                API Key
              </label>
            </div>
          </div>

          {selectedIntegrationLocal?.Credentials_type !== "apikey" && (
            <>
              <label className="integration-setup-label">Username</label>
              <input
                placeholder="Enter"
                className="integration-setup-input-placeholder"
                // value={
                //   selectedIntegrationLocal["username"]
                //     ? selectedIntegrationLocal["username"]
                //     : ""
                // }
                style={{ border: "none" }}
                // onChange={(e) =>
                //   setSelectedIntegrationLocal({
                //     ...selectedIntegrationLocal,
                //     username: e.target.value,
                //   })
                // }
                value={form2["userName"]?form2["userName"]:""}
                onChange={(e)=>
                  setForm2({
                    ...form2,
                    userName:e.target.value
                  })
                }
              />
              <label className="integration-setup-label">Password</label>
              <input
                placeholder="Enter"
                className="integration-setup-input-placeholder"
                // value={
                //   selectedIntegrationLocal["password"]
                //     ? selectedIntegrationLocal["password"]
                //     : ""
                // }
                style={{ border: "none" }}
                // onChange={(e) =>
                //   setSelectedIntegrationLocal({
                //     ...selectedIntegrationLocal,
                //     password: e.target.value,
                //   })
                // }
                value={form2["password"]?form2["password"]:""}
                onChange={(e)=>
                  setForm2({
                    ...form2,
                    password:e.target.value
                  })
                }
              />
            </>
          )}
          {selectedIntegrationLocal?.Credentials_type === "apikey" && (
            <>
              <label className="integration-setup-label">Api Key</label>
              <input
                placeholder="Enter"
                className="integration-setup-input-placeholder"
                // value={
                //   selectedIntegrationLocal["apikey"]
                //     ? selectedIntegrationLocal["apikey"]
                //     : ""
                // }
                style={{ border: "none" }}
                // onChange={(e) =>
                //   setSelectedIntegrationLocal({
                //     ...selectedIntegrationLocal,
                //     apikey: e.target.value,
                //   })
                // }
                value={form2["apikey"]?form2["apikey"]:""}
                onChange={(e)=>
                  setForm2({
                    ...form2,
                    apikey:e.target.value
                  })
                }
              />
                <label className="integration-setup-label">cookie</label>
                <input
                placeholder="Enter"
                className="integration-setup-input-placeholder"
                // value={
                //   selectedIntegrationLocal["apikey"]
                //     ? selectedIntegrationLocal["apikey"]
                //     : ""
                // }
                style={{ border: "none" }}
                // onChange={(e) =>
                //   setSelectedIntegrationLocal({
                //     ...selectedIntegrationLocal,
                //     apikey: e.target.value,
                //   })
                // }
                value={form2["cookie"]?form2["cookie"]:""}
                onChange={(e)=>
                  setForm2({
                    ...form2,
                     cookie:e.target.value
                  })
                }
              />
            </>
          )}
          {(selectedIntegration?.Integration_Name) ? <button
            type="button"
            className="submitBtn"
            onClick={() => {
              // handleSave()
            }}
          >
            Save
          </button>:<button
            type="button"
            className="submitBtn"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>}
        </form>:<div>
           <form className="integration-setup-form">
        <label className="integration-setup-label">Integration Name</label>
        {selectedIntegration?.Integration_Name?<input
          placeholder="Integration name"
          className="integration-setup-input"
        />:<select className="integration-setup-input" style={{padding:"5px"}} >
            <option>Select Integration</option>
            
          </select>}
        <label className="integration-setup-label">
          Integration Description
        </label>
        <input
          placeholder="Short description about the integration"
          className="integration-setup-input"
        />
        <div style={{display:'flex',justifyContent:"space-between"}}>
        <label htmlFor="apiReference" className="integration-setup-label">API Reference</label>
        <p  style={{cursor:"pointer",color:"blue",textAlign:"right"}} onClick={handleAddGroup}>+ Add</p>
        </div>
        {inputGroups.map((group, index) => (
        <div key={index}>
          <div>
          <input
          style={{width:"95%"}}
            type="text"
            placeholder="API Name"
            name="apiName"
            className="integration-setup-input"
            value={group.apiName}
            onChange={(e) => handleInputChange(index, e)}
          />
          </div>
          <div style={{display:"flex"}}>
          <input
          className="integration-setup-input"
            style={{width:"50%"}}
            type="text"
            placeholder="SchemaId"
            name="SchemaId"
            value={group.schemaId}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
          className="integration-setup-input"
          style={{width:"50%"}}
            type="text"
            placeholder="Trigger URL"
            name="triggerUrl"
            value={group.triggerUrl}
            onChange={(e) => handleInputChange(index, e)}
          />
         
          </div>
          <p onClick={() => handleRemoveGroup(index)} style={{cursor:"pointer",textAlign:"right",color:"red"}}>Remove</p>
          
        </div>
      ))}
        <label for="html" className="integration-setup-radio-heading">
          Credentials
        </label>

        <div className="integration-setup-radio-cont">
          <div className="integration-setup-radio">
            <input
              type="radio"
              id="username"
              name="credential_type"
              value="username"
            />

            <label
              htmlFor="username"
              className="integration-setup-radio-label"
            >
              Username/Password
            </label>
          </div>
          <div className="integration-setup-radio">
            <input
              type="radio"
              id="api"
              name="credential_type"
              value="api"
             
            />
            <label htmlFor="api" className="integration-setup-radio-label">
              API Key
            </label>
          </div>
        </div>

        {selectedIntegrationLocal?.Credentials_type !== "apikey" && (
          <>
            <label className="integration-setup-label">Username</label>
            <input
              placeholder="Enter"
              className="integration-setup-input-placeholder"
              style={{ border: "none" }}
            />
            <label className="integration-setup-label">Password</label>
            <input
              placeholder="Enter"
              className="integration-setup-input-placeholder"
              style={{ border: "none" }}
            />
          </>
        )}
        {selectedIntegrationLocal?.Credentials_type === "apikey" && (
          <>
            <label className="integration-setup-label">Api Key</label>
            <input
              placeholder="Enter"
              className="integration-setup-input-placeholder"
              style={{ border: "none" }}
            />
          </>
        )}
        {(selectedIntegration?.Integration_Name) ? <button
          type="button"
          className="submitBtn"
        >
          Save
        </button>:<button
          type="button"
          className="submitBtn"
          onClick={() => {
            // handleSubmit();
          }}
        >
          Submit
        </button>}
      </form>

        </div>
        }
      </div>
    </div>
  );
 
}


export default IntegrationSetup;
