import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';



@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {

  articles: Article[];
  selectedContact: Article;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService
      .getArticles()
      .subscribe((res) => {
        if (!res.success) {
          console.log(res);
        }
         this.articles = res.articles;
        });
  }

}
