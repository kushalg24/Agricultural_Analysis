import { useEffect, useState,useMemo, useContext } from "react";
import useAppState from "../../../../custom-hooks/useAppState";
import MyVerticallyCenteredModal from "./ModalComponent";
import ModalComponent from "./ModalComponent";
import { MainformContext } from "../../main-from-header/MainFormHeader";
import axios from "axios";
import { useSelector } from "react-redux";
import PipelineModal from "./PipelineModal";

const OutputParamsContainer = ({ node, handleOutputParamChange,selectedIntegration,paramschanged}) => {
  const { appState1, setAppState1,apidatalist ,setapidatalist,selectedNode,selectedPlatform} = useAppState();
  // const {selectedPlatform}=useContext(AppContext)
  let {data:data,status:status} = useSelector(state => state.inputslice);
  
  const [node1, setNode1] = useState({});
  const [modalShow, setModalShow]=useState(false);
  const [showPipelinemodal,setPipelinemodal]=useState(false);
  const [responseData,setResponseData]=useState([]);
console.log(selectedIntegration.Integration_Name,"saleem1");
 const schemaID= useMemo(()=>{
    const filteredSchemaId=data?.selectedlist?.filter((e)=>e.Integration_Name==selectedIntegration?.Integration_Name)?.find((e)=>e?.id==selectedNode?.id)
    return filteredSchemaId?.schemaID
  },[selectedNode?.id])
  useEffect(() => {
    if (appState1?.endpoints && appState1.endpoints?.length > 0&&node&&node.name) {
      const foundNode = appState1.endpoints?.find((data) => data.name === node.name);
      setNode1(foundNode || {});
    }
  }, [node, appState1?.endpoints]);
  // useEffect(() => {
  //   if (appState1.endpoints && appState1.endpoints.length > 0 && node && node.name) {


  //     let selectedOutputParamarray = localStorage.getItem(`${selectedIntegration.Integration_Name}_selectedparams`);

  //     console.log("selectedOutputParamarray_from_outputparams", selectedOutputParamarray);



  //     if (selectedOutputParamarray && selectedOutputParamarray.length > 0) {
  //       // Parse the JSON string into an array
  //       selectedOutputParamarray = JSON.parse(selectedOutputParamarray);

  //       const foundNode = selectedOutputParamarray.find((data) => data.name === node.name);

  //       setNode1(foundNode || {})
  //     }
  //   }
  // }, [node, appState1.endpoints,paramschanged])
  



  console.log("Node1 in output params", node1);
  // useEffect(()=>{
  //   const fetchResponseData=async()=>{
  //   if(schemaID){
  //     try{
  //       const responseData = await axios.get(
  //         `https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/${schemaID}/instances/list`
  //       );
  //       setResponseData(responseData?.data?.entities)
  //      }catch(e){
  //       console.log(e);
  //      }
  //   }else{
  //     setResponseData([])
  //   }
  //   }
  //   fetchResponseData()
  //   console.log(data?.selectedlist?.filter((e)=>e.Integration_Name==selectedIntegration?.Integration_Name)?.find((e)=>e?.id==selectedNode?.id),"fatfat")
  // },[schemaID])


  
  const links = {
    "OKTA": "https://cdn.elastic.snaplogic.com/sl/designer.html?v=17672#pipe_snode=6558e65c37260dda24f5b1e2",
    "BigQuery": "https://cdn.elastic.snaplogic.com/sl/designer.html?v=17672#pipe_snode=65fc27dd8a905e4c449c00b5",
    "Snowflake": "https://cdn.elastic.snaplogic.com/sl/designer.html?v=17672#pipe_snode=65fc47ac3004b0e7342d391c"
  };
  let selectedLink = links[selectedPlatform.platform_name];

  return (
    <ul className="output-params-container">
     <li> 
     {/Pipeline/.test(selectedIntegration.Integration_Name) ?
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <button style={{border:"none",padding:"10px"}}><a href={selectedLink?selectedLink:"#"} target="_blank" style={{textDecoration:"none",color:"black"}}>Pipeline Preview</a></button>
      </div>:<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><button style={{border:"none",padding:"10px"}} onClick={() => setModalShow(true)}>JSON</button></div>}
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        jsondata={responseData}
      />
      </li>
      {selectedNode&&selectedNode.outputParams&&selectedNode.outputParams.map((param, indx) => (
          
          <li
            className={`list-item ${selectedNode.selectedOutputParams &&
              selectedNode.selectedOutputParams.includes(param) ? "bg-blue" : ""}`}
            key={param + indx}
            onClick={() => handleOutputParamChange(node, param)}
          >
            {param}
          </li>
        ))
      }
  </ul>
  
  );
};

export default OutputParamsContainer;
