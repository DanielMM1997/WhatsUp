import { Injectable } from '@angular/core';
import { User } from "../models/user";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { FirebaseApp } from "@angular/fire";
// import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private afAuth: AngularFireAuth, private router: Router, private firebase: FirebaseApp) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', this.user);
        localStorage.getItem('user');
      } else {
        localStorage.setItem('user', null);
        localStorage.getItem('user');
      }
    })
  }

  isAuth() {
    // return this.afAuth.authState.pipe(map (auth => auth))
  }

  getCurrentUser() {
    return this.user
  }

  signUp(email: string, password: string) {
    console.log('entrando en el service');
    console.log(email);
    
    return this.afAuth.createUserWithEmailAndPassword(email.trim(), password)
      .then((result) => {
        this.user = result.user
      })
      .catch(error => {
        console.log(error)
      });
  }

  signIn(email: string, password: string) {
    console.log(email);
    console.log('entrando en service');
    
    return this.afAuth.signInWithEmailAndPassword(email.trim(), password)
      .then((result) => {
        this.user = result.user
        this.router.navigate(['/home'])
      })
      .catch(error => {
        console.log(error)
      });
  }

  signInGoogle() {
    // return this.authLogin(new auth.GoogleAuthProvider).then(credential => this.setUserData(credential.user))
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
      this.router.navigate(['/home']);
      this.user = result.user;
    }).catch((error) => {
      console.log(error);
    })
  }
  
  signOut(): void {
    this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }

  SetUserData(user: any) {
    // const userRef: AngularFirestoreDocument<any> = this.firebase.firestore.doc(`users/${user.id}`);
    const userData: User = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password
    }
    // return userRef.set(userData, {
    //   merge: true
    // })
  }
}
