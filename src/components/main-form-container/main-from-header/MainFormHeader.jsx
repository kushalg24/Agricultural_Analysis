import "./main-form-header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../../context/AppContext/AppContext";
import { db } from "../../../App";
import axios from "axios";
import { fetchData } from "../../../redux/inputslice";
import { useDispatch, useSelector } from "react-redux";
import axioos from "../../../axiosInstance/axioos";
import mappersvg from "../../../images/mapper.svg"
import _ from 'lodash';
// import Modal from "./Modal";
// import { fetchApiDataRedux, fetchApiStore } from "../../../redux/mainslice";


export const MainformContext =createContext()

const SynhronizeInputParams =(list1,list2)=>{
return list1.map((data)=>{
let obj =list2?.find(e=>e.id==data.id)
// console.log({...data,inputParams:obj.inputParams},"hibro")
if(obj)return {...data,inputParams:obj.inputParams,PathParams:obj.PathParams,body:obj.body,schemaID:obj.schemaID,outputParamsTag:obj.outputParamsTag,children:[],indexes:obj.indexes}
else return {...data,children:[]}
})}
const synchronizeTrees = (tree1, tree2) => {
	const updatedTree1 = JSON.parse(JSON.stringify(tree1));
	const selectedOutputParamsMap = new Map();
	const selectedMap = new Map();
	const selectedWorkflowsMap=new Map()
	const outputparamsMap =new Map()
	const inputparamsMap =new Map()
	const pathparamsMap =new Map()
	const bodyMap =new Map()

  
	// Traverse tree2 to store selected output params and selected in a map
	const storeSelectedData = (node) => {
	  selectedOutputParamsMap.set(node.id, node.selectedOutputParams || []);
	  selectedWorkflowsMap.set(node.id, node.selectedWorkflows || []);
	  selectedMap.set(node.id, node.selected);
	  outputparamsMap.set(node.id,node.outputParams);
	  inputparamsMap.set(node.id,node.inputParams);
	  pathparamsMap.set(node.id,node.PathParams)
	  bodyMap.set(node.id,node.body)
	  if (node.children) {
		node.children.forEach(child => storeSelectedData(child));
	  }
	};
  
	tree2?.forEach(node => storeSelectedData(node));
  
	// Traverse tree1 to update selected output params and selected using the map from tree2
	const updateTree1 = (node) => {
	  const selectedOutputParams = selectedOutputParamsMap.get(node.id);
	  const selectedWorkflows =selectedWorkflowsMap.get(node.id);
	  const selected = selectedMap.get(node.id);
	  const outputParams = outputparamsMap.get(node.id)
	  const inputParams =inputparamsMap.get(node.id)
	  const PathParams =pathparamsMap.get(node.id)
	  const body =bodyMap.get(node.id)
	  if (selectedOutputParams !== undefined) {
		node.selectedOutputParams = selectedOutputParams;
	  }
	  if (inputParams !== undefined) {
		node.inputParams= inputParams;
	  }
	  if (outputParams !== undefined) {
		node.outputParams = outputParams;
	  }
	  if (PathParams !== undefined) {
		node.PathParams = PathParams;
	  }
	  if (selectedWorkflows !== undefined) {
		node.selectedWorkflows = selectedWorkflows;
	  }
	  if (selected !== undefined) {
		node.selected = selected;
	  }
	  if(body !== undefined){
		node.body=body
	  }
  
	  if (node.children) {
		node.children.forEach(child => updateTree1(child));
	  }
	};
  
	updatedTree1.forEach(node => updateTree1(node));
  
	return updatedTree1;
  };
  const synchronizeTrees1 = (tree1, tree2) => {
	const updatedTree1 = JSON.parse(JSON.stringify(tree1));
	const selectedOutputParamsMap = new Map();
	const selectedMap = new Map();
	const selectedWorkflowsMap=new Map()
	const schemaIDMap =new Map()
	const selectedInputParamsMap =new Map()
	const selectedPathParamsMap =new Map()
	const selectedBodyMap =new Map() 
	const outputParamsTagMap=new Map()
	const indexesMap =new Map()
	// const outputparamsMap =new Map()
	// const inputparamsMap =new Map()
  
	// Traverse tree2 to store selected output params and selected in a map
	const storeSelectedData = (node) => {
	  selectedOutputParamsMap.set(node.id, node.selectedOutputParams || []);
	  selectedWorkflowsMap.set(node.id, node.selectedWorkflows || []);
	  selectedMap.set(node.id, node.selected);
	  schemaIDMap.set(node.id,node.schemaID)
	  selectedInputParamsMap.set(node.id,node.inputParams)
	  outputParamsTagMap.set(node.id,node.outputParamsTag)
	  indexesMap.set(node.id,node.indexes)
	  selectedPathParamsMap.set(node.id,node.PathParams)
	  indexesMap.set(node.id,node.indexes)
	  selectedBodyMap.set(node.id,node.body)
	//   outputparamsMap.set(node.id,node.outputParams);
	//   inputparamsMap.set(node.id,node.inputParams);
	  if (node.children) {
		node.children.forEach(child => storeSelectedData(child));
	  }
	};
  
	tree2?.forEach(node => storeSelectedData(node));
  
	// Traverse tree1 to update selected output params and selected using the map from tree2
	const updateTree1 = (node) => {
	  const selectedOutputParams = selectedOutputParamsMap.get(node.id);
	  const selectedWorkflows =selectedWorkflowsMap.get(node.id);
	  const selected = selectedMap.get(node.id);
	  const schemaID = schemaIDMap.get(node.id)
	  const selectedInputParams =selectedInputParamsMap.get(node.id)
	  const selectedPathParams =selectedPathParamsMap.get(node.id)
	  const selectedBody = selectedBodyMap.get(node.id)
	  const outputParamsTag =outputParamsTagMap.get(node.id)
	  const indexes =indexesMap.get(node.id)
	//   const outputParams = outputparamsMap.get(node.id)
	//   const inputParams =inputparamsMap.get(node.id)
	  if (selectedOutputParams !== undefined) {
		node.selectedOutputParams = selectedOutputParams;
	  }
	//   if (inputParams !== undefined) {
	// 	node.inputParams= inputParams;
	//   }
	//   if (outputParams !== undefined) {
	// 	node.outputParams = outputParams;
	//   }
	  if (selectedWorkflows !== undefined) {
		node.selectedWorkflows = selectedWorkflows;
	  }
	  if (selected !== undefined) {
		node.selected = selected;
	  }
	  if( schemaID !== undefined){
       node.schemaID =schemaID
	  }
   if(selectedInputParams !== undefined){
	node.selectedInputParams = selectedInputParams
   }
   if(selectedPathParams !== undefined){
	node.selectedPathParams = selectedPathParams
   }
   if(selectedBody !== undefined){
	node.selectedBody = selectedBody
   }
   if(outputParamsTag !==undefined){
	node.outputParamsTag=outputParamsTag
   }
   if(indexes !==undefined){
  node.indexes =indexes
   }
	  if (node.children) {
		node.children.forEach(child => updateTree1(child));
	  }
	};
  
	updatedTree1.forEach(node => updateTree1(node));
  
	return updatedTree1;
  };
  const synchronizeTrees3= (tree1, tree2) => {
	console.log(tree1,tree2,"teri")
    const updatedTree1 = JSON.parse(JSON.stringify(tree1));
    const keyMaps = new Map(); // Map to store all key-value pairs dynamically
  
    // Function to traverse tree2 and store key-value pairs in the map
    const storeData = (node) => {
        const keys = Object.keys(node);
        keys.forEach(key => {
            if (typeof node[key] !== 'object') { // Only store primitive values
                if (!keyMaps.has(key)) {
                    keyMaps.set(key, new Map());
                }
                keyMaps.get(key).set(node.id, node[key]);
            }
        });
        if (node.children) {
            node.children.forEach(child => storeData(child));
        }
    };
  
    tree2?.forEach(node => storeData(node));
  
    // Function to traverse tree1 and update values using the map
    const updateTree1 = (node) => {
        const keys = Object.keys(node);
        keys.forEach(key => {
            if (typeof node[key] !== 'object') { // Only update primitive values
                if (keyMaps.has(key)) {
                    const valueMap = keyMaps.get(key);
                    if (valueMap.has(node.id)) {
                        node[key] = valueMap.get(node.id);
                    }
                }
            }
        });
        if (node.children) {
            node.children.forEach(child => updateTree1(child));
        }
    };
  console.log(updatedTree1,"teri")
    updatedTree1?.forEach(node => updateTree1(node));
  
    return updatedTree1;
};

  const diffTrees = (tree1, tree2) => {
    const updatedTree1 = JSON.parse(JSON.stringify(tree1));
    const tree1IdsMap = new Map();
    const tree2IdsMap =new Map()
    tree2.forEach((node)=>tree2IdsMap.set(node.id,true))
    
    // Populate tree1IdsMap with node IDs recursively
    const populateIdsMap = (node) => {
        tree1IdsMap.set(node.id, true);
        if (node.children) {
            node.children.forEach(child => populateIdsMap(child));
        }
    };

    updatedTree1.forEach(node => populateIdsMap(node));
console.log(tree1IdsMap)
    // Loop through tree2 and add nodes not found in tree1 to a temporary array
    const tempArray = [];
  function compareMaps(map1, map2) {
    const keysMap1 = Array.from(map1.keys());
    const keysMap2 = Array.from(map2.keys());
    
    const keysOnlyInMap1 = keysMap1.filter(key => !map2.has(key));
    const keysOnlyInMap2 = keysMap2.filter(key => !map1.has(key));

    console.log("Keys only in Map1:", keysOnlyInMap1);
    console.log("Keys only in Map2:", keysOnlyInMap2);
    
}
 const keysMap1 = Array.from(tree1IdsMap.keys());
    const keysMap2 = Array.from(tree2IdsMap.keys());
    
    const keysOnlyInMap1 = keysMap1.filter(key => !tree2IdsMap.has(key));
    const keysOnlyInMap2 = keysMap2.filter(key => !tree1IdsMap.has(key));
     console.log("Keys only in Map1:", keysOnlyInMap1);
    console.log("Keys only in Map2:", keysOnlyInMap2);

if(keysOnlyInMap1.length==0 && keysOnlyInMap2.length==0){
    return tree1
}
else if(keysOnlyInMap1.length!=0 && keysOnlyInMap2.length==0){
    return tree2
}
else if(keysOnlyInMap1.length==0 && keysOnlyInMap2.length!=0){
    tree2.forEach(node => {
        if (!tree1IdsMap.has(node.id)) {
            tempArray.push(node);
        }
    });

    // Spread the temporary array into updatedTree1
    updatedTree1.push(...tempArray);
    // if(!compareMaps(tree1IdsMap,tree2IdsMap)){
    //     return tree2
    // }
    return updatedTree1;
}
    

    
};

export const MainFormHeader = ({ children }) => {
	const [selIntegration,setIntegration]=useState({})
	const dispatch =useDispatch()
	const {data:data,status:status}=useSelector(state=>state.inputslice)
	const loginData =useSelector(state=>state.loginslice)
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const integrationName = searchParams.get('integrationName');
	const [refreshOnDelete,setRefreshDelete]=useState(false)

	console.log(integrationName,"hunter")


	const navigate = useNavigate();
	const {currentPath, 
		setCurrentPath,
		selectedIntegration,
		setSelectedIntegration,
		selectedPlatform,
		setPlatformSetUp,
		setapidatalist,
		apidatalist,
		appState1,
		setAppState1,
		previousIntegration,
		AddToLocalBase,
		UpdateLocalBase,
		getDataFromLocalBase, deleteDatafromLocalBase,setSelectedNode,selectedIntegrationName,showLoading,setShowLoading } = useContext(AppContext)
		const [selPlatform,setPlatform] =useState(selectedPlatform)
		
	const handleFormChange = (path) => {
		navigate(path);
		setCurrentPath(path);
	};
	useEffect(() => {
		setCurrentPath(location.pathname);
	}, []);
	useEffect(()=>{
		console.log("bahubali1")
		return ()=>{
			console.log("bahubali2")
		}
		
	  },[])
	  const setAppstatefromLocalBase =async (integration) =>{
		console.log("chernobyl",selectedIntegration)
		try{
		const storeddata =await getDataFromLocalBase(integration,2)
		if(storeddata){
		console.log(storeddata,"storeddata")
		setAppState1(storeddata?.appState1)}}
		catch(err){
			console.error("chernobyl".err)
		}
	   }
	   useEffect(()=>{
console.log(selectedIntegration,appState1,apidatalist,"shaktiman")
	   })
	  useEffect(()=>{
	
		setAppstatefromLocalBase(selIntegration?.Integration_Name)
	return ()=>{
		console.log("chernobylreturned")
		setapidatalist([])
	setAppState1({})
	setSelectedNode({})
	}   
	},[selectedIntegration?.Integration_Name,refreshOnDelete])
	   useEffect(()=>{
		const synchronizeTrees = (tree1, tree2) => {
			const updatedTree1 = JSON.parse(JSON.stringify(tree1));
			const selectedOutputParamsMap = new Map();
			const selectedMap = new Map();
			const selectedWorkflowsMap=new Map()
			const schemaIDMap = new Map()
		
		  
			// Traverse tree2 to store selected output params and selected in a map
			const storeSelectedData = (node) => {
			  selectedOutputParamsMap.set(node.id, node.selectedOutputParams || []);
			  selectedWorkflowsMap.set(node.id, node.selectedWorkflows || []);
			  selectedMap.set(node.id, node.selected);
			  schemaIDMap.set(node.id,node.schemaID)
			  if (node.children) {
				node.children.forEach(child => storeSelectedData(child));
			  }
			};
		  
			tree2?.endpoints?.forEach(node => storeSelectedData(node));
		  
			// Traverse tree1 to update selected output params and selected using the map from tree2
			const updateTree1 = (node) => {
			  const selectedOutputParams = selectedOutputParamsMap.get(node.id);
			  const selectedWorkflows =selectedWorkflowsMap.get(node.id);
			  const selected = selectedMap.get(node.id);
			  const schemaID =schemaIDMap.get(node.id)
			  if (selectedOutputParams !== undefined) {
				node.selectedOutputParams = selectedOutputParams;
			  }
			  if (selectedWorkflows !== undefined) {
				node.selectedWorkflows = selectedWorkflows;
			  }
			  if (selected !== undefined) {
				node.selected = selected;
			  }
		   if(schemaID !=undefined){
			node.schemaID =schemaID
		   }
			  if (node.children) {
				node.children.forEach(child => updateTree1(child));
			  }
			};
		  
			updatedTree1.forEach(node => updateTree1(node));
		  
			return updatedTree1;
		  };
	if(apidatalist.length!=0){
		
		  
		  
		  
		  
		  
		  
		//   console.log(synchronizeTrees(apidatalist,appState1),appState1,apidatalist,"synchronize trees")
console.log(apidatalist,appState1.endpoints,"terio")
		  let syncronizedData = synchronizeTrees(apidatalist||[],appState1?.endpoints||[])

		  setAppState1({endpoints:syncronizedData})
		  console.log("bholashankar",syncronizedData)
		  if(apidatalist.length!==0)UpdateLocalBase(selIntegration?.Integration_Name,{apidatalist:syncronizedData},1)}
	  },[apidatalist])
	  useEffect(()=>{
	  //update localbase
	  //console.log("updatelocalbase is run")
	  //skip first render
	  //initialRender.current=false
	  //update the  appstate1 in localbase when appstate1 is updated skip if it is empty
	  if(appState1?.endpoints?.length>0){
		console.log("update the  appstate1 in localbase when appstate1 is updated skip if it is empty",apidatalist)
		console.log("synchronize trees state appstate is ",appState1)
		UpdateLocalBase(selIntegration?.Integration_Name,{appState1:appState1},2)}
	  //UpdateLocalBase(selectedIntegration.Integration_Name,{appState1:appState1,apidatalist:apidatalist})
	  },[appState1])
	  	
	
	const handleDelete = async (integration)=>{
		await deleteDatafromLocalBase(integration,1)
		await deleteDatafromLocalBase(integration,2)
		setRefreshDelete(prev=>!prev)
		
	}
	const flattenTreeArray = (treeArray, result = []) => {
		treeArray&&treeArray.forEach((node) => {
			// Add the current node to the result array
			result.push({
				...node,
			});

			// Recursively flatten the children
			if (node.children && node.children.length > 0) {
				flattenTreeArray(node.children, result);
			}
		});

		return result;
	};

	const handleSave =async (integration)=>{
		setShowLoading(true);
		try{
        await saveStore(integration,appState1?.endpoints)
	 dispatch(fetchData())
		console.log("bulbul")
		console.log("bulbul2")
	
		setRefreshDelete(prev=>!prev)
	
		
		
		
		
		
		}
		catch(err){
			console.log("bulbul2",err)
			setRefreshDelete(prev=>!prev)
		}

	
	}

	
	useEffect(()=>{
console.log("bulbul1")
	},[refreshOnDelete])
	const handleUpgrade =async(integration)=>{
		const res = await fetch('https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/json-schema', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			  'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmOGYxNjhmLTNmZjYtNDZlMi1iMTJlLWE2YTdlN2Y2YTY5MCJ9.eyJzdWIiOiJnYWlhbi5jb20iLCJ1c2VyX25hbWUiOiJwb3J0YWxfdGVzdCIsInNjb3BlIjpbInRydXN0IiwicmVhZCIsIndyaXRlIl0sInRlbmFudElkIjoiNjExYmRkMzQyNmE5NDg2MDA1NjkzYjExIiwiaXNzIjoiZ2FpYW4uY29tIiwidXNlck5hbWUiOiJwb3J0YWxfdGVzdCIsImF1dGhvcml0aWVzIjpbIlJPTEVfT01OSV9DT05TVU1FUiIsIlJPTEVfTUFSS0VUUExBQ0VfVVNFUiIsIlJPTEVfT01OSV9VU0VSIl0sImp0aSI6IjgxODE1ZDNmLTY1MTAtNDJkNC05NWZkLTNiZTJmMWYzYjg5ZiIsImVtYWlsIjoicG9ydGFsX3Rlc3RAZ2F0ZXN0YXV0b21hdGlvbi5jb20iLCJjbGllbnRfaWQiOiJnYWlhbiJ9.Mz1gWLt1rujlQWW3SzuwtERk1i6HwG9utVuMUnL-RX4kKtR1jl0eR9MZmNjRZ0znbrr6w8MOj2aAULtpIEYmM9jU_mXGBuqetPIbTuV2d4Hkv6f0qaJZLAIAU3qhgijQI9O4a2yg_rmHnibNhEcZMKEFK5AXw8M_B8XIgnNYlXDkpjEqP6Siv0HJmHA3T1j1XY8PCsluzIwDzIgRr-xqAJcaCnUwGR7XxsF-X0plk8L9qV1Z3bF2EMqqBsednYeqaM3EqwJXk27R5PFU7jn5aOc-_n9DxaGLcuJB5JoqoGW7DeaIKLzMwxvS9vP_bc8vDOxl8xk-zTRAq8goyHV6IQ'
			},
			// body: '{\n    "draft": "false",\n    "entityName": "newschema5",\n    "description": "test8_Schema4",\n    "json": {\n        "UserId": "TestUser1",\n        "Username": "Test1",\n        "selectedlist": [\n            {\n                "id": "GetdatasetsList",\n                "name": "GetdatasetsList",\n                "selectedOutputParams": [\n                    "kind",\n                    "etag",\n                    "nextPageToken",\n                    "datasets"\n                ],\n                "selectedWorkflows": [\n                    "purge workflow"\n                ],\n                "selected": true,\n                "Integration_Name": "Storage Analysis",\n                "platform_name": "BigQuery",\n                "response_schema":"dassndkldfdklfnklfn"\n            }\n        ]\n    },\n    "pi_constructs": [],\n    "primaryKey": [\n        "UserId"\n    ],\n    "universe": "6526557f273a051a8c4e9f2d"\n}',
			body: JSON.stringify({
			  'draft': 'false',
			  'entityName': 'newschema7',
			  'description': 'test8_Schema4',
			  'json': {
				'UserId': 'TestUser1',
				'Username': 'Test1',
				'selectedlist': [
				  {
					'id': 'GetdatasetsList',
					'name': 'GetdatasetsList',
					'selectedOutputParams': [
					  'kind',
					  'etag',
					  'nextPageToken',
					  'datasets'
					],
					'selectedWorkflows': [
					  'purge workflow'
					],
					'selected': true,
					'Integration_Name': 'Storage Analysis',
					'platform_name': 'BigQuery',
					'response_schema': 'dassndkldfdklfnklfn'
				  }
				]
			  },
			  'pi_constructs': [],
			  'primaryKey': [
				'UserId'
			  ],
			  'universe': '6526557f273a051a8c4e9f2d'
			})
		  }); 
		  console.log(res,"naveen")
	}
	  async function handleIntegrations(signal) {
		try {
		
		  const res = await axioos.get(
			"https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655dd2fd0dcad815a07fd06f/instances/list",
			{ signal }
		  );
	  
		  console.log("ressds", res.data);
		  if (res.data.entities) {
			const entityData = res.data.entities.find(
			  (data) => data?.Integration_Name === integrationName
			);
	  
			if (entityData) {
			  console.log("Found entity:", entityData);
			  return entityData;
			} else {
			  console.error("No matching integration found");
			  return {};
			}
		  }
		} catch (error) {
		  if (error.name === 'AbortError') {
			console.log('Request aborted due to component unmount');
		  } else {
			console.error("Error fetching data:", error);
		  }
		}
	  }
	  
	  
	
	  async function fetchApiData(integration, signal) {
		function getAPIDescription(apiName) {
			const listOfDis = [
			  { name: "GetdatasetsList", dis: "Retrieve information about a specific dataset in Google BigQuery, including details about its schema, tables, and other configurations." },
			  { name: "GetTablesList", dis: "Retrieve details about a specific table in Google BigQuery, including its schema, size, and other relevant information." },
			  { name: "GetBucketsList", dis: "Obtain information about a specific bucket in Google Cloud Storage, including its metadata, access controls, and other properties." },
			  { name: "OKTA_Applications_list", dis: "Retrieve a list of applications registered in Okta, including their configurations." },
			  { name: "OKTA_Application_get", dis: "Get a list of users assigned to a specific application in Okta." },
			  { name: "OKTA_Application_users", dis: "Retrieve information about users associated with a specific application within the Okta identity and access management system." }
			];
		  
			const apiDescription = listOfDis.find(data => data.name === apiName);
		  
			return apiDescription ? apiDescription.dis : "API description not found";
		  }
		  
		try {
		  const responses = [];
		  const errors = [];
	  
		  await Promise.all(
			integration.schemaIds.map(async (data, index) => {
			  try {
				const res = await axioos.get(`https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/${data}/instances/list`, { signal });
				const modifiedEntity = {
				  id: res.data.entities[0].Api_Name,
				  name: res.data.entities[0].Api_Name,
				  children: [],
				  selectedOutputParams: [],
				  selectedWorkflows: [],
				  description: getAPIDescription(res.data.entities[0].Api_Name),
				  selected: false,
				  inputParams: (res.data.entities[0].inputParameters)||{},
				  outputParams: Object.keys(res.data.entities[0].outputParameters),
				  PathParams:(res.data.entities[0].PathParameters)||{},
				  body:(res?.data?.entities[0].body)||{},
				  Integration_Name:integration.Integration_Name,
				  schemaID:"",
				  selectedInputParams:{},
				  selectedPathParams:{},
				  selectedBody:{},
				  outPutResponse:data,
				  outputParamsTag:{},
				  indexes:{
					
				  }
				};
	  
				responses.push(modifiedEntity);
			  } catch (error) {
				console.error(`Error fetching data for schema ID ${data}:`, error);
				errors.push({ id: data, error });
			  }
			})
		  );
		
	  
		  
	  
		  if (responses.length > 0) {
        return responses
		  }
	  
		  if (errors.length > 0) {
			console.error('Errors occurred during processing:', errors);
			return []
		  }
		} catch (error) {
		  if (error.name === 'AbortError') {
			console.log('Request aborted due to component unmount');
		  } else {
			console.error('Error in Promise.all:', error);
		  }
		}
	  }
	  async function apiStore(integration){
		try{
       const response =await axioos.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9500828ebd37244d9d489/instances/list")
	   const responseArray =response?.data?.entities?.find(e=>e.UserId==loginData.UserId)?.apilist
	  
	if (response?.data?.entities)return responseArray.filter((each)=>each.Integration_Name==integration.Integration_Name)
	else return []
	}
		catch(err){
			return []
			console.error(err)
		}
	  }
	  async function apiStore1(integration){
		try{
    
			//    const response =await axioos.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9509828ebd37244d9d48f/instances/list")

	 
	// const responseArray =data.find((e)=>e.UserId==loginData.UserId)?.selectedlist
	
	if (data)return data?.selectedlist.filter((each)=>each.Integration_Name==integration.Integration_Name)
	else return []
	}
		catch(err){
			return []
			console.error(err)
		}
	  }
	  async function saveStore(integration,payload){
		try{   
			let formatRes =await axioos.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9500828ebd37244d9d489/instances/list")
			let formatRes1 =await axioos.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9509828ebd37244d9d48f/instances/list")
			let payloadTotal =formatRes?.data?.entities?.find(e=>e.UserId==loginData.UserId)
			let payloadTotal1 =formatRes1?.data?.entities?.find(e=>e.UserId==loginData.UserId)
			console.log(payloadTotal.apilist,integration.Integration_Name,payloadTotal1,"omega")
			let findArray =payloadTotal?.apilist?.filter((e)=>{return e.Integration_Name!=integration?.Integration_Name})
			console.log(findArray,"nirzar")
            findArray=[...(findArray||[]),...payload]
			console.log(findArray,"nirzar1")
		    let findArray1 =payloadTotal1?.selectedlist?.filter((e)=>{return e.Integration_Name!=integration?.Integration_Name})
			console.log(findArray1,"sayonil")
			findArray1=[...(findArray1||[]),...SynhronizeInputParams(flattenTreeArray(payload),data?.selectedlist)]
		    payloadTotal.apilist = findArray
			payloadTotal1.selectedlist=findArray1
			console.log(payloadTotal1,"codered")
		// 	console.log(findArray,integration?.Integration_Name,payloadTotal,"furniture")
		// 	findArray=[...findArray,...payload]
		// 	payloadTotal.PlatformSchemas = findArray
		// 	console.log(payloadTotal,"negisir")
        const res =axios.post("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9500828ebd37244d9d489/instance?upsert=true",payloadTotal)
		const res2 =axios.post("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9509828ebd37244d9d48f/instance?upsert=true",payloadTotal1)
		// if(res.data.status="SUCCESS"){
		// 	console.log("saved successfully",res.data)
		// }
	
		}
		catch(err){
			console.error(err)
		}
	  }
	  
		  console.log("integration setup")
		  const abortController = useRef(new AbortController());
		

		  useEffect(() => {
			const controller = new AbortController();
			const signal = controller.signal;
		  
			const fetchData = async () => {
			  try {
				const dta = await handleIntegrations(signal);
				setSelectedIntegration(dta);
				setIntegration(dta);
				let  responses1 = await apiStore(dta)
				let responses2= await apiStore1(dta)
				console.log(responses1,responses2,"chaipelo")
				
			   let  responses =await fetchApiData(dta, signal)
			//    console.log(dta,"fetchApiDataRedux")
			//    dispatch(fetchApiDataRedux({integration:dta,signal:signal}))
			   
		
			   
			
				
				async function getDataFromLocalBase(integration){
					try {
					  let users = await db.collection(integration)
						.get()
					  console.log('data from localbase ', users)
					  return users
					}
					catch(error) {
					  console.log('error fetching from localbase', error)
					  return []
					}
				  }
				const dataFromLocalBase = await getDataFromLocalBase(dta?.Integration_Name);
				if(responses1.length>0 ){
					console.log("abbaharmonium",responses,responses1,responses2)
				
					// const newtree0 =CompareTrees(responses1,responses)
					const newtree0 = diffTrees(responses1,responses)
					console.log(newtree0,"vikrant")
					let newtree
					let newtree2
					try{
					
					 newtree =  synchronizeTrees(newtree0,responses)
				 newtree2= synchronizeTrees1(newtree,responses2)}
					catch(err){
						console.log("mandi",err)
					}
					console.log(responses,newtree,newtree2,"ramana")
					setAppState1({endpoints:newtree2})
					setapidatalist(newtree2)
				 setSelectedNode(newtree2[0])
				 setShowLoading(false);
				}
				else if(responses.length>0){if (dataFromLocalBase?.length === 0) {
					console.log("data is empty in localbase")
					// setapidatalist(responses);
					await AddToLocalBase(dta?.Integration_Name, { "apidatalist": responses }, 1);
					responses[0].selected = true;
					responses[0].selectedOutputParams.push(responses[0].outputParams[0]);
					responses[0].selectedWorkflows.push("purge workflow");
					await AddToLocalBase(dta?.Integration_Name, { "appState1": { endpoints: responses } }, 2);
					setAppState1({ endpoints: responses });
					setSelectedNode(responses[0]);
					setShowLoading(false);
				  } else {
					setapidatalist(dataFromLocalBase[0]?.apidatalist);
					setAppState1(dataFromLocalBase[1]?.appState1);
					setSelectedNode(dataFromLocalBase[1]?.appState1?.endpoints[0]);
					setShowLoading(false);
				  }
				console.log("Integration data is fetched", dta?.Integration_Name);}
				else{
					setapidatalist([])
			  setAppState1({endpoints:[]})
			  setShowLoading(false);
				}
			  } catch (error) {
				// Handle errors if needed
			  }
			};
		  
			fetchData();
			// setTimeout(fetchData,1000)
		  
			return () => {
			  controller.abort();
			};
		  }, [selectedIntegrationName,refreshOnDelete]);
		  useEffect(()=>{
			
setPlatform(selectedPlatform)
		  },[selectedPlatform])

		  useEffect(()=>{
			dispatch(fetchData())
		  },[selIntegration,refreshOnDelete])
		  

	console.log(selectedIntegration,"bumbum")
	
	const [jsondata,setJsonData] =useState([])
	
	return (
		<>
		<MainformContext.Provider value={{selIntegration,setIntegration,selPlatform,setPlatform,jsondata,setJsonData}}>
		<header className="main-form-header">
			<nav>
				<ul>
					<li
						 className={`list-item ${
							currentPath.match(/^\/integration(?:\?|$)/) ? 'border-btm' : ''
						  }`}
						 
						onClick={() => handleFormChange(`/integration?platformName=${selPlatform?.platform_name}&integrationName=${selIntegration?.Integration_Name}`)}
					>
						Integration setup
					</li>
					<li
						className={`list-item ${/^\/integration\/configuration/.test(currentPath) ? "border-btm" : ""}`}

						onClick={() =>
							handleFormChange(`/integration/configuration?platformName=${selPlatform?.platform_name}&integrationName=${selIntegration?.Integration_Name}`)
						}
					>
						Setup configuration
					</li>
					<li
						className={`list-item ${/^\/integration\/lifecycle/.test(currentPath) ? "border-btm" : ""}`}

						onClick={() =>
							handleFormChange(`/integration/lifecycle?platformName=${selPlatform?.platform_name}&integrationName=${selIntegration?.Integration_Name}`)
						}
					>
						Manage lifecycle
					</li>
					<li className="list-item">
					
					<img style={{height:"30px",marginRight:"15px"}} src={mappersvg} onClick={()=>navigate(`/integration/mapper?platformName=${selPlatform?.platform_name}&integrationName=${selIntegration?.Integration_Name}`)}/>
						<button onClick={()=>handleDelete(selIntegration?.Integration_Name)}>Discard</button>
						<button onClick={()=>handleSave(selIntegration)} className="save-btn">Save</button>
						{/* <button onClick={()=>handleUpgrade(selIntegration)} className="save-btn">upgrade</button> */}
					</li>
				</ul>

			</nav>
		</header>
		{ children }
		</MainformContext.Provider>
		</>
	);
};


