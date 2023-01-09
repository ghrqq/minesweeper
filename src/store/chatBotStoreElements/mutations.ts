import { ChatBotState } from "./state";
import { MutationTree } from "vuex";
import { Message, MessageClass } from "@/utils/message";

export interface ChatBotMutations extends MutationTree<any> {
  [key: string]: any;
}

export const chatBotMutations: ChatBotMutations = {
  startConversation(state: ChatBotState) {
    state.defaultText = "Boo";
  },
  updateConversation(state: ChatBotState, message: Message) {
    const newMessage = new MessageClass(message);
    state.conversation.push(newMessage);
    state.userInput = "";
  },
  updateInput(state: ChatBotState, input: string) {
    state.userInput = input;
  },
  updateIsWaitingForAnswer(state: ChatBotState) {
    state.isWaitingForAnswer = !state.isWaitingForAnswer;
  },
};
