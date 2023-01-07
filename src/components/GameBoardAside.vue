<template>
  <aside>
    <Timer />
    <div class="flag-displayer">[ {{ $store.state.remainingFlags }} x 🏳️]</div>
    <div class="button-container">
      <button class="tooltip-btn" title="Show solution." @click="$store.dispatch('solve')">
        ❓
      </button>
      <button class="tooltip-btn" title="Give a hint." @click="$store.dispatch('giveHint')">
        💡
      </button>
      <button class="tooltip-btn" title="Restart" @click="$store.dispatch('initialiseTheBoard')">
        🔄
      </button>
    </div>
    <div class="settings-container">
      <label>
        Board size {{ boardSize }} x {{ boardSize }} <br />
        <input type="range" min="3" max="20" v-model.number="boardSize" @change="setBoardSize" />
      </label>
      <br />
      <label>
        Difficulty <br />
        <select v-model="difficulty" @change="setDifficulty">
          <option value="easy">Easy (default)</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <button type="button" class="btn btn-success" @click="$store.dispatch('initialiseTheBoard')">
        {{ $store.state.isGameStarted ? "Restart" : "Start Game" }}
      </button>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Timer from "../components/Timer.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Timer,
  },
  setup() {
    const store = useStore();
    const boardSize = ref(store.getters.boardSize);
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
    };
  },
});
</script>

<style scoped>
aside {
  height: 100%;
}
.button-container {
  display: flex;
  flex: row 1 1;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin: 1rem auto;
  padding: 1rem;
}
.flag-displayer {
  font-size: 2rem;
  font-weight: 600;
  font-family: "Press Start 2P", cursive;
}
.settings-container {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}
.settings-container input,
select,
option {
  width: 100%;
}
.settings-container .btn {
  margin-top: 1rem;
}
</style>
