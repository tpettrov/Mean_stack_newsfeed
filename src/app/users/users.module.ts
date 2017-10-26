import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {UserService} from "./user.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  providers: [UserService]
})
export class UsersModule { }
