import React, { useContext } from 'react';
import { AppContext } from 'AppContext/AppContext';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import StartView from 'views/StartView/StartView';
import GameView from 'views/GameView/GameView';

function App() {

  const { currentView, animalData, imgSize } = useContext(AppContext);
  return (
      <MainTemplate>
        {currentView === 'START' && <StartView />}
        {currentView === 'GAME' 
        && <GameView 
          animalData={animalData}
          imgSize={imgSize} 
          />}
      </MainTemplate>
  );
}

export default App;
