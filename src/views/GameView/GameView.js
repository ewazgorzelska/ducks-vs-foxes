import React from 'react';
import styled from 'styled-components';

const Puzzle = styled.div`
    background-image: url('${props => props.animalData.image}');
    width: ${props => props.imgSize.width/2 +'px'};
    height: ${props => props.imgSize.height/2 +'px'};
`;

const Piece1 = styled(Puzzle)`
    background-position: right ${props => props.imgSize.width/2 +'px'} bottom ${props => props.imgSize.height/2 +'px'};
`;
const Piece2 = styled(Puzzle)`
    background-position: right ${props => props.imgSize.width/2 +'px'} bottom 0px;
`;
const Piece3 = styled(Puzzle)`
    background-position: right 0 bottom ${props => props.imgSize.height/2 +'px'};
`;
const Piece4 = styled(Puzzle)`
    background-position: right ${props => props.imgSize.width +'px'} bottom ${props => props.imgSize.height +'px'};
`;

const GameView = ({ animalData, imgSize }) => {
   
    return (
        <>
            <Piece1 animalData={animalData} imgSize={imgSize}/>
            <Piece2 animalData={animalData} imgSize={imgSize}/>
            <Piece3 animalData={animalData} imgSize={imgSize}/>
            <Piece4 animalData={animalData} imgSize={imgSize}/>
        </>
    )
}

export default GameView;