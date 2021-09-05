import React, { useState } from 'react';
//import { shuffleArray } from 'helpers/shuffleArray';
import { DragDropContext } from 'react-beautiful-dnd';
import dndPattern from 'dndPattern';
import GameField from 'components/dnd/GameField';

const GameView = ({ animalData }) => {

    const [ data, setData ] = useState(dndPattern);

    const onDragEnd = result => {

        const { destination, source, draggableId } = result;
    
        if (!destination) {
          return;
        }
    
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return
        }
    
        const column = data.columns[source.droppableId];
        const newPieceIds = Array.from(column.piecesIds);
        newPieceIds.splice(source.index, 1);
        newPieceIds.splice(destination.index, 0, draggableId);
    
        const newColumn = {
          ...column,
          piecesIds: newPieceIds,
        };
    
        const newData = {
          ...data,
          columns: {
            ...data.columns,
            [newColumn.id]: newColumn,
          },
        }
    
        setData(newData);
    }
   
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {data.columnOrder.map(columnId => {
                const column = data.columns[columnId];
                
                const pieces = column.piecesIds.map(
                    pieceId => data.pieces[pieceId]
                );

                return <GameField key={column.id} column={column} pieces={pieces} animalData={animalData} />
            })}
        </DragDropContext>
    )
}

export default GameView;