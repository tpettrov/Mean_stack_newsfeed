import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from '@angular/router';
import {AuthService} from "../../common/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router, private auth: AuthService) { }

  user: User = new User();

  login() {
    this.userService.login(this.user)
      .subscribe(res => {
        if (!res.success) {
          console.log(res.msg);
        } else {
          this.auth.authenticateUser(res.token);
          console.log(res.user);
          this.auth.saveUser(res.user);
          console.log('Successfull login');
          this.router.navigateByUrl('');
        }
      });
  }

}
