import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/models/message';
import { SyncronizeDataService } from 'src/app/services/syncronize-data.service';

@Component({
  selector: 'app-david',
  templateUrl: './david.component.html',
  styleUrls: ['./david.component.scss']
})
export class DavidComponent implements OnInit {

  @Input() messageDavid: string = "david"
  @Output() updateMessages = new EventEmitter<string>();
  messages: Message[];
  message: string = '';

  constructor(private syncronizeData: SyncronizeDataService) { }

  ngOnInit(): void {
    this.syncronizeData.sendMessagesObservable.subscribe(messages => {
      this.messages = messages
    })
  }

  sendMessage(message: string) {
    // this.messageDavid = "enviar mensaje desde david"
    // this.updateMessages.emit(this.messageDavid)
    this.syncronizeData.sendMessage(message);
  }

  getMessages() {
    this.messages = this.syncronizeData.getMessages()
  }

  autoScroll() {
    document.getElementById('chat').scroll({left: 0, top: document.getElementById('chat').scrollHeight, behavior: 'smooth'})
  }
}
