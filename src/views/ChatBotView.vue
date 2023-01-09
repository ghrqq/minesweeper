<template>
  <div>
    <ChatDisplayer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import ChatDisplayer from "../components/chatBotComponents/ChatDisplayer.vue";

export default defineComponent({
  components: { ChatDisplayer },
  setup() {
    const { state } = useStore();
  },
});
</script>
