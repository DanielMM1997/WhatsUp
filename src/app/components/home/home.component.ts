import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/models/server';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: string = 'mensaje'
  servers: Server[];

  constructor(public serverService: ServerService) { }

  ngOnInit(): void {
    this.serverService.getServers().subscribe(servers => {
      this.servers = servers
    })
  }
}
