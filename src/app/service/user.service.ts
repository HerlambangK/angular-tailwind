import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  async getAllUser() {
    return this.http.get('https://gorest.co.in/public/v2/users');
  }

  // isLoggedIn() {
  //   return !!localStorage.getItem('token');
  // }
}
