import { Commit, ActionTree } from "vuex";
import { ChatBotState } from "./state";

export interface ChatBotActions extends ActionTree<any, ChatBotState> {
  [key: string]: any;
}

const fetchResponse = (userInput: string): any => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("in", userInput);
  encodedParams.append("op", "in");
  encodedParams.append("cbot", "1");
  encodedParams.append("SessionID", "RapidAPI1");
  encodedParams.append("cbid", "1");
  encodedParams.append("key", "RHMN5hnQ4wTYZBGCF3dfxzypt68rVP");
  encodedParams.append("ChatSource", "RapidAPI");
  encodedParams.append("duration", "1");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "850310fe35msheb29d9708538394p18a4a7jsne823481e1dc9",
      "X-RapidAPI-Host": "robomatic-ai.p.rapidapi.com",
    },
    body: encodedParams,
  };
  fetch("https://robomatic-ai.p.rapidapi.com/api", options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
};

export const chatBotActions: ChatBotActions = {
  startConversation({ commit }: { commit: Commit }) {
    commit("startConversation");
  },
  updateConversation({ commit }: { commit: Commit }) {
    commit("updateConversation");
  },
  updateInput({ commit }: { commit: Commit }, input: string) {
    commit("updateInput", input);
  },

  sendInput({ commit }: { commit: Commit }) {
    commit("updateIsWaitingForAnswer");
    const encodedParams = new URLSearchParams();
    encodedParams.append("in", this.state.chatBot.userInput);
    encodedParams.append("op", "in");
    encodedParams.append("cbot", "1");
    encodedParams.append("SessionID", "RapidAPI1");
    encodedParams.append("cbid", "1");
    encodedParams.append("key", "RHMN5hnQ4wTYZBGCF3dfxzypt68rVP");
    encodedParams.append("ChatSource", "RapidAPI");
    encodedParams.append("duration", "1");

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "850310fe35msheb29d9708538394p18a4a7jsne823481e1dc9",
        "X-RapidAPI-Host": "robomatic-ai.p.rapidapi.com",
      },
      body: encodedParams,
    };
    commit("updateConversation", {
      sender: "User",
      text: this.state.chatBot.userInput,
    });

    fetch("https://robomatic-ai.p.rapidapi.com/api", options)
      .then((response) => response.json())
      .then((response) => {
        commit("updateIsWaitingForAnswer");
        commit("updateConversation", {
          sender: response.who,
          text: response.out,
          duration: response.request_duration,
        });
      })
      .catch((err) => {
        commit("updateIsWaitingForAnswer");
        commit("updateConversation", {
          sender: "Error",
          text: err.message,
          duration: 0,
        });
      });
  },
};
