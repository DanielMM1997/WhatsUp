import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  tasksList: AngularFirestoreCollection<Room>;
  tasks: Observable<Room[]>;
  
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

  getTask(key: string) {

  }

  insertTask(room: Room) {
    // var aux = {
    //   key: this.fs.createId(),
    //   name: task.name, 
    //   priority: task.priority,
    //   state: task.state, 
    //   created_at: new Date().toLocaleDateString()
    // }
    // this.tasksList.add(aux);
  }

  insertDoneTask(room: Room) {
    // var aux = {
    //   name: task.name, 
    //   priority: task.priority,
    //   state: task.state, 
    //   created_at: new Date().toLocaleDateString()
    // }
    // console.log(task);
    
    // this.doneTasksList.add(task);
  }

  updateTask(room: Room) {
    this.tasksList.ref.doc(room.key).update(room)
  }

  deleteTask(key: string) {
    this.tasksList.doc(key).delete()
  }
}
