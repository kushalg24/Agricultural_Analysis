import React, { createContext, useContext, useState } from 'react';

// Create the context variable
const MainformContext = createContext();

// Create the context provider component
export const MainformProvider = ({ children }) => {
  const [selIntegration, setIntegration] = useState({});
  const [selPlatform, setPlatform] = useState([]);
  const [refreshMainform,setRefreshMainForm] =useState(false)

  return (
    <MainformContext.Provider value={{ selIntegration, setIntegration, selPlatform, setPlatform,setRefreshMainForm }}>
      {children}
    </MainformContext.Provider>
  );
};

// Export the context variable
export { MainformContext };
