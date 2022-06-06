import React, { createContext, useState, useEffect } from 'react';

export const SystemContext = createContext();

export const SystemContextProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);

  return (
    <SystemContext.Provider
      value={{
        loader,
        setLoader,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
