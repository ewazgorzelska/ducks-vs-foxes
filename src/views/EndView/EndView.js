import React, { useContext } from "react";
import styled from "styled-components";
import { StartViewContainer, GameTitle } from "views/StartView/StartViewStyles";
import { NewGameButton } from "components/MainModal/MainModalStyles";
import { AppContext } from "context/AppContext";
import { prepareTime } from "helpers/prepareTime";
import { GiPartyPopper } from "react-icons/gi";
import "./EndView.css";
import { IconContext } from "react-icons";

const Container = styled(StartViewContainer)`
  background-color: #4267b2;
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const TimeInfo = styled.div`
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 30px;
    margin-top: 15px;
    color: #e3256b;
  }
`;

const EndView = () => {
  const { start, setCurrentView } = useContext(AppContext);

  const handleNewGame = () => {
    setCurrentView("START");
  };

  return (
    <Container>
      <IconWrapper>
        <IconContext.Provider value={{ className: "party-icon" }}>
          <GiPartyPopper size={64} />
          <GiPartyPopper size={64} style={{ transform: "rotateY(180deg)" }} />
        </IconContext.Provider>
      </IconWrapper>
      <GameTitle>Congrats !!!</GameTitle>
      <TimeInfo>
        Your time is: <span>{prepareTime(start)}</span>
      </TimeInfo>
      <NewGameButton onClick={handleNewGame}>New Game</NewGameButton>
    </Container>
  );
};

export default EndView;
