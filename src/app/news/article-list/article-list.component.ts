import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { NewService } from '../article.service';



@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  providers: [NewService]
})
export class ArticleListComponent implements OnInit {

  contacts: Article[];
  selectedContact: Article;
  constructor(private newService: NewService) { }

  ngOnInit() {
    this.newService
      .getContacts()
      .then((articles: Article[]) => {
        this.contacts = articles.map((article) => {
          return article;
        });
      });

  }

}
