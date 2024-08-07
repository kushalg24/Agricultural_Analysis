import { useEffect, useRef } from "react";
import useAppState from "../../../../custom-hooks/useAppState";
import treeLink from "./tree-link.svg";
import { useDrag } from "react-dnd";
import "./SearchNode.css"
import dragMe from  "../../../../images/dragme.png"
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

	return modifiedTreeArray;
  };

function SearchNode({ node, style, dragHandle, tree }) {
	/* This node instance can do many things. See the API reference. */
	console.log(node,"deadpool")
	
	const itemRef = useRef(null);

	const { setAppState1,appState1,appState, setAppState, selectedNode, setSelectedNode,selectedIntegration,apidatalist,setapidatalist,mousePositionRef,refreshTree,setRefreshTree} =useAppState();
	const [{ isDragging }, drag] = useDrag((droppedItem) => ({
		type: "node",
		item: { id: node.data.name ,elementId: itemRef?.current?.elementId,node:node
			,trigger:() => {
			node.data.selected = !node.data.selected;
			console.log(droppedItem,"sye")
			setAppState1((prev) => {
			
					 let modifiedTreeArray = deepCloneAndModifyNode(prev.endpoints, node.id, {
					  selected: !node.data.selected,
					});
					return { ...prev, endpoints: modifiedTreeArray };
				  })
			// console.log(tree.props.data,"gunturkaram")
			// updateNewAppState(tree.props.data);
			setRefreshTree(false)
			// document.removeEventListener('mousemove', handleMouseMove);
		}},
		collect: (monitor) => ({
		  isDragging: !!monitor.isDragging(),
		}),
	  }));
	  console.log(drag,"drag value is")
	const updateNewAppState = (newAppState) => {
	

		
		// setAppState1({ ...appState1, endpoints: [...newAppState] });
		console.log("hisaleem",newAppState)
         setapidatalist([...newAppState])
	
    


		
	};

	

	// const handleApiSelect = (array, id) => {
	// 	const updatedEndpoints = array.map((api) => {
	// 		const modifiedApi = { ...api };
	// 		if (modifiedApi.children.length > 0) {
	// 			modifiedApi.children = handleApiSelect(
	// 				modifiedApi.children,
	// 				id
	// 			);
	// 		}
	// 		if (modifiedApi.id === id) {
	// 			modifiedApi.selected = !modifiedApi.selected;
	// 			modifiedApi.selectedWorkflows = [];
	// 			console.log("here", modifiedApi);
	// 			return modifiedApi;
	// 		}

	// 		return modifiedApi;
	// 	});
	// 	return updatedEndpoints;
	// };
	// const filterDescendants = (treeArray) => {
	// 	const isDescendant = (node, id) => {
	// 		if (node.children && node.children.length > 0) {
	// 			for (const child of node.children) {
	// 				if (child.id === id || isDescendant(child, id)) {
	// 					return true;
	// 				}
	// 			}
	// 		}
	// 		return false;
	// 	};

	// 	return treeArray.filter(
	// 		(node) => !isDescendant({ children: treeArray }, node.id)
	// 	);
	// };




	// useEffect(() => {
	// 	console.log("tree.props.data",tree.props.data[1])
	// 	setAppState1({ ...appState1, endpoints: [...tree.props.data] });


	// }, []);
	

	  
	

	
	
	const isMouseOverElement = (className, event) => {
		const mouseX = event.clientX;
		const mouseY = event.clientY;
	
		const elementAtMouse = document.elementFromPoint(mouseX, mouseY);
	
		// Check if the element or any of its ancestors have the specified class
		return (
		  elementAtMouse &&
		  (elementAtMouse.classList.contains(className) ||
			elementAtMouse.closest(`.${className}`) !== null)
		);
	  };
	
	//   useEffect(() => {
	// 	const handleMouseMove = (event) => {
		
	// 		const className = 'form-cards'; // Replace with your actual class name
	// 		const isOverElement = isMouseOverElement(className, event);
	
	// 		if(mousePositionRef.current.flag){

			
	// 		if (isOverElement) {
	// 		  // The mouse pointer is over the element with the specified class
	// 		  console.log('Mouse pointer is over the target element!');
	// 		  if(!refreshTree){
	// 		  setRefreshTree(true)

	// 		  }
	// 		} else {
	// 		  // The mouse pointer is not over the element with the specified class
	// 		  console.log('Mouse pointer is not over the target element.');
			
	// 		}}
	// 		else{
    //         //  document.removeEventListener('mousemove',handleMouseMove)
	// 		if(!isOverElement){
	// 			mousePositionRef.current={flag:true}
	// 		}
	// 		}
	
	// 	};
	// 	document.addEventListener('mousemove', handleMouseMove);
	
	// 	// Add or remove the mousemove event listener based on node.isDragging
	// 	// if (node.isDragging) {
	// 	//   document.addEventListener('mousemove', handleMouseMove);
	// 	// } else {
	// 	//   document.removeEventListener('mousemove', handleMouseMove);
	// 	// }

	
	// 	// Clean up the event listener when the component is unmounted
	// 	return () => {
	// 	  document.removeEventListener('mousemove', handleMouseMove);
	// 	};
	//   }, [refreshTree]); // Include node.isDragging in the dependency array
	

	return (
		<>
			<li className="list-item" style={style}  >
				<div className="node-container"   
		>
					{node.level > 0 && <img src={treeLink} />}
					<input
					   
						id={node.data.name}
						type="checkbox"
						className="checkbox holder"
						placeholder="Search for APIs"
						checked={node.data.selected}
						ref={(node) => {
							itemRef.current = node;
							drag(node);
						  }}	
						// onChange={() => {
						// 	node.data.selected = !node.data.selected;
						// 	updateNewAppState(tree.props.data);
						// }}
							style={{cursor:"all-scroll"}}
					/>
					{/* <span   ref={(node) => {
        itemRef.current = node;
        drag(node);
      }} id={node.data.name} style={{marginRight:"5px",cursor:"all-scroll"}}>
			<svg  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80 310-250l57-57 73 73v-166h80v165l72-73 58 58L480-80ZM250-310 80-480l169-169 57 57-72 72h166v80H235l73 72-58 58Zm460 0-57-57 73-73H560v-80h165l-73-72 58-58 170 170-170 170ZM440-560v-166l-73 73-57-57 170-170 170 170-57 57-73-73v166h-80Z" fill="#007bff"/></svg>
			</span> */}
			<label
				   ref={dragHandle}
						className={`${
							selectedNode.id === node.data.id ? "bg-blue" : ""
						}`}
						id="apiname"
						onClick={() => {
							console.log("izaak",node.data)
							setSelectedNode(node.data)}}
						style={{cursor:"grab"}}
					>
						{node.data.name}
					</label>
				</div>
			</li>
		</>
	);
}

export default SearchNode;
