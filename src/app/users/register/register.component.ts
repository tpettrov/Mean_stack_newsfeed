import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user';
import {UserService} from "../user.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private usersService: UserService, private router: Router, private flashMessage: FlashMessagesService) { }
  user: User = new User();
  register() {
    this.usersService.register(this.user)
      .subscribe((res) => {
      console.log(res);
        if (!res.success) {
          this.flashMessage.show(res.msg, { cssClass: 'alert-danger' });
          console.log('kor');
        } else {
          this.flashMessage.show('Successful registration!', { cssClass: 'alert-success' });
          this.router.navigateByUrl('users/login');
        }
      });
  }


}
