import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SideDrawer from './SideDrawer.jsx'
import { SqlEditor } from './SqlEditor.jsx'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Tabs from './Tabs.jsx'
import { createContext } from 'react'
import { MapperProvider } from './MapperContext.jsx'
import MapTable from './MapTable.jsx'
import { useResizable } from "react-resizable-layout"
import Seperator from './Seperator.jsx'
import { Dataview } from './Dataview.jsx'
import { useRoutes } from 'react-router-dom'
import TabRoutes from './TabRoutes.jsx'


const tabs = [
  { label: 'sql', content: <SqlEditor/>,path:"/" },
  { label: 'dataviewer', content: <Dataview/>,path:"/dataviewer" }
];



export default function Mapper(){
  let  container=useRef(null)
  let container2 =useRef(null)
  const {
    isDragging: isTerminalDragging,
    position: terminalH,
    splitterProps: terminalDragBarProps,
  } = useResizable({
    axis: "y",
    initial: 400,
    min: 50,
    containerRef:container2
  });
  const {
    isDragging: isPluginDragging,
    position: pluginW,
    splitterProps: pluginDragBarProps,
    } = useResizable({
    axis: "x",
    initial: 500,
    min: 50,
    containerRef:container
  });

return (

  
<MapperProvider>
   
    {/* <SideDrawer/> */}
    <div ref={container2} style={{width:"100%",height:"calc(100vh - 120px)",display:"flex",flexDirection:"column"}}>
    <div style={{width:"100%",flexShrink:0,height:terminalH}}>
    <App />
    </div>
    <Seperator 
      isDragging={isTerminalDragging} {...terminalDragBarProps} style={{ height: "3px",
  backgroundColor: "rgb(247 247 247)",
  cursor: "row-resize",flexShrink: 0}}></Seperator>
   
    <div ref={container} style={{width:"100%",flexGrow:1,display:"flex",overflow:"scroll"}}>
 {/* <Tabs tabs={tabs} style={{width:pluginW}}/> */}
 <TabRoutes tabs={tabs} style={{width:pluginW}}/>

<Seperator 
      isDragging={isPluginDragging} {...pluginDragBarProps} style={{ width: "3px",
  backgroundColor: "rgb(247 247 247)",
  cursor: "col-resize",flexShrink: 0}}></Seperator>
    <MapTable/>

    </div>
    </div>
    </MapperProvider>


)
}