import MainFormHeader2 from "./main-from-header/MainFormHeader2";
import "./main-form-container.css";
import { createContext, useContext, useEffect, useState } from "react";
import SidePanel from "../SidePanel";
import { Outlet } from "react-router-dom";
import MainFormHeader from "./main-from-header/MainFormHeader";
import AppContext from "../../context/AppContext/AppContext";
import { db } from "../../App";



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

	
	return (
		<main className="main-container">
			<SidePanel />
			<section className="main-form-container">
				{headerToDisplay === 2 ? (
                    <>
					<MainFormHeader />
                    <Outlet />
                    </>
                    
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
