import { shufflePieces } from "helpers/shufflePieces";

const dndPattern_1 = {
  pieces: {
    "piece-1": {
      id: "piece-1",
      bg: {
        right: "1third-w",
        bottom: "half-h",
      },
    },
    "piece-2": {
      id: "piece-2",
      bg: {
        right: "2third-w",
        bottom: "half-h",
      },
    },
    "piece-3": {
      id: "piece-3",
      bg: {
        right: "full-w",
        bottom: "half-h",
      },
    },
    "piece-4": {
      id: "piece-4",
      bg: {
        right: "1third-w",
        bottom: "full-h",
      },
    },
    "piece-5": {
      id: "piece-5",
      bg: {
        right: "2third-w",
        bottom: "full-h",
      },
    },
    "piece-6": {
      id: "piece-6",
      bg: {
        right: "full-w",
        bottom: "full-h",
      },
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Drop Zone",
      piecesIds: shufflePieces([
        "piece-1",
        "piece-2",
        "piece-3",
        "piece-4",
        "piece-5",
        "piece-6",
      ]),
    },
  },
  columnOrder: ["column-1"],
};

export default dndPattern_1;
