export interface State {
  boardSize: number;
  gameOver: boolean;
  time: number;
  difficulty: "easy" | "medium" | "hard";
  mines: any[];
  win: boolean;
  coordinates: [number, number][];
  gameover: boolean;
  board: {
    isMine: boolean;
    adjacentCount: number;
    isRevealed: boolean;
    isFlagged: boolean;
  }[][];
  remainingFlags: number;
  isGameStarted: boolean;
  unRevealedCells: number;
  intervalID: number;
}

export const state: State = {
  boardSize: 10,
  gameOver: false,
  time: 180,
  difficulty: "easy",
  mines: [],
  gameover: false,
  win: false,
  coordinates: [],
  board: [],
  remainingFlags: 10,
  isGameStarted: false,
  unRevealedCells: 90,
  intervalID: 0,
};
