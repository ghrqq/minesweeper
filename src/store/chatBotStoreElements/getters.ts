import { ChatBotState } from "./state";

export const chatBotGetters = {
  getConversation: (state: ChatBotState) => state.conversation,
};
