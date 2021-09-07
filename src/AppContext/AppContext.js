import React, { createContext, useState } from "react";
import GlobalStyle from "globalStyles";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [animalData, setAnimalData] = useState();
  const [currentView, setCurrentView] = useState("START");
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const [start, setStart] = useState();

  return (
    <AppContext.Provider
      value={{
        animalData,
        setAnimalData,
        currentView,
        setCurrentView,
        imgSize,
        setImgSize,
        start,
        setStart,
      }}
    >
      <GlobalStyle />
      {children}
    </AppContext.Provider>
  );
};
