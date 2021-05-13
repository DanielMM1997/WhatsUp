import { Component, OnInit } from '@angular/core';
import { SyncronizeDataService } from '../services/syncronize-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: string = 'mensaje'

  constructor(public syncronizeData: SyncronizeDataService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.message = ""
    this.syncronizeData.messages = this.message
  }

  updateMessages(messages: string) {
    this.message = messages
    this.syncronizeData.messages = messages
  }
}
