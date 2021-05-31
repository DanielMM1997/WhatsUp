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

  isLogged: boolean = false;
  username: string = "";

  ngOnInit(): void {
    this.authService.getAuth().subscribe(data => {
      this.username = data.email
      console.log(data, 'data');
      this.authService.myemail = data.email
      this.authService.setUserData(data)
    })
    this.getCurrentUser()
  }

  getCurrentUser() {
    console.log(this.authService.userData, 'username');
    
    if (this.authService.isAuth) {
      var user = this.authService.getCurrentUser()
      console.log('user: ', user);
      this.isLogged = true;
      // this.username = user;
    } else {
      this.isLogged = false;
    }
  }

  onSignOut() {
    console.log(this.authService.userData, 'username');
    this.authService.signOut()
  }
}
