import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Contact } from '../models/contact';

/** 联系人服务。 */
@Injectable()
export class ContactService {

  public constructor(
    private http: Http,
    private storage: Storage
  ) {
    console.log('Hello ContactService Provider');
  }

  public getContactList(): Observable<Contact[]> {
    return Observable.fromPromise(this.storage.get('contacts'));
  }

  public getContact(contactId: number): Observable<Contact> {
    return this.getContactList().map(contacts => contacts.find(item => item.contactId === contactId));
  }

}
