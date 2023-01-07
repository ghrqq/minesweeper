import { State } from "./state";
import { Commit } from "vuex";

export const actions = {
  setDifficulty({ commit }: { commit: Commit }, difficulty: State["difficulty"]): void {
    commit("setDifficulty", difficulty);
    commit("redistributeMines");
    commit("setBoard");
    commit("resetTimer");
  },
  setBoardSize({ commit }: { commit: Commit }, boardSize: State["boardSize"]): void {
    if (boardSize >= 3 && boardSize <= 30) {
      commit("setBoardSize", boardSize);
      commit("setCoordinates");
      commit("redistributeMines");
      commit("setBoard");
      commit("resetTimer");
    }
  },
  initialiseTheBoard({ commit }: { commit: Commit }) {
    commit("redistributeMines");
    commit("setCoordinates");
    commit("setBoard");
    commit("startTheGame");
    commit("resetTimer");
  },
  setGameOver({ commit }: { commit: Commit }) {
    commit("setGameOver");
    commit("solve");
  },
  clickOnACell({ commit }: { commit: Commit }, coordinate: [number, number]) {
    commit("clickOnACell", coordinate);
  },
  contextClickOnACell({ commit }: { commit: Commit }, coordinate: [number, number]) {
    commit("contextClickOnACell", coordinate);
  },
  giveHint({ commit }: { commit: Commit }) {
    commit("giveHint");
  },
  solve({ commit }: { commit: Commit }) {
    commit("solve");
    commit("stopTimer");
  },
  endGame({ commit }: { commit: Commit }) {
    commit("endGame");
  },
  setIntervalID({ commit }: { commit: Commit }, id: number) {
    commit("setIntervalID", id);
  },

  startTimer({ commit }: { commit: Commit }) {
    commit("startTimer");
  },

  pauseTimer({ commit }: { commit: Commit }) {
    commit("pauseTimer");
  },
  resetTimer({ commit }: { commit: Commit }) {
    commit("resetTimer");
  },
  stopTimer({ commit }: { commit: Commit }) {
    commit("stopTimer");
  },
  closeModal({ commit }: { commit: Commit }) {
    commit("closeModal");
  },
};
