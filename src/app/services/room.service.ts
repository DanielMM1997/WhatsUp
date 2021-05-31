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

  roomsList: AngularFirestoreCollection<Room>;
  rooms: Observable<Room[]>;
  public currentRoom: Room;

  constructor(private fs: AngularFirestore) {
    this.roomsList = fs.collection('chatroom');
  }
  
  getRooms() {
    this.rooms = this.roomsList.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        data.key = a.payload.doc.id;
        return data;
      }))
    );
    return this.rooms;
  }

  getRoom(id: number) {
    return this.fs.collection<Room>('chatroom', ref => ref.where('idRoom', '==', id)).valueChanges();
  }

  newChatRoom(id: number) {
    const key = this.fs.createId();
    var room: Room = {
      key: key,
      idRoom: id,
      users: [],
      messages: []
    }
    this.setCurrentRoom(room);
    this.fs.doc(`chatroom/${key}`).set(room);
  }

  setCurrentRoom(room: Room) {
    this.currentRoom = {
      key: room.key,
      idRoom: room.idRoom,
      users: room.users,
      messages: room.messages,
    }
  }

  setNewUser(user: User) {
    var isNewUser = true;
    this.currentRoom.users.forEach(elemt => {
      if (elemt.email == user.email) {
        isNewUser = false;
      }
    })
    if (isNewUser) {
      this.currentRoom.users.push(user)
      this.roomsList.ref.doc(this.currentRoom.key).update(this.currentRoom)
    }
  }

  removeUserChat(user: User) {
    // this.currentRoom.users.filter(item => item.email !== user.email)
    var users = []
    this.currentRoom.users.forEach (item => {
      if (item.email !== user.email) {
        users.push(item);
      }
    })
    this.currentRoom.users = users;
    this.roomsList.ref.doc(this.currentRoom.key).update(this.currentRoom);

  }

  sendMessage(message: Message) {
    this.currentRoom.messages.push(message)
    this.roomsList.ref.doc(this.currentRoom.key).update(this.currentRoom);
  }

  updateRoom(room: Room) {
    this.roomsList.ref.doc(room.key).update(room);
  }

  deleteRoom(key: string) {
    this.roomsList.doc(key).delete();
  }
}
