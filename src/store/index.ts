import { createStore } from "vuex";

import { state } from "./mineSweeperStoreElements/state";
import { getters } from "./mineSweeperStoreElements/getters";
import { mutations } from "./mineSweeperStoreElements/mutations";
import { actions } from "./mineSweeperStoreElements/actions";
import { chatBotState } from "./chatBotStoreElements/state";
import { chatBotActions } from "./chatBotStoreElements/actions";
import { chatBotMutations } from "./chatBotStoreElements/mutations";
import { chatBotGetters } from "./chatBotStoreElements/getters";

const store = createStore({
  state,
  mutations,
  getters,
  actions,
  modules: {
    chatBot: {
      namespaced: true,
      state: () => chatBotState,
      actions: chatBotActions,
      mutations: chatBotMutations,
      getters: chatBotGetters,
    },
  },
});

export default store;
