import { MessageClass } from "@/utils/message";

export interface ChatBotState {
  isWaitingForAnswer: boolean;
  isError: ChatBotError;
  defaultText: string;
  conversation: MessageClass[];
  userInput: string;
}

export interface ChatBotError {
  isError: boolean;
  errorMessage: string;
  errorCode: number;
}

export const chatBotState: ChatBotState = {
  isWaitingForAnswer: false,
  isError: {
    errorCode: 0,
    errorMessage: "",
    isError: false,
  },
  defaultText: "What does the fox say?",
  conversation: [
    {
      sender: "Chatbot",
      duration: 0,
      text: "Hello there! I'm your annoying ChatBot friend. I am mostly useless and my server is extremely slow. So, response times are really bad. And I am error prone. Feel free to annoy yourself by asking questions.",
      timeStamp: new Date().getTime(),
    },
    {
      sender: "Chatbot",
      duration: 0,
      text: "Yet, I doubt you'll get any useful responses. Unless you ask for some basic math questions such as '2 plus 2?'",
      timeStamp: new Date().getTime(),
    },
    {
      sender: "Chatbot",
      duration: 0,
      text: "Even in that case, you may get some weird responses.",
      timeStamp: new Date().getTime(),
    },
  ],
  userInput: "",
};
