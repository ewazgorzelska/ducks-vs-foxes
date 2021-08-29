import React from 'react';
import { AppContextProvider } from 'AppContext/AppContext';
import StartView from 'views/StartView/StartView';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

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
