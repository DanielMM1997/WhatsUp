import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message';
import { User } from "../../models/user";
import { SyncronizeDataService } from "../../services/syncronize-data.service";
import { RoomService } from "../../services/room.service";
import { map } from 'rxjs/operators';
import { Room } from 'src/app/models/room';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements AfterViewInit, OnInit {

  // userss: User[] = [
  //   {id: '1', email: 'dassdsad', username: 'daniel', password: '123'},
  //   {id: '2', email: 'dassdsad', username: 'maria', password: '123'},
  //   {id: '3', email: 'dassdsad', username: 'sofia', password: '123'},
  //   {id: '4', email: 'dassdsad', username: 'david', password: '123'},
  //   {id: '5', email: 'dassdsad', username: 'juan', password: '123'},
  // ]
  // messages: Message[] = [
  //   {user: 'Daniel', content: 'hola', date: '14.00'},
  //   {user: 'David', content: 'hola', date: '14.00'},
  //   {user: 'Daniel', content: 'como estas?', date: '14.00'},
  //   {user: 'David', content: 'bien, y tu?', date: '14.00'},
  //   {user: 'Daniel', content: 'bien, gracias', date: '14.00'},
  // ]
  messages: Message[];
  room: Room;
  users: User[];
  user: string = '';
  isJoinChat = false;
  @ViewChild('messageInput') message: any;

  constructor(
    private syncronizeData: SyncronizeDataService, 
    private route: ActivatedRoute, 
    private roomService: RoomService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    console.log('primero');
    
    this.getChatRoom();
  }

  ngAfterViewInit(): void {
    console.log('segundo');
    
    this.setNewUser()
  }

  getChatRoom() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.roomService.getRoom(id).subscribe(data => {
      if (data.length == 0) {
        this.roomService.newChatRoom(id);
      } else {
        this.users = data[0]["users"] as User[]
        this.messages = data[0]["messages"] as Message[]
        this.room = data[0] as Room;
        this.roomService.setRoom(data[0])
      }
      this.roomService.setNewUser(this.authService.userData)
      this.user = this.authService.userData.username;
      console.log(this.room);
    })
  }

  joinChatRoom() {
    this.roomService.setNewUser(this.authService.userData)
    this.user = this.authService.userData.username;
    this.isJoinChat = true;
  }
  setNewUser() {
    this.roomService.setNewUser(this.authService.userData)
  }

  onSubmit(message: string) {
    var date = new Date().toLocaleTimeString().split(':',2).join(':');
    var newMessage: Message = {
      user: this.user, content: message, date: date
    }
    this.roomService.sendMessage(newMessage)
    this.autoScroll();
    this.message.nativeElement.value='';
  }

  autoScroll() {
    document.getElementById('chat-pane').scroll({left: 0, top: document.getElementById('chat-pane').scrollHeight, behavior: 'smooth'})
  }

  exitChatRoom() {
    this.roomService.removeUserChat(this.authService.userData)
    this.isJoinChat = false;
  }
}
