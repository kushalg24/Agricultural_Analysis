import { useRoutes } from 'react-router-dom';

import {Dataview} from './Dataview';
import { SqlEditor } from './SqlEditor';
import Tabs from './Tabs';

const TabRoutes = ({tabs,style}) => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Tabs tabs={tabs} style={style} />,
      children: [
        { element: <SqlEditor /> ,index:true },
        { path: 'dataviewer', element: <Dataview /> },
      ],
    },
  ]);

  return routes;
};

export default TabRoutes;