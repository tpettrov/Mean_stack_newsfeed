import { Component, OnInit } from '@angular/core';
import {ShareArticleService} from "../share-artice.service";
import {Router} from "@angular/router";
import {isUndefined} from "util";
import {ArticleService} from "../article.service";


@Component({
  selector: 'app-new-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent implements OnInit{

  constructor(private sharedArticle: ShareArticleService,
              private router: Router,
              private articleService: ArticleService) {}

  article = this.sharedArticle.articleShared;
  newComment: string;
  comments: Array<string>;

  ngOnInit(){
    if (isUndefined(this.article)) {
      this.router.navigateByUrl('/');
    }
    this.comments = this.sharedArticle.articleShared.comments;
  }

  addComment(){
    this.articleService.addComment(this.article._id, this.newComment).subscribe((res) => {
      if (!res.success) {
        console.log(res);
      } else {
        this.comments.push(this.newComment);
        console.log('Добавен коментар');
      }
    });
  }

}
