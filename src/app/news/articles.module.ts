import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ArticleListComponent} from "./article-list/article-list.component";
import {ArticleService} from "./article.service";
import { ArticleCreateComponent } from './article-create/article-create.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [ArticleListComponent, ArticleCreateComponent],
  exports: [ArticleListComponent],
  providers: [ArticleService]
})
export class ArticlesModule { }
