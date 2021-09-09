import React from "react";
import styled from "styled-components";
import { bgImage } from "components/dnd/PieceStyles";
import { animalSize } from "components/MainModal/MainModalStyles";

const Pattern = styled.div`
  ${bgImage}
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform width 5s ease-in-out;
  ${animalSize}
`;

const PatternView = ({ animalData }) => {
  return <Pattern animalData={animalData} />;
};

export default PatternView;
