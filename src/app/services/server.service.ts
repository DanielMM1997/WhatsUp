import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from '../models/server';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  serversList: AngularFirestoreCollection<Server>;
  servers: Observable<Server[]>;
  
  constructor(private fs: AngularFirestore) {
    this.serversList = fs.collection('servers');
  }
  
  getServers() {
    this.servers = this.serversList.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        data.key = a.payload.doc.id;
        return data;
      }))
    );
    return this.servers
  }
}
