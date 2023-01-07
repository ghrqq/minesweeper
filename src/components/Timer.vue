<template>
  <div class="timer-container">
    <div class="timer">{{ secondsToMinutesAndSeconds($store.state.time) }}</div>
    <button
      class="tooltip-btn"
      title="Pause"
      v-if="$store.state.intervalID"
      @click="$store.dispatch('pauseTimer')"
    >
      ⏸️
    </button>
    <button class="tooltip-btn" title="Resume" v-else @click="$store.dispatch('startTimer')">
      ▶️
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Timer",
  setup() {
    const store = useStore();

    onUnmounted(() => {
      clearInterval(store.state.intervalID);
    });
    const secondsToMinutesAndSeconds = (seconds: number): string => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    return {
      secondsToMinutesAndSeconds,
    };
  },
});
</script>
<style scoped>
.timer {
  font-family: "Press Start 2P", cursive;
  font-size: 3rem;
  display: inline-block;
}
.timer-container {
  display: flex;
  flex: row 1 1;
  justify-content: space-evenly;
  align-items: center;
  vertical-align: middle;
}
</style>
