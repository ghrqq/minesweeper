import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    grid: any[];
  }
  interface Actions {
    uncoverCell: any;
    toggleCellFlag: any;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State, Actions>;
    actions: Actions;
  }
}
