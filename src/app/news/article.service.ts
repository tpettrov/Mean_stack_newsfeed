import { Injectable } from '@angular/core';
import { New } from './article';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewService {

  private newsUrl = '/api/news';
  constructor(private http: Http) { }

  // get("/api/contacts")
  getContacts(): Promise<void | New[]> {
    return this.http.get(this.newsUrl)
      .toPromise()
      .then(response => response.json() as New[])
      .catch(this.handleError);
  }

  // post("/api/contacts")
  createContact(newNew: New): Promise<void | New> {
    return this.http.post(this.newsUrl, newNew)
      .toPromise()
      .then(response => response.json() as New)
      .catch(this.handleError);
  }

  // get("/api/contacts/:id") endpoint not used by Angular app

  /*// delete("/api/contacts/:id")
  deleteContact(delContactId: String): Promise<void | String> {
    return this.http.delete(this.contactsUrl + '/' + delContactId)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  // put("/api/contacts/:id")
  updateContact(putContact: Contact): Promise<void | Contact> {
    var putUrl = this.contactsUrl + '/' + putContact._id;
    return this.http.put(putUrl, putContact)
      .toPromise()
      .then(response => response.json() as Contact)
      .catch(this.handleError);
  }*/

  private handleError (error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
