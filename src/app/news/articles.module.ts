import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ArticleListComponent} from "./article-list/article-list.component";
import {ArticleService} from "./article.service";

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ArticleListComponent],
  exports: [ArticleListComponent],
  providers: [ArticleService]
})
export class ArticlesModule { }
