import { useContext, useEffect, useState } from "react";
import "./main-form-header.css";
import { useLocation, useNavigate } from "react-router-dom";
import AppContext from "../../../context/AppContext/AppContext";
const MainFormHeader = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const {currentPath, setCurrentPath,selectedPlatform}=useContext(AppContext)
	const handleFormChange = (path) => {
		navigate(path);
		console.log(path,"billa")
		setCurrentPath(path);
	};
	useEffect(() => {
		setCurrentPath(location.pathname);
	});
	return (
		<header className="main-form-header">
			<nav>
				<ul>
					<li
						className={`list-item ${
							currentPath === "/setup/platform"
								? "border-btm"
								: ""
						}`}
						onClick={() => handleFormChange(`/setup/platform?platformName=${selectedPlatform?.platform_name}`)}
					>
						Platform setup
					</li>
					<li
						className={`list-item ${
							currentPath === "/setup/analytics"
								? "border-btm"
								: ""
						}`}
						onClick={() => handleFormChange(`/setup/analytics?platformName=${selectedPlatform?.platform_name}`)}
					>
						Analytics Setup
					</li>
					{currentPath === "/setup/platform" ? (
						<li className="list-item">
							<button className="discard-btn">Discard</button>
							<button className="save-btn">Save</button>
						</li>
					) : (
						<li className="list-item">
							<button className="discard-btn-1">Discard</button>
							<button className="save-btn-1">Save</button>
						</li>
					) }
				</ul>
			</nav>
		</header>
	);
};

export default MainFormHeader;
