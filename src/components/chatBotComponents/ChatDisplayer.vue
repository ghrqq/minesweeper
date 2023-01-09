<template>
  <div class="chat-displayer">
    <Message
      v-for="(i, idx) in $store.getters['chatBot/getConversation']"
      :key="idx"
      :text="i.text"
      :sender="i.sender"
      :timeStamp="i.timeStamp"
    />

    <LoadingIndicator v-if="$store.state.chatBot.isWaitingForAnswer" />
    <textarea
      ref="textRef"
      :rows="
        $store.state.chatBot.userInput.length < 50
          ? 1
          : Math.floor($store.state.chatBot.userInput.length / 50)
      "
      cols="50"
      placeholder="Type something here and hit enter"
      @change="updateUserInput"
      @keydown.enter.prevent.stop="sendInput"
      v-model="$store.state.chatBot.userInput"
    ></textarea>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUpdated, ref, onMounted } from "vue";
import Message from "./Message.vue";
import LoadingIndicator from "./LoadingIndicator.vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Message,
    LoadingIndicator,
  },
  setup() {
    const store = useStore();
    const updateUserInput = (e: any) => {
      store.dispatch("chatBot/updateInput", e.target.value);
    };
    const sendInput = () => {
      store.dispatch("chatBot/sendInput");
    };
    const textRef = ref(null);
    onMounted(() =>
      // @ts-ignore
      textRef.value.scrollIntoView({ block: "end", behavior: "smooth" })
    );
    onUpdated(() => {
      // @ts-ignore
      textRef.value.scrollIntoView({ block: "end", behavior: "smooth" });
    });

    return {
      updateUserInput,
      sendInput,
      textRef,
    };
  },
});
</script>

<style scoped>
.chat-displayer {
  overflow: scroll;
  max-height: 50vh;
  height: 50vh;
  width: 60%;
  margin: 0 auto;
  background: rgb(246, 246, 246);
}

textarea {
  overflow: hidden;
  resize: none;
  flex-grow: 1;
  min-height: 0;
  max-height: 100%;
  height: min-content;
  vertical-align: bottom;
  min-width: 50%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 3rem;
}
</style>
