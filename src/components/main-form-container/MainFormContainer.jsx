import MainFormHeader2 from "./main-from-header/MainFormHeader2";
import "./main-form-container.css";
import { createContext, useContext, useEffect, useState } from "react";
import SidePanel from "../SidePanel";
import { Outlet } from "react-router-dom";
import {MainFormHeader} from "./main-from-header/MainFormHeader";
import AppContext from "../../context/AppContext/AppContext";
import { db } from "../../App";


// async function AddToLocalBase(integration,payload){
// 	try{
// 	  let users = await db.collection(integration).add({
// 	id:1,...payload
// 	  })
// 	  console.log(users,"added or not")
// 	}
// 	catch(err){
// 	console.log(err,"error while adding to localbase")
// 	}
// 	  }
// 	  async function UpdateLocalBase(integration,payload){
// 		try{
// 		  let previousdata =await getDataFromLocalBase(integration)
// 		  console.log("previousdata",{...previousdata[0],...payload})
// 		let users =await db.collection(integration).doc({id:1}).update({...previousdata[0],
// 		  ...payload
// 		})
// 		}
// 		catch(err){
// 		console.log(err,"error while updating loacalbase")
// 		}
// 	  }
// 	  async function getDataFromLocalBase(integration){
// 		try {
// 		  let users = await db.collection(integration)
// 			.get()
// 		  console.log('data from localbase ', users)
// 		  return users
// 		}
// 		catch(error) {
// 		  console.log('error fetching from localbase', error)
// 		  return []
// 		}
// 	  }
const MainFormContainer = ({ headerToDisplay }) => {
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
		AddToLocalBase,
		UpdateLocalBase,
		getDataFromLocalBase,
		
	
		
	  } = useContext(AppContext);

	  //sync appstate when integartion is selected
	//   useEffect(()=>{
	// 	console.log("bahubali1")
	// 	return ()=>{
	// 		console.log("bahubali2")
	// 	}
		
	//   },[])
	// const MainformContext =createContext()
	// const MainformProvider =({children}) =>{
	// 	return (<MainformContext.Provider value={{}}>

	// 		{
	// 			children
	// 		}
	// 	</MainformContext.Provider>)
	// }
	
	// useEffect(()=>{
	// 	//     //update localbase if apidatalist changes if it is not empty
	// 		console.log("updatelocalbase is run","apidatalist is",apidatalist,"integration nams is ",selectedIntegration.Integration_Name,appState1)
	// 	if(apidatalist.length!==0)UpdateLocalBase(selectedIntegration.Integration_Name,{apidatalist:apidatalist},3)
		
	// 	  },[apidatalist])
		
		//   useEffect(()=>{
		// 	//update localbase
		//   //   console.log("updatelocalbase is run")
		//   //skip first render
		//   // initialRender.current=false
		 
		// 	//update the  appstate1 in localbase when appstate1 is updated skip if it is empty
		//   if(appState1?.endpoints?.length>0){
		// 	console.log("update the  appstate1 in localbase when appstate1 is updated skip if it is empty")
		// 	UpdateLocalBase(selectedIntegration.Integration_Name,{appState1:appState1},2)}
		//   // UpdateLocalBase(selectedIntegration.Integration_Name,{appState1:appState1,apidatalist:apidatalist})
		//   },[appState1])
		  
// useEffect(()=>{
// // updates the appstate when apidatalist changes
// setAppState1(prev=>({...prev,endpoints:apidatalist}))

//   // setAppState1(prev=>{...prev,endpoints:apidatalist})


// },[apidatalist])
	return (
		<main className="main-container">
			<SidePanel />
			<section className="main-form-container">
				{headerToDisplay === 2 ? (
				<MainFormHeader>
              <Outlet />
               </MainFormHeader>
				) : (
					<>
					<MainFormHeader2 />
					<Outlet />
					</>
				)}
				
			</section>
		</main>
	);
};

export default MainFormContainer;
