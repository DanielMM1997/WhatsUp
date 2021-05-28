import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Message } from 'src/app/models/message';
import { User } from "../../models/user";
import { SyncronizeDataService } from "../../services/syncronize-data.service";

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  users: User[] = [
    {id: '1', email: 'dassdsad', username: 'daniel', password: '123'},
    {id: '2', email: 'dassdsad', username: 'maria', password: '123'},
    {id: '3', email: 'dassdsad', username: 'sofia', password: '123'},
    {id: '4', email: 'dassdsad', username: 'david', password: '123'},
    {id: '5', email: 'dassdsad', username: 'juan', password: '123'},
  ]
  // messages: Message[] = [
  //   {user: 'Daniel', content: 'hola', date: '14.00'},
  //   {user: 'David', content: 'hola', date: '14.00'},
  //   {user: 'Daniel', content: 'como estas?', date: '14.00'},
  //   {user: 'David', content: 'bien, y tu?', date: '14.00'},
  //   {user: 'Daniel', content: 'bien, gracias', date: '14.00'},
  // ]
  messages: Message[];
  user: string = 'Daniel';
  @ViewChild('messageInput') message: any;

  constructor(private syncronizeData: SyncronizeDataService) { }

  ngOnInit(): void {
    this.messages = this.syncronizeData.getMessages()
    this.syncronizeData.sendMessagesObservable.subscribe(a => {
      this.messages = a
    })
    // this.syncronizeData.sendMessagesObservable.subscribe(messages => {
    //   console.log(messages, 'daaa');
    //   this.messages = messages;
    // })
  }

  onSubmit(message: string) {
    console.log(message);
    var newMessage = {
      user: 'Daniel', content: message, date:'13.00'
    }
    this.syncronizeData.sendMessage(message);
    this.autoScroll();
    this.message.nativeElement.value='';
    
  }

  autoScroll() {
    document.getElementById('chat-pane').scroll({left: 0, top: document.getElementById('chat-pane').scrollHeight, behavior: 'smooth'})
  }

  exitChat() {

  }
}
