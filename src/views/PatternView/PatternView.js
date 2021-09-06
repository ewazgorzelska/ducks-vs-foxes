import React from 'react';
import styled from 'styled-components';
import { bgImage } from 'components/dnd/PieceStyles';

const Pattern = styled.div`
  width: 300px;
  height: 200px;
  margin-top: 5em;
  ${bgImage}
`

const PatternView = ({ animalData }) => {
  return <Pattern animalData={animalData} />
}

export default PatternView;
