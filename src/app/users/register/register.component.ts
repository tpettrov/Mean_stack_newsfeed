import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user';
import {UserService} from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private usersService: UserService, private router: Router) { }
  user: User = new User();
  register() {
    this.usersService.register(this.user)
      .subscribe(res => {
        if (!res.success) {
          console.log(res);
        } else {
          console.log('successful registration');
          this.router.navigateByUrl('users/login');
        }
      });
  }


}
