import React, { useContext } from "react";
import { AppContext } from "context/AppContext";
import MainTemplate from "components/MainTemplate/MainTemplate";
import StartView from "views/StartView/StartView";
import GameView from "views/GameView/GameView";
import PatternView from "views/PatternView/PatternView";
import EndView from "views/EndView/EndView";
import LevelChoice from "views/LevelChoiceView/LevelChoiceView";

function App() {
  const { currentView, animalData, imgSize } = useContext(AppContext);
  return (
    <MainTemplate>
      {currentView === "START" && <StartView />}
      {currentView === "LEVEL" && <LevelChoice />}
      {currentView === "GAME" && (
        <GameView animalData={animalData} imgSize={imgSize} />
      )}
      {currentView === "PATTERN" && <PatternView animalData={animalData} />}
      {currentView === "END" && <EndView />}
    </MainTemplate>
  );
}

export default App;
