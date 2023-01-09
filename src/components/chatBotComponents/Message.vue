<template>
  <div class="message-container">
    <div class="message" :class="senderClass">
      {{ text }}
      <div class="timestamp">{{ formattedTime }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    timeStamp: {
      type: Number,
      required: true,
    },
  },
  computed: {
    senderClass(): string {
      switch (this.sender) {
        case "Chatbot":
          return "chatbot-message";
        case "Error":
          return "error-message";
        default:
          return "user-message";
      }
    },
  },
  setup(props) {
    const formattedTime = computed(() => {
      const date = new Date(props.timeStamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${hours}:${minutes}`;
    });

    return {
      formattedTime,
    };
  },
});
</script>
<style scoped>
.message-container {
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 0 auto;
}

.message {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  position: relative;
  max-width: 90%;
}

.chatbot-message {
  background: rgb(219, 218, 218);
  align-self: flex-start;
}
.error-message {
  background: rgb(213, 151, 151);
  align-self: flex-start;
}

.user-message {
  background: rgb(122, 208, 122);
  align-self: flex-end;
}
.timestamp {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 12px;
  color: black;
}
</style>
