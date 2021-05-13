import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SyncronizeDataService } from 'src/app/services/syncronize-data.service';

@Component({
  selector: 'app-david',
  templateUrl: './david.component.html',
  styleUrls: ['./david.component.scss']
})
export class DavidComponent implements OnInit {

  @Input() messageDavid: string = "david"
  @Output() updateMessages = new EventEmitter<string>();
  message: string;

  constructor(private syncronizeData: SyncronizeDataService) { }

  ngOnInit(): void {
    this.syncronizeData.sendMessagesObservable.subscribe(message => {
      this.message = message
    })
  }

  sendMessage(message: string) {
    this.messageDavid = "enviar mensaje desde david"
    this.updateMessages.emit(this.messageDavid)
    this.syncronizeData.messages = this.messageDavid
    this.syncronizeData.sendMessages(message);
  }

  getMessage() {
    this.message = this.syncronizeData.messages
  }
}
