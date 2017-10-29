import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ArticleListComponent} from "./article-list/article-list.component";
import {ArticleService} from "./article.service";
import { ArticleCreateComponent } from './article-create/article-create.component';
import {FormsModule} from "@angular/forms";
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {ShareArticleService} from "./share-artice.service";

@NgModule({
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  declarations: [ArticleListComponent, ArticleCreateComponent, ArticleDetailsComponent],
  exports: [ArticleListComponent],
  providers: [ArticleService, ShareArticleService]
})
export class ArticlesModule { }
