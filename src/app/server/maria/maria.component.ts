import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SyncronizeDataService } from 'src/app/services/syncronize-data.service';

@Component({
  selector: 'app-maria',
  templateUrl: './maria.component.html',
  styleUrls: ['./maria.component.scss']
})
export class MariaComponent implements OnInit {

  @Input() messageMaria: string = "maria"
  @Output() updateMessages = new EventEmitter<string>();
  message: string;

  constructor(private syncronizeData: SyncronizeDataService) { }

  ngOnInit(): void {
    this.syncronizeData.sendMessagesObservable.subscribe(message => {
      this.message = message
    })
  }

  sendMessage(message: string) {
    this.messageMaria = "enviar mensaje desde maria"
    this.updateMessages.emit(this.messageMaria)
    this.syncronizeData.messages = this.messageMaria
    this.syncronizeData.sendMessages(message);

  }

}
