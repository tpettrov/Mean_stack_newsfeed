import { Injectable } from '@angular/core';
import { Article } from './article';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {

  private newsUrl = '/api/news';
  constructor(private http: Http) { }
  getArticles(): Promise<void | Article[]> {
    return this.http.get(this.newsUrl)
      .toPromise()
      .then(response => response.json() as Article[])
      .catch(this.handleError);
  }
  createArticle(newArticle: Article): Promise<void | Article> {
    return this.http.post(this.newsUrl, newArticle)
      .toPromise()
      .then(response => response.json() as Article)
      .catch(this.handleError);
  }
  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
