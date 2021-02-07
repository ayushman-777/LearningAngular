import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.module';
import {BehaviorSubject, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface AuthResponseData {
  idToken:	string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId:	string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAB9dyqhqRKh4jJLKqBcaIbwwAhn7x5zPM',
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(tap(resData => {
        const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
        this.user.next(user);
    }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAB9dyqhqRKh4jJLKqBcaIbwwAhn7x5zPM',
      {
        email,
        password,
        returnSecureToken: true
      }).pipe(tap(resData => {
      const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
      const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
      this.user.next(user);
    }));
  }
}
