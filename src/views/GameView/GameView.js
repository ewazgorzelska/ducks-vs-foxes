import React, { useState, useContext } from "react";
import { AppContext } from "AppContext/AppContext";
import { DragDropContext } from "react-beautiful-dnd";
import dndPattern from "dndPattern";
import GameField from "components/dnd/GameField";
import { getOrderedIds } from "helpers/getOrderedIds";

const GameView = ({ animalData }) => {
  const [data, setData] = useState(dndPattern);
  const { setCurrentView } = useContext(AppContext);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
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
    };

    setData(newData);

    if (
      newPieceIds.toString() === getOrderedIds(dndPattern.pieces).toString()
    ) {
      setCurrentView("PATTERN");

      setTimeout(() => {
        setCurrentView("END");
      }, 2000);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const pieces = column.piecesIds.map((pieceId) => data.pieces[pieceId]);

        return (
          <GameField
            key={column.id}
            column={column}
            pieces={pieces}
            animalData={animalData}
          />
        );
      })}
    </DragDropContext>
  );
};

export default GameView;
