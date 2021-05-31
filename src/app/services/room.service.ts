import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '../models/message';
import { Room } from '../models/room';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  tasksList: AngularFirestoreCollection<Room>;
  tasks: Observable<Room[]>;
  public currentRoom: Room;

  constructor(private fs: AngularFirestore) {
    this.tasksList = fs.collection('chatroom');
  }
  
  getTasks() {
    this.tasks = this.tasksList.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        data.key = a.payload.doc.id;
        return data;
      }))
    );
    return this.tasks
  }

  getRoom(id: number) {
    return this.fs.collection<Room>('chatroom', ref => ref.where('idRoom', '==', id)).valueChanges()
  }

  newChatRoom(id: number) {
    const key = this.fs.createId();
    var room: Room = {
      key: key,
      idRoom: id,
      users: [],
      messages: []
    }
    this.setRoom(room);
    console.log(key);
    
    this.fs.doc(`chatroom/${key}`).set(room)
  }

  setRoom(room: Room) {
    this.currentRoom = {
      key: room.key,
      idRoom: room.idRoom,
      users: room.users,
      messages: room.messages,
    }
  }

  setNewUser(user: User) {
    console.log(user, 'setnew');
    var isNewUser = true;
    this.currentRoom.users.forEach(elemt => {
      if (elemt.email == user.email) {
        isNewUser = false;
      }
    })
    if (isNewUser) {
      this.currentRoom.users.push(user)
      this.tasksList.ref.doc(this.currentRoom.key).update(this.currentRoom)
    }
  }

  removeUserChat(user: User) {
    this.currentRoom.users.filter(function(item){
      return item.username !== user.username
    })
    this.tasksList.ref.doc(this.currentRoom.key).update(this.currentRoom)

  }

  sendMessage(message: Message) {
    this.currentRoom.messages.push(message)
    console.log(this.currentRoom)
    this.tasksList.ref.doc(this.currentRoom.key).update(this.currentRoom)
  }

  updateTask(room: Room) {
    this.tasksList.ref.doc(room.key).update(room)
  }

  deleteTask(key: string) {
    this.tasksList.doc(key).delete()
  }
}
