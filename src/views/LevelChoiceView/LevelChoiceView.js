import React, { useContext } from "react";
//import styled from 'styled-components';
import { AppContext } from "context/AppContext";
import {
  StartViewContainer as LevelChoiceContainer,
  GameTitle as LevelChoiceHeading,
} from "views/StartView/StartViewStyles";
import { NewGameButton as ChoiceButton } from "components/MainModal/MainModalStyles";

const LevelChoiceView = () => {
  const { setLevel, setCurrentView, setStart } = useContext(AppContext);

  const handleLevel = (value) => {
    setLevel(value);
    setCurrentView("GAME");
    setStart(new Date().getTime());
  };
  return (
    <LevelChoiceContainer>
      <LevelChoiceHeading>Choose your level</LevelChoiceHeading>
      <ChoiceButton onClick={() => handleLevel(0)}>Puppy</ChoiceButton>
      <ChoiceButton onClick={() => handleLevel(1)}>Owl</ChoiceButton>
    </LevelChoiceContainer>
  );
};

export default LevelChoiceView;
