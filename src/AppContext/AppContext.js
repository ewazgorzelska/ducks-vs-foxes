import React, { createContext, useState } from 'react';
import GlobalStyle from 'globalStyles';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [ animalData, setAnimalData ] = useState();
    const [ currentView, setCurrentView ] = useState('START');
    const [ imgSize, setImgSize ] = useState({width: 0, height: 0});
    const [ dropped, setDropped ] = useState({
                                            el1: false,
                                            el2: false,
                                            el3: false,
                                            el4: false
                                            });

    return (
        <AppContext.Provider value={{ 
                                    animalData, 
                                    setAnimalData,
                                    currentView, 
                                    setCurrentView,
                                    imgSize,
                                    setImgSize,
                                    dropped, 
                                    setDropped
                                    }}>
            <GlobalStyle />
            {children}
        </AppContext.Provider>
    )
}
