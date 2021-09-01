import React, { useContext } from 'react';
import { AppContext } from 'AppContext/AppContext';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import StartView from 'views/StartView/StartView';
import GameView from 'views/GameView/GameView';

function App() {

  const { currentView, imgSize, animalData, dropped, setDropped } = useContext(AppContext);
  return (
      <MainTemplate>
        {currentView === 'START' && <StartView />}
        {currentView === 'GAME' 
        && <GameView 
          animalData={animalData} 
          imgSize={imgSize}
          dropped={dropped} 
          setDropped={setDropped}
          />}
      </MainTemplate>
  );
}

export default App;
