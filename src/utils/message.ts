export interface Message {
  sender: "User" | "Chatbot" | "Error";
  timeStamp: number;
  text: string;
  duration?: number;
}

export class MessageClass implements Message {
  sender: "User" | "Chatbot" | "Error";
  timeStamp: number;
  text: string;
  duration?: number;

  constructor(params: Message) {
    this.sender = params.sender;
    this.timeStamp = new Date().getTime();
    this.text = params.text;
    this.duration = params.duration;
  }
}
