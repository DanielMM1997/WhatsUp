import { Injectable, NgZone } from '@angular/core';
import { User } from "../models/user";
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Router } from "@angular/router";
// import { auth  } from 'firebase/app';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private afAuth: AngularFireAuth, private router: Router, private fs: AngularFirestore, private ngZone: NgZone) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        console.log(this.user);
        localStorage.setItem('user', this.user);
        localStorage.getItem('user');
      } else {
        localStorage.setItem('user', null);
        localStorage.getItem('user');
      }
    })
  }

  get isAuth(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  getCurrentUser() {
    return (this.user !== null) ? this.user : null;
  }

  signUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email.trim(), password)
      .then((result) => {
        this.setUserData(result.user);
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
        this.setUserData(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  signInGoogle() {
    return this.authLogin(new firebase.default.auth.GoogleAuthProvider).then(credential => this.setUserData(credential))
  }

  signInFacebook() {
    // return this.authLogin(new auth.FacebookAuthProvider).then(credential => this.setUserData(credential.user))
  }

  signInTwitter() {
    // return this.authLogin(new auth.TwitterAuthProvider).then(credential => this.setUserData(credential.user))
  }

  authLogin(provider)  {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['/chatroom']);
      })
      this.setUserData(result.user);
    }).catch((error) => {
      console.log(error);
    })
  }
  
  signOut(): void {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/'])
    });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.fs.doc(`users/${user.id}`);
    const userData: User = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password
    }
    return userRef.set(userData, {
      merge: true
    })
  }
}
