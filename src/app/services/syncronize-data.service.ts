import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyncronizeDataService {

  messages: string = "Sin mensajes.."
  private sendMessagesSubject = new Subject<string>();
  sendMessagesObservable = this.sendMessagesSubject.asObservable();

  constructor() { }

  sendMessages(message: string) {
    this.messages = message;
    this.sendMessagesSubject.next(message);
  }
}
