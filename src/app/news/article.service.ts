import {Injectable} from '@angular/core';
import {Article} from './article';
import {HttpService} from "../common/http.service";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {

  constructor(private httpService: HttpService) {
  }

  getArticles() {
    return this.httpService.get('api/articles');
  }

  /*private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }*/

}
