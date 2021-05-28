import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  islogged: boolean = false;
  email: string = "";
  password: string = "";

  constructor(public authService: AuthService, private router: Router, private modal: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(content: any) {
    this.modal.open(content, { size: 'lg', centered: true});
  }

  showSignUp() {
    this.islogged = false;
  }

  showSignIn() {
    this.islogged = true;
  }
  onSignUp(): void {
    this.authService.signUp(this.email, this.password)
    .then((result) => {
      // this.router.navigate(['/login']);
      this.modal.dismissAll();
    })
    .catch(error => {
      console.log(error);
    })
  }

  onSignIn(): void {
    this.authService.signIn(this.email, this.password)
    .then((result) => {

      // this.router.navigate(['/home'])
    })
    .catch( error => {
      console.log(error);
    })
  }
}
