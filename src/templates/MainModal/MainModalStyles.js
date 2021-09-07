import styled, { css } from "styled-components";
import { Button } from "components/atoms/Button/Button";
import { bgImage } from "components/dnd/PieceStyles";

const flex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  min-width: 450px;
  min-height: 450px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${flex}
  opacity: 1;
  background-color: #dfe3ee;
`;

export const ContentWrapper = styled.div`
  width: 350px;
  height: 350px;
`;

export const AnimalImage = styled.div`
  width: 300px;
  height: 300px;
  padding-top: 10px;
  ${bgImage}
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const LoadingWrapper = styled(ContentWrapper)`
  font-size: 20px;
  font-weight: 700;
  gap: 20px;
  ${flex}
`;

export const Error = styled(LoadingWrapper)`
  background-color: pink;
`;

export const CloseButton = styled.button`
  width: 2vw;
  height: 4vh;
  position: absolute;
  top: 0%;
  right: 0%;
  ${flex}
  flex-direction: row;
  cursor: pointer;
`;

export const NewGameButton = styled(Button)`
  font-size: 20px;
  width: 160px;
  height: 40px;
  margin-top: 5vh;
`;
