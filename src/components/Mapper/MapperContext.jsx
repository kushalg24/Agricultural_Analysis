import { useContext } from 'react';
import { createContext, useEffect, useMemo, useState } from 'react'
import AppContext from '../../context/AppContext/AppContext';

import { generateMapping } from './utils.js/Join'
import { transformJsonToTable } from './utils.js/transformJsonToTable';
export const MapperContext =createContext()
export const MapperProvider=({children})=>{

const {appState1} =useContext(AppContext)
console.log(appState1,"mapper")
const [mapperData,setMapperData] = useState({
    data:appState1?.endpoints,
    data1:appState1?.endpoints,     
    initialQuery:generateMapping,
  
    })
useEffect(()=>{
setMapperData({
    data:appState1?.endpoints||[],
    data1:(appState1?.endpoints)?appState1.endpoints:[],     
    initialQuery:generateMapping,
  
    })
},[appState1])
    console.log(mapperData.data,"bull")
const data1=useMemo(()=>{
transformJsonToTable(mapperData.data)
},[appState1]) 
const [sqlQuery, setSqlQuery] =useState(mapperData.initialQuery(mapperData.data));
return <MapperContext.Provider value={{mapperData:mapperData,setMapperData:setMapperData,sqlQuery:sqlQuery,setSqlQuery:setSqlQuery}}>
    {children}
</MapperContext.Provider>
}
