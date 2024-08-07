

import { useCallback } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css"
import { nodeTypes } from "./nodes";


import { initialNodes } from "./nodes";
import { edgeTypes, initialEdges,} from "./edges";
import { useFlow } from "./hooks/useFlow";
import { useDrop } from "react-dnd";
import { useEffect } from "react";
import "./App.css"
export default function App() {
  const [initialNodes,initialEdges]=useFlow()
  console.log(initialNodes,"sravan")
  const [nodes,setNodes , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  console.log(nodes,"saleem")

  useEffect(()=>{
setNodes(initialNodes)
  },[initialNodes])
  useEffect(()=>{
    setEdges(initialEdges)
      },[initialEdges])
  const onConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

console.log(edges)
  return (
    <div style={{width:"100%",height:"100%"}} >
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
    </div>
  );
}
