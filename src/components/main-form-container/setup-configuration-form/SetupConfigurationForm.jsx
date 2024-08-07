import SearchPalette from "./search-palette/SearchPalette";
import SetupFormCard from "./setup-form-card/SetupFormCard";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./SetupConfigurationForm.css";
import useAppState from "../../../custom-hooks/useAppState";
import NewSearchTree from "./search-palette/NewSearchTree";
import { useDrop } from "react-dnd";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { fetchData } from "../../../redux/inputslice";
import axioos from "../../../axiosInstance/axioos";

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


const SetupConfigurationForm = () => {
	let {data:data,status:status} = useSelector(state => state.inputslice);
	console.log(data,status,"biryani")
	const [{ isOver }, drop] = useDrop(() => ({
		accept: "node",
		drop:  (item)=>{
			
			const id=item.id
			console.log(item,"robo")
			setAppState1((prev) => {
				
				let modifiedTreeArray = deepCloneAndModifyNode(prev.endpoints, id, {
				 selected: true,
			   });
			   console.log(modifiedTreeArray,"agent")
			   return {endpoints: modifiedTreeArray };
			 })
			 console.log(item.node.data,findNodeById(appState1.endpoints,id),"animal")
			 setSelectedNode({...item.node.data,selected:true})
			  // Scroll to the dropped item after it's added
			  
			  setDraggedNodeID(id)
			  setRefreshTree(false)
			  mousePositionRef.current={flag:false}
		
			 },
		hover:(item, monitor)=>{
			console.log(item,"uppena")
		

		}
	
	  }));
	  const getInputParams = async ()=>{
		try{ 
	const response =await axioos.get("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65e9509828ebd37244d9d48f/instances/list")
	const filteredResponse =response?.data?.entities[0]?.selectedlist?.filter((e)=>{return e.Integration_Name==selectedIntegration?.Integration_Name})
	console.log(filteredResponse,"saregama")
	setInputParamsData(filteredResponse)
		}
		catch(err){
	setInputParamsData([])
	console.error(err,"padanis")
		}
	}

	  const { appState, setAppState,appState1,setAppState1,setSelectedNode,selectedNode,setapidatalist,selectedIntegration,refreshTree,setRefreshTree,mousePositionRef} = useAppState();

	const [endpoints, setEndpoints] = useState([]);
	const [inputParamsData,setInputParamsData] =useState([])
   const dispatch=useDispatch()
	const containerRef = useRef(null);
	const itemRefs = useRef({});
	const scrollToDroppedItem = useCallback((id) => {
		console.log(itemRefs.current,itemRefs.current[id],id
			,"heymama")
		if (containerRef.current && id && itemRefs.current[id]) {
			console.log("scrolling automatic")
		  itemRefs.current[id].scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	  }, []);
	
	const [draggedNodeID,setDraggedNodeID]=useState("")
  


	useEffect(()=>{
		scrollToDroppedItem(draggedNodeID);

	})
	useEffect(()=>{
getInputParams()

	},[selectedIntegration])

	const removeMethod = (id) => {


		const updatedEndpoints = findAndUpdateNode(appState1.endpoints, id, {
			selected: false,
			selectedOutputParams:[]
		});


		console.log("updatedEndpoints",updatedEndpoints.filter((item) => item.selected));
		setAppState1({ ...appState1, endpoints: updatedEndpoints });
		console.log(selectedNode,"bavuma")
        // setSelectedNode(prev=>{
		// 	if(prev.id==id){
		// 		return {}
		// 	}
		// 	else return {...prev,selectedOutputParams:[],selected:false}
		// })
		setSelectedNode({outputParams:[]})
		// setapidatalist(updatedEndpoints)


  

		// const filterredappstate1=appState1.endpoints.length>0&&appState1.endpoints.filter((data)=>{data.id!=id})
       

	

		console.log("removeMethod",id,"appState1",appState1)




	};
	const removeMethod1 =()=>{

	}







	const findAndUpdateNode = (treeArray, id, modification) => {
		return treeArray.map((node) => {
			if (node.id === id) {
				// Return a new node with the specified modifications
				return { ...node, ...modification };
			}

			if (node.children && node.children.length > 0) {
				// Recursively search and modify in the children
				return {
					...node,
					children: findAndUpdateNode(
						node.children,
						id,
						modification
					),
				};
			}

			// If the node doesn't match the id and has no children to search
			return { ...node };
		});
	}


	

	const flattenTreeArray = (treeArray, result = []) => {
		console.log(treeArray,"salman")
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


	// let selectedOutputParamarray = localStorage.getItem(`${selectedIntegration.Integration_Name}_selectedparams`);


	// this function is used to filter duplicates................

	const uniqueByPropertyName = (arr, propertyName) => {
		const seen = new Set();
		return arr.filter((item) => {
		  const propertyValue = item[propertyName];
		  if (!seen.has(propertyValue)) {
			seen.add(propertyValue);
			return true;
		  }
		  return false;
		});
	  };
	  



	//   useEffect(() => {
	// 	if (selectedOutputParamarray && selectedOutputParamarray.length > 0) {
	// 	  console.log("selectedOutputParamarray_from_setupconfig", selectedOutputParamarray);
	  
	// 	  const parsedOutputParamarray = JSON.parse(selectedOutputParamarray);
	  
	// 	  const flatArray = flattenTreeArray(parsedOutputParamarray);
	  
	// 	  // Remove duplicates based on the 'name' property
	// 	  const uniqueEndpoints = uniqueByPropertyName(flatArray, 'name');
	  
	// 	  setEndpoints(uniqueEndpoints);
	// 	} else {
	// 	  const flatArray = flattenTreeArray(appState1.endpoints);
	  
	// 	  // Remove duplicates based on the 'name' property
	// 	  const uniqueEndpoints = uniqueByPropertyName(flatArray, 'name');
	  
	// 	  setEndpoints(uniqueEndpoints);
	// 	}
	//   }, [appState1, selectedIntegration, selectedOutputParamarray]);
	useEffect(() => {
		const flatArray = flattenTreeArray(appState1?.endpoints);
		setEndpoints(flatArray);
	}, [appState1]);
	  
	  console.log("flaten_endpoints", endpoints);


	return (
		<section className="spec-form" >
			<div className="form-cards"  ref={(el) => { drop(el); containerRef.current = el; }}>
			{Array.isArray(endpoints) && endpoints.length > 0 &&
				endpoints
				  .filter((item) => item.selected)
				  .map((item, idx) =>  {
					let payload ={}
					if(status="succeeded"){
						console.log(data,"hiaravanid")
				 payload = data?.selectedlist?.filter((e)=>e.Integration_Name==selectedIntegration?.Integration_Name).find((e)=>e.id==item.id)
 					}
					
					console.log(payload,"samsung")
					return (
				  <div  ref={(el) => {
					if(true){
					itemRefs.current = {
					  ...itemRefs.current,
					  [item.id]: el
					}};
					console.log(`Ref for id ${item.id} set:`, el);
				  }}
				  >
					<SetupFormCard
					  api={item}
					  removeMethod={removeMethod}
					  key={idx}
					  selectedIntegration={selectedIntegration}
					  payload={payload}
					/>
					</div>
				  )})}
			</div>
			{/* <SearchPalette  /> */}
			<NewSearchTree />
		</section>
	);
};

export default SetupConfigurationForm;
