import { shufflePieces } from 'helpers/shufflePieces';

const orderedPiecesIds = ["piece-1", "piece-2", "piece-3", "piece-4"];
const shuffled = shufflePieces(orderedPiecesIds);

const dndPattern = {

    pieces: {
        "piece-1": { 
            id: "piece-1", 
            bg: {
                right: "half-w",
                bottom: "half-h"
            }
        },
        "piece-2": { 
            id: "piece-2",
            bg: {
                right: "full-w",
                bottom: "half-h"
            }
        },
        "piece-3": { 
            id: "piece-3", 
            bg: {
                right: "half-w", 
                bottom: "full-h"
            }
        },
        "piece-4": { 
            id: "piece-4", 
            bg: {
                right: "full-w", 
                bottom: "full-h"
            }
        },
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "Drop Zone",
            piecesIds: shuffled,
        },
    },
    columnOrder: ['column-1'],
}

export default dndPattern;
