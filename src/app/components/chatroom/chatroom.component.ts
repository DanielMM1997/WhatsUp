import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message';
import { User } from "../../models/user";
import { Room } from 'src/app/models/room';
import { RoomService } from "../../services/room.service";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  messages: Message[];
  room: Room;
  users: User[];
  message: string = '';
  emailuser: string = '';
  isJoinChat = false;
  @ViewChild('messageInput') messageInput: any;

  constructor(
    private route: ActivatedRoute, 
    private roomService: RoomService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService
    this.getChatRoom();
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
        this.roomService.setCurrentRoom(data[0]);
        this.emailuser = this.authService.currentUser.email;
      }
    })
  }

  joinChatRoom() {
    this.roomService.setNewUser(this.authService.currentUser);
    this.isJoinChat = true;
  }

  onSubmit(message: string) {
    var date = new Date().toLocaleTimeString().split(':',2).join(':');
    var newMessage: Message = {
      user: this.authService.currentUser.username, email: this.authService.currentUser.email, content: message, date: date
    }
    this.roomService.sendMessage(newMessage);
    this.autoScroll();
    this.messageInput.nativeElement.value = '';
  }

  autoScroll() {
    var chat = document.getElementById('chat-pane')
    chat.scroll({left: 0, top: document.getElementById('chat-pane').scrollHeight, behavior: 'smooth'});
  }

  exitChatRoom() {
    this.roomService.removeUserChat(this.authService.currentUser);
    this.isJoinChat = false;
    // window.location.reload();
  }
}
