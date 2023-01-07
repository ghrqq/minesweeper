import {
  buildBoard,
  calculateNumMines,
  getCoordinatesList,
  openAdjacentCells,
} from "@/utils/mineCalculators";
import store from "..";
import { Difficulties } from "./enums";
import { State } from "./state";

export const mutations = {
  setDifficulty(state: State, difficulty: State["difficulty"]) {
    state.difficulty = difficulty;
  },
  setBoardSize(state: State, size: number) {
    state.boardSize = size;
  },
  redistributeMines(state: State) {
    state.mines = [];
    const numMines = calculateNumMines(Difficulties[state.difficulty], state.boardSize); // Calculate the number of mines based on the difficulty and size of the game
    while (state.mines.length < numMines) {
      const x = Math.floor(Math.random() * state.boardSize);
      const y = Math.floor(Math.random() * state.boardSize);
      const mine = [x, y];
      if (!state.mines.includes(mine)) {
        state.mines.push(mine);
      }
    }
  },
  setCoordinates(state: State) {
    state.coordinates = [...getCoordinatesList(state.boardSize)];
  },
  setGameOver(state: State) {
    console.log("game over");
    state.gameover = true;
    clearInterval(state.intervalID);
    state.intervalID = 0;
  },
  setBoard(state: State) {
    state.board = [...buildBoard(state.coordinates, state.mines)];
    state.unRevealedCells = state.coordinates.length - state.mines.length;
    state.remainingFlags = state.mines.length;
  },

  clickOnACell(state: State, coordinate: [number, number]) {
    const [rowX, colY] = coordinate;
    if (state.board[rowX][colY].isFlagged) {
      return;
    }
    if (state.board[rowX][colY].isMine) {
      store.dispatch("setGameOver");
      return;
    }
    const reduceNumberCallback = () => {
      state.unRevealedCells--;
    };
    if (!state.board[rowX][colY].isFlagged && !state.board[rowX][colY].isRevealed) {
      openAdjacentCells(state.board, rowX, colY, reduceNumberCallback);
    }
    if (state.unRevealedCells === 0) {
      state.win = true;
    }
  },
  contextClickOnACell(state: State, coordinate: [number, number]) {
    const [rowX, colY] = coordinate;
    if (state.board[rowX][colY].isFlagged) {
      state.remainingFlags++;
    } else if (state.remainingFlags > 0) {
      state.remainingFlags--;
    } else {
      return;
    }
    state.board[rowX][colY].isFlagged = !state.board[rowX][colY].isFlagged;
  },
  startTheGame(state: State) {
    state.gameover = false;
    state.win = false;
    state.isGameStarted = true;
  },
  giveHint(state: State) {
    if (state.remainingFlags === 0) {
      window.alert("You need to remove some of the flags to get a hint.");
      return;
    }

    let i = 0;
    let counter = 0;

    while (i < state.mines.length && counter < 1) {
      const [colY, rowX] = state.mines[i];
      console.log(state.mines[i], rowX, colY, state.board[rowX][colY]);
      if (state.board[rowX][colY].isMine && !state.board[rowX][colY].isFlagged) {
        state.board[rowX][colY].isFlagged = true;
        counter++;
        state.remainingFlags--;
      } else {
        i++;
      }
    }
  },
  solve(state: State) {
    state.board.forEach((i, idx) => {
      state.board[idx].forEach((j, jdx) => {
        state.board[idx][jdx].isRevealed = true;
      });
    });
    store.dispatch("endGame");
  },
  endGame(state: State) {
    state.isGameStarted = false;
    clearInterval(state.intervalID);
    state.intervalID = 0;
  },
  setIntervalID(state: State, id: number) {
    state.intervalID = id;
  },
  startTimer(state: State) {
    if (state.gameover) {
      return;
    }
    if (state.intervalID) {
      clearInterval(state.intervalID);
    }
    state.intervalID = setInterval(() => {
      if (state.time === 0) {
        store.dispatch("setGameOver");
        return;
      }
      state.time--;
    }, 1000);
  },
  pauseTimer(state: State) {
    clearInterval(state.intervalID);
    state.intervalID = 0;
  },
  resetTimer(state: State) {
    state.time = 180;
    store.dispatch("startTimer");
  },
  stopTimer(state: State) {
    state.time = 180;
  },
  closeModal(state: State) {
    state.gameover = false;
    state.win = false;
  },
};
