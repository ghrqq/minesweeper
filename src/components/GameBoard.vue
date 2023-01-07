<template>
  <div class="parent">
    <div class="game-board">
      <div v-for="(row, idx) in $store.state.board" :key="idx">
        <Cell
          v-for="(cell, i) in row"
          :key="i"
          :coordinate="[idx, i]"
          :isMine="cell.isMine"
          :adjacentCount="cell.adjacentCount"
          :isFlagged="cell.isFlagged"
          :isRevealed="cell.isRevealed"
        />
      </div>
    </div>
    <div class="container">
      <GameBoardAside />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Cell from "../components/Cell.vue";
import GameBoardAside from "../components/GameBoardAside.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "GameBoard",
  components: {
    Cell,
    GameBoardAside,
  },
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("initialiseTheBoard"));
    return {};
  },
});
</script>

<style>
.game-board {
  margin: 0 auto;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(v-bind("$store.state.boardSize"), 2rem);
  grid-template-rows: repeat(v-bind("$store.state.boardSize"), 2rem);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: center;
  align-content: center;
  align-self: center;
  border: 2px solid black;
  padding: 2px;
}
.container {
  margin: 0 auto;
  border-left: 2px black solid;
  padding: 1rem;
}
.parent {
  margin: auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
</style>
