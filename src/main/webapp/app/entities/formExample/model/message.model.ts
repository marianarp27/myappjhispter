export interface IMessage {
  text?: string;
  maxlenght?: number;
}

export class Message implements IMessage {
  constructor(public text?: string, public maxlenght?: number) {}
}
