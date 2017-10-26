import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  saveUser(user) {

    window.localStorage.setItem('user', user);

  }

  getUser() {

    const user = window.localStorage.getItem('user');

    if (user) {
      return user;
    } else {

      return '';
    }

  }

  removeUser() {

    window.localStorage.removeItem('user');
    return null;
  }

  authenticateUser(token) {
    window.localStorage.setItem('token', token);
  }

  isUserAuthenticated() {
    return window.localStorage.getItem('token') !== null;
  }


  deauthenticateUser() {
    window.localStorage.removeItem('token');
    return false;
  }


  getToken() {
    return window.localStorage.getItem('token');
  }

}
