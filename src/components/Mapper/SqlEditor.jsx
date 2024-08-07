import React, { useContext, useEffect } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-sqlserver"
import "ace-builds/src-min-noconflict/ext-language_tools";
import { MapperContext } from './MapperContext';
import play from "../../images/play.svg"
import { useLocation, useNavigate } from 'react-router-dom';


export const SqlEditor = ({value}) => {
    const {mapperData} =useContext(MapperContext)
    const [sqlQuery, setSqlQuery] = React.useState(mapperData.initialQuery(mapperData.data));
   const location =useLocation()
   const navigate=useNavigate()
    useEffect(()=>{
      let query=mapperData.initialQuery(mapperData.data).replace(/,\s*,/g, ',').replace(/,\s*,/g, ',').replace(/,\s*FROM/g, ' FROM')
      console.log(query,"camunda")

setSqlQuery(query)
    },[mapperData.data])
    console.log(mapperData,"bhai")

    

    const onChange = (newSqlQuery) => {
      setSqlQuery(newSqlQuery);
      console.log(newSqlQuery,"sqlquery")
    };
  console.log("sql query",sqlQuery)
  
    return (
      <div style={{display:"flex",justifyContent:"rows",position:"relative"}}>
    
      <div style={{flexGrow:"1"}}>
      <AceEditor
      id="editor"
        aria-label="editor"
        mode="mysql"
        theme="sqlserver"
        name="editor"
        width="100%"
        height="100%"
        fontSize={15}
        minLines={15}
        maxLines={100}
        wrapEnabled={true}
        showPrintMargin={false}
        showGutter
        placeholder="Write your query here..."
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={sqlQuery}
        onChange={onChange}
        showLineNumbers
    
      />
      </div>
      <button id="execute" style={{zIndex:2,right:0}} onClick={()=>{
        navigate("/integration/mapper/dataviewer"+location.search,{state:{
          "query":sqlQuery
        }})
      }}>Try It<img src={play}/></button>
  </div>
    );
  };
