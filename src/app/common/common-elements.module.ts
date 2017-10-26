import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "./navbar/navbar.component";
import {AuthService} from "./auth.service";
import {HttpService} from "./http.service";

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [AuthService, HttpService]
})
export class CommonElementsModule { }
