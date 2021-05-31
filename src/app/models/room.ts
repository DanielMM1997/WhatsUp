import { Message } from "./message";
import { User } from "./user";

export interface Room {
  key?: string,
  idRoom: number,
  users: User[],
  messages: Message[],
}