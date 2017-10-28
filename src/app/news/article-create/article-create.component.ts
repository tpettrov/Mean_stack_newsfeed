import { Component, OnInit } from '@angular/core';
import {Article} from "../article";
import {ArticleService} from "../article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent {

  constructor(private articleService: ArticleService, private router: Router) { }

  article: Article = new Article();

  createArticle(){
    this.articleService.postArticle(this.article).subscribe((res)=>{
      if(!res.success){
        console.log(res.msg);
      }
      this.router.navigateByUrl('');
    })
  }
}
