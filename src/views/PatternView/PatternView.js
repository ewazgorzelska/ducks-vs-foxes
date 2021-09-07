import React from "react";
import styled from "styled-components";
import { bgImage } from "components/dnd/PieceStyles";

const Pattern = styled.div`
  width: 600px;
  height: 500px;
  ${bgImage}
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform width 5s ease-in-out;
`;

const PatternView = ({ animalData }) => {
  return <Pattern animalData={animalData} />;
};

export default PatternView;
