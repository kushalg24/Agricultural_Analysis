import { useRoutes } from "react-router-dom"
import Tabs from "./Tabs"

export default function TabContent(){

    const routes =useRoutes([{
        path: "/",element:<Tabs><SqlEditor/></Tabs>
      },{
        path:"dataviewer",element:<Tabs><Dataview/></Tabs>
      }])
   return routes
}