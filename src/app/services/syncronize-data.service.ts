import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/message';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SyncronizeDataService {

  users: User[] = [
    {id: '1', email: 'dassdsad', username: 'daniel', password: '123'},
    {id: '2', email: 'dassdsad', username: 'maria', password: '123'},
    {id: '3', email: 'dassdsad', username: 'sofia', password: '123'},
    {id: '4', email: 'dassdsad', username: 'david', password: '123'},
    {id: '5', email: 'dassdsad', username: 'juan', password: '123'},
  ]
  messages: Message[] = [
    {user: 'Daniel', content: 'hola', date: '14.00'},
    {user: 'David', content: 'hola', date: '14.00'},
    {user: 'Daniel', content: 'como estas?', date: '14.00'},
    {user: 'David', content: 'bien, y tu?', date: '14.00'},
    {user: 'Daniel', content: 'bien, gracias', date: '14.00'},
  ]

  private sendMessagesSubject = new Subject<Message[]>();
  sendMessagesObservable = this.sendMessagesSubject.asObservable();

  constructor() { }

  sendMessage(message: string) {
    var newMessage = {
      user: 'Daniel', content: message, date:'13.00'
    }
    // this.sendMessagesSubject.next(Object.assign(newMessage, this.messages));
    this.messages.push(newMessage)
  }

  getMessages() {
    return this.messages;
  }

  getUsers() {

  }

  loadAll() {
    this.messages.forEach(i => {
      this.sendMessagesSubject.next();
    })
  }
}
