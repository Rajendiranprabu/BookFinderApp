import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private http: HttpClient) {

    if ('token' in window.sessionStorage) {

      this.token = window.sessionStorage.getItem('token');

    }

  }

  get isUserLoggedIn() {

    return this.token !== undefined;

  }

  login(email: string, password: string): Observable<any> {

    return this.http

      .post('http://localhost:5000/login', { email, password })

      .do(data => this.token = data['token'])

      .do(data => window.sessionStorage.setItem('token', data['token']));

  }
}