<template>
  <div class="loading-indicator">
    <div class="spinning-wheel"></div>
    <div class="waiting-time">{{ waitingTime }}ms</div>
  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const waitingTime = ref(0);
    let interval;

    const startTimer = () => {
      interval = setInterval(() => {
        waitingTime.value += 10;
      }, 10);
    };

    const stopTimer = () => {
      clearInterval(interval);
    };

    onMounted(startTimer);
    onUnmounted(stopTimer);

    return {
      waitingTime,
    };
  },
};
</script>

<style>
.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.spinning-wheel {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-left-color: #7983ff;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
