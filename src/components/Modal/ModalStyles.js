import styled, { css } from "styled-components";
import { Button } from "components/Button/Button";
import { bgImage } from "components/Game/Piece/PieceStyles";
import { GrFormClose } from "react-icons/gr";
import { device } from "responsiveStyles/breakpoints";

const flex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const animalSize = css`
  width: 75vw;
  height: 45vh;

  @media ${device.laptop} {
    width: 60vw;
  }

  @media ${device.laptopL} {
    width: 25vw;
    height: 37vh;
  }
`;

export const ModalContainer = styled.div`
  width: 90%;
  height: 63%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${flex}
  opacity: 1;
  background-color: #dfe3ee;
  border: 1px solid lightgrey;

  @media ${device.laptop} {
    width: 70vw;
  }
  @media ${device.laptopL} {
    width: 30vw;
    height: 55vh;
  }
`;

export const AnimalImage = styled.div`
  margin-top: 12px;
  ${bgImage}
  background-repeat: no-repeat;
  background-size: 100% 100%;
  ${animalSize}
`;

export const LoadingWrapper = styled.div`
  font-size: 20px;
  font-weight: 700;
  gap: 20px;
  ${flex}
`;

export const Error = styled(LoadingWrapper)`
  background-color: pink;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0%;
  right: 0%;
  ${flex}
  flex-direction: row;
  cursor: pointer;
  font-size: 20px;

  @media ${device.tablet} {
    font-size: 40px;
  }
`;

export const NewGameButton = styled(Button)`
  width: 45vw;
  margin-top: 3vh;

  @media ${device.laptop} {
    width: 25vw;
  }
  @media ${device.laptopL} {
    width: 15vw;
  }
`;

export const CloseIcon = styled(GrFormClose)``;
