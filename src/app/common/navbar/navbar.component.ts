import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
    router.events.subscribe((val) => {
      this.ngOnInit();
    });
  }

  authenticated: boolean = false;
  username: string = null;

  ngOnInit() {
    this.authenticated = this.auth.isUserAuthenticated();
    this.username = this.auth.getUser();
  }

}
