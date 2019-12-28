import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { IUserData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authURI = 'http://dtapi.if.ua/login/index'
  facultiesURI = 'http://dtapi.if.ua/Faculty/getRecords'
  logoutURI = 'http://dtapi.if.ua/login/logout'
  checkLoginStatusURI = 'http://dtapi.if.ua/login/isLogged'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  login(data: IUserData) {
    return this.http.post(this.authURI, data, this.httpOptions)
  }

  getFaculties() {
    return this.http.get(this.facultiesURI)
  }

  logout() {
    return this.http.get(this.logoutURI)
  }

  checkLoginStatus() {
    return this.http.get(this.checkLoginStatusURI)
  }

}
