import React, { useContext, useEffect, useState } from 'react';
import './Tabs.css'; // You can create this CSS file for styling
import { MapperContext } from './MapperContext';
import { Link, NavLink, Outlet, useLocation, useNavigate, useRoutes, useSearchParams } from 'react-router-dom';
import { SqlEditor } from './SqlEditor';
import { Dataview } from './Dataview';

const Tabs = ({tabs,style }) => {

  // const tabs = [
  //   { label: 'sql', content: <SqlEditor/> },
  //   { label: 'data', content: <Dataview/> }
  // ];
  const location =useLocation()
  const navigate =useNavigate()
  const [activeTab, setActiveTab] = useState(tabs[0].label);

useEffect(()=>{
let currentTab=tabs.filter(data=>location.pathname.includes(data.label))
if(currentTab.length!=0){
  
  setActiveTab(currentTab[0].label)
}
},[location.pathname])
  const changeTab = (index) => {
    setActiveTab(index);
  };

console.log(location.search,location.pathname,"currentlocation")
return (
    <div className="tabs" style={style}>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={tab.label==activeTab ? 'active' : ''}
            onClick={() => {
              
              changeTab(tab.label)
              navigate("/integration/mapper"+tab.path+location.search)
              
            }}
          >
            {/* <NavLink style={{padding:"0px",textDecoration:"none"}} to={tab.path+location.search}>{tab.label}</NavLink> */}
           {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
   <Outlet/>
      </div>
    </div>
  );
};

export default Tabs;
