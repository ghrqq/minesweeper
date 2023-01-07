<template>
  <div>
    <ModalVue v-if="$store.getters.isModal" :isOpen="$store.getters.isModal" />
    <div>
      <GameBoard />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import GameBoard from "../components/GameBoard.vue";
import ModalVue from "../components/Modal.vue";

export default defineComponent({
  components: { GameBoard, ModalVue },
  setup() {
    const store = useStore();
    const boardSize = ref(store.getters.boardSize);
    const isModalOpen = ref(store.getters.isModal);
    const setBoardSize = (e: any) => {
      store.dispatch("setBoardSize", e.target.value);
    };

    const difficulty = ref(store.getters.difficulty);
    const setDifficulty = (e: any) => {
      store.dispatch("setDifficulty", e.target.value);
    };
    return {
      boardSize,
      setBoardSize,
      difficulty,
      setDifficulty,
      isModalOpen,
    };
  },
});
</script>
<style scoped>
.game-settings {
  display: block;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: rgba(153, 153, 153, 0.8);
}
.settings-container {
  background: #999;
  width: 300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
<style>
body {
  background: rgb(221, 218, 218);
}
.tooltip-btn {
  position: relative;
  font-size: 2rem;
  filter: sepia();
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 1rem;
}

.tooltip-btn::before {
  content: attr(title);
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.5s, opacity 0.5s;
  font-size: 0.8rem;
  z-index: 999;
}

.tooltip-btn:hover::before {
  visibility: visible;
  opacity: 1;
  transition-delay: 0s;
  font-size: 0.8rem;
  z-index: 999;
}
</style>
