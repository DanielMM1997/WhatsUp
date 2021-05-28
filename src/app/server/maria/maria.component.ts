import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/models/message';
import { SyncronizeDataService } from 'src/app/services/syncronize-data.service';

@Component({
  selector: 'app-maria',
  templateUrl: './maria.component.html',
  styleUrls: ['./maria.component.scss']
})
export class MariaComponent implements OnInit {

  @Input() messageMaria: string = "maria"
  @Output() updateMessages = new EventEmitter<string>();
  messages: Message[];

  constructor(private syncronizeData: SyncronizeDataService) { }

  ngOnInit(): void {
    this.messages = this.syncronizeData.getMessages()
    this.syncronizeData.sendMessagesObservable.subscribe(messages => {
      this.messages = messages
    })
  }

  sendMessage(message: string) {
    // this.messageMaria = "enviar mensaje desde maria"
    // this.updateMessages.emit(this.messageMaria)
    // this.syncronizeData.messages = this.messageMaria
    this.syncronizeData.sendMessage(message);
  }

  autoScroll() {
    document.getElementById('chat2').scroll({left: 0, top: document.getElementById('chat2').scrollHeight, behavior: 'smooth'})
  }

}
