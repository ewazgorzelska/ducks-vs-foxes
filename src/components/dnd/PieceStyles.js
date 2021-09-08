import styled, { css } from "styled-components";

const getPositionWidth = (props) => {
  const imageWidth = props.imgSize.width;
  switch (props.piece.bg.right) {
    case "half-w":
      return imageWidth / 2;
    case "full-w":
      return imageWidth;
    case "1third-w":
      return imageWidth / 3;
    case "2third-w":
      return (imageWidth * 2) / 3;
    default:
      console.log("Wrong image width.");
  }
};

const getPositionHeight = (props) => {
  const imageHeight = props.imgSize.height;
  switch (props.piece.bg.bottom) {
    case "half-h":
      return imageHeight / 2;
    case "full-h":
      return imageHeight;
    default:
      console.log("Wrong image height.");
  }
};

export const bgImage = css`
  background-image: url("${({ animalData }) => animalData.image}");
`;

export const StyledPiece = styled.div`
  width: ${({ imgSize, level }) =>
    level === 0 ? imgSize.width / 2 + "px" : imgSize.width / 3 + "px"};
  height: ${({ imgSize }) => imgSize.height / 2 + "px"};
  ${bgImage}
  background-position: right ${(props) =>
    getPositionWidth(props) + "px"} bottom ${(props) =>
    getPositionHeight(props) + "px"};
`;

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  background-color: #4267b2;
`;
