import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "context/AppContext";
import { Droppable } from "react-beautiful-dnd";
import Piece from "components/Game/Piece/Piece";

const Container = styled.div`
  border: 1px solid grey;
  margin-top: 30vh;
`;
const PiecesList = styled.div`
  display: grid;
  grid-template-columns: ${({ level }) =>
    level === 0 ? "1fr 1fr" : "1fr 1fr 1fr"};
`;

const GameField = ({ column, pieces, animalData }) => {
  const { imgSize, level } = useContext(AppContext);

  return (
    <Container>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <PiecesList
            ref={provided.innerRef}
            {...provided.droppableProps}
            level={level}
          >
            {pieces.map((piece, index) => {
              return (
                <Piece
                  key={piece.id}
                  piece={piece}
                  index={index}
                  animalData={animalData}
                  imgSize={imgSize}
                  level={level}
                />
              );
            })}
            {provided.placeholder}
          </PiecesList>
        )}
      </Droppable>
    </Container>
  );
};

export default GameField;
