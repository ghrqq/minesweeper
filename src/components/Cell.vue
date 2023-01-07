<template>
  <div
    :class="isRevealed ? 'cell cell-inset' : 'cell'"
    @click="$store.dispatch('clickOnACell', coordinate)"
    @contextmenu.prevent.stop="$store.dispatch('contextClickOnACell', coordinate)"
  >
    <span v-if="isFlagged">🏳️</span>
    <span :number="adjacentCount" v-if="isRevealed && adjacentCount && !isMine">{{
      adjacentCount
    }}</span>
    <span v-if="isMine && isRevealed">💣</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cell",
  props: ["coordinate", "isMine", "adjacentCount", "isRevealed", "isFlagged"],
});
</script>
<style>
.cell {
  width: 100%;
  height: 100%;
  border: 1px solid slategray;
  background-color: #adb5bd;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 24px;
}
.cell-inset {
  background-color: #dee2e6;
  border: none;
  -webkit-box-shadow: inset 5px 4px 0px -2px rgba(0, 0, 0, 0.7);
  box-shadow: inset 5px 4px 0px -2px rgba(0, 0, 0, 0.7);
}

[number="1"] {
  color: red;
}
[number="2"] {
  color: orange;
}
[number="3"] {
  color: yellow;
}
[number="4"] {
  color: green;
}
[number="5"] {
  color: blue;
}
[number="6"] {
  color: indigo;
}
</style>
