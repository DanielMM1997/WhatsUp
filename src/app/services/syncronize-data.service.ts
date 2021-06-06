import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/message';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SyncronizeDataService {

  users: User[] = [
    {idUser: '1', email: 'dassdsad', username: 'daniel'},
    {idUser: '2', email: 'dassdsad', username: 'maria'},
    {idUser: '3', email: 'dassdsad', username: 'sofia'},
    {idUser: '4', email: 'dassdsad', username: 'david'},
    {idUser: '5', email: 'dassdsad', username: 'juan'},
  ]
  messages: Message[] = [
    {user: 'Daniel', email: 'daniel@hotmail.es',content: 'hola', date: '14.00'},
    {user: 'David', email: 'david@hotmail.es', content: 'hola', date: '14.00'},
    {user: 'Daniel', email: 'daniel@hotmail.es', content: 'como estas?', date: '14.00'},
    {user: 'David', email: 'david@hotmail.es', content: 'bien, y tu?', date: '14.00'},
    {user: 'Daniel', email: 'daniel@hotmail.es', content: 'bien, gracias', date: '14.00'},
  ]

  private sendMessagesSubject = new Subject<Message[]>();
  sendMessagesObservable = this.sendMessagesSubject.asObservable();

  constructor() { }

  sendMessage(message: string) {
    var newMessage = {
      user: 'Daniel', email: 'daniel@hotmail.es', content: message, date:'13.00'
    }
    this.messages.push(newMessage)
  }

  getMessages() {
    return this.messages;
  }

  getMessagesObservable() {
    return this.sendMessagesObservable
  }

  getUsers() {

  }

  loadAll() {
    this.messages.forEach(i => {
      this.sendMessagesSubject.next();
    })
  }
}
