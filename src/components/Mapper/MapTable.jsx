import React, { useState,useContext, useEffect } from 'react';
import EditableTable from './EditableTable';
import './MapTable.css';
import { MapperContext } from './MapperContext';
import { transformJsonToTable } from './utils.js/transformJsonToTable';
import { updateJsonFromTable } from './utils.js/updateJsonFromTable';
import { unflattenArray } from './utils.js/unflatten';
import { synchronizeTrees } from './utils.js/synchronizeTrees';

const MapTable = () => {
    const {mapperData,setMapperData} =useContext(MapperContext)
    const [update,setUpdate] =useState(false)
console.log(mapperData,"tada")
  const columns = [
    { Header: 'Selected', accessor: 'selected', type: 'checkbox' },
    { Header: 'Column Name', accessor: 'columnName', type: 'text' },
    { Header: 'Analytics parameters', accessor: 'alias', type: 'dropdown',options:[
      "",
      "Mobius_PI_cost_fluctuation",
      "Mobius_PI_rolling_avg_usage",
      "Mobius_PI_id",
      "Mobius_PI_lowest_cost_fluctuation",
      "Mobius_PI_usage_changes",
      "Mobius_PI_lowest_storage_growth",
      "Mobius_PI_api_call_volume",
      "Mobius_PI_total_cost",
      "Mobius_PI_highest_storage_growth",
      "Mobius_PI_cumulative_usage",
      "Mobius_PI_cost_changes",
      "Mobius_PI_storage_growth",
      "Mobius_PI_user_type",
      "Mobius_PI_time",
      "Mobius_PI_product_type",
      "Mobius_PI_avg_cost_per_usage",
      "Mobius_PI_growth_rate",
      "Mobius_PI_avg_usage_growth_rate",
      "Mobius_PI_cumulative_cost",
      "Mobius_PI_total_usage",
      "Mobius_PI_usage_efficiency_trend",
      "Mobius_PI_avg_cost",
      "Mobius_PI_lowest_usage",
      "Mobius_PI_avg_storage_growth_rate",
      "Mobius_PI_avg_cost_per_storage_growth",
      "Mobius_PI_highest_usage",
      "Mobius_PI_cost_to_usage_ratio",
      "Mobius_PI_peak_hour",
      "Mobius_PI_cost_distribution",
      "Mobius_PI_avg_usage",
      "Mobius_PI_date"
    ] },
    {
      Header: 'Filter',
      accessor: 'filter',
      type: 'customdropdown',
      options: ['OR', 'AND'],
    },
    {
      Header: 'Aggregate',
      accessor: 'aggregate',
      type: 'dropdown',
      options: ['SUM', 'COUNT', 'MAX', 'MIN', 'AVG',"DISTINCT", ""]
    },
    { Header: 'Grouping', accessor: 'grouping', type: 'checkbox' },
  ];

  const [data, setData] = useState([]);
  
useEffect(()=>{
  
  setData(transformJsonToTable(mapperData.data))
},[mapperData])
  const handleUpdate = (rowId, columnName, value) => {
    setData((prevData) => {
      // Find the index of the row with the matching id
      const rowIndex = prevData.findIndex((row) => row.id === rowId);
      if (rowIndex === -1) {
        // Row with the given id not found, return previous state
        return prevData;
      }

      // Create a new array with the previous data
      const newData = [...prevData];
      // Update the specific row with the new value
      newData[rowIndex] = {
        ...newData[rowIndex],
        [columnName]: value,
      };
      return newData;
    })
    setUpdate(prev=>!prev)
  };
useEffect(()=>{
    setMapperData(prev=>({...prev,data:synchronizeTrees(mapperData.data1,
        updateJsonFromTable(data,mapperData.data))}))
console.log(synchronizeTrees(mapperData.data1,
updateJsonFromTable(data,mapperData.data)),"reinject")
},[update])
  return (
<div className='mappertable' style={{overflowY:"scroll",flexGrow:1}}>
      <EditableTable columns={columns} data={data} onUpdate={handleUpdate} setUpdate={setUpdate} />
      </div>
  );
};

export default MapTable;
