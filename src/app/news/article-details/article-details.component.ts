import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ArticleService} from "../article.service";
import {Article} from "../article";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../common/auth.service";

@Component({
  selector: 'app-new-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent implements OnInit{

  constructor(private router: Router,
              private articleService: ArticleService,
              private activatedRoute: ActivatedRoute,
              private flashMessage: FlashMessagesService,
              private authentication: AuthService) {}

  article: Article;
  newComment: string;
  comments: Array<string>;
  authenticated = this.authentication.isUserAuthenticated();

  ngOnInit(){
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.articleService.getArticle(id).subscribe((article) => {
        this.article = article;
        this.comments = article.comments;
      })
    })
  }

  addComment(){
    this.articleService.addComment(this.article._id, this.newComment).subscribe((res) => {
      if (!res.success) {
        console.log(res);
      } else {
        this.ngOnInit();
        this.flashMessage.show('Comment added successfully!', { cssClass: 'alert-success' });
      }
    });
  }

}
