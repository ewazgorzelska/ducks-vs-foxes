import React from 'react';
import { shuffleArray } from 'helpers/shuffleArray';
import * as Styled from './GameViewStyles';

const GameView = ({ animalData, imgSize }) => {
    const dropZone = document.getElementById('dropZone');
   
    const pieces = [
        <Styled.Piece1 
            draggable="true" 
            key="piece1" 
            animalData={animalData} 
            imgSize={imgSize}
            id="piece1"
            onDragStart={e => handleDragStart(e)}  
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            />,
        <Styled.Piece2 
            draggable="true" 
            key="piece2" 
            animalData={animalData} 
            imgSize={imgSize}
            id="piece2"
            onDragStart={e => handleDragStart(e)}
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
        />,
        <Styled.Piece3 
            draggable="true" 
            key="piece3" 
            animalData={animalData} 
            imgSize={imgSize}
            id="piece3"
            onDragStart={e => handleDragStart(e)}
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
        />,
        <Styled.Piece4 
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

//------------------------------DnD Logic-----------------------------------------------
    const handleDragStart = e => {

        e.dataTransfer.setData("text/plain", e.target.id);

        if (dropZone.contains(e.target)) {
            e.target.parentElement.style.opacity="0.5";
        } 
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
        <Styled.PuzzleBoard>
            <Styled.DropZone 
                id="dropZone"
                imgSize={imgSize}
                        >
                <Styled.DropField
                    imgSize={imgSize}
                    animalData={animalData}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
                <Styled.DropField
                    imgSize={imgSize}
                    animalData={animalData}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
                <Styled.DropField
                    imgSize={imgSize}
                    animalData={animalData}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
                <Styled.DropField
                    imgSize={imgSize}
                    animalData={animalData}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
            </Styled.DropZone>
            <Styled.PiecesContainer id="pieces-container">
                {pieces.map(item => item)}
            </Styled.PiecesContainer>
        </Styled.PuzzleBoard>
    )
}

export default GameView;