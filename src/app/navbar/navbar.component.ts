import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {


  constructor(private authService: AuthService, private afAuth: AngularFireAuth) { }

  isLogged: boolean = false;
  username: string = "";

  ngAfterViewInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser() {
    var user = this.authService.getCurrentUser()
    console.log('user: ', user);
    if (user) {
      this.isLogged = true;
      this.username = user
    } else {
      this.isLogged = false;
    }
  }

  onSignOut() {
    this.authService.signOut()
  }
}
