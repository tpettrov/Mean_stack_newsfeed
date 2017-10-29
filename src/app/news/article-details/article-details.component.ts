import { Component, OnInit } from '@angular/core';
import {ShareArticleService} from "../share-artice.service";
import {Article} from "../article";


@Component({
  selector: 'app-new-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent{

  constructor(private sharedArticle: ShareArticleService) {}

  article = this.sharedArticle.articleShared;

}
