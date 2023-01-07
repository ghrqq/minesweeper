import { createStore } from "vuex";

import { state } from "./mineSweeperStoreElements/state";
import { getters } from "./mineSweeperStoreElements/getters";
import { mutations } from "./mineSweeperStoreElements/mutations";
import { actions } from "./mineSweeperStoreElements/actions";

const store = createStore({
  state,
  mutations,
  getters,
  actions,
});

export default store;
