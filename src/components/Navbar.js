import { useState,useEffect } from "react";
import "../styles/Navbar.css";
import snap from "../images/snap.png";
import logo from "../images/LogoSL.png";
import profile from "../images/profile.png";
import cogWheel from "../images/cogwheel.svg";
import dashLayout from "../images/dash-layout.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import gaian from'../images/GaianLogo.svg'


function Navbar({ userName }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCogwheel, setShowCogwheel] = useState(false);
  const loginData =useSelector(state=>state.loginslice)
  

  useEffect(() => {
    const currentPath = location.pathname;
    setShowCogwheel(
      currentPath === "/setup/analytics" ||
      currentPath === "/setup/platform" ||
      currentPath === "/integration" ||
      currentPath ==="/integration/configuration"||
      currentPath==="/integration/lifecycle"
    );
  }, [location.pathname]);

  const toggleScreens = () => {
    if (showCogwheel) {
      navigate("/");
    } else {
      navigate("/setup/analytics");
    }
  };


  return (
    <div className="Navbar">
      <div className="nav-left">
      {/* <img src={logo} id="sl-logo" /> */}
        <img src={gaian} style={{ height: "40px",color:"white" }} />
        <div
          className="navitem logotext"
          onClick={() => {
            navigate("/");
          }}
        ></div>
      </div>
      <div className="nav-middle">Cloud Asset Sentinel</div>
      <div className="nav-right">
        <h5 className="username">{loginData.user}</h5>
        <img src={profile} />
        {showCogwheel ? (
          <img
            src={dashLayout}
            className="navbar-cogwheel"
            onClick={toggleScreens}
          ></img>
        ) : (
          <img
            src={cogWheel}
            className="navbar-cogwheel"
            onClick={toggleScreens}
          ></img>
        )}
      </div>
    </div>
  );
}

export default Navbar;
