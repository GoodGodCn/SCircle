import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { Contact } from '../../models/contact';
import { ContactService } from '../../providers/contact-service';

/** 联系人列表页。 */
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  /** 联系人列表。 */
  protected contacts: Observable<Contact[]>;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private contactService: ContactService
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

  protected refreshContacts(): void {
    this.contacts = this.contactService.getContactList();
  }

}
