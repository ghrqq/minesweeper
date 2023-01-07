import { State } from "./state";

export const getters = {
  difficulty: (state: State) => state.difficulty,
  boardSize: (state: State) => state.boardSize,
  mines: (state: State) => state.mines,
  gameover: (state: State) => state.gameover,
  win: (state: State) => state.win,
  isModal: (state: State) => {
    if (state.gameover || state.win) {
      return true;
    }
    return false;
  },
};
