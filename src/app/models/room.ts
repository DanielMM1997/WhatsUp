import { Message } from "./message";
import { User } from "./user";

export interface Room {
  key: string,
  users: User[],
  messages: Message[],
}