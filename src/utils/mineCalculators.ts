export const calculateNumMines = (threshold: number, size: number) => {
  return Math.floor(size * size * threshold);
};

export const findInArray = (coordinates: [number, number], array: Array<[number, number]>) => {
  return array.some((item) => item[0] === coordinates[0] && item[1] === coordinates[1]);
};

export const getCoordinatesList = (boardSize: number) => {
  const result: [number, number][] = [];
  for (let i = 0; i < boardSize ** 2; i++) {
    const x = i % boardSize;
    const y = Math.floor(i / boardSize);
    result.push([x, y]);
  }
  return result;
};

export const buildBoard = (coordinates: [number, number][], mines: [number, number][]) => {
  const board: {
    isMine: boolean;
    adjacentCount: number;
    isRevealed: boolean;
    isFlagged: boolean;
  }[][] = [];

  for (const [x, y] of coordinates) {
    if (!board[x]) {
      board[x] = [];
    }
    board[y][x] = {
      isMine: findInArray([x, y], mines),
      adjacentCount: 0,
      isFlagged: false,
      isRevealed: false,
    };
  }
  for (const [x, y] of coordinates) {
    if (!board[x]) {
      board[x] = [];
    }

    const adjacentMines = countAdjacentMines(board, y, x);
    board[y][x].adjacentCount = adjacentMines;
  }

  return board;
};

export const countAdjacentMines = (
  board: {
    isMine: boolean;
    adjacentCount: number;
    isRevealed: boolean;
    isFlagged: boolean;
  }[][],
  x: number,
  y: number
) => {
  let count = 0;

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (i >= 0 && i < board.length && j >= 0 && j < board[0].length && board[i][j].isMine) {
        count++;
      }
    }
  }

  return count;
};

export const openAdjacentCells = (
  board: {
    isMine: boolean;
    adjacentCount: number;
    isRevealed: boolean;
    isFlagged: boolean;
  }[][],
  x: number,
  y: number,
  reduceNumberCallback: () => void
) => {
  if (board[x] && board[x][y] && !board[x][y].isMine && !board[x][y].isRevealed) {
    board[x][y].isRevealed = true;
    reduceNumberCallback();
    if (board[x][y].adjacentCount === 0) {
      openAdjacentCells(board, x - 1, y, reduceNumberCallback); // top: ;
      openAdjacentCells(board, x + 1, y, reduceNumberCallback); // bottom
      openAdjacentCells(board, x, y - 1, reduceNumberCallback); // left
      openAdjacentCells(board, x, y + 1, reduceNumberCallback); // right
    }
  }
};
