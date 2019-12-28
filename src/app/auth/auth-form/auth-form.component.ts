import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  constructor(private authService: AuthService) { }

  // modalClosed = new EventEmitter();

  userData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  isLoggedIn: Boolean = false;
  userName: String;

  errorMessage: String = '';
  error: Boolean = false;

  loading: Boolean = false;

  onModalClosed(): void {
    this.error = false,
    this.errorMessage = '';
  }

  onCheckLoginStatus(): void {
    this.authService.checkLoginStatus()
      .subscribe(
        (res: {response: any, username: any}) => {
          if (res.response === 'non logged') {
            console.log('NOT LOGGED IN')
          }
          else {
            this.isLoggedIn = true
            this.userName = res.username
          }
        },
        (error) => {
          this.error = true
          this.errorMessage = error.error.response
        }

      )
  }

  onGetFaculties(): void {
    this.authService.getFaculties()
      .subscribe(
        (res) => console.log(res),
        (error) => console.log(error)
        )
  }

  onLogout(): void {
    this.authService.logout()
      .subscribe((res) => {
        this.isLoggedIn = false
        this.userName = ''
      },
      (error) => {
        this.error = true
        this.errorMessage = error.error.response
      })
  }

  onLogin() {
    this.loading = true;

    setTimeout(() => {
      this.authService.login(this.userData.value)
        .subscribe(
          (res) => {
            this.userData.reset();
            this.loading = false;
            this.isLoggedIn = true;
            this.userName = res.username
          },
          (error) => {
            this.userData.reset()
            this.loading = false
            this.error = true
            this.errorMessage = error.error.response
          }
        )
    },5000)
    
  }

  ngOnInit() {
    this.onCheckLoginStatus();
  }

}
