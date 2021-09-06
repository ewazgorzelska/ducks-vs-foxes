import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'AppContext/AppContext';
import { Droppable } from 'react-beautiful-dnd';
import Piece from 'components/dnd/Piece';


const Container = styled.div`
    margin: 5em auto;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;
const PiecesList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const GameField = ({ column, pieces, animalData }) => {

    const { imgSize } = useContext(AppContext);

    return (
        <Container>
            <Droppable droppableId={column.id}>
                { provided => (
                    <PiecesList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        { 
                        pieces.map((piece, index) => {
                        return (
                            <Piece 
                                key={piece.id} 
                                piece={piece} 
                                index={index} 
                                animalData={animalData}
                                imgSize={imgSize}
                            />
                        )
                    } ) 
                        
                        }
                        {provided.placeholder}
                    </PiecesList>  
                    )
                }     
            </Droppable>
        </Container>
    )
}

export default GameField;