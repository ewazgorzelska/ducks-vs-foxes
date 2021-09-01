import React from 'react';
import styled, { css } from 'styled-components';
import { shuffleArray } from 'helpers/shuffleArray';

const halfSize = css`
    width: ${props => props.imgSize.width/2 +'px'};
    height: ${props => props.imgSize.height/2 +'px'};
`;

const fullWidth = css`
    width: ${props => props.imgSize.width +'px'}
`;

const fullHeight = css`
    height: ${props => props.imgSize.height +'px'};
`;

const bgImage = css`
    background-image: url('${props => props.animalData.image}');
`;

const bgPosition_1 = css`
    background-position: right ${props => props.imgSize.width/2 +'px'} bottom ${props => props.imgSize.height/2 +'px'};
`;

const bgPosition_2 = css`
    background-position: right ${props => props.imgSize.width +'px'} bottom ${props => props.imgSize.height/2 +'px'};
`;

const bgPosition_3 = css`
    background-position: right ${props => props.imgSize.width/2 +'px'} bottom ${props => props.imgSize.height +'px'};
`;
const bgPosition_4 = css`
    background-position: right ${props => props.imgSize.width +'px'} bottom ${props => props.imgSize.height +'px'};
`;

const Puzzle = styled.div`
    ${halfSize}
    ${bgImage};
`;

const Piece1 = styled(Puzzle)`
    ${bgPosition_1}
`;
const Piece2 = styled(Puzzle)`
    ${bgPosition_2}
`;
const Piece3 = styled(Puzzle)`
    ${bgPosition_3}
`;
const Piece4 = styled(Puzzle)`
    ${bgPosition_4}
`;

const PiecesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const DropZone = styled(PiecesContainer)`
    ${fullWidth};
    ${fullHeight};
`;

const DropField = styled.div`
    ${halfSize}
    ${bgImage}
    opacity: 0.5;

    &:first-child {
        ${bgPosition_1}
    }
    &:nth-child(2) {
        ${bgPosition_2}
    }
    &:nth-child(3) {
        ${bgPosition_3}
    }
    &:last-child {
        ${bgPosition_4}
    }
`;

const PuzzleBoard = styled.div`
    display: flex;
    margin: 3em auto auto auto;
    gap: 20px;
`;

const GameView = ({ animalData, imgSize }) => {
   
    const pieces = [
        <Piece1 
            draggable="true" 
            key="piece1" 
            animalData={animalData} 
            imgSize={imgSize}
            id="piece1"
            onDragStart={e => handleDragStart(e)}  
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            />,
        <Piece2 
            draggable="true" 
            key="piece2" 
            animalData={animalData} 
            imgSize={imgSize}
            id="piece2"
            onDragStart={e => handleDragStart(e)}
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
        />,
        <Piece3 
            draggable="true" 
            key="piece3" 
            animalData={animalData} 
            imgSize={imgSize}
            id="piece3"
            onDragStart={e => handleDragStart(e)}
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
        />,
        <Piece4 
            draggable="true" 
            key="piece4" 
            animalData={animalData} 
            imgSize={imgSize}
            id="piece4"
            onDragStart={e => handleDragStart(e)}
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            />
    ];

    shuffleArray(pieces);

    const handleDragStart = e => {
        e.dataTransfer.setData("text/plain", e.target.id);
      };

    const handleDragOver = e => {
        e.preventDefault();
    };

      const handleDrop = e => {
        e.preventDefault();
        let data = e.dataTransfer.getData("text/plain");
        e.target.appendChild(document.getElementById(data));
        e.target.style.opacity = "1";
      };

    return (
        <PuzzleBoard>
            <DropZone imgSize={imgSize} 
                        >
                <DropField
                    imgSize={imgSize}
                    animalData={animalData}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
                <DropField
                    imgSize={imgSize}
                    animalData={animalData}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
                <DropField
                    imgSize={imgSize}
                    animalData={animalData}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
                <DropField
                    imgSize={imgSize}
                    animalData={animalData}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
            </DropZone>
            <PiecesContainer>
                {pieces.map(item => item)}
            </PiecesContainer>
        </PuzzleBoard>
    )
}

export default GameView;