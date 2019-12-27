import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { IUserData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authURI = 'http://dtapi.if.ua/login/index'
  facultiesURI = 'http://dtapi.if.ua/Faculty/getRecords'
  logoutURI = 'http://dtapi.if.ua/login/logout'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  // showErrorModal(err, message):  {
  //   console.log('[Error Modal]')
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('[ERRORRRRRRR]', error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  login(data: IUserData) {
    return this.http.post(this.authURI, data, this.httpOptions)
    .pipe(
      catchError(this.handleError('getHeroes', []))
    )
  }

  getFaculties() {
    return this.http.get(this.facultiesURI)
  }

  logout() {
    return this.http.get(this.logoutURI)
  }

}
