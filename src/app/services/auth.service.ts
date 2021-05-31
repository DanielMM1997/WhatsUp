import { Injectable, NgZone } from '@angular/core';
import { User } from "../models/user";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Router } from "@angular/router";
// import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  currentUser: User;

  constructor(
    private afAuth: AngularFireAuth, 
    private router: Router, 
    private fs: AngularFirestore, 
    private ngZone: NgZone
  ) { 
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.user = user;
          this.setCurrentUser(user);
          localStorage.setItem('user', this.user);
          localStorage.getItem('user');
        } else {
          this.currentUser = null
          localStorage.setItem('user', null);
          localStorage.getItem('user');
        }
      })
    }
    
    get isAuth(): boolean {
      return (localStorage.getItem('user') === null) ? false : true;
  }

  getCurrentUser() {
    return this.currentUser
  }

  signUp(username:string, email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email.trim(), password)
      .then((result) => {
        result.user.updateProfile({
          displayName: username
        })
      })
      .catch(error => {
        console.log(error)
      });
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email.trim(), password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        })
        this.setCurrentUser(result.user)
        this.user = result
      })
      .catch(error => {
        console.log(error);
      });
  }

  signInGoogle() {
    // return this.authLogin(new firebase.default.auth.GoogleAuthProvider).then(credential => this.setCurrentUser(credential.user))
  }

  signInFacebook() {
    // return this.authLogin(new auth.FacebookAuthProvider).then(credential => this.setCurrentUser(credential.user))
  }

  signInTwitter() {
    // return this.authLogin(new auth.TwitterAuthProvider).then(credential => this.setCurrentUser(credential.user))
  }

  authLogin(provider)  {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['/chatroom']);
      })
      this.setCurrentUser(result.user);
    }).catch((error) => {
      console.log(error);
    })
  }
  
  signOut(): void {
    this.currentUser = null
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/home'])
    });
  }

  setCurrentUser(user: any) {
    this.currentUser = {
      idUser: user.uid,
      username: user.displayName,
      email: user.email,
    }
  }
}
