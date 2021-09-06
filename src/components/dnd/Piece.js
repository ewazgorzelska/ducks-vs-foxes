import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { StyledPiece, Container } from './PieceStyles';

const Piece = ({ piece, index, animalData, imgSize }) => {
    return (
        <Draggable draggableId={piece.id} index={index}>
            {provided => (
                <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                    <StyledPiece
                        piece={piece}  
                        animalData={animalData}
                        imgSize={imgSize} 
                    />
                </Container>
            )}
        </Draggable>
        
    )
}

export default Piece;
