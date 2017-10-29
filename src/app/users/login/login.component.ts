import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from '@angular/router';
import {AuthService} from "../../common/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router, private auth: AuthService, private flashMessage:FlashMessagesService) { }

  user: User = new User();

  login() {
    this.userService.login(this.user)
      .subscribe(res => {
        if (!res.success) {
          this.flashMessage.show(res.msg, { cssClass: 'alert-danger' } );
        } else {
          this.auth.authenticateUser(res.token);
          this.auth.saveUser(res.user);
          this.flashMessage.show('Login succesful!', { cssClass: 'alert-success' } );
          this.router.navigateByUrl('');
        }
      });
  }

}
