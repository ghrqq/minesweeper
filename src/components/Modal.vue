<template>
  <div v-if="isOpen" class="modal-overlay" @click="$store.dispatch('closeModal')">
    <div class="modal-content">
      <div v-if="$store.getters.win">Congratulations! You won!</div>
      <div v-if="$store.getters.gameover">Too bad! Try again!</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isOpen = ref(props.isOpen);
    return {
      isOpen,
    };
  },
});
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  cursor: pointer;
}

.modal-content {
  position: absolute;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 16px;
  font-family: "Press Start 2P", cursive;
  font-size: 5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
