import React, { createContext, useState } from 'react';
import GlobalStyle from 'globalStyles';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [ animalData, setAnimalData ] = useState();
    const [currentView, setCurrentView] = useState('START');
    return (
        <AppContext.Provider value={{ 
                                    animalData, 
                                    setAnimalData,
                                    currentView, 
                                    setCurrentView
                                    }}>
            <GlobalStyle />
            {children}
        </AppContext.Provider>
    )
}
