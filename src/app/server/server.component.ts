import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  message: string = 'mensaje'

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.message = "desde servidor";
  }
}
