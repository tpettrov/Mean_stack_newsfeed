import {Component, OnInit} from '@angular/core';
import {Article} from "../article";
import {ArticleService} from "../article.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent {

  constructor(private articleService: ArticleService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  article: Article = new Article();

  createArticle() {
    this.articleService.postArticle(this.article).subscribe((res) => {
      if (!res.success) {
        this.flashMessage.show(res.msg, {cssClass: 'alert-danger'});
      } else {
        this.flashMessage.show('Article added successfully!', {cssClass: 'alert-success'});
        this.router.navigateByUrl('');
      }
    });
  }
}
