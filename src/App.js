import React from 'react';
import StartView from 'views/StartView/StartView';
import GlobalStyle from 'globalStyles';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainTemplate>
        <StartView />
      </MainTemplate>
      
    </>
  );
}

export default App;
