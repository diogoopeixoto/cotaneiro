import React, {createContext, useState} from 'react';


export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  return (
    <AppContext.Provider value={{
      isNavbarOpened,
      setIsNavbarOpened,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
