import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  constructor(private authService: AuthService) { }

  userData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  loading: Boolean = false;

  onGetFaculties(): void {
    this.authService.getFaculties()
      .subscribe((res) => console.log(res))
  }

  onLogout(): void {
    this.authService.logout()
      .subscribe((res) => console.log(res))
  }

  onLogin() {
    this.loading = true;
    setTimeout(() => {
      this.authService.login(this.userData.value)
      .subscribe(resp => { 
        console.log(resp)
        this.loading = false
      })
    }, 3000)
    
    // console.log(this.userData.value);
  }

  ngOnInit() {
    // this.onLogin(this.data);
  }

}
