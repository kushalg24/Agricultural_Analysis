import crossIcon from "./cross-icon.svg";
import playIcon from "./play-icon.svg";
import stopIcon from "./stop-icon.svg";
import errorIcon from "./error-icon.svg";
import useAppState from "../../../custom-hooks/useAppState";
import { useContext, useEffect } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { modifyAndPostData, modifyValues } from "../../../redux/inputslice";
import { MainformContext } from "../main-from-header/MainFormHeader";

function generateQueryString(params) {
    let queryString = '';
    
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const value = params[key];
            if (queryString.length === 0) {
                queryString += `?${key}=${encodeURIComponent(value)}`;
            } else {
                queryString += `&${key}=${encodeURIComponent(value)}`;
            }
        }
    }
    
    return queryString;
}


export default function WorkFlowCard({parentdata,wf,apiId,setRenderWorkflow,setWorkflowname,workflowName,SetselectedOptions}){
    const { appState1,setAppState1,selectedIntegration,selectedPlatform,form2} = useAppState();
    const {setJsonData}=useContext(MainformContext)
    console.log(wf,apiId,parentdata,"from workflow card")
    const {data:selectedData,status:status} =useSelector(state=>state.inputslice)
    console.log(selectedData,"grill4")
const dispatch =useDispatch()
    // const onWorkFlowstart = async()=>{

    //   try{
    //     const encodedpayload = encodeURIComponent(JSON.stringify({...parentdata,platformName:selectedPlatform?.platform_name,apiName:apiId,authorization:selectedIntegration?.apikey,
    //       pathParameters:parentdata.PathParams,inputParameter:{
    //         queryParameter:parentdata.inputParams
    //       }
    //       }));
    //       const options = {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Host":"/workflowdesigner.aidtaas.com"
      
    //         }
    //       };
    //       const response =await axios.post(`https://workflowdesigner.aidtaas.com/api/wf/653a729499ae2900014a9c8d/execute/138471?env=TEST&payload=${encodedpayload}`,options)
    //   }
    //   catch(err){
    //   console.error("something wrong",err)
    //   }
    // }



    const onWorkFlowstart = async () => {
      function mergeObjects(object1, object2) {
        const mergedObject = { ...object1 }; // Start with a copy of object1
    
        for (const key in object1) {
            if (object2.hasOwnProperty(key)) {
                // If key  exist in object2, use value from object1
                mergedObject[key] = object2[key];
            }
        }
    
        return mergedObject;
    }
    function destringifyBody(object) {
        const body = { ...object };
        for (const key in body) {
          if (Object.prototype.hasOwnProperty.call(body, key)) {
            try {
              body[key] = JSON.parse(body[key]);
            } catch (err) {
              // Handle parsing errors if needed
             
            }
          }
        }
        return body;
      }
      
      try {
          const jsonPayload = {};
          const config = {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmOGYxNjhmLTNmZjYtNDZlMi1iMTJlLWE2YTdlN2Y2YTY5MCJ9.eyJzdWIiOiJnYWlhbi5jb20iLCJ1c2VyX25hbWUiOiJwb3J0YWxfdGVzdCIsInNjb3BlIjpbInRydXN0IiwicmVhZCIsIndyaXRlIl0sInRlbmFudElkIjoiNjExYmRkMzQyNmE5NDg2MDA1NjkzYjExIiwiaXNzIjoiZ2FpYW4uY29tIiwidXNlck5hbWUiOiJwb3J0YWxfdGVzdCIsImF1dGhvcml0aWVzIjpbIlJPTEVfT01OSV9DT05TVU1FUiIsIlJPTEVfTUFSS0VUUExBQ0VfVVNFUiIsIlJPTEVfT01OSV9VU0VSIl0sImp0aSI6IjgxODE1ZDNmLTY1MTAtNDJkNC05NWZkLTNiZTJmMWYzYjg5ZiIsImVtYWlsIjoicG9ydGFsX3Rlc3RAZ2F0ZXN0YXV0b21hdGlvbi5jb20iLCJjbGllbnRfaWQiOiJnYWlhbiJ9.Mz1gWLt1rujlQWW3SzuwtERk1i6HwG9utVuMUnL-RX4kKtR1jl0eR9MZmNjRZ0znbrr6w8MOj2aAULtpIEYmM9jU_mXGBuqetPIbTuV2d4Hkv6f0qaJZLAIAU3qhgijQI9O4a2yg_rmHnibNhEcZMKEFK5AXw8M_B8XIgnNYlXDkpjEqP6Siv0HJmHA3T1j1XY8PCsluzIwDzIgRr-xqAJcaCnUwGR7XxsF-X0plk8L9qV1Z3bF2EMqqBsednYeqaM3EqwJXk27R5PFU7jn5aOc-_n9DxaGLcuJB5JoqoGW7DeaIKLzMwxvS9vP_bc8vDOxl8xk-zTRAq8goyHV6IQ'
              }
          };
          function findKeyWithValuePrimary(obj) {
            let arr=[]
            for (const key in obj) {
              if (obj.hasOwnProperty(key) && obj[key] === "primary") {
                arr.push(key) // Return the key if the value is "primary"
              }
            }
            return arr; // Return null if no key with value "primary" is found
          }
          let apiobj=selectedData?.selectedlist.find((e)=>e.id==apiId)
          let data = {
            draft: false,
            entityName: (apiId+wf+Math.random(0,100)).toString(),
            description: "test8_Schema4",
            json:{...jsonPayload,temp:"saleem"},
            pi_constructs: [],
            primaryKey: findKeyWithValuePrimary(apiobj.indexes),
            universe: "6526557f273a051a8c4e9f2d"
          };
          
          let schemaId
          if(apiobj){
            console.log(apiobj.outputParamsTag,"grill5")
         schemaId =apiobj.schemaID
         console.log(apiobj,"grill6")
          }
          else{
            alert("please save the configuration")
          throw new Error("please save the configuartion")
          }
         
          if (schemaId==""|| schemaId==undefined) {
            const payloadresponse =await axios.get(`https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/${parentdata.outPutResponse}/instances/list`)
            console.log(payloadresponse,"payloadjson")
            data= {...data,json:{...payloadresponse?.data.entities[0].outputParameters,temp:"saleem"}}
              const response = await axios.post('https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/json-schema', data, config);
              schemaId = response.data.schemaId;
              
              const data1 = {
                  addUpdateJavascriptFunctions: {
                      "1": {
                          model: {
                              name: "temp",
                              paramCount: 0,
                              params: {
                                  temp: {
                                      name: "temp",
                                      required: true
                                  }
                              },
                              functionBody: "return new Date().toString()"
                          },
                          inputMappings: {
                              temp: ""
                          },
                          outputMappings: {
                              temp: "$"
                          }
                      }
                  }
              };
  
		
              await dispatch(modifyAndPostData({...parentdata,schemaID:schemaId}))
              // await axios.put(`https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/${schemaId}`, data1, config);
          }
  
          const encodedPayload = encodeURIComponent(JSON.stringify({
           
              platformName: selectedPlatform?.platform_name.replace(/\s+/g, '')              ,
              apiName: apiId.replace(/\s+/g, '')              ,
              authorization: form2.apikey              ,
              pathParameters: mergeObjects(parentdata.PathParams, apiobj.PathParams),
              inputParameter: {
                  queryParameter: mergeObjects(parentdata.inputParams, apiobj.inputParams)
              },
              query:generateQueryString(mergeObjects(parentdata.inputParams, apiobj.inputParams)),
              schemaId: schemaId,
              body: destringifyBody(mergeObjects(parentdata.body, apiobj.body)),
              integrationName:parentdata.Integration_Name,
              userId:"jackie@edoclient.com",
              outputParamsTag:(apiobj.outputParamsTag)

          }));
  
          const options = {
              headers: {
                  "Content-Type": "application/json",
                  "Authorization":"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmOGYxNjhmLTNmZjYtNDZlMi1iMTJlLWE2YTdlN2Y2YTY5MCJ9.eyJwcm9maWxlVXJsIjoid3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2F2aW5hc2gtcGF0ZWwtcm9ja3oiLCJyZWNlbnRfc2Vzc2lvbiI6Ik5BIiwic3ViIjoiZ2FpYW4uY29tIiwicGFyZW50VGVuYW50SWQiOiJOQSIsImNvbG9yIjpudWxsLCJ1c2VyX25hbWUiOiJnYXR0YS5nYW5nYXJhanVAZ2FpYW5zb2x1dGlvbnMuY29tIiwiaXNzIjoiZ2FpYW4uY29tIiwiaXNBZG1pbiI6dHJ1ZSwicGxhdGZvcm1JZCI6IjY0ZTIwODA1MzhjOTQ5N2MxZmU4ZTI3ZSIsInVzZXJOYW1lIjoiZ2F0dGEuZ2FuZ2FyYWp1QGdhaWFuc29sdXRpb25zLmNvbSIsImF1dGhvcml0aWVzIjpbIlJPTEVfTUFSS0VUUExBQ0VfVVNFUiJdLCJjbGllbnRfaWQiOiJnYWlhbiIsInNjb3BlIjpbInRydXN0IiwicmVhZCIsIndyaXRlIl0sInRlbmFudElkIjoiNjVkNDNjODI5ZDU1NDIwMDAxYWE3YzgxIiwibG9nbyI6Ind3dy5nb29nbGUuY29tL2ltYWdlcy4iLCJleHAiOjE3MDg4MDg4MDgsImp0aSI6ImY4YzAzM2UwLTQ2NWUtNDEwZi05MmU0LTM3MmI4NGViNzcyMyIsImVtYWlsIjoiZ2F0dGEuZ2FuZ2FyYWp1QGdhaWFuc29sdXRpb25zLmNvbSJ9.cndOZSVTQ-H0BfKM4VaQpTZGICPqp6qNpv0qEdZ6Q8171FvvOuY-iuNGt9eGLNOvJeyDfmk0rADHH2lSoP8SsgWMaD08TLtCZjUbSbzpaR3CGhUCbnrMdEtLF4gnZAf3LR2UUVPk9QepHfxSJs4m4Bcjd6_ZR0ptDbSVdH-anWOpuxNAbgOu-Su1lkratmfE7RSZYZjGFtr0MkbHKsicavzqiOm8S9RV5thg3N-NhwrEY2e5f5G5I6MnmdF1Hlv0eCBV-xcESrXaqD-cXzpNHiKDbnYVtpnTLiFAlMbl2fbLzH1BOoBuR9D-1eOHbJXH9Po_lNMjaRj6R-qKEOgrbA.."
              }
          };
  
          const response = await axios.post(`https://bob-workflowdesigner.aidtaas.com/api/wf/execute/103?env=TEST&payload=${encodedPayload}`,{}, options);
          console.log("encrypted",response, encodedPayload);
          console.log(response,"jackie")
      
 
         
      } catch (err) {
          console.error("something wrong", err);
      }
  };



    useEffect(()=>{
return ()=>setRenderWorkflow(false)
    },[])


    const handleWorkFlowDeletion = (nodeId, selectedWorkflow) => {
        setAppState1(prevData => {
            console.log(prevData.endpoints,"from handle delete workflow")
          return {endpoints:deleteNode(prevData.endpoints, nodeId, selectedWorkflow)};
        });
        setRenderWorkflow(false)
        SetselectedOptions("")
        console.log("child is clicked")
        // setWorkflowname("")
      };
      
const deleteNode = (nodes, nodeId, workflowid) => {
    
    return nodes.map(node => {
      if (node.id === nodeId) {
        return {
          ...node,
          selectedWorkflows: node.selectedWorkflows.filter((e)=>e!=workflowid)
            ,
        };
      } else if (node.children) {
        return {
          ...node,
          children: deleteNode(node.children, nodeId, workflowid),
        };
      }
      return node;
    });
  };

return <div className={`workflow-card ${(wf+"r15"+apiId)==workflowName?"workflowselect":""}`} id={wf+apiId} >
<div className="left-text">
    <img
        src={crossIcon}
        onClick={() =>
            handleWorkFlowDeletion(
               apiId,
                wf
            )
        }
    />
    <span>{wf}</span>
</div>
<div className="right-btns">
    <img src={playIcon}  onClick={()=>onWorkFlowstart()} style={{cursor:"pointer"}}/>
    <img src={stopIcon} />
    <img src={errorIcon} />
</div>
</div>
}