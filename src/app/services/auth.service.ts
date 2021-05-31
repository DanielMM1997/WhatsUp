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
  username: any;
  email: any;
  isLogged: boolean = false;
  myemail: any;
  userData: User;

  constructor(
    private afAuth: AngularFireAuth, 
    private router: Router, 
    private fs: AngularFirestore, 
    private ngZone: NgZone
    ) { 
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.user = user;
          this.setUserData(user)
          console.log(this.userData, 'userdata');
          
          this.email = user.email;
          // this.myemail = user.email;
          localStorage.setItem('user', this.user);
          localStorage.getItem('user');
        } else {
          localStorage.setItem('user', null);
          localStorage.getItem('user');
        }
      })
      // this.afAuth.onAuthStateChanged(user => {
      //   if (user) {
      //     this.username = user.displayName;
      //     this.email = user.email
      //     console.log('emial', user.email);
          
      //     localStorage.setItem('user', this.user);
      //     localStorage.getItem('user');
      //   } else {
      //     localStorage.setItem('user', null);
      //     localStorage.getItem('user');
      //   }
      // })
    }
    
    initUser() {
      console.log('xxxx');
      
      this.afAuth.authState.subscribe(user => {
        console.log('yyy');
        
        if (user) {
          this.user = user;
          this.setUserData(user)
          console.log(this.userData, 'userdata');
          
          this.email = user.email;
          // this.myemail = user.email;
          localStorage.setItem('user', this.user);
          localStorage.getItem('user');
        } else {
          localStorage.setItem('user', null);
          localStorage.getItem('user');
        }
      })
    }
    get isAuth(): boolean {
      const user = localStorage.getItem('user');
      this.setUserData(user)
      console.log(user, 'user');
      
      console.log('userauth', this.user);
      console.log('email', this.email);
      // return false
      return (user === null) ? false : true;
    // && user.emailVerified !== false
  }

  getAuth() {
    return this.afAuth.authState
  }
  getCurrentUser() {
    return this.userData
    // return (localStorage.getItem('user') !== null) ? localStorage.getItem('user') : null;
    // return this.afAuth.authState.pipe(map (auth => 
    //   // auth 
    //   console.log(auth)
    //   ))
  }

  signUp(username:string, email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email.trim(), password)
      .then((result) => {
        result.user.updateProfile({
          displayName: username
        })
        this.setUserData(result.user);
        console.log(result, 'result');
        
      })
      .catch(error => {
        console.log(error)
      });
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email.trim(), password)
      .then((result) => {
        this.ngZone.run(() => {
          this.setUserData(result.user)
          this.router.navigate(['/home']);
        })
        // this.setUserData(result.user);
        this.user = result
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
    console.log('asd')
    this.userData = null
    this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/home'])
    });
  }

  setUserData(user: any) {
    console.log('setuser', user);
    
    // const userRef: AngularFirestoreDocument<any> = this.fs.doc(`users/${user.id}`);
    this.userData = {
      idUser: user.uid,
      username: user.displayName,
      email: user.email,
    }
    // return userRef.set(userData, {
    //   merge: true
    // })
  }
}
