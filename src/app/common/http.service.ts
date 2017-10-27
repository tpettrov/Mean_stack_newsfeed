import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthService} from "./auth.service";

const baseUrl = 'http://localhost:8080/';
const getMethod = 'get';
const postMethod = 'post';

@Injectable()
export class HttpService {
  constructor(private http: Http, private authService: AuthService) {
  }

  get (url, authenticated = false) {
    const reqOptions = this.getRequestOptions(getMethod, authenticated);
    return this.http
      .get(`${baseUrl}${url}`, reqOptions)
      .map(res => res.json());
  }

  post(url, data, authenticated = false) {
    const reqOptions = this.getRequestOptions(postMethod, authenticated);
    return this.http
      .post(`${baseUrl}${url}`, JSON.stringify(data), reqOptions)
      .map(res => res.json());
  }

  private getRequestOptions(method, authenticated) {
    const headers = new Headers();

    if (method !== 'get') {

      headers.append('Content-Type', 'application/json');
    }

    if (authenticated) {
      headers.append('Authorization', `bearer ${this.authService.getToken()}`);
    }

    const requestOptions = new RequestOptions({
      headers: headers
    });

    return requestOptions;

  }
}
