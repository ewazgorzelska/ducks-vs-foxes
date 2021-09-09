import styled from "styled-components";
import duck from "assets/duck.png";
import fox from "assets/fox.jpg";
import { device } from "responsiveStyles/breakpoints";

export const StartViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  background-color: #4267b2;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(66, 103, 178, 0.6);
  box-shadow: 5px 5px 15px 5px rgba(66, 103, 178, 0.6);

  @media ${device.laptopL} {
    max-width: 40vw;
    max-height: 90vh;
    margin-top: 5vh;
  }

  @media ${device.desktop} {
    max-width: 40vw;
    max-height: 90vh;
    margin-top: 5vh;
  }
`;

export const GameTitle = styled.h1`
  font-size: 40px;
  color: #fff;
  font-weight: bold;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;
`;

export const Animal1 = styled.div`
  width: 30vw;
  height: 15vh;
  background-image: url(${duck});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 37% 50%;
  border-radius: 10px;

  @media ${device.tablet} {
    height: 20vh;
    width: 25vw;
  }
  @media ${device.laptop} {
    width: 20vw;
  }
  @media ${device.laptopL} {
    width: 10vw;
    height: 15vh;
  }
`;

export const Animal2 = styled(Animal1)`
  background-image: url(${fox});
`;

export const AnimalWrapper = styled.div`
  display: flex;
  gap: 5vw;
`;
