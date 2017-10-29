import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import {ShareArticleService} from "../share-artice.service";


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService: ArticleService, private shareArticle: ShareArticleService) { }

  articles: Article[];
  selectedArticle: Article;

  ngOnInit() {
    this.articleService
      .getArticles()
      .subscribe((res) => {
        if (!res.success) {
          console.log(res.msg);
        }
         this.articles = res;
        });
  }
  selectArticle(article){
    this.selectedArticle = article;
    this.shareArticle.articleShared = article;
  }

}
