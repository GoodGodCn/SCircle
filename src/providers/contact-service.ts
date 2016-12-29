import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Contact } from '../models/contact';

/*
  Generated class for the ContactService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContactService {

  public constructor(protected http: Http) {
    console.log('Hello ContactService Provider');
  }

  public getContactList(): Observable<Contact[]> {
    return new Subject<Contact[]>();
  }

  public getContact(contactId: number): Observable<Contact> {
    return new Subject<Contact>();
  }

}
