import styled from "styled-components";
import { device } from "responsiveStyles/breakpoints";

export const Button = styled.button`
  color: #fff;
  width: 30vw;
  height: 7vh;
  background-color: #e3256b;
  font-size: 3vh;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 15px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    9px 2px 9px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 9px 2px 9px 5px rgba(0, 0, 0, 0);
  cursor: pointer;

  @media ${device.tablet} {
    width: 23vw;
    height: 7vh;
  }
  @media ${device.laptop} {
    width: 15vw;
    height: 7vh;
  }
  @media ${device.laptopL} {
    width: 10vw;
    height: 7vh;
  }
`;
