import React from 'react';
import styled from 'styled-components';
import { shuffleArray } from 'helpers/shuffleArray';

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

const PiecesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const DropZone = styled(PiecesContainer)`

`;

const DropField = styled.div`
    border: 2px solid orange;
    width: ${props => props.imgSize.width/2 +'px'};
    height: ${props => props.imgSize.height/2 +'px'};
`;

const PuzzleBoard = styled.div`
    display: flex;
    margin: 3em auto auto auto;
`;

const GameView = ({ animalData, imgSize }) => {
   
    const pieces = [
        <Piece1 draggable="true" key="piece1" animalData={animalData} imgSize={imgSize}
            id="piece1"
            onDragStart={e => handleDragStart(e)}  
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}/>,
        <Piece2 draggable="true" key="piece2" animalData={animalData} imgSize={imgSize}
            id="piece2"
            onDragStart={e => handleDragStart(e)}
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}
        />,
        <Piece3 draggable="true" key="piece3" animalData={animalData} imgSize={imgSize}
            id="piece3"
            onDragStart={e => handleDragStart(e)}
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}
        />,
        <Piece4 draggable="true" key="piece4" animalData={animalData} imgSize={imgSize}
            id="piece4"
            onDragStart={e => handleDragStart(e)}
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}/>
    ];

    shuffleArray(pieces);

    const handleDragStart = e => {
        e.dataTransfer.setData("text/plain", e.target.id);
      };

    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();

      };

      const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
      };

      const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
      };

      const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        const data = e.dataTransfer.getData("text/plain");
        e.target.appendChild(document.getElementById(data));
      };

    return (
        <PuzzleBoard>
            <PiecesContainer>
                {pieces.map(item => item)}
            </PiecesContainer>
            <DropZone>
                <DropField
                    imgSize={imgSize} 
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
                <DropField
                    imgSize={imgSize} 
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
                <DropField
                    imgSize={imgSize} 
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
                <DropField
                    imgSize={imgSize} 
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    />
            </DropZone>
        </PuzzleBoard>
    )
}

export default GameView;


// const drag = event => {
//     event.dataTransfer.setData('text', event.target.id);
//   };
  
//   const allowDrop = event => {
//    if (event.target.tagName !== 'IMG') {
//      event.preventDefault();
//     } 
//   };
  
//   const drop = event => {
//     event.preventDefault();
//     const data = event.dataTransfer.getData('text');
//     event.target.appendChild(document.getElementById(data));
//     if (event.target.dataset.boxid === event.target.firstChild.dataset.pieceid) {
//       event.target.style.border = 'none';
//       arrOfIds.push(event.target.dataset.boxid);
//       event.target.firstChild.ondragstart = function() { return false; };
//       checkCorectness();
//     }
//   };