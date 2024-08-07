import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import produce from 'immer';
import axios from 'axios';
import { original } from '@reduxjs/toolkit'
export const fetchplatformData = createAsyncThunk(
  'mainslice/fetchplatformData',
  async () => {
    try {
      const response = await axios.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e953b528ebd37244d9d4d3/instances/list");
      return (res_data?.entities[0]?.PlatformSchemas)?(res_data?.entities[0]?.PlatformSchemas):[];
    } catch (error) {
      throw error;
    }
  }
);
export const fetchIntegrationsData = createAsyncThunk(
  'mainslice/fetchIntegrationsData',
  async () => {
    try {
      const res = await axios.get(
        "https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/655dd2fd0dcad815a07fd06f/instances/list?size=1000"
      );
  
      console.log("res", res.data);
      return res.data.entities;
    } catch (error) {
      console.error("Error fetching integrations data:", error);
      throw error
    }
  }
);
export const fetchApiData = createAsyncThunk(
  'mainslice/fetchApiData',
  async ({ integration, signal }, thunkAPI) => {
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
            const res = await axios.get(`https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/${data}/instances/list`, { signal });
            const modifiedEntity = {
              id: res.data.entities[0].Api_Name,
              name: res.data.entities[0].Api_Name,
              children: [],
              selectedOutputParams: [],
              selectedWorkflows: [],
              description: getAPIDescription(res.data.entities[0].Api_Name),
              selected: false,
              inputParams: res.data.entities[0].inputParameters,
              PathParameters:res.data.entities[0].PathParameters,
              outputParams: Object.keys(res.data.entities[0].outputParameters),
              Integration_Name: integration.Integration_Name
            };

            responses.push(modifiedEntity);
          } catch (error) {
            console.error(`Error fetching data for schema ID ${data}:`, error);
            errors.push({ id: data, error });
          }
        })
      );

      if (responses.length > 0) {
        return responses;
      }

      if (errors.length > 0) {
        console.error('Errors occurred during processing:', errors);
        return [];
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Request aborted due to component unmount');
      } else {
        console.error('Error in Promise.all:', error);
      }
    }
  }
);
export const fetchApiStore = createAsyncThunk(
  'mainslice/fetchApiStore',
  async (integration, thunkAPI) => {
    try {
      const response = await axios.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65c9a8d81b707d34e9366403/instances/list?size=100");
      const responseArray = response?.data?.entities[0]?.apilist;

      if (response?.data?.entities) {
        return responseArray.filter((each) => each.Integration_Name == integration.Integration_Name);
      } else {
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }
);
// Define your initial state and reducers
const initialState = {
  platformdata: null,
  integrationsdata:null,
  appState1:{endpoints:[]},
  apidatalist:[],
  status: 'idle',
  error: null,
  selectedIntegration:{},
  selectedPlatform:{}
};
export const handleOutputParamChangeAsync = createAsyncThunk(
  'mainslice/handleOutputParamChange',
  async ({ node, paramName }, thunkAPI) => {
    try {
      console.log("paramsclicked", node);
      if (!node.selected) {
        return thunkAPI.rejectWithValue("First select the API and select outputparams");
      }

      function findNodeById(nodeList, targetId) {
        for (const node of nodeList) {
          if (node.id === targetId) {
            return node;
          }
          if (node.children && node.children.length > 0) {
            const result = findNodeById(node.children, targetId);
            if (result) {
              return result;
            }
          }
        }
        return null;
      }

      const resultNode = findNodeById(thunkAPI.getState().mainslice.appstate1?.endpoints, node.id);
      let copyChild = resultNode.selectedOutputParams;
      if (!copyChild.includes(paramName)) copyChild.push(paramName);
      else copyChild = copyChild.filter(e => e !== paramName);

      console.log("brainwash", copyChild);
      const modifiedTreeArray = produce(thunkAPI.getState().mainslice.appstate1?.endpoints, draft => {
        const foundNode = draft.find(item => item.id === node.id);
        if (foundNode) {
          foundNode.selectedOutputParams = copyChild;
        }
      });

      // Return the modified data to be stored in the Redux store
      return modifiedTreeArray;
    } catch (error) {
      // Handle errors if needed
      console.error("Error in handleOutputParamChangeAsync:", error);
      throw error;
    }
  }
);
export const moveNodesAsync = createAsyncThunk(
  'mainslice/moveNodesAsync',
  async (payload, thunkAPI) => {
    const { dragIds, parentId } = payload;

    try {
      // Your logic for moving nodes here
      // This logic will be asynchronous
      // For example:

      const draftApidatalist = thunkAPI.getState().mainslice.apidatalist;

      draftApidatalist.forEach((data) => {
        if (data.id === parentId) {
          dragIds.forEach((id) => {
            const childIndex = draftApidatalist.findIndex((child) => child.id === id);

            if (childIndex !== -1) {
              const child = draftApidatalist[childIndex];

              // Check if outputParams is an array before using some
              if (Array.isArray(data.outputParams) && Array.isArray(child.outputParams)) {
                if (child.outputParams.some((param) => data.outputParams.includes(param))) {
                  const existingParentId = draftApidatalist.findIndex((parent) =>
                    parent.children.some((childId) => childId === child.id)
                  );

                  if (existingParentId !== -1) {
                    const existingParent = draftApidatalist[existingParentId];
                    existingParent.children = existingParent.children.filter((childId) => childId !== child.id);
                  }

                  data.children.push(child);
                  draftApidatalist.splice(childIndex, 1); // Remove the child from its previous location
                } else {
                  // Handle the case where outputParams are not matching
                  console.error("Output params are not matching");
                }
              } else {
                // Handle the case where outputParams is not an array
                console.error("OutputParams is not an array");
              }
            }
          });
        } else if (parentId === null) {
          dragIds.forEach((id) => {
            const childIndex = data.children.findIndex((child) => child.id === id);

            if (childIndex !== -1) {
              const [deletedChild] = data.children.splice(childIndex, 1);
              draftApidatalist.push(deletedChild);
            }
          });
        }
      });

      // Filter out items with empty fields
      const filteredList = draftApidatalist.filter((item) => item.outputParams && item.outputParams.length > 0);

      // Return the updated list if needed
      return filteredList;
    } catch (error) {
      // Handle errors
      console.error('Error moving nodes:', error);
      throw error; // Throw the error to reject the promise
    }
  }
);
const mainslice = createSlice({
  name: 'mainslice',
  initialState,
  reducers: {
    setSelectedIntegration:(state,action)=>{
     state.selectedIntegration=action.payload 
    },
    setSelectedPlatform:(state,action)=>{
      state.selectedPlatform=action.payload
    },
    setAppstate1:(state,action)=>{
      state.appState1=action.payload
    },
    setapidatalist:(state,action)=>{
state.apidatalist=action.payload
    }
    },
  extraReducers: (builder) => {
    builder
      .addCase(fetchplatformData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchplatformData.fulfilled, (state, action) => {
  
        state.platformdata = action.payload;
      })
      .addCase(fetchplatformData.rejected, (state, action) => {

        state.platformdata = [];
      })
      .addCase(handleOutputParamChangeAsync.fulfilled, (state, action) => {
        state.appstate1.endpoints = action.payload;
      })
      .addCase(moveNodesAsync.fulfilled, (state, action) => {
        // Update state with the result if needed
        state.apidatalist = action.payload;
      }).addCase(fetchIntegrationsData.fulfilled, (state, action) => {
      
        state.selectedIntegration = action.payload;
      })
      .addCase(fetchIntegrationsData.rejected, (state, action) => {
    
        state.integrationsdata = []
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
      
        state.apidatalist = action.payload;
      })
      .addCase(fetchApiData.rejected, (state, action) => {
   
      })
      .addCase(fetchApiStore.fulfilled, (state, action) => {
        // state.status = 'succeeded';
        // state.apidatalist = action.payload;
      })
      .addCase(fetchApiStore.rejected, (state, action) => {
        // state.status = 'failed';
        // state.error = action.error.message;
      })
  },
});
export default mainslice.reducer; 

export const {setPlatform, setIntegration,setAppstate1,setapidatalist,setSelectedIntegration,setSelectedPlatform } = mainslice.actions;

// export default inputslice.reducer;
