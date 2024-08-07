// import React, { useState } from "react";
// import "./treeStructure.css";
// import treelink2 from "./treeLink2.svg";
// import verticalLine from "./treeLink3.svg";

// const SidePanelTreeStructure = (data) => {
//   const [openStates, setOpenStates] = useState({});
//   const convertToDesiredFormat = (data, parentId = null, level = 0, childIndex = 0) => {
//     return data?.map((item, index, array) => {
//       const totalSiblings = array.length;

//       const convertedItem = {
//         id: item.id,
//         name: item.name,
//         outputParams: item.selectedOutputParams
//         || [],
//         childSubscribers: convertToDesiredFormat(item.children || [], item.id, level + 1, index),
//         isOpen: openStates[item.id] || parentId === item.id,
//         level: level,
//         childIndex: index,
//         totalSiblings: totalSiblings,
//       };

//       return convertedItem;
//     });
//   };

//   const data1 = convertToDesiredFormat(data.apidatalist);

//   const toggleNode = (nodeId) => {

//     setOpenStates((prevOpenStates) => ({

//       [nodeId]: !prevOpenStates[nodeId],
//     }));
//   };

//   const renderNode = (node) => {
//     const hasChildren = node.childSubscribers && node.childSubscribers.length > 0;
//     return (
//       <div key={node.id} style={{paddingTop:"10px"}}  >
//         {/* Rendering node content */}
//         {/* { (node.level>0)? <img src={treelink2} />:null} */}
//         <div className={`parent ${openStates[node.id]?"activeApi":""}`} onClick={() => toggleNode(node.id)}>
//           <p style={{fontWeight:"600"}}>{node.name}</p>
//         </div>
//   <div className={`${hasChildren?"borderParent":""}`} style={{marginTop:"10px"}}>
//         <ul  className= "output-params-container2">
//         {node.outputParams && node.outputParams.length > 0 && (
//           <div style={{ display: node.isOpen ? "block" : "none" }} className="outputParamsContainer scroll">
//             <div style={{border:"2px solid gray",marginLeft:"12px",position:"relative",top:"-4px"}}>
//             {node.outputParams.map((param) =>  {
//               console.log(node.childIndex,node.totalSiblings,"ironman")

//               return  (

//               <li key={param.id} className="list-item-1" style={{ paddingLeft:"10px", display: "flex", justifyContent: "flex-start", alignContent: "center" }}>
//                 {node.childSubscribers.length > 0 && <>
//                   {/* <img src={verticalLine} style={{ marginLeft: "25px" }} /> */}
//                 </>}
//                 <div className="outputParam">
//                   <p style={{display:"flex",justifyContent:"start",alignItems:"end",fontWeight:"500" }}>
//                   {/* <img src={verticalLine}  /> */}
//                   {param}</p>
//                 </div>
//               </li>

//             )})}
//              </div>
//           </div>
//         )}
//         </ul>

//         {/* Rendering child nodes recursively */}
//         {node.childSubscribers && node.childSubscribers.length > 0 && (
//           <div
//             style={{
//               marginLeft: "15px",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             {node.childSubscribers.map((child, index, array) => (
//               <div key={child.id} style={{ display: "flex", width: "100%" }}>
//                 {/* <img src={verticalLine} height={32} /> */}
//                 <div style={{ width: "100%" }}>{renderNode(child)}</div>
//               </div>
//             ))}
//           </div>
//         )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="container1 scroll">
//       {data1?.map((node) => renderNode(node))}
//     </div>
//   );
// };

// export default SidePanelTreeStructure;

import React, { useState } from "react";
import "./treeStructure.css";
import treelink2 from "./treeLink.svg";
import treelink1 from "./treeLink2.svg";
import treelink3 from "./treeLink3.svg";
const SidePanelTreeStructure = (data) => {
  const [openStates, setOpenStates] = useState({});
  const convertToDesiredFormat = (data, parentId = null) => {
    return data?.map((item) => {
      const convertedItem = {
        id: item.id,
        name: item.name,
        outputParams: item.selectedOutputParams || [],
        childSubscribers: convertToDesiredFormat(item.children || [], item.id),
        isOpen: openStates[item.id] || parentId === item.id,
      };

      return convertedItem;
    });
  };

  const data1 = convertToDesiredFormat(data.apidatalist);

  const toggleNode = (nodeId) => {
    setOpenStates((prevOpenStates) => ({
      [nodeId]: !prevOpenStates[nodeId],
    }));
  };

  const renderNode = (node) => {
    const hasChildren =
      node.childSubscribers && node.childSubscribers.length > 0;
    return (
      <div key={node.id} className="scroll">
        {/* Rendering node content, e.g., name */}

        <div
          className={`parent ${openStates[node.id] ? "activeApi" : ""}`}
          onClick={() => toggleNode(node.id)}
          title={node.name} // Tooltip with full name
        >
          <p>{`${node.name.slice(0, 25)}${node.name.length > 25? '...' : ''}`}</p>
        </div>

        <ul className="output-params-container2">
          {node.outputParams && node.outputParams.length > 0 && (
            <div
              style={{
                display: node.isOpen ? "block" : "none",
                borderLeft: hasChildren ? "1px solid #003399" : "none",
              }}
              className="outputParamsContainer scroll1"
            >
              <div
                style={{
                  marginLeft: "20px",
                  position: "relative",
                  border: "1px solid gray",
                }}
              >
                {node.outputParams.map((param,index) => (
                  <li
                    key={param.id}
                    // className={`list-item-1 ${hasChildren ? "with-border" : ""}`}
                    className="list-item-1"
                    title={param} 
                  >
                    {`${param.slice(0, 25)}${param.length > 25? '...' : ''}`}
                  </li>
                ))}
              </div>
            </div>
          )}
        </ul>

        {node.childSubscribers && node.childSubscribers.length > 0 && (
          <div
            style={{
              marginLeft: "15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {node.childSubscribers.map((child, index, array) => {
              console.log(index);
              return (
                <div key={child.id} style={{ display: "flex"}}>
                  {index < array.length-1&& (
                    <>
                      <span style={{ borderLeft: "1px solid #003399" }}></span>
                      <img src={treelink1} height={32} />
                    </>
                  )}
                  {index==array.length-1 && (
                    <>
                      <img src={treelink3} height={29} />
                    </>
                  )}
                  <div style={{ width: "100%" }}>{renderNode(child)}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container1 scroll">
      {data1?.map((node) => renderNode(node))}
    </div>
  );
};

export default SidePanelTreeStructure;
