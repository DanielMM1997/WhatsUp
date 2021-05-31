import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(public authService: AuthService) { }

  username: string = "";

  ngOnInit(): void {
    this.getCurrentUser()
  }

  getCurrentUser() {
    if (this.authService.isAuth) {
      var user = this.authService.getCurrentUser()
    }
  }

  onSignOut() {
    this.authService.signOut()
  }
}
