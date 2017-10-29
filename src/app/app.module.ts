import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {CommonElementsModule} from "./common/common-elements.module";
import {RoutesModule} from "./routes.module";
import {ArticlesModule} from "./news/articles.module";
import {UsersModule} from "./users/users.module";
import {FlashMessagesModule} from "angular2-flash-messages";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonElementsModule,
    UsersModule,
    RoutesModule,
    ArticlesModule,
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
