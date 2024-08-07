
import { Position } from "reactflow";
import CustomHandle from "../handles/CustomHandle";
import { useState } from "react";
import "./PositionLogger.css";



export function PositionLoggerNode({
  xPos,
  yPos,
  data,
  isConnectable 
}) {
  const x = `${Math.round(xPos)}px`;
  const y = `${Math.round(yPos)}px`;
  console.log(data,"hiramu")
  const Tooltip = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  
    return (
      <div className={`tooltip-container ${isVisible ? 'show-tooltip' : ''}`}>
        <div
          className="tooltip-target"
          onDoubleClick={handleClick}

        >
          {children}
        </div>
        {isVisible && (
          <div className="tooltip">
            <pre>{JSON.stringify(text, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  };
  const json = {
    ORGANIZATION_NAME: 'AXOIIHB',
    CONTRACT_NUMBER: '207684',
    ACCOUNT_NAME: 'OF84409',
    ACCOUNT_LOCATOR: 'SJ62485',
    REGION: 'AZURE_CENTRALINDIA',
    SERVICE_LEVEL: 'Standard',
    USAGE_DATE: '19802',
    USAGE_TYPE: 'overage-serverless tasks',
    USAGE: '0.003',
    CURRENCY: 'USD',
    USAGE_IN_CURRENCY: '0.01',
    BALANCE_SOURCE: 'Overage',
    BILLING_TYPE: 'CONSUMPTION',
    RATING_TYPE: 'COMPUTE',
    SERVICE_TYPE: 'SERVERLESS_TASK',
    IS_ADJUSTMENT: 'false',
  };

  return (
    <Tooltip text={json}>
    <div className="react-flow__node-default" style={{padding:"0px",width:"auto"}}>
      {data.label && <div style={{fontFamily:"monospace",color:"white",background:"#0159A1"}}>{data.label}</div>}

      <div style={{display:"flex",flexDirection:"column"}}>
       {
        data?.selectedOutputParams?.map(
          (paramName, index) => (
            <>
         
        
            <span key={index} style={index%2==0?{background:"beige",width:"100%"}:{width:"100%"}}>
              {paramName}
              
            </span>
         
            <CustomHandle type="source" id={data.label+paramName+"source"} position={Position.Right} style={{top:index*18+30}} styleid={`bottom-${index}`} isConnectable={isConnectable} />
            <CustomHandle type="target" id={data.label+paramName+"target"} position={Position.Left} style={{top:index*18+30}} styleid={`left-${index}`} isConnectable={isConnectable} />
            </>
          )
        )
       }
       </div>
    </div>
    </Tooltip>
  );
}
