import React, { createContext, useState } from 'react';
import GlobalStyle from 'globalStyles';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [ animalData, setAnimalData ] = useState();
   
    return (
        <AppContext.Provider value={{ 
                                    animalData, 
                                    setAnimalData,
                                    }}>
            <GlobalStyle />
            {children}
        </AppContext.Provider>
    )
}
