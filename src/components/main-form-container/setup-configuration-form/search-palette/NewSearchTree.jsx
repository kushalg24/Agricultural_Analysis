import { Tree } from "react-arborist";
import useAppState from "../../../../custom-hooks/useAppState";
import SearchNode from "./SearchNode";
import "./new-search-tree.css";
import OutputParamsContainer from "./OutputParamsContainer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { db } from "../../../../App";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewSearchTree = () => {
  const { appState, setAppState, selectedNode, setSelectedNode, appState1, setAppState1,selectedPlatform,selectedIntegration,apidatalist,setapidatalist,mousePositionRef,refreshTree,setRefreshTree} = useAppState();






  const deepCloneAndModifyNode = (treeArray, idToModify, modification) => {
    const cloneNode = (node) => {
      return {
        ...node,
        children: node.children ? node.children.map(cloneNode) : [],
      };
    };

  

    const findAndModify = (currentNode) => {
      if (currentNode.id === idToModify) {
        // Modify the found node
        return { ...currentNode, ...modification };
      }

      // Recursively search and modify in the children
      return {
        ...currentNode,
        children: currentNode.children ? currentNode.children.map(findAndModify) : [],
      };
    };

    // Deep clone the tree array
    const clonedTreeArray = treeArray.map(cloneNode);



    // Find and modify the node in the cloned tree array
    const modifiedTreeArray = clonedTreeArray.map(findAndModify);


    
    console.log("modifiedTreeArray...in deepclone",modifiedTreeArray)


    return modifiedTreeArray;
  }





// const [paramschanged,setparamschanged]=useState(false)


const handleOutputParamChange =async (node,paramName)=>{
  console.log("paramsclicked",node)
  if (!node.selected){return  toast.info("First select the API and select outputparams");} 
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
const resultNode = findNodeById(appState1?.endpoints, node.id);
let copyChild=resultNode.selectedOutputParams
if(!copyChild.includes(paramName))copyChild.push(paramName)
else copyChild=copyChild.filter(e=>e!=paramName)
console.log("brainwash",copyChild)
 setAppState1((prev) => {
  console.log("setsate is executed")
       let modifiedTreeArray = deepCloneAndModifyNode(prev?.endpoints, node.id, {
        selectedOutputParams: copyChild,
      });
      return { ...prev, endpoints: modifiedTreeArray };
    })
    setSelectedNode(prev=>({...prev,selectedOutputParams:copyChild}))
  
}

  const handleOutputParamChange1 = async (node, paramName) => {
    console.log("saleem is back")
    // handleNewOutputParamChange(node,node.id)
    if (paramName === '' || !node.selected) {
      return;
    }

    if (appState1 && appState1.endpoints && appState1.endpoints.length === 0 && !appState1.endpoints.some((data) => data.name === node.name)) {
      setAppState1((prev) => ({ ...prev, endpoints: [node] }));
    }

    if (appState1.endpoints && appState1.endpoints.length > 0) {
      const nodeIndex = appState1.endpoints.findIndex((data) => data.name === node.name);

      if (nodeIndex !== -1) {
        const updatedappState1 = appState1.endpoints.map((data, index) => {

          if (index === nodeIndex) {
            const selectedParams = data.selectedOutputParams;
            const foundParam = selectedParams.includes(paramName);

            const updatedParams = foundParam
              ? selectedParams.filter((name) => name !== paramName)
              : [...selectedParams, paramName];

            return { ...data, selectedOutputParams: updatedParams };
          }

          return data;
        })

        setAppState1((prev) => ({ ...prev, endpoints: updatedappState1 }));

      } else {
        // Node not found, push a new node
        // setAppState1((prev) => ({ ...prev, endpoints: [...prev.endpoints, node] }))
      }
    }

    const selectedParams = node.selectedOutputParams;
    const foundParam = selectedParams.includes(paramName);

    const updatedParams = foundParam
      ? selectedParams.filter((name) => name !== paramName)
      : [...selectedParams, paramName];

    const modification = {
      selectedOutputParams: updatedParams,
    };
   

  
      let modifiedTreeArray =[] 
      setAppState1((prev) => {
  console.log("setsate is executed")
       modifiedTreeArray = deepCloneAndModifyNode(prev.endpoints, node.id, modification);
      return { ...prev, endpoints: modifiedTreeArray };
    })
  
  
    // setapidatalist(modifiedTreeArray)
console.log(modifiedTreeArray,"modifiedtreearray")
    setSelectedNode({
      ...node,
      selectedOutputParams: [...updatedParams],
    });





    

    // setparamschanged(!paramschanged)

  };

// useEffect(()=>{
// if(!initialRender.current){
// setapidatalist(updateApilist.current)
// }
// },[updateApilist.current])




// on move function.........................

// const isMouseOverElement = (className, mousePositionRef) => {
//   const mouseX = mousePositionRef.current.x;
//   const mouseY = mousePositionRef.current.y;
  
//   const elementAtMouse = document.elementFromPoint(mouseX, mouseY);
  
//   // Check if the element or any of its ancestors have the specified class
//   return (
//     elementAtMouse &&
//     (elementAtMouse.classList.contains(className) ||
//     elementAtMouse.closest(`.${className}`) !== null)
//   );
//   };
  

  
const onMove = async ({ dragIds, parentId, index }) => {
  try {
    // console.log(isMouseOverElement("form-cards",mousePositionRef),"tabletennis")
    const updated = apidatalist.map((data) => {
      if (data.id === parentId) {
        dragIds.forEach(async (id) => {
          const childIndex = apidatalist.findIndex((child) => child.id === id);

          if (childIndex !== -1) {
            const child = apidatalist[childIndex];

            // Check if outputParams is an array before using some
            if (Array.isArray(data.outputParams) && Array.isArray(child.outputParams)) {
              if (child.outputParams.some((param) => data.outputParams.includes(param))) {
                const existingParentId = apidatalist.findIndex((parent) =>
                  parent.children.some((childId) => childId === child.id)
                );

                if (existingParentId !== -1) {
                  const existingParent = apidatalist[existingParentId];
                  existingParent.children = existingParent.children.filter((childId) => childId !== child.id);
                }

                data.children.push(child);
                const [draggedNode] = apidatalist.splice(childIndex, 1);
              } else {
                toast.error("Output params are not matching");
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
            apidatalist.push(deletedChild);
          }
        });
      }

      return data;
    });

    // Filter out items with empty fields
    const filteredUpdated = updated.filter((item) => item.outputParams && item.outputParams.length > 0);

    console.log("final apidatalist", apidatalist);

    setapidatalist([...apidatalist])
    // await UpdateLocalBase(selectedIntegration.Integration_Name,{apidatalist:apidatalist})



    // localStorage.setItem(selectedIntegration.Integration_Name,JSON.stringify(apidatalist));

 
  } catch (error) {
    console.error(error);
  }
};



// useEffect(()=>{
// // updates the appstate when apidatalist changes

// if(!initialRender.current) setAppState1(prev=>({...prev,endpoints:apidatalist}))
// initialRender.current=false


//   // setAppState1(prev=>{...prev,endpoints:apidatalist})


// },[apidatalist])


console.log("appstate1.........in new search tree..,apidatalist",appState1,apidatalist)








// fetch api names with api


//   async function fetchApiData() {

//     // list of schema ids



//     let listofschemaids=[]


//     if(selectedIntegration&&selectedIntegration.schemaIds){

//            listofschemaids=selectedIntegration.schemaIds

//     }




//     // if (selectedPlatform && selectedPlatform.platform_name == "BigQuery") {


//     //   listofschemaids = ["655ed5aa7c8ba57caa377dd3", "655eeb6ed475d34964c35d48", "655f020059570d3e165fdbe9", "65673c6219b2493ebae30029"]

//     // }

//     // if (selectedPlatform && selectedPlatform.platform_name == "OKTA") {


//     //   listofschemaids = ["655f271b53f7d870cf3903d0", "655f286659570d3e16625690", "655f29cc3ca51327c2399986"]


//     // }

//     // if (selectedPlatform && selectedPlatform.platform_name == "Snowflake") {

//     //   listofschemaids = ["65673b7419b2493ebae3001b"]

//     // }
//     // if (selectedPlatform && selectedPlatform.platform_name == "Azure ") {

//     //   listofschemaids = ["6582bd9670a0fe178870ad7b","6582c14c70a0fe178870add1"]

//     // }
     






//     // function to handle dicription


//     function getAPIDescription(apiName) {


     

//       const listOfDis = [
//         { name: "GetdatasetsList", dis: "Retrieve information about a specific dataset in Google BigQuery, including details about its schema, tables, and other configurations." },
//         { name: "GetTablesList", dis: "Retrieve details about a specific table in Google BigQuery, including its schema, size, and other relevant information." },
//         { name: "GetBucketsList", dis: "Obtain information about a specific bucket in Google Cloud Storage, including its metadata, access controls, and other properties." },
//         { name: "OKTA_Applications_list", dis: "Retrieve a list of applications registered in Okta, including their configurations." },
//         { name: "OKTA_Application_get", dis: "Get a list of users assigned to a specific application in Okta." },
//         { name: "OKTA_Application_users", dis: "Retrieve information about users associated with a specific application within the Okta identity and access management system." }
//       ];

//       const apiDescription = listOfDis.find(data => data.name === apiName);

//       return apiDescription ? apiDescription.dis : "API description not found";
//     }


//     try {

//       let res

//       // const storedState = JSON.parse(localStorage.getItem(selectedIntegration.Integration_Name));
     



//       const responses = await Promise.all(
//         listofschemaids.map(async (data, index) => {

//      if (
//   selectedPlatform &&
//   (selectedPlatform.platform_name === "OKTA Apps" ||
//     selectedPlatform.platform_name === "Azure" ||
//     selectedPlatform.platform_name === "OpenAI")
// ) {
//   res = await axios.get(
//     `https://ig.gaiansolutions.com/tf-web/v1.0/618b6fdef5dacc0001a6b1b0/schemas/${data}/instances/list`
//   );
// } else {
//   res = await axios.get(
//     `https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/${data}/instances/list`
//   );
// }



//           // Add id and name to each item
          
//           const modifiedEntity = {
//             id: res.data.entities[0].Api_Name, // Adjust this according to your actual response structure
//             name: res.data.entities[0].Api_Name, // Adjust this according to your actual requirements
//             children: [],
//             selectedOutputParams: [],
//             selectedWorkflows: [],
//             description: getAPIDescription(res.data.entities[0].Api_Name),   //add description later......
//             selected: false,
//             inputParams: res.data.entities[0].inputParameters,
//             outputParams: Object.keys(res.data.entities[0].outputParameters)
//           }

//           return modifiedEntity;
//         })
//       );

//         setapidatalist(responses);
      
   

      
//     } catch (error) {
//       console.error(error);
//     }
//   }



  // useEffect(() => {
  //   fetchApiData();

  //   // Cleanup function to set the flag when the component is unmounted
  //   return () => {
  //     setIsMounted(false);
  //   };
  // }, []);


// Assuming selectedIntegration, setapidatalist, appState1, and apidatalist are defined elsewhere in your component

// Load apidatalist from local storage on component mount
useEffect(() => {
  // const storedState = JSON.parse(localStorage.getItem(selectedIntegration.Integration_Name));
  // if (storedState) {
  //   setapidatalist(storedState);

  //   // Update appState1 with the loaded data
  //   setAppState1((prev) => ({
  //     ...prev,
  //     endpoints: storedState,
  //   }));

  // }

  // console.log("apidatalist_appstate1_storedState_selectedIntegration",apidatalist,appState1,"storedState",storedState,selectedIntegration.Integration_Name);

}, [selectedIntegration?.Integration_Name]);




// Save apidatalist to local storage whenever it changes
// useEffect(() => {
//   fetchApiData();
// }, []);





console.log("apidatalist", apidatalist);








// useEffect(() => {
//   fetchApiData();
// }, []);
// useEffect(()=>{
//   //update localbase
// //   console.log("updatelocalbase is run")
// //skip first render
// // initialRender.current=false
// if( !initialRender.current){
//   //update the  appstate1 in localbase when appstate1 is updated skip if it is empty
// if(appState1.endpoints.length>0){
//   UpdateLocalBase(selectedIntegration.Integration_Name,{apidatalist:appState1.endpoints,appState1:appState1})}}
// // UpdateLocalBase(selectedIntegration.Integration_Name,{appState1:appState1,apidatalist:apidatalist})
// },[appState1])

  return (
    <section className="search-palette">
      <div className="tree-container">
        <input name="search" id="search" type="text" placeholder="Search for APIs" />

        <ul className="api-palette">
          <Tree
            data={appState1?.endpoints} // Use preprocessed data
            width={400}
            rowHeight={50}
            rowClassName="tree-row"
            overscanCount={1}
            paddingBottom={10}
            paddingTop={20}
            willReceiveDrop={false}
            disableDrag={refreshTree}
            
			        onMove={onMove}
          >
            {SearchNode}
          </Tree>
        </ul>
      </div>
      <OutputParamsContainer node={selectedNode} handleOutputParamChange={handleOutputParamChange} appState1={appState1} selectedIntegration={selectedIntegration}/>
      <ToastContainer 
      position="top-center"
        autoClose={2000}/>
    </section>
  );
};

export default NewSearchTree;
