import React from 'react';
import { AppContextProvider } from 'AppContext/AppContext';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import StartView from 'views/StartView/StartView';

function App() {

  return (
      <AppContextProvider>
        <MainTemplate>
          <StartView />
        </MainTemplate>
      </AppContextProvider>
  );
}

export default App;
